// import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Button } from "react-bootstrap";

const Notifications = () => {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Notifications",
    path_2: ``,
  };

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">Notifications </h4>
                    <Button type="" variant="primary">
                      Save
                    </Button>
                  </div>
                  <div
                    id="banner-tblwrapper_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <div className="settings_card mt-3 mb-5">
                      <div
                        className=""
                        style={{ borderBottom: "1px solid #B4B4B4" }}
                      >
                        <h5 className="py-3 px-3 mb-0">System Activity</h5>
                      </div>
                      <div className="px-3 py-3">
                        <p className="text-normal">
                          Select the notifications you want to receive after a
                          data request has been completed in Apollo. Keep track
                          of your data requests by going to{" "}
                          <span>
                            <a href="">Settings</a>
                          </span>
                          <span>
                            <a href="">Data Request History.</a>
                          </span>
                        </p>
                      </div>
                      <div className="py-3">
                        <table style={{ width: "100%" }} className="SN_table">
                          <thead>
                            <tr style={{ borderBottom: "1px solid grey" }}>
                              <th style={{ width: "70%" }}></th>
                              <th style={{ width: "15%" }}>Email</th>
                              <th style={{ width: "15%" }}>Slack</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ width: "70%" }}>
                                Receive a notification every time a data request
                                is completed
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                  disabled
                                />
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "70%" }}>
                                Receive a daily digest of data requests
                                completed in a day
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                  disabled
                                />
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "70%" }}>
                                Receive free data credit reminders
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                  disabled
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="settings_card mt-3">
                      <div
                        className=""
                        style={{ borderBottom: "1px solid #B4B4B4" }}
                      >
                        <h5 className="py-3 px-3 mb-0">Tasks</h5>
                      </div>

                      <div className="py-3">
                        <table style={{ width: "100%" }} className="SN_table">
                          <thead>
                            <tr style={{ borderBottom: "1px solid grey" }}>
                              <th style={{ width: "70%" }}></th>
                              <th style={{ width: "15%" }}>Email</th>
                              <th style={{ width: "15%" }}>Slack</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ width: "70%" }}>
                                Receive a notification every time a data request
                                is completed
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                  disabled
                                />
                              </td>
                            </tr>

                            <tr>
                              <td style={{ width: "70%" }}>
                                Receive free data credit reminders
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </td>
                              <td style={{ width: "15%" }}>
                                <input
                                  type="checkbox"
                                  style={{ width: "20px", height: "20px" }}
                                  disabled
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* <div
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
                      Total 0 entries
                    </div>
                    <div className="dataTables_paginate paging_simple_numbers">
                      <Pagination
                      defaultCurrent={1}
                      onChange={onChangeVal}
                      total={totalCount}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
