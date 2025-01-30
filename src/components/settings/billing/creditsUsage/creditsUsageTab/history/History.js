import React from "react";

function History() {
  return (
    <div>
      <div className="mb-3">
        <form action="">
          <div className="row">
            <div className="col-lg-3">
              <label htmlFor="">Form</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-lg-3">
              <label htmlFor="">To</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </form>
      </div>
      <div className="Free_P_box mb-5">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-1 me-3">Historical Credit Usage</h5>
            </div>
            <p className="text-start mb-0">Dec 21, 2024 - Jan 29, 2025</p>
          </div>
        </div>

        <div className="d">
          <div
            className="p-5 mb-3 "
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="row">
              <div className="col-lg-4 text-center ">
                <div className="fs-1">0</div>
                <div className="fs-3">Export Credits</div>
              </div>

              <div className="col-lg-4 text-center ">
                <div className="fs-1">0</div>
                <div className="fs-3">Email Credits</div>
              </div>

              <div className="col-lg-4 text-center ">
                <div className="fs-1">0</div>
                <div className="fs-3">Mobile Number Credits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
