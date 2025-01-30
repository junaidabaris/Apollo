import { Tabs } from "antd";
import CurrentCreditUsage from "./currentCreditUsage/CurrentCreditUsage";
import AiWordUsage from "./aiWordUsage/AiWordUsage";
import History from "./history/History";
import AboutCredits from "./aboutCredits/AboutCredits";

function CreditsUsageTab() {
  const items = [
    {
      key: "1",
      label: "Current Credit Usage",
      children: <CurrentCreditUsage />,
    },
    {
      key: "2",
      label: "AI Word Usage",
      children: <AiWordUsage />,
    },
    {
      key: "3",
      label: "About Credits",
      children: <AboutCredits />,
    },

    {
      key: "4",
      label: "History",
      children: <History />,
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

export default CreditsUsageTab;
