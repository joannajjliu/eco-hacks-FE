import React from "react";
import NatureOutlinedIcon from "@material-ui/icons/NatureOutlined";

function EnergyAnalysis({
  numEnergyUsage = 1500,
  numCo2Emissions = 2,
  numTreesEquivalent = 4,
}) {
  const energyUsage = "Annual Energy Usage";
  const co2Emissions = "Product usage Co2 emissions";
  const treesEquivalent = `Equivalent to ${numTreesEquivalent} ${
    numTreesEquivalent !== 1 ? "trees" : "tree"
  } workload`;

  return (
    <>
      <div className="flexColumn">
        <div>
          <h2>{energyUsage}</h2>
          <h3>{numEnergyUsage} kWh</h3>
        </div>
        <div>
          <h2>{co2Emissions}</h2>
          <h3>{numCo2Emissions}kg Co2</h3>
        </div>
      </div>
      <div>
        <div>
          <h2>{treesEquivalent}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {[...Array(numTreesEquivalent > 0 ? numTreesEquivalent : 1)].map(
              (_, i) => (
                <NatureOutlinedIcon style={{ color: "#1C9EA9" }} key={i} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EnergyAnalysis;
