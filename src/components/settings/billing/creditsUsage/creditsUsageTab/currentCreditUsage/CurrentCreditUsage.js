import React from "react";
import { Button } from "react-bootstrap";
import { CiStopwatch } from "react-icons/ci";
import { CgStopwatch } from "react-icons/cg";

import { LiaUserSolid } from "react-icons/lia";
import { RiDatabaseLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

import Download from "../../../../../../assets/images/billing/download.png";
import Download1 from "../../../../../../assets/images/billing/download (1).png";
import Download2 from "../../../../../../assets/images/billing/download (2).png";
import Download3 from "../../../../../../assets/images/billing/download (3).png";
import Download4 from "../../../../../../assets/images/billing/download (4).png";

function CurrentCreditUsage() {
  return (
    <>
      <div className="Free_P_box mb-5">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-1 me-3">Credits usage</h5>
              <p className="mb-0">Jan 21, 2025 - Feb 21, 2025</p>
            </div>
            {/* <p className="text-start mb-0">
              <a href="" style={{ textDecoration: "none" }}>
                View historical credit usage
              </a>
            </p> */}
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
          <div className="row">
            <div className="col-lg-4">
              <div
                className="mb-3 p-4"
                style={{ borderRight: "1px solid grey", paddingBottom: "20px" }}
              >
                <div className="" style={{ width: "40%" }}>
                  <img src={Download} alt="" style={{ width: "30%" }} />
                </div>

                <div className="mt-3 mb-3">
                  <h5 className="mb-0">Export credits usage</h5>
                </div>

                <div className="mt-3 mb-3">
                  <span className="fw-bold fs-3 text-secondary me-2">0</span>
                  <span className="fs-5 me-2">of 25</span>
                  <span>export / mo</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className=" rounded-5"
                    style={{
                      width: "60%",
                      height: "5px",
                      backgroundColor: "#E3E3E5",
                    }}
                  ></div>
                  <div>
                    <Button type="" variant="primary">
                      Buy more
                    </Button>
                  </div>
                </div>

                <div className="py-3 mt-3">
                  <p className="text-start">
                    Export credits are charged when you export a contact outside
                    Apollo. For example, when you use CSV, CRM, or API
                    enrichment, sync to any system outside of Apollo, like
                    Outreach or Salesloft. <a href="">Learn more</a>
                  </p>
                </div>

                <div className="fw-bold text-secondary">
                  Your team doesn't allow to share numbers credits.
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="p-4 mb-3"
                style={{ borderRight: "1px solid grey", paddingBottom: "20px" }}
              >
                <div className="" style={{ width: "40%" }}>
                  <img src={Download1} alt="" style={{ width: "30%" }} />
                </div>

                <div className="mt-3 mb-3">
                  <h5 className="mb-0">Email credits usage</h5>
                </div>

                <div className="mt-3 mb-3">
                  <span className="fw-bold fs-3 text-secondary me-2">0</span>
                  <span className="fs-5 me-2">of 100</span>
                  <span>emails / mo</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className=" rounded-5"
                    style={{
                      width: "70%",
                      height: "5px",
                      backgroundColor: "#E3E3E5",
                    }}
                  ></div>
                  <div>
                    <Button type="" variant="primary">
                      Upgrade
                    </Button>
                  </div>
                </div>

                <div className="py-3 mt-3">
                  <p className="text-start">
                    Email credits provide access to a contact's personal or
                    business email address. We only charge 1 email credit per
                    verified email. <a href="">Fair Use Policy</a> limits plan
                    to 100 email credits per cycle to prevent abuse.{" "}
                    <a href="">Learn more</a>
                  </p>
                </div>

                <div className="fw-bold text-secondary">
                  Your team doesn't allow to share emails credits.
                </div>

                <div className="bg-warning mt-4 py-1 px-3 rounded-2">
                  Unlock Unlimited credits by linking a corporate mailbox.
                  <a href="">Link Mailbox</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="p-4 mb-3" style={{ paddingBottom: "20px" }}>
                <div className="" style={{ width: "40%" }}>
                  <img src={Download2} alt="" style={{ width: "30%" }} />
                </div>

                <div className="mt-3 mb-3">
                  <h5 className="mb-0">Mobile Number credits usage</h5>
                </div>

                <div className="mt-3 mb-3">
                  <span className="fw-bold fs-3 text-secondary me-2">0</span>
                  <span className="fs-5 me-2">of 5</span>
                  <span>numbers / mo</span>
                </div>

                <div className="d-flex align-items-center justify-content-between">
                  <div
                    className=" rounded-5"
                    style={{
                      width: "60%",
                      height: "5px",
                      backgroundColor: "#E3E3E5",
                    }}
                  ></div>
                  <div>
                    <Button type="" variant="primary">
                      Buy more
                    </Button>
                  </div>
                </div>

                <div className="py-3 mt-3">
                  <p className="text-start  ">
                    Mobile credits are charged for all verified numbers that are
                    accessed within Apollo <a href="">Learn more</a>
                  </p>
                </div>

                <div className="fw-bold text-secondary">
                  Your team doesn't allow to share emails credits.
                </div>
              </div>
            </div>
          </div>

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
              <p className="">
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

          <div
            className="p-4 mb-3"
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="" style={{ width: "20%" }}>
              <img src={Download4} alt="" style={{ width: "30%" }} />
            </div>

            <div className="mt-3 mb-3">
              <h5 className="mb-0">Conversation usage</h5>
            </div>

            <div className="mt-3 mb-3">
              <span className="fw-bold fs-3 text-secondary me-2">0</span>
              <span className="fs-5 me-2">of 150</span>
              <span>minutes / mo</span>
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
                  Buy more minutes
                </Button>
              </div>
            </div>

            <div className="py-3 mt-3">
              <p className="">
                Conversation minutes are used when someone in your team has a
                zoom meeting recorded and processed in Apollo to present
                insights.
              </p>
            </div>

            <div className="fw-bold text-secondary">
              Your team doesn't allow to share emails credits.
            </div>
          </div>
        </div>
      </div>

      <div className="Free_P_box ">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-1 me-3">Subscription</h5>
            </div>
          </div>

          <div>
            <Button type="" variant="secondary">
              Change Plane
            </Button>
          </div>
        </div>

        <div className="px-3 py-4">
          <div className="mb-4">
            <span>
              <strong className="me-3 fs-2 fw-normal">Free</strong>
            </span>
            <span className="fs-3">$0 / mo</span>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 mb-5">
              <div className="" style={{ borderRight: "1px solid grey" }}>
                <div className="mb-1">
                  <LiaUserSolid className="text-primary fs-3" />
                </div>

                <div>
                  <span>
                    <strong className="me-3 fs-5 fw-normal">Users</strong>
                  </span>
                </div>

                <div>
                  <span>
                    <strong className="me-2 fs-4 fw-normal">1</strong>
                  </span>
                  <span>users / mo</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-5">
              <div className="" style={{ borderRight: "1px solid grey" }}>
                <div className="mb-1">
                  <RiDatabaseLine className="text-primary fs-3" />
                </div>

                <div>
                  <span>
                    <strong className="me-3 fs-5 fw-normal">
                      Export Credits
                    </strong>
                  </span>
                </div>

                <div>
                  <span>
                    <strong className="me-2 fs-4 fw-normal">10</strong>
                  </span>
                  <span>export credits / mo</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-5">
              <div className="" style={{ borderRight: "1px solid grey" }}>
                <div className="mb-1">
                  <AiOutlineMail className="text-primary fs-3" />
                </div>

                <div>
                  <span>
                    <strong className="me-3 fs-5 fw-normal">
                      Email credits
                    </strong>
                  </span>
                </div>

                <div>
                  <span>
                    <strong className="me-2 fs-4 fw-normal">100</strong>
                  </span>
                  <span>emails / mo</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 mb-5">
              <div className="" style={{ borderRight: "1px solid grey" }}>
                <div className="mb-1">
                  <IoCallOutline className="text-primary fs-3" />
                </div>

                <div>
                  <span>
                    <strong className="me-3 fs-5 fw-normal">
                      Mobile numbers
                    </strong>
                  </span>
                </div>

                <div>
                  <span>
                    <strong className="me-2 fs-4 fw-normal">5</strong>
                  </span>
                  <span>numbers / mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentCreditUsage;
