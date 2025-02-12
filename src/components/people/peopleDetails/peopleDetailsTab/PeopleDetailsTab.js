import { Tabs } from "antd";
import AboutTab from "./aboutTab/AboutTab";

function PeopleDetailsTab() {
  const items = [
    {
      key: "1",
      label: "About",
      children: <AboutTab/>,
    },
    
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  );
}

export default PeopleDetailsTab;
