/*global chrome*/

import React, { useState, useEffect } from "react";
import styles from "./Home.css";
import { energyPrices } from "../energyPrices";
const MOCK_PRODUCT = "20E1H";

function Home() {
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

    return response[0];
  };

  // messaging between chrome and extension, see public/script.js
  const getFromChrome = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
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
      }
    };
    getCurrentProductData();
  }, [currentProductModelNumber]);

  return (
    <div className={styles.outerContainer}>
      {currentProductData
        ? JSON.stringify(currentProductData)
        : "This product is not Energy Star rated"}
      {currentProductModelNumber}
      {energyPrices.ontario}
      {/* <div className={styles.pricePerYear}>
        Monitor total energy cost per year{" "}
        {calculatePricePerYear(
          parseInt(currentProductData.monitor_total_energy)
        )}
      </div> */}
    </div>
  );
}

export default Home;
