// installed chat.js via "npm install --save chart.js react-chartjs-2"
import React from "react";

// importing components, scale, ... as per the v4 method
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import "./BarGraph.css";

// registering the components, scale
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// for auto styling
const options = {
  responsive: true,
};

// labels to be put on x axis values on y axis
const labels = ["full-time", "part-time"];
const values = [12, 19, 3, 5, 2, 3];

// data prop containing label and datasets
const data = {
  labels,
  datasets: [
    {
      label: "enrollment by attendence",
      data: values,
      backgroundColor: "rgba(255, 99, 132, 0.8)",
    },
  ],
};

const BarChart = (props) => {
  // returning bar chart
  return (
    <div className="barchart">
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
