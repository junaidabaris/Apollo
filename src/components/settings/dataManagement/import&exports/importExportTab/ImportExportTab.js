import React, { useState } from "react";
import { Tabs } from "antd";
// import UsersFeilds from "../../users/usersTab/userFeilds/UsersFeilds";
// import PendingUsers from "../../users/usersTab/pendingUsers/PendingUsers";

// --icons--import--here
import { FaAward } from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";

// image import---here
import img1 from "../../../../../assets/images/importExport/contactimg.svg";
import img2 from "../../../../../assets/images/importExport/accountimg.svg";
import img3 from "../../../../../assets/images/importExport/mg3.svg";
import img4 from "../../../../../assets/images/importExport/img4.svg";
import img5 from "../../../../../assets/images/importExport/img5.svg";

import ImportExportTabPage from "./ImportExportTabPage";
import ExportSetting from "./exportSetting/ExportSetting";

// import { useHref } from "react-router-dom";

const secTabData = [
  {
    id: "1",
    img: img1,
    title: "Contact Import",
    p: "Once a user on your team imports a CSV of Contacts, it will be listed here with its record count, progress, and other details.",
    btn: "Import Contacts",
    icons: "",
    des: "",
  },

  {
    id: "2",
    img: img2,
    title: "Account Import",
    p: "Once a user on your team imports a CSV of Companies, it will be listed here with its record count, progress, and other details.",
    btn: "Import Accounts",
    icons: "",
    des: "",
  },

  {
    id: "3",
    img: img3,
    title: "Deal Import",
    p: "Once a user on your team imports a CSV of opportunitys, it will be listed here with its record count, progress, and other details.",
    btn: "Import Deal",
    icons: "",
    des: "",
  },

  {
    id: "3",
    img: img3,
    title: "Failed Export",
    p: "Once a user on your team imports a CSV of opportunitys, it will be listed here with its record count, progress, and other details.",
    btn: "Failed Export",
    icons: "",
    des: "",
  },

  {
    id: "5",
    img: img4,
    title: "CSV Exports",
    p: "Once a user on your team exports a CSV of records, it will be listed here along with its type, progress, record count, and exporting user.",
    btn: "Export a CSV",
    icons: <IoIosInformationCircleOutline />,
    des: "Learn more on how to export CSVs here",
  },

  {
    id: "6",
    img: img5,
    title: "Enriched CSVs",
    p: "Once someone on your team uploads a CSV for data enrichment, it will be listed here. Use this page to download your enriched CSVs and view reports on how many records were enriched.",
    btn: "Enrich a CSV",
    icons: <IoIosInformationCircleOutline />,
    des: "Learn more on how to export CSVs here",
  },

 
];
function ImportExportTab() {
  const [data, setData] = useState(secTabData);

  console.log(data[0]);

  const items = [
    {
      key: "1",
      label: "Contact Import",
      children: <ImportExportTabPage data={data[0]} />,
    },
    {
      key: "2",
      label: "Account Import",
      children: <ImportExportTabPage data={data[1]} />,
    },
    {
      key: "3",
      label: "Deals Import",
      children: <ImportExportTabPage data={data[2]} />,
    },

    {
      key: "4",
      label: "Failed Exports",
      children: <ImportExportTabPage data={data[3]} />,
    },

    {
      key: "5",
      label: "CSV Exports",
      children: <ImportExportTabPage data={data[4]} />,
    },

    {
      key: "6",
      label: "Enriched CSVs",
      children: <ImportExportTabPage data={data[5]} />,
    },

    {
      key: "7",
      label: "CSV Export Settings",
      children: <ExportSetting />,
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

export default ImportExportTab;
