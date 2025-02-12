import React, { useState } from "react";
import { SalespersonFilter } from "./salespersonFilter/SalespersonFilter";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { FaPlus } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { VscExport } from "react-icons/vsc";
import Dropdown from "react-bootstrap/Dropdown";
import { MdOutlineEmail } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { Button, Flex, Pagination, Popover, Space } from "antd";
import AddToList from "./addToList/AddToList";
import CreateSequence from "./createSequence/CreateSequence";
import { Link } from "react-router-dom";

const PeoplesComp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [create, setCreate] = useState(false);

  const sequenceClose = () => setCreate(false);
  const sequenceShow = () => setCreate(true);

  const breadCrumbsTitle = {
    id: "1",
    title_1: "People",
  };

  const modalHeading = {
    id: "1",
    title: "Add to Lists",
  };

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SalespersonFilter />
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card py-3">
                <Flex gap="small" wrap>
                  <Button type="text">1Selected</Button>
                  <Button onClick={handleShow}>
                    <FaPlus />
                    Save
                  </Button>
                  <Button>
                    <MdOutlineEmail />
                    Email
                  </Button>

                  <Dropdown>
                    <Dropdown.Toggle type="text" id="dropdown-basic">
                      <TbSend2 className="me-1 mb-1" /> Sequence
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className="p-0">
                        <Button
                          style={{ width: "100%" }}
                          onClick={sequenceShow}
                        >
                          Add to new Sequence
                        </Button>
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-2">
                        Create workflow
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-3">
                        Connect Salesloft
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-4">
                        Connect Outreach
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle type="text" id="dropdown-basic">
                      <GoDownload className="me-1 mb-1" />
                      Export
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className="p-0">
                        <Button style={{ width: "100%" }} onClick={handleShow}>
                          Export
                        </Button>
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-2">
                        View Companies
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Flex>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">People</h4>
                  </div>
                  <div
                    id="banner-tblwrapper_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <div className="dt-buttons">
                      <button
                        className="dt-button buttons-excel buttons-html5 btn btn-sm border-0"
                        tabIndex={0}
                        aria-controls="banner-tblwrapper"
                        type="button"
                      >
                        <span>
                          <i className="fa-solid fa-file-excel" /> Export Report
                        </span>
                      </button>
                    </div>
                    <table
                      id="banner-tblwrapper"
                      className="table dataTable no-footer"
                      role="grid"
                      aria-describedby="banner-tblwrapper_info"
                    >
                      <thead>
                        <tr role="row">
                          <th style={{ width: "50px" }}>S.No</th>
                          <th style={{ width: "150px" }}>Name</th>
                          <th style={{ width: "150px" }}>Job Title</th>
                          <th style={{ width: "150px" }}>Company</th>
                          <th style={{ width: "100px" }}>Emails</th>
                          <th style={{ width: "100px" }}>Phone Numbers</th>
                          <th style={{ width: "100px" }}>Actions</th>
                          <th style={{ width: "100px" }}>Links</th>
                          <th style={{ width: "100px" }}>Location</th>
                          <th style={{ width: "100px" }}>
                            Number of employees
                          </th>

                          <th style={{ width: "100px" }}>Company Industries</th>
                          <th style={{ width: "100px" }}>Company Keyword</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>

                          <td>
                            <Link to="peopleDetails">Ian Bremmer</Link>
                          </td>

                          <td>President and Founder</td>
                          <td>
                            <img
                              src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/67a351a68e33440001fe8c97/picture"
                              alt=""
                              className="me-1 rounded-circle"
                              style={{ width: "35px" }}
                            />
                            Eurasia Group
                          </td>

                          <td>balkrishna.korgaonkar@globaldevincubator.org</td>

                          <td>+91 98753745030</td>

                          <td>
                            <div>
                              <Space>
                                <Popover title="Add to Lists" trigger="hover">
                                  <Button onClick={handleShow}>
                                    <FaPlus />
                                  </Button>
                                </Popover>

                                <Popover
                                  title="Add to Sequence"
                                  trigger="hover"
                                >
                                  <Button onClick={sequenceShow}>
                                    <LuSend />
                                  </Button>
                                </Popover>

                                <Popover title="View In Apollo" trigger="hover">
                                  <Button>
                                    <VscExport />
                                  </Button>
                                </Popover>

                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                  >
                                    more
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      href="#/action-2"
                                      className="p-0"
                                    >
                                      <Button
                                        style={{ width: "100%" }}
                                        onClick={handleShow}
                                      >
                                        Export
                                      </Button>
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Space>
                            </div>
                          </td>

                          <td>In</td>
                          <td>Limeira, Brazil</td>
                          <td>
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              3.4K
                            </span>
                          </td>

                          <td>
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              Food & Beverages
                            </span>
                          </td>

                          <td>N/A</td>
                        </tr>

                        <tr role="row">
                          <td>
                            <input type="checkbox" />
                          </td>

                          <td>
                            <Link to="">Stuart Symington</Link>
                          </td>

                          <td>Global Storytelling Lead (Brand, Ma...)</td>
                          <td>
                            <img
                              src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/67a5f44e319b110001cea041/picture"
                              alt=""
                              className="me-1 rounded-circle"
                              style={{ width: "35px" }}
                            />
                            The Global Development Incubator
                          </td>

                          <td>balshna.konkar@gubator.org</td>

                          <td>+91 98753745030</td>

                          <td>
                            <div>
                              <Space>
                                <Popover title="Add to Lists" trigger="hover">
                                  <Button onClick={handleShow}>
                                    <FaPlus />
                                  </Button>
                                </Popover>

                                <Popover
                                  title="Add to Sequence"
                                  trigger="hover"
                                >
                                  <Button onClick={sequenceShow}>
                                    <LuSend />
                                  </Button>
                                </Popover>

                                <Popover title="View In Apollo" trigger="hover">
                                  <Button>
                                    <VscExport />
                                  </Button>
                                </Popover>

                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                  >
                                    more
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item
                                      href="#/action-2"
                                      className="p-0"
                                    >
                                      <Button
                                        style={{ width: "100%" }}
                                        onClick={handleShow}
                                      >
                                        Export
                                      </Button>
                                    </Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </Space>
                            </div>
                          </td>

                          <td>In</td>
                          <td>Washington, District of Co</td>
                          <td>
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              88k
                            </span>
                          </td>

                          <td>
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              International Trade & Development
                            </span>
                          </td>

                          <td>N/A</td>
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
                      <Pagination
                        defaultCurrent={1}
                        // onChange={onChangeVal}
                        // total={totalCount}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddToList
        show={show}
        handleClose={handleClose}
        modalHeading={modalHeading}
      />

      <CreateSequence create={create} sequenceClose={sequenceClose} />
    </>
  );
};

export default PeoplesComp;
