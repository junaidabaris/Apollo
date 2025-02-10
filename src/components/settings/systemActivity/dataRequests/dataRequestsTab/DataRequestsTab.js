import { Tabs } from "antd";
import EmailRequests from "./emailRequests/EmailRequests";
import MobileTab from "./mobileTab/MobileTab";
import ExportRequestsTab from "./exportRequestsTab/ExportRequestsTab";
import AiRequestsTab from "./aiWordRequestsTab/AiRequestsTab";
import DataAutomationRequests from "./dataAutomationRequests/DataAutomationRequests";

function DataRequestsTab() {
  const items = [
    {
      key: "1",
      label: "Email Requests",
      children: <EmailRequests />,
    },
    {
      key: "2",
      label: "Mobile Number",
      children: <MobileTab />,
    },
    {
      key: "3",
      label: "Export Requests",
      children: <ExportRequestsTab />,
    },
    {
      key: "4",
      label: "AI word usage history",
      children: <AiRequestsTab />,
    },
    {
      key: "5",
      label: "Data Automation Requests",
      children: <DataAutomationRequests/>,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="px-4 py-3">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  );
}

export default DataRequestsTab;
