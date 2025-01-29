import React from "react";
import ResourceCapacityForm from "./ResourceCapacityForm";
import ResourceCapacityTable from "./ResourceCapacityTable";

const ResourceCapacityList = () => {
  return (
    <div className="card m-2">
      <div className="d-flex aling-items-center justify-content-between bg-black p-2">
        <h4 className="text-white fs-4">
          Resource Capacity
        </h4>
      </div>
      <ResourceCapacityForm />
      <ResourceCapacityTable />
    </div>
  );
};

export default ResourceCapacityList;
