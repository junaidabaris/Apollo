import React from "react";
import { Button } from "react-bootstrap";
import SecurityTab from "./securityTab/SecurityTab";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";

function Security() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Security",
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Security</h4>
        </div>
        <div className="d-flex">
          {/* <div>
            <Button type="btn" variant="primary" onClick={handleShow}>
              <FaUserPlus className="mb-1 me-1" />
              New User
            </Button>
          </div> */}

          <div>
            <Button type="btn" variant="secondary">
              Export to CSV
            </Button>
          </div>
        </div>
      </header>

      <SecurityTab />

      {/* <NewUsersModal show={show} setShow={setShow} handleClose={handleClose} /> */}
    </div>
  );
}

export default Security;
