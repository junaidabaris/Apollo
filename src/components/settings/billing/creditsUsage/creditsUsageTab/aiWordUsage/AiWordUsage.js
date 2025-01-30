import React from "react";
import { Button } from "react-bootstrap";
import { CiStopwatch } from "react-icons/ci";
import { CgStopwatch } from "react-icons/cg";

import { LiaUserSolid } from "react-icons/lia";
import { RiDatabaseLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

import Download3 from "../../../../../../assets/images/billing/download (3).png";

function AiWordUsage() {
  return (
    <>
      <div className="Free_P_box mb-5">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-1 me-3">Team AI-generated word usage</h5>
              <p className="mb-0">Jan 21, 2025 - Feb 21, 2025</p>
            </div>
          </div>

          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-0 me-3">
                <CiStopwatch className="me-2 fs-3 mb-1" />
                Estimated AI-generated words will renew on:
              </h5>
              <p className="mb-0">
                Feb 21, 2025 1:30 PM <CgStopwatch className="fs-3 mb-1" />
              </p>
            </div>
          </div>
        </div>

        <div className="d">
          <div
            className="p-4 mb-3"
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="" style={{ width: "20%" }}>
              <img src={Download3} alt="" style={{ width: "30%" }} />
            </div>

            <div className="mt-3 mb-3">
              <h5 className="mb-0">AI-generated word usage</h5>
            </div>

            <div className="mt-3 mb-3">
              <span className="fw-bold fs-3 text-secondary me-2">0</span>
              <span className="fs-5 me-2">of 5,000</span>
              <span>AI-generated words / mo</span>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div
                className=" rounded-5"
                style={{
                  width: "85%",
                  height: "5px",
                  backgroundColor: "#E3E3E5",
                }}
              ></div>
              <div>
                <Button type="" variant="primary">
                  Request Upgrade
                </Button>
              </div>
            </div>

            <div className="py-3 mt-3">
              <p className="text-start">
                <a href="">Fair Use Policy</a>
                Power-ups usage limits depend on the plan and number of seats
                you have. Upgrade your plan or add seats to increase your
                power-ups usage limits.
              </p>
            </div>

            <div className="fw-bold text-secondary">
              Your team doesn't allow to share emails credits.
            </div>
          </div>
        </div>
      </div>

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
                <h5 className="mb-1 me-3">
                  Team's AI word usage history (Jan 21, 2025 - Jan 29, 2025)
                </h5>
              </div>
            </div>
          </div>

          <div className="d">
            <div
              className="p-5 mb-3 "
              style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
            >
              <p>No history found</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiWordUsage;
