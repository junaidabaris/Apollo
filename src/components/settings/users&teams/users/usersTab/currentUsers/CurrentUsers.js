import { Pagination } from "antd";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import userimg from "../../../../../../assets/images/users/download.svg";
import NewUsersModal from "../../NewUsersModal";

function CurrentUsers() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="px-3">
        <div className="px-4 py-3" style={{ backgroundColor: "#0C2F73" }}>
          <div className="row">
            <div className="col-xl-8 col-md-6">
              <div className="d-flex align-items-center justify-content-start">
                <div className="current_img_box">
                  <img src={userimg} alt="" />
                </div>
                <div className="text-white">
                  <h4 className="mb-1">
                    Invite your team & sell more with Apollo
                  </h4>
                  <p className="mb-0">
                    Invite teammates and get more deals done—faster.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 text-end">
              <Button
                type="button"
                variant="warning"
                className="text-dark py-3 fw-bold"
                onClick={handleShow}
              >
                Invite teammates now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption py-2">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      style={{ height: "35px" }}
                    />
                  </div>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="primary"
                        id="dropdown-basic"
                        className="fw-normal fs-6"
                      >
                        Created Date
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="px-2">
                        <h6 className="px-3">Sort By</h6>

                        <select
                          className="form-select mb-2"
                          name="type"
                          id="type"
                        >
                          <option value="">Created Date</option>
                          <option>Name</option>
                          <option>Target</option>
                          <option>Owner</option>
                        </select>

                        <select className="form-select" name="type" id="type">
                          <option value="">Descending</option>
                          <option>Ascending</option>
                        </select>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>

                <div
                  id="banner-tblwrapper_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <table
                    id="banner-tblwrapper"
                    className="table dataTable no-footer"
                    role="grid"
                    aria-describedby="banner-tblwrapper_info"
                  >
                    <thead>
                      <tr role="row">
                        <th style={{ width: "50px" }}>
                          <input
                            type="checkbox"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </th>
                        <th style={{ width: "150px" }}>Users</th>
                        <th style={{ width: "150px" }}>Credits</th>
                        <th style={{ width: "150px" }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            style={{ width: "20px", height: "20px" }}
                          />
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div
                              className=" d-flex me-3"
                              style={{
                                borderRadius: "50%",
                                width: "40px",
                                height: "40px",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#FCC7E2",
                              }}
                            >
                              DA
                            </div>
                            <span className="fs-5">You</span>
                          </div>
                        </td>
                        <td>
                          {/* <span className="bg-secondary px-3 py-2 text-white rounded-2">No Credit Limit</span> */}
                          No Credit Limit
                        </td>
                        <td>
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="secondary"
                              id="dropdown-basic"
                              className="fw-bold"
                            >
                              ...
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Force Logout
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Deactivate
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    role="status"
                    aria-live="polite"
                  >
                    Total 0 entries
                  </div>
                  <div className="dataTables_paginate paging_simple_numbers">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewUsersModal show={show} setShow={setShow} handleClose={handleClose} />
    </div>
  );
}

export default CurrentUsers;
