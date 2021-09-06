import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import ProgressBar from "@ramonak/react-progress-bar";
import LinearProgress from "@material-ui/core/LinearProgress";

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
}) {
  const savingsTitle = "Savings per year compared to other similar products";
  const productListingTitle = "Product listing savings";
  const averageNonEnergystarTitle = `Average non-energy star ${productType}`;

  return (
    <>
      <div>
        <h3>{savingsTitle}</h3>
      </div>
      {/* <div>
        <h2>{productListingTitle}</h2>
        <div className="singleRow">
          <BorderLinearProgressPrimary variant="determinate" value={50} />
          <h3>${numProductListingSavings}</h3>
        </div>
      </div> */}
      <div>
        <h2>{averageNonEnergystarTitle}</h2>
        <div className="singleRow">
          <BorderLinearProgressSecondary variant="determinate" value={50} />
          <h3>${numNonEnergyStarCost}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductComparisonAnalysis;
