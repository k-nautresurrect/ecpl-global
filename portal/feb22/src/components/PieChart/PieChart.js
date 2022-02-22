import React from "react";

// importing components used for building chart
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import "./Piechart.css";

// registered component as per v4
Chart.register(ArcElement, Tooltip, Legend);

// set options for chart
const options = {
  responsive: true,
};

// set labels, which represent the partitions in chart and values
const labels = ["undergraduate", "graduate", "professionals"];
const values = [123, 54, 78];

// color schemes for partition
const colArr = ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)"];

// set dataset, data is set according to the labels
const dataset = [
  {
    data: values,
    backgroundColor: colArr,
    borderColor: ["rgb(60, 60, 60)"],
    borderWidth: 1,
  },
];

// object to pass in data prop
const data = {
  labels: labels,
  datasets: dataset,
};

const PieChart = (props) => {
  // returned chart
  return (
    <div className="piechart">
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default PieChart;
