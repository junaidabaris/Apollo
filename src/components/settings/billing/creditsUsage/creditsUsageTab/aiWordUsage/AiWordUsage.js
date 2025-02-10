import Download4 from "../../../../../../assets/images/billing/download (4).png";
import { Button } from "react-bootstrap";
import { CiStopwatch } from "react-icons/ci";
import { CgStopwatch } from "react-icons/cg";

function AiWordUsage() {
  return (
    <>
      <div className="px-3 py-4">
        <header
          className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
          style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
        >
          <div>
            <h4>AI word Usage</h4>
          </div>
        </header>

        <div className="Free_P_box mb-5">
          <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
            <div>
              <div className="d-flex align-items-center justify-content-start">
                <h5 className="mb-1 me-3">
                  Team AI-generated word usage |
                  <span className="fw-normal mx-2">
                    Jan 30, 2025 - Jan 30, 2025
                  </span>
                </h5>
              </div>
              {/* <p className="text-start mb-0">Usage is shared with the team</p> */}
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-start">
                <h5 className="mb-0 me-3">
                  <CiStopwatch className="me-2 fs-3 mb-1" />
                  Estimated Credit Renewal on:{" "}
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
              <div className="d-flex">
                <div className="me-3" style={{ width: "5%" }}>
                  <img src={Download4} alt="" style={{ width: "100%" }} />
                </div>

                <div>
                  <div className="mt-1 mb-1">
                    <h5 className="mb-0">Conversation usage</h5>
                  </div>

                  <div className="mt-1 mb-3">
                    <span className="fw-bold fs-3 text-secondary me-2">0</span>
                    <span className="fs-5 me-2">of 150</span>
                    <span>minutes / mo</span>
                  </div>
                </div>
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

              <div className="py-3 mt-0">
                <p className="text-start">
                  <a href="">Fair Use Policy</a> Power-ups usage limits depend
                  on the plan and number of seats you have. Upgrade your plan or
                  add seats to increase your power-ups usage limits.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
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
                    Team's AI word usage history (Jan 30, 2025 - Jan 30, 2025)
                  </h5>
                </div>
                {/* <p className="text-start mb-0">Usage is shared with the team</p> */}
              </div>
            </div>

            <div className="d">
              <div
                className="p-5 mb-3 "
                style={{
                  borderBottom: "1px solid grey",
                  paddingBottom: "20px",
                }}
              >
                <div className="row">
                  <p>No data found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiWordUsage;
