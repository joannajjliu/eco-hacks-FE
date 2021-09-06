/*global chrome*/

import React, { useState, useEffect, useContext } from "react";
import Product from "./Product";
import EnergyAnalysis from "./EnergyAnalysis";
import ProductComparisonAnalysis from "./ProductComparisonAnalysis";
import styles from "./Home.css";
import { energyPrices } from "../energyPrices";
import BarChart from "./BarChart";

import { data } from "../mocks/data";
import {
  AVG_CAD_MONITOR_COST,
  AVG_DAYS_IN_YEAR,
  AVG_POUNDS_CO2_ABSORBED_PER_YEAR_PER_TREE,
  DAILY_AVG_HOURS_SCREEN_TIME,
  KG_PER_POUND,
  OPTIMAL_WATTS_ON_MODE_POWER_CONSUMPTION,
  POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS,
  ProductContext,
} from "../ProductContext";

const MOCK_PRODUCT = "20E1H";

function Home() {
  const [state, dispatch] = useContext(ProductContext);
  const [currentProductData, setCurrentProductData] = useState();
  const [currentProductModelNumber, setCurrentProductModelNumber] = useState();
  // later if needed
  // myHeaders = new Headers({
  //   Authorization: "Token " + process.env.API_TOKEN,
  //   "Content-Type": "application/x-www-form-urlencoded",
  // });

  // search product model number with Energy Star API
  const searchModelEnergyStarData = async (model) => {
    const cleanedModel = model.trim().replace(/[^\x00-\x7F]/g, ""); // clean model number for use in API
    const URL = `https://data.energystar.gov/resource/qbg3-d468.json?model_name=${cleanedModel}`;
    await fetch(URL);
    let response = await fetch(URL);
    response = await response.json();
    console.log("response", response[0]);
    return response[0];
  };

  // messaging between chrome and extension, see public/script.js
  const getFromChrome = () => {
    chrome.tabs?.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { getProductModelNumber: true },
        function (response) {
          setCurrentProductModelNumber(response.productModelNumber);
        }
      );
    });
  };

  const calculatePricePerYear = (kwhPerYear) => {
    // for ontario
    return kwhPerYear * energyPrices.ontario;
  };

  useEffect(() => {
    getFromChrome();
  }, []);

  useEffect(() => {
    const getCurrentProductData = async () => {
      if (currentProductModelNumber) {
        const productData = await searchModelEnergyStarData(
          currentProductModelNumber
        );
        setCurrentProductData(productData);
        // dispatch({
        //   type: "SET_PRODUCT",
        //   payload: {
        //     brandName: productData.brand_name || "01",
        //     modelName: productData.model_name || "02",
        //     productType: productData.display_type || "03",
        //     onModePowerWatts: productData.on_mode_power_watts || 1000, //in Watts
        //     annualCo2EmissionsPounds:
        //       (productData.on_mode_power_watts *
        //         DAILY_AVG_HOURS_SCREEN_TIME *
        //         AVG_DAYS_IN_YEAR *
        //         POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS) /
        //         1000 || 2000,
        //   },
        // });
      }
    };
    getCurrentProductData();
  }, [currentProductModelNumber]);

  return (
    <div className="outerContainer">
      {currentProductData ? (
        <>
          {/* {JSON.stringify(currentProductData)} */}
          <Product
            brandName={`${currentProductData.brand_name} ${currentProductData.model_name}`}
            brandProduct={currentProductData.display_type}
            percentageEfficiency={
              Math.round(
                OPTIMAL_WATTS_ON_MODE_POWER_CONSUMPTION /
                  parseFloat(currentProductData.on_mode_power_watts)
              ) * 100
            }
          />

          <EnergyAnalysis
            numEnergyUsage={Math.round(
              (parseFloat(currentProductData.on_mode_power_watts) *
                DAILY_AVG_HOURS_SCREEN_TIME *
                AVG_DAYS_IN_YEAR) /
                1000
            )}
            numCo2Emissions={Math.round(
              (parseFloat(currentProductData.on_mode_power_watts) *
                DAILY_AVG_HOURS_SCREEN_TIME *
                AVG_DAYS_IN_YEAR *
                POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS *
                KG_PER_POUND) /
                1000
            )}
            numTreesEquivalent={Math.round(
              (parseFloat(currentProductData.on_mode_power_watts) *
                DAILY_AVG_HOURS_SCREEN_TIME *
                AVG_DAYS_IN_YEAR *
                POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS) /
                (1000 * AVG_POUNDS_CO2_ABSORBED_PER_YEAR_PER_TREE)
            )}
          />
          <ProductComparisonAnalysis
            productType={currentProductData.display_type}
            numNonEnergyStarCost={AVG_CAD_MONITOR_COST}
            kwhPerYear={currentProductData.monitor_total_energy}
          />
        </>
      ) : (
        <>
          <h1>This product is not Energy Star rated</h1>
        </>
      )}
    </div>
  );
}

export default Home;
