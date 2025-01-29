import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale, // Required for x-axis
    LinearScale, // Required for y-axis
    BarElement, // Required for rendering bars
    Title, // Optional, if you're using a chart title
    Tooltip, // Optional, for tooltips
    Legend // Optional, for legends
} from "chart.js";

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Queries Flow",
            data: [30, 2, 3, 1, 1, 1, 1, 1, 1, 2, 1, 3],
            backgroundColor: [
                "rgba(0, 123, 255, 0.8)", // Primary color for Jan
                "rgba(220, 53, 69, 0.8)", // Colors for other months
                "rgba(40, 167, 69, 0.8)",
                "rgba(255, 193, 7, 0.8)",
                "rgba(23, 162, 184, 0.8)",
                "rgba(108, 117, 125, 0.8)",
                "rgba(255, 133, 27, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(201, 203, 207, 0.8)",
                "rgba(54, 162, 235, 0.8)",
            ],
            borderColor: "rgba(0, 0, 0, 0.1)",
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
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
                stepSize: 10,
            },
        },
    },
};

const MonthWise = () => {
    return (
        <div className="p-1">
            <div className="chart-container p-4 bg-white shadow rounded">
                <h5 className="text-center mb-4">Month-Wise Queries Flow</h5>
                <Bar data={monthlyData} options={chartOptions} />
            </div>
        </div>
    );
};

export default MonthWise;
