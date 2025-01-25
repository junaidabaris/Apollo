import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { FaUserPlus } from "react-icons/fa6";
import UsersTab from "./usersTab/UsersTab";
import NewUsersModal from "./NewUsersModal";

function Users() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Users",
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Users</h4>
        </div>
        <div className="d-flex">
          <div>
            <Button type="btn" variant="primary" onClick={handleShow}>
              <FaUserPlus className="mb-1 me-1" />
              New User
            </Button>
          </div>

          <div>
            <Button type="btn" variant="secondary">
              Export to CSV
            </Button>
          </div>
        </div>
      </header>

      <UsersTab />

      <NewUsersModal show={show} setShow={setShow} handleClose={handleClose} />
    </div>
  );
}

export default Users;
