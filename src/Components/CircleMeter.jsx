import { useD3 } from "../hooks/useD3";
import React from "react";
import * as d3 from "d3";

function CircleMeter({ percentageEfficiency = 75 }) {
  const ref = useD3((svg) => {
    // set the dimensions and margins of the graph
    const width = 112;
    const height = 112;
    const margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    const radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    svg
      .select(".plot-area-circle")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create dummy data
    const data = { a: percentageEfficiency, b: 100 - percentageEfficiency };

    // set the color scale
    const color = d3.scaleOrdinal().range(["#1C9EA9", "#b9d8ea"]);

    // Compute the position of each group on the pie:
    const pie = d3.pie().value((d) => d[1]);

    const data_ready = pie(Object.entries(data));

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll("whatever")
      .data(data_ready)
      .join("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(46) // This is the size of the donut hole
          .outerRadius(radius)
      )
      .attr("fill", (d) => color(d.data[0]))
      .style("opacity", 0.7);
  }, []);

  return (
    <svg
      style={{
        height: 112,
        width: 112,
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g ref={ref} transform="translate(56,56)" className="plot-area-circle" />
      <text
        x="50%"
        y="45%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="Roboto, sans-serif"
        fill="#1C9EA9"
        font-size="28px"
      >
        {percentageEfficiency}/
      </text>
      <text
        x="50%"
        y="65%"
        dominant-baseline="middle"
        text-anchor="middle"
        font-family="Roboto, sans-serif"
        fill="#1C9EA9"
        font-size="16px"
      >
        100
      </text>
    </svg>
  );
}

export default CircleMeter;
