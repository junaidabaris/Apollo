import React from "react";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import PlaneOverviewTab from "./planeOverviewTab/PlaneOverviewTab";

function PlaneOverview() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Billing",
    title_3: "Plane Overview",
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Plane Overview</h4>
        </div>
      </header>

      <PlaneOverviewTab />
    </div>
  );
}

export default PlaneOverview;
