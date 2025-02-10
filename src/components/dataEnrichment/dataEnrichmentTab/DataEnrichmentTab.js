import React, { useState } from "react";
import { Tabs } from "antd";
import JobChangeAlert from "./jobChangeAlert/JobChangeAlert";
import Crm from "./crm/Crm";

import Download1 from "../../../assets/images/data-enrich/download.svg";
import Download2 from "../../../assets/images/data-enrich/weather.svg";

const secTabData = [
  {
    id: "1",
    img: "https://assets.apollo.io/imgs/d97e3dc85ec3a8595095..svg",
    title: "CSV Enrichment",
    p: "Upgrade your plan to begin enriching your records with Apollo’s information.",
    btn: "Upgrade to Basic",
  },

  {
    id: "2",
    img: "https://assets.apollo.io/imgs/f2a68cc1f98d0eb4071f..svg",
    title: "Get Job Change Alerts",
    p: "Upgrade your plan to see which saved people in Apollo now work for a new company.",
    btn: "Upgrade to Basic",
  },
];
function DataEnrichmentTab() {
  const [data, setData] = useState(secTabData);

  const items = [
    {
      key: "1",
      label: "Data health center",
      children: <Crm img={Download1} />,
    },
    {
      key: "2",
      label: "CRM",
      children: <Crm img={Download2} />,
    },
    {
      key: "3",
      label: "CSV",
      children: <JobChangeAlert data={data[0]} />,
    },

    {
      key: "4",
      label: "Job change alerts",
      children: <JobChangeAlert data={data[1]} />,
    },
  ];

  const onChange = (key) => {};
  return (
    <div className="px-4 py-3">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  );
}

export default DataEnrichmentTab;
