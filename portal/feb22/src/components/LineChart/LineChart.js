import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "./Linechart.css";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

const labels = [2017, 2018, 2019, 2020, 2021, 2022];
const values = [1950, 2000, 2200, 1900, 2356];

const dataset = [
  {
    label: "Dataset-1",
    data: values,
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
];

const data = {
  labels: labels,
  datasets: dataset,
};

const LineChart = (props) => {
  return (
    <div className="linechart">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
