import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register required components for Chart.js
ChartJS.register(Tooltip, Legend, ArcElement);

const data = {
  labels: ["Call", "Client Referral", "WhatsApp", "Email", "Old Client"],
  datasets: [
    {
      label: "Query Source",
      data: [71, 12.9, 6.5, 6.5, 3.2], // Values from the chart
      backgroundColor: [
        "#28a745", // Call - Green
        "#6f42c1", // Client Referral - Purple
        "#ffc107", // WhatsApp - Yellow
        "#007bff", // Email - Blue
        "#dc3545", // Old Client - Red
      ],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.label}: ${tooltipItem.raw}%`,
      },
    },
  },
};

const QuerySourceChart = () => {
  return (
    <div className="p-4 mt-4 bg-white shadow rounded h-100">
      <h5 className="text-center mb-4">Query Source</h5>
      <Pie data={data} options={options} />
    </div>
  );
};

export default QuerySourceChart;
