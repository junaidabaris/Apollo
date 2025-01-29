import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const monthlyData = {
  labels: ["Bangkok", "Phuket", "Pattaya", "Dubai", "Delhi", "Rome"],
  datasets: [
    {
      label: "Covered",
      data: [1, 1, 1, 1, 1, 1],
      backgroundColor: "rgba(255, 193, 7, 0.8)", // Yellow
      borderColor: "rgba(255, 193, 7, 1)",
      borderWidth: 1,
    },
    {
      label: "Un-Covered",
      data: [9, 7, 7, 7, 4, 4],
      backgroundColor: "rgba(0, 123, 255, 0.8)", // Blue
      borderColor: "rgba(0, 123, 255, 1)",
      borderWidth: 1,
    }
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 2,
      },
    },
  },
};

const TopSell = () => {
  return (
    <div className="p-1 mt-2">
      <div className="chart-container p-4 bg-white shadow rounded">
        <h5 className="text-center mb-4">TOP SELLING DESTINATIONS</h5>
        <Bar data={monthlyData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TopSell;
