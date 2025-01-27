import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardCharts = () => {
  // Data for the first chart (Quarterly Amounts)
  const quarterlyData = {
    labels: ["I", "II", "III", "IV"],
    datasets: [
      {
        label: "Amounts (in $1000)",
        data: [2, 4, 6, 9],
        backgroundColor: "rgba(255, 206, 86, 0.8)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Data for the second chart (Sales, Price, Gross Profit)
  const monthlyData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales Amount",
        data: [0, 0, 0, 0, 2, 5, 0, 8, 0, 0, 0, 0],
        backgroundColor: "rgba(255, 206, 86, 0.8)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
      {
        label: "Price",
        data: [0, 0, 0, 0, 1, 3, 0, 5, 0, 0, 0, 0],
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Gross Profit",
        data: [0, 0, 0, 0, 1, 2, 0, 3, 0, 0, 0, 0],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
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

  return (
    <div className="mt-4">
      <h3 className="text-center mb-4">Dashboard Charts</h3>
      <div className="row">
        {/* First Chart */}
        <div className="col-md-6">
          <div className="chart-container p-3 bg-light border">
            <h5 className="text-center">Quarterly Amounts</h5>
            <Bar data={quarterlyData} options={chartOptions} />
          </div>
        </div>
        {/* Second Chart */}
        <div className="col-md-6">
          <div className="chart-container p-3 bg-light border">
            <h5 className="text-center">
              Monthly Sales, Price, and Gross Profit
            </h5>
            <Bar data={monthlyData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
        <div className="d-flex align-items-center gap-5">
          <button type="button" className="btn btn-primary px-5">
            Ok
          </button>
          <div className="form-check d-flex align-items-center gap-3">
            <input className="form-check-input m-0" type="checkbox" value="" />
            <label className="form-check-label m-0" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>
        <div className="d-flex align-items-center gap-5">
          <label htmlFor="downline" className="form-label text-nowrap">
            Contact Person
          </label>
          <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
