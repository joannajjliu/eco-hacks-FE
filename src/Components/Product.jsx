import React, { useContext } from "react";
import { ProductContext } from "../ProductContext";
import CircleMeter from "./CircleMeter";

function Product({
  brandName = "Galanz GLR10TBKEFR sdfsdfffffffffdsdfsdfsdf",
  brandProduct = "Freezer and refrigerator",
  percentageEfficiency = 0,
}) {
  const [state, dispatch] = useContext(ProductContext);
  const { productDetails } = state;
  const title = "Product Energy Star Rating";
  const brand = "Brand";
  const product = "Product";
  let efficiencyTitle;
  if (percentageEfficiency >= 80) {
    efficiencyTitle = "Highly energy efficient";
  } else if (percentageEfficiency >= 66) {
    efficiencyTitle = "Good efficiency";
  } else {
    efficiencyTitle = "Efficiency requires an upgrade";
  }

  return (
    <>
      <div className="logo"></div>
      {/* <h1>{title}</h1> */}
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
            {percentageEfficiency > 0 ? (
              <CircleMeter percentageEfficiency={percentageEfficiency} />
            ) : (
              <></>
            )}
            <h2>{efficiencyTitle}</h2>
          </>
        </div>
      </div>
    </>
  );
}

export default Product;
