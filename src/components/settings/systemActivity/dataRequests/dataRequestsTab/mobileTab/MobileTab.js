import { Pagination } from "antd";

function MobileTab() {
  return (
    <div className="row m-2">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-body p-0">
            <div className="table-responsive active-projects style-1">
              <div className="tbl-caption">
                <h4 className="heading mb-0 p-2">Mobile No List</h4>
                {/* <Link to="/signals-add" className="btn btn-primary">
                  Create Signals
                </Link> */}
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
                      <th style={{ width: "150px" }}> name</th>
                      <th style={{ width: "150px" }}>Mobile No</th>
                      <th style={{ width: "150px" }}>Status </th>

                      <th style={{ width: "150px" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
                      <td>--</td>
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
  );
}

export default MobileTab;
