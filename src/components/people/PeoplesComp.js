import { SalespersonFilter } from "./salespersonFilter/SalespersonFilter";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { Pagination } from "antd";
import { Button } from "react-bootstrap";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const PeoplesComp = () => {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "People",
  };

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <SalespersonFilter />
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
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
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>

                          <td className="text-center">
                            <a href="">Aislan leite</a>
                          </td>

                          <td className="text-center">Co-chair</td>
                          <td className="text-center">
                            <img
                              src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/67a351a68e33440001fe8c97/picture"
                              alt=""
                              className="me-1 rounded-circle"
                              style={{ width: "35px" }}
                            />
                            Ajinomoto do Brasil
                          </td>

                          <td className="text-center">
                            <Button variant="secondary">
                              <MdOutlineMarkEmailRead className="fs-4 me-2 mb-1" />
                              Access email
                            </Button>
                          </td>

                          <td className="text-center">
                            <Button variant="secondary">
                              <IoCallOutline className="fs-4 me-2 mb-1" />
                              Access Mobile
                            </Button>
                          </td>

                          <td className="text-center"></td>
                          <td className="text-center">In</td>
                          <td className="text-center">Limeira, Brazil</td>
                          <td className="text-center">
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              3.4K
                            </span>
                          </td>

                          <td className="text-center">
                            <span
                              className=" rounded-3 py-1 px-2"
                              style={{ backgroundColor: "#F0F4F9" }}
                            >
                              Food & Beverages
                            </span>
                          </td>

                          <td className="text-center">N/A</td>
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
      {/* <ToastContainer className="text-center" /> */}
    </>
  );
};

export default PeoplesComp;
