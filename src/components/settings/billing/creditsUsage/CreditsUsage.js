import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import CreditsUsageTab from "./creditsUsageTab/CreditsUsageTab";

function CreditsUsage() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Billing",
    title_3: "Credits Usage",
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Credits Usage</h4>
        </div>
      </header>

      <CreditsUsageTab />
    </div>
  );
}

export default CreditsUsage;
