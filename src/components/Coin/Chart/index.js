import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./style.css";
import convertNumber from "../../../functions/convertNumber";

const Chart = ({ chartData, priceType,multiAxis,curr }) => {
  const options = {
    plugins: {
      legend: {
        display:multiAxis ?true :false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
        type:'linear',
        display:true,
        position: "left",
        ticks: {
          callback: function (value,index,ticks) {
            if (priceType === "prices") {
              return value.toLocaleString() + " " + curr;
            } else {
              return convertNumber(value) + " " + curr;
            }
          },
        },
      },
      y1:multiAxis && {
        type:'linear',
        display:true,
        position:"right",
        ticks: {
          callback: function (value,index,ticks) {
            if (priceType === "prices") {
              return value.toLocaleString() + " " + curr;
            } else {
              return convertNumber(value) + " " + curr;
            }
          },
        },
      },
    },
  };

  return (
    <div className="chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
