import { Tabs } from "antd";
import PViewTab from "./pViewTab/PViewTab";
import BillingTab from "./billingTab/BillingTab";

function PlaneOverviewTab() {
  const items = [
    {
      key: "1",
      label: "Plane Overview ",
      children: <PViewTab />,
    },
    {
      key: "2",
      label: "Billing",
      children: <BillingTab />,
    },
    {
      key: "3",
      label: "License Settings",
      children: "<MultiFacAuthentication data={data[2]} />",
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

export default PlaneOverviewTab;
