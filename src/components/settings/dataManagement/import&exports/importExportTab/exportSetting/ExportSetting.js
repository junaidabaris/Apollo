import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LuUsers } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiBuildingDuotone } from "react-icons/pi";

function ExportSetting() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="analytic_container py-5">
        <div className="" style={{ width: "55%", margin: "auto" }}>
          <h4 className="">CSV Export Settings</h4>

          <div className="mt-3 export_settings_box p-4 rounded-2">
            <p className="text-start mb-0">
              <strong>What is the CSV Export settings for?</strong>
            </p>
            <p className="text-start mb-0">
              You can customise the default fields you want to download every
              time you export a CSV file. This is a personal account setting and
              wont be applied to the rest of your team.
            </p>

            <div className="mt-3 mb-3 export_settings_box p-4 rounded-2 d-flex align-items-center justify-content-between">
              <p className="mb-0 fw-normal fs-4">
                <LuUsers className="me-3 mb-1" />
                Contact CSV Export
              </p>
              <Button
                type=""
                variant="secondary"
                className="fs-5"
                onClick={handleShow}
              >
                <IoSettingsOutline className="me-2 mb-1" />
                Edit Settings
              </Button>
            </div>

            <div className="mt-3 mb-3 export_settings_box p-4 rounded-2 d-flex align-items-center justify-content-between">
              <p className="mb-0 fw-normal fs-4">
                <PiBuildingDuotone className="me-3 mb-1" />
                Account CSV Export
              </p>
              <Button
                type=""
                variant="secondary"
                className="fs-5"
                onClick={handleShow}
              >
                <IoSettingsOutline className="me-2 mb-1" />
                Edit Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Contact CSV export</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="py-3 mb-3"
            style={{ borderBottom: "1px solid #7F7F7F" }}
          >
            <select
              name=""
              id=""
              className="form-control form-select"
              placeholder="Search Coloumn Name..."
            >
              <option value="">First Name</option>
              <option value="">Last Name</option>
              <option value="">Title</option>
              <option value="">Company</option>
            </select>

            <div className="mb- mt-3 d-flex align-items-center justify-content-between">
              <h5 className="mb-0">Standard fields</h5>

              <div>
                <Button type="" variant="secondary">
                  Select All
                </Button>
                <Button type="" variant="secondary">
                  Deselect All
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">First Name</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Last name</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Company</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Title</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Company name for emails</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Email</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Email status</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Primary email source</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Email Confidance</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Primary email catch-all status</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Primary email last verified at</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-4 mb-3">
                <div className="check_box d-flex align-items-center justify-content-between rounded-1 px-2 py-2">
                  <div>
                    <p className="mb-1">Seniority</p>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      className="fs-2"
                      defaultChecked
                      style={{ width: "19px", height: "19px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExportSetting;
