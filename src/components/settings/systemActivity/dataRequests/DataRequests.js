import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import DataRequestsTab from "./dataRequestsTab/DataRequestsTab";

function DataRequests() {
   const breadCrumbsTitle = {
     id: "1",
     title_1: "Settings",
     title_2: "System Activity",
     title_3: "Data Requests",
   };
  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Data Requests</h4>
        </div>
      </header>

      <DataRequestsTab />
    </div>
  );
}

export default DataRequests;
