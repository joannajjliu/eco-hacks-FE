import React from "react";

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
      <div>
        <h2>{productListingTitle}</h2>
        <h3>${numProductListingSavings}</h3>
      </div>
      <div>
        <h2>{averageNonEnergystarTitle}</h2>
        <h3>${numNonEnergyStarCost}</h3>
      </div>
    </>
  );
}

export default ProductComparisonAnalysis;
