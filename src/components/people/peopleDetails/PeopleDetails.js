import { Link } from "react-router-dom";
import { Button, Flex } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";


// ---here import icons----
import { PiCaretRightBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import PeopleDetailsTab from "./peopleDetailsTab/PeopleDetailsTab";

function PeopleDetails() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "People",
    title_2: "People-details",
  };

 

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

      <div
        className="px-4 py-3 mb-4"
        style={{ borderBottom: "1px solid #e9e2e2" }}
      >
        <div className="person_box mb-2">
          <span className="back_peoples">
            <Link to="/peoples" style={{ textDecoration: "none" }}>
              People
            </Link>
          </span>
          <span>
            <PiCaretRightBold />
          </span>

          <span>
            <mark className="rounded-2 px-2 fw-400 fs-5">Ian Bremmer</mark>
          </span>
        </div>

        <div className="personHead_box ">
          <div className="d-flex align-items-center">
            <div className="ib me-3">IB</div>

            <div>
              <div className="d-flex align-items-center fs-3">
                <h5 className="mb-0 me-2">Ian Bremmer</h5>
                <span className="back_peoples">
                  <Link to="/peoples" style={{ textDecoration: "none" }}>
                    <strong>In</strong>
                  </Link>
                </span>
              </div>
              <div>
                <p className="fs-5 mb-0">
                  President and Founders <span className="me-2 fs-6 ">at</span>
                  <a href="">Eurasia Group</a>
                  <span className="mx-3 fs-6">. New York, New York</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <Flex gap="small" wrap>
              <Button>
                <FaPlus />
                Add to List
              </Button>
              <Button>
                <MdOutlineEmail />
                Access Email
              </Button>
            </Flex>
          </div>
        </div>
      </div>

      <div className="row px-4">
        <div className="col-xl-5">
          <div className="p-2">
            <div className="card">
              <h5>Contact information</h5>

              <div className="person_box mb-3">
                <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p>

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">bremmer@eurasiagroup.net</h6>
                      <span className="back_peoples">
                        <small>Primary</small>
                      </span>
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Business・Source: Apollo・Catch-all</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Phone Numbers</small>
                </p>

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <IoCallOutline className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">(917)-941-9358</h6>
                      <span className="back_peoples">
                        <small>Primary</small>
                      </span>
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Mobile: Source:Apollo</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <HiOutlineBuildingOffice2 className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">(212)-696-0772</h6>
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Work direct ・ Source: Apollo</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <HiOutlineBuildingOffice2 className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">(212)-696-0772</h6>
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Corporate phone ・ Source: Apollo</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2">
            <div className="card">
              <h5 className="mb-3">Work History</h5>

              <div className="person_box mb-3">
                {/* <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p> */}

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">USAID</h6>
                      {/* <span className="back_peoples">
                        <small>Primary</small>
                      </span> */}
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Project Management Specialist Current</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                {/* <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p> */}

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">Oowlish Technology</h6>
                      {/* <span className="back_peoples">
                        <small>Primary</small>
                      </span> */}
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>Head of Talent Acquisition</small>
                      </p>
                    </div>

                    <div>
                      <small>2021 - 2024 • 3 years</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                {/* <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p> */}

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">
                        YLAI / Young Leaders of the Americas Initiative
                      </h6>
                      {/* <span className="back_peoples">
                        <small>Primary</small>
                      </span> */}
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>YLAI FELLOW</small>
                      </p>
                    </div>

                    <div>
                      <small>2018 - 2023 • 5 years</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                {/* <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p> */}

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">
                        YLAI / Young Leaders of the Americas Initiative
                      </h6>
                      {/* <span className="back_peoples">
                        <small>Primary</small>
                      </span> */}
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>YLAI FELLOW</small>
                      </p>
                    </div>

                    <div>
                      <small>2018 - 2023 • 5 years</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="person_box mb-3">
                {/* <p className="text-start mb-1">
                  <small className="text-secondary fs-6">Email</small>
                </p> */}

                <div className="d-flex align-items-center">
                  <div className="ib me-3">
                    <GoMail className="text-success" />
                  </div>

                  <div>
                    <div className="d-flex align-items-center">
                      <h6 className="mb-0 me-2">
                        YLAI / Young Leaders of the Americas Initiative
                      </h6>
                      {/* <span className="back_peoples">
                        <small>Primary</small>
                      </span> */}
                    </div>
                    <div>
                      <p className="fs-6 mb-0 text-start text-secondary">
                        <small>YLAI FELLOW</small>
                      </p>
                    </div>

                    <div>
                      <small>2018 - 2023 • 5 years</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-7">
          <div className="p-2">
            <div className="card">
              <h5 className="mb-1">USAID</h5>
              <div className="person_box mb-3">
                <p className="text-start mb-1">
                  <small className="text-secondary fs-6">
                    International Affairs 19,000 employees Washington, District
                    of Columbia
                  </small>
                </p>
              </div>

              <PeopleDetailsTab />
            </div>
          </div>

          <div className="p-2">
            <div className="card">
              <h5 className="mb-1">Insights</h5>
              {/* <div className="person_box mb-3">
                <p className="text-start mb-1">
                  <small className="text-secondary fs-6">
                    International Affairs 19,000 employees Washington, District
                    of Columbia
                  </small>
                </p>
              </div> */}

              <PeopleDetailsTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PeopleDetails;
