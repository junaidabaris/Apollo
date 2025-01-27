import React, { useState } from "react";
import { Tabs } from "antd";
import UsersFeilds from "../../users/usersTab/userFeilds/UsersFeilds";
import PendingUsers from "../../users/usersTab/pendingUsers/PendingUsers";
import MultiFacAuthentication from "./multiFacAuthentication/MultiFacAuthentication";
// --icons--import--here
import { FaAward } from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";
import { PiWrenchThin } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";

// image import---here
import multiFac from "../../../../../assets/images/security/mutiFac.svg";
import ip from "../../../../../assets/images/security/ip.svg";
import policy from "../../../../../assets/images/security/policy.svg";
import controls from "../../../../../assets/images/security/controls.svg";
import signOn from "../../../../../assets/images/security/signOn.svg";

const secTabData = [
  {
    id: "1",
    img: multiFac,
    title: "Multi-factor authentication (MFA)",
    p: "Improve your account security and protect your organization’s most important data with our multi-factor authentication.",
    btn: "Upgrade to Basic",
    icons: <FaAward />,
    des: "Beneficial for all teams seeking enhanced security!",
  },

  {
    id: "2",
    img: ip,
    title: "IP whitelisting",
    p: "Enhance the security of your Apollo account with IP whitelisting. Create a list of approved IP addresses and only users or APIs with IPs on the list will have access to your account. Attempts to access from IP addresses not on the whitelist will be denied.",
    btn: "Upgrade to Organization",
    icons: <LiaCheckCircle />,
    des: "Fortify your Apollo account security with IP whitelisting.",
  },

  {
    id: "1",
    img: policy,
    title: "Password policy",
    p: "Take control of your account's safety by implementing robust password rules. Protect your account against unauthorized access with enhanced password strength and security measures.",
    btn: "Upgrade to Organization",
    icons: <PiWrenchThin />,
    des: "Establish custom password rules for maximum strength!",
  },

  {
    id: "1",
    img: controls,
    title: "Login controls",
    p: "Take control of your account security! Customize session timeout and failed login settings to safeguard your data. Upgrade now for enhanced protection!",
    btn: "Upgrade to Organization",
    icons: <GoTrophy />,
    des: "Beneficial for all teams seeking enhanced security!",
  },

  {
    id: "1",
    img: signOn,
    title: "Single sign on",
    p: "Boost security and user access convenience with our Single Sign-On (SSO) feature. SSO streamlines authentication, making it easier for your team to access resources securely.",
    btn: "Upgrade to Organization",
    icons: <FaAward />,
    des: "Beneficial for all teams seeking enhanced security!",
  },
];
function SecurityTab() {
  const [data, setData] = useState(secTabData);

  console.log(data[0]);
  
  const items = [
    {
      key: "1",
      label: "Multi-factor authencation",
      children: <MultiFacAuthentication data={data[0]} />,
    },
    {
      key: "2",
      label: "IP whitelisting",
      children: <MultiFacAuthentication data={data[1]} />,
    },
    {
      key: "3",
      label: "Password Policy",
      children: <MultiFacAuthentication data={data[2]} />,
    },

    {
      key: "4",
      label: "Login Controls",
      children: <MultiFacAuthentication data={data[3]} />,
    },

    {
      key: "5",
      label: "Single Sign on",
      children: <MultiFacAuthentication data={data[4]} />,
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

export default SecurityTab;
