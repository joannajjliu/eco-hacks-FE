import React from "react";

function EnergyAnalysis({
  numEnergyUsage = 1500,
  numCo2Emissions = 2,
  numTreesEquivalent = 0,
}) {
  const energyUsage = "Energy Usage";
  const co2Emissions = "Product usage Co2 emissions";
  const treesEquivalent = `Equivalent to ${
    numTreesEquivalent !== 1 ? "trees" : "tree"
  } trees workload`;

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
        </div>
      </div>
    </>
  );
}

export default EnergyAnalysis;
