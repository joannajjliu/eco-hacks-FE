import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ProgressBar from "@ramonak/react-progress-bar";
import LinearProgress from "@material-ui/core/LinearProgress";
import { energyPrices } from "../energyPrices";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 14,
    borderRadius: 9,
    width: "80%",
    margin: "auto 0",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress);

const BorderLinearProgressPrimary = withStyles((theme) => ({
  bar: {
    backgroundColor: "#1C9EA9",
  },
}))(BorderLinearProgress);

const BorderLinearProgressSecondary = withStyles((theme) => ({
  bar: {
    backgroundColor: "#3B6C8C",
  },
}))(BorderLinearProgress);

function ProductComparisonAnalysis({
  productType = "fridge",
  numProductListingSavings = 2000,
  numNonEnergyStarCost = 500,
  kwhPerYear,
}) {
  const savingsTitle = "Savings per year compared to other similar products";
  const productListingTitle = "Product listing savings";
  const averageNonEnergystarTitle = `Average non-energy star ${productType}`;
  const costPerYear = "Cost per year based off Ontario average energy price";
  return (
    <>
      <div>
        <h2>{costPerYear}</h2>
        <div className="singleRow">
          <h1>${parseFloat(kwhPerYear) * energyPrices.ontario}</h1>
        </div>
      </div>
    </>
  );
}

export default ProductComparisonAnalysis;
