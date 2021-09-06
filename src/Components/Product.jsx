import React, { useState, useEffect } from "react";
import rd3 from "react-d3-library";
import CircleMeter from "./CircleMeter";

function Product({
  brandName = "Galanz GLR10TBKEFR",
  brandProduct = "Freezer and refrigerator",
  percentageEfficiency = 75,
}) {
  const title = "Product Energy Star Rating";
  const brand = "Brand";
  const product = "Product";
  let efficiencyTitle;
  if (percentageEfficiency >= 80) {
    efficiencyTitle = "Highly energy efficient";
  } else if (percentageEfficiency >= 66) {
    efficiencyTitle = "Energy efficient";
  } else {
    efficiencyTitle = "Require upgrade";
  }
  //   useEffect(() => {
  //     setD3(node);
  //   }, []);

  return (
    <>
      <h1>{title}</h1>
      <div className="flexColumn">
        <div>
          <>
            <h2>{brand}</h2>
            <h3>{brandName}</h3>
          </>
          <>
            <h2>{product}</h2>
            <h3>{brandProduct}</h3>
          </>
        </div>
        <div>
          <>
            <CircleMeter percentageEfficiency={percentageEfficiency} />
            <h2>{efficiencyTitle}</h2>
          </>
        </div>
      </div>
    </>
  );
}

export default Product;
