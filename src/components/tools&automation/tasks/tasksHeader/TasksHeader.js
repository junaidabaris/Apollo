import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import React from "react";
import { Tabs } from "antd";
import TasksTotalTab from "./tasksTotalTab/TasksTotalTab";
import NewTasksModal from "./newTasksModal/NewTasksModal";

const items = [
  {
    key: "1",
    label: "Total 1",
    children: <TasksTotalTab />,
  },
  {
    key: "2",
    label: "Account Action 1",
    children: <TasksTotalTab />,
  },
];
function TasksHeader() {
  const onChange = (key) => {
    console.log(key);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* ---fiest--header--workflows */}
      <header className="workflows_header d-flex align-items-center justify-content-between px-3 py-3">
        <div>
          <h4>Tasks</h4>
        </div>
        <div>
          <Button variant="primary" onClick={handleShow}>
            Create Tasks
          </Button>
        </div>
      </header>

      {/* ----here second header filter btn-- */}
      <div className="filter_flows d-flex align-items-center justify-content-between px-4 py-2">
        <div
          className="d-flex align-item-center  justify-content-between fs-5"
          style={{ width: "30%" }}
        >
          <Link to="filterWF" className="WF_filter px-3 rounded-2">
            <TbAdjustmentsHorizontal className="me-2 mb-2" />
            <span className="text-decoration-none  fs-3 filter_btn">
              Filters
            </span>
          </Link>
        </div>
      </div>

      <div className="px-4 py-2">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>

      <NewTasksModal show={show} setShow={setShow} handleClose={handleClose} />
    </>
  );
}

export default TasksHeader;
