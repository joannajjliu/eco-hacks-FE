import React, { useReducer, createContext } from "react";

export const ProductContext = createContext();

export const POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS = 0.91;
export const DAILY_AVG_HOURS_SCREEN_TIME = 4;
export const AVG_DAYS_IN_YEAR = 365.25;
export const AVG_POUNDS_CO2_ABSORBED_PER_YEAR_PER_TREE = 48;
export const AVG_CAD_MONITOR_COST = 250;
export const OPTIMAL_WATTS_ON_MODE_POWER_CONSUMPTION = 11;
export const KG_PER_POUND = 0.453592;

const initialState = {
  productDetails: {
    brandName: "Galanz",
    modelName: "GLR10TBKEFR",
    productType: "Monitor",
    onModePowerWatts: 20.9, //in Watts
    annualCo2EmissionsPounds:
      (20.9 *
        DAILY_AVG_HOURS_SCREEN_TIME *
        AVG_DAYS_IN_YEAR *
        POUNDS_CO2_EMISSIONS_PER_KWH_USING_NATURAL_GAS) /
      1000,
  },
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        productDetails: [...state.productDetails, action.payload],
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
};
