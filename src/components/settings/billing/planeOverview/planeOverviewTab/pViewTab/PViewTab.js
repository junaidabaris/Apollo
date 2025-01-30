import React from "react";
import { Button } from "react-bootstrap";
import { CiStopwatch } from "react-icons/ci";
import { CgStopwatch } from "react-icons/cg";

import Download from "../../../../../../assets/images/billing/download.png";
import Download1 from "../../../../../../assets/images/billing/download (1).png";
import Download2 from "../../../../../../assets/images/billing/download (2).png";
import Download3 from "../../../../../../assets/images/billing/download (3).png";
import Download4 from "../../../../../../assets/images/billing/download (4).png";

function PViewTab() {
  return (
    <>
      <div className="Free_P_box mb-4">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <h5 className="mb-1">Free Plane</h5>
            <p className="text-start mb-0">
              You are on a free plan and your credits will refresh on Feb 21,
              2025
            </p>
          </div>

          <div>
            <Button type="" variant="primary">
              Purchase Plane
            </Button>
          </div>
        </div>

        <div className="p-3">
          <div className="total_m_box p-3 rounded-1">
            <table style={{ width: "100%" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid grey" }}>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary mb-3">
                      What's Included
                    </div>
                    <div className="fw-bold text-secondary">Users</div>
                  </td>
                  <td className="mb-3 py-3">
                    <div className="mb-3"></div>
                    <div className="mt-3">Free User x 1</div>
                  </td>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary">Price</div>
                    <div>$0/mo</div>
                  </td>
                </tr>

                <tr style={{ borderBottom: "1px solid grey" }}>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary mb-3">
                      Credits (In your Plan)
                    </div>
                  </td>
                  <td className="mb-3 py-3">
                    <div className="">100 Email Credits / mo</div>
                    <div className="">5 Mobile Number Credits / mo</div>
                    <div className="">10 Export Credits / mo</div>
                    <div className="bg-warning mt-4 py-1 px-3 rounded-2">
                      Unlock Unlimited credits by linking a corporate mailbox.
                      <a href="">Link Mailbox</a>
                    </div>
                  </td>
                  <td className="mb-3 py-3"></td>
                </tr>

                <tr style={{ borderBottom: "1px solid grey" }}>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary mb-3">
                      Add-On Credits
                    </div>
                  </td>
                  <td className="mb-3 py-3">
                    <div className="">15 Temporary Export Credits</div>
                    <div className="">
                      <a href="">+Add more credits</a>
                    </div>
                  </td>
                  <td className="mb-3 py-3">free</td>
                </tr>

                <tr style={{ borderBottom: "1px solid grey" }}>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary mb-3">
                      Monthly Total
                    </div>
                  </td>
                  <td className="mb-3 py-3"></td>
                  <td className="mb-3 py-3">
                    <div className="fw-bold text-secondary mb-3">$0/mo</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="Free_P_box ">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <div className="d-flex align-items-center justify-content-start">
              <h5 className="mb-1 me-3">Credits usage</h5>
              <p className="mb-0">Jan 21, 2025 - Feb 21, 2025</p>
            </div>
            <p className="text-start mb-0">
              <a href="" style={{ textDecoration: "none" }}>
                View historical credit usage
              </a>
            </p>
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

        <div className="">
          <div
            className="mb-3 p-4"
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="" style={{ width: "20%" }}>
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
                  width: "90%",
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
              <p className="">
                Export credits are charged when you export a contact outside
                Apollo. For example, when you use CSV, CRM, or API enrichment,
                sync to any system outside of Apollo, like Outreach or
                Salesloft. <a href="">Learn more</a>
              </p>
            </div>

            <div className="fw-bold text-secondary">
              Your team doesn't allow to share numbers credits.
            </div>
          </div>

          <div
            className="p-4 mb-3"
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="" style={{ width: "20%" }}>
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
                  width: "90%",
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
              <p className="">
                Email credits provide access to a contact's personal or business
                email address. We only charge 1 email credit per verified email.{" "}
                <a href="">Fair Use Policy</a> limits plan to 100 email credits
                per cycle to prevent abuse. <a href="">Learn more</a>
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

          <div
            className="p-4 mb-3"
            style={{ borderBottom: "1px solid grey", paddingBottom: "20px" }}
          >
            <div className="" style={{ width: "20%" }}>
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
                  width: "90%",
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
              <p className="">
                Mobile credits are charged for all verified numbers that are
                accessed within Apollo <a href="">Learn more</a>
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
    </>
  );
}

export default PViewTab;
