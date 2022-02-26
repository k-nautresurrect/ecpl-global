import React from "react";

// importing components used for building chart
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import "./Piechart.css";

// registered component as per v4
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// set options for chart

const options = {
  responsive: true,
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        const percent = ((value / sum) * 100).toFixed(1);
        console.log(context);
        return `${percent}%`;
      },
      color: "rgb(0,0,0)",
    },
  },
};

// set labels, which represent the partitions in chart and values
const labels = ["undergraduate", "graduate", "professionals"];
const values = [123, 54, 78];

// to get sum from the array.
const sum = values.reduce((Sum, a) => Sum + a, 0);

// color schemes for partition
const colArr = [
  "rgba(13, 166, 255, 0.6)",
  "rgba(187, 30, 30, 0.6)",
  "rgba(3, 219, 93, 0.6)",
];

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
