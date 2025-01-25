import React from "react";
import { Tabs } from "antd";
import CurrentUsers from "./currentUsers/CurrentUsers";
import UsersFeilds from "./userFeilds/UsersFeilds";
import PendingUsers from "./pendingUsers/PendingUsers";
function UsersTab() {
  const items = [
    {
      key: "1",
      label: "Current Users",
      children: <CurrentUsers />,
    },
    {
      key: "2",
      label: "Users Feilds",
      children: <UsersFeilds />,
    },
    {
      key: "3",
      label: "Pending Users",
      children: <PendingUsers />,
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

export default UsersTab;
