import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register components for Chart.js
ChartJS.register(Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const data = {
  labels: [
    "Travel Pujaari",
    "Capability Tours Private",
    "Ankaa Holidays",
    "Chit Chat Tour and Travel",
    "WebNfoz",
    "Wise Voyage Private Ltd",
    "SRK Holidays",
    "JP Holidays-VA308",
  ],
  datasets: [
    {
      label: "Agents",
      data: [3.0, 2.5, 2.2, 2.0, 1.8, 1.5, 1.2, 1.0], // Example values
      backgroundColor: "rgba(0, 123, 255, 0.8)", // Consistent blue color
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: "y", // Makes it a horizontal bar chart
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend as it's not needed here
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.raw.toFixed(1)} queries`, // Format tooltips
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
};

const TopSellersChart = () => {
  return (
    <div className="p-4 mt-2 bg-white shadow rounded">
      <h5 className="text-center mb-4">Top 10 Agents</h5>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TopSellersChart;
