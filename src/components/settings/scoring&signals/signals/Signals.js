import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
function Signals() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Scoring & Signals",
    title_3: "Signals",
  };
  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      {/* <FilterScore /> */}
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption">
                  <h4 className="heading mb-0 p-2">Signals</h4>
                  <Link to="filterSignal" className="btn btn-primary">
                    Create Signals
                  </Link>
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
                        <th style={{ width: "50px" }}>Signals Name</th>
                        <th style={{ width: "150px" }}>Description </th>
                        <th style={{ width: "150px" }}>Signal Group</th>
                        <th style={{ width: "150px" }}>Target Object </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rapid growth</td>
                        <td>
                          This signal is available only for Apollo Deals users
                        </td>
                        <td>Company momentum</td>
                        <td>Companies</td>
                      </tr>

                      <tr>
                        <td>Recently promoted</td>
                        <td>Apollo Deals users</td>
                        <td>Persona</td>
                        <td>People</td>
                      </tr>

                      <tr>
                        <td>Former champion changed jobs</td>
                        <td>
                          This signal is available only for Apollo Deals users
                        </td>
                        <td>Persona</td>
                        <td>People</td>
                      </tr>

                      <tr>
                        <td>High buying intent</td>
                        <td>
                          This signal is available only for Apollo Deals users
                        </td>
                        <td>Company intent</td>
                        <td>People</td>
                      </tr>

                      <tr>
                        <td>Opened 2+ emails in past week</td>
                        <td>
                          This signal is available only for Apollo Deals users
                        </td>
                        <td>Engagement</td>
                        <td>People</td>
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
                    // defaultCurrent={1}
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
  );
}

export default Signals;
