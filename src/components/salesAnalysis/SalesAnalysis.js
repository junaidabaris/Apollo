import React from "react";
import SalesAnalysisTable from "./SalesAnalysisTable";
import AmountCharts from "./AmountCharts";

const SalesAnalysis = () => {
  return (
    <div className="card m-2">
      <div className="d-flex aling-items-center justify-content-between bg-black p-2">
        <h4 className="text-white fs-4">
          Sales Analysis Report by item (Detailed)
        </h4>
      </div>
      <SalesAnalysisTable />
      <AmountCharts />
    </div>
  );
};

export default SalesAnalysis;
