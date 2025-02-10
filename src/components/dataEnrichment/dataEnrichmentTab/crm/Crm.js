import { Button } from "react-bootstrap";
// import Download1 from "../../../../assets/images/data-enrich/download.svg";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaHubspot } from "react-icons/fa6";
import img1 from "../../../../assets/images/data-enrich/download (1).svg";
import img2 from "../../../../assets/images/data-enrich/download (2).svg";
import img3 from "../../../../assets/images/data-enrich/download (3).svg";
import { useState } from "react";
import CunnectHubspotModal from "./CunnectHubspotModal";
import SalesforceModal from "./SalesforceModal";

function Crm({img}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const closeOpen = () => setOpen(false);

  return (
    <>
      <div className="px-3 py-4">
        <div className="crm_body_box">
          <div className="crm_body_card">
            <div className="py-3 mb-3">
              <img src={img} alt="" />
            </div>

            <div className="mb-3">
              <h5 className="mb-3">
                Enrich existing records across your CRM systems
              </h5>
              <p>
                Boost your CRM effectiveness with dynamic enrichment,
                effortlessly updating contact and account details to keep your
                data consistently synchronized.
              </p>
            </div>

            <div className="py-3">
              <Button
                type="button"
                variant="warning"
                className="fs-5 text-dark"
                onClick={handleShow}
              >
                <FaHubspot className="me-2 mb-1 fs-4" />
                Connect Hubspot
              </Button>

              <Button
                type="button"
                variant="warning"
                className="fs-5 text-dark"
                onClick={handleOpen}
              >
                <TiWeatherCloudy className="me-2 mb-1 fs-5" />
                Connect Salesforce
              </Button>
            </div>
          </div>
        </div>

        <div className="keybenfit_item_box mt-4">
          <div className="text-center py-4">
            <h4>Key benefits</h4>
          </div>

          <div className="row">
            <div className="col-xl-4">
              <div className="keybenefit_item_card">
                <div className="mb-2">
                  <img src={img1} alt="" style={{ width: "70px" }} />
                </div>

                <div className="py-2">
                  <h5>Enhance customer connections</h5>
                </div>

                <div>
                  <p>
                    Boost your business growth by enriching CRM fields with
                    accurate data, ensuring seamless integration of leads into
                    your sales strategy
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="keybenefit_item_card">
                <div className="mb-2">
                  <img src={img2} alt="" style={{ width: "60px" }} />
                </div>

                <div className="py-2">
                  <h5>Save time & streamline workflows</h5>
                </div>

                <div>
                  <p>
                    Save time and increase productivity by simplifying your
                    workflow, focusing on sales, and efficiently managing tasks
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="keybenefit_item_card">
                <div className="mb-2">
                  <img
                    src={img3}
                    alt=""
                    className=""
                    style={{ width: "70px" }}
                  />
                </div>

                <div className="py-2">
                  <h5>Ensure data consistency</h5>
                </div>

                <div>
                  <p>
                    Experience consistent, accurate data across platforms,
                    reducing manual entry and errors for up-to-date records
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 py-4 text-center">
            <Button type="button" variant="secondary" className="fs-5 bg-none">
              Learn more
            </Button>
          </div>
        </div>
      </div>

      <CunnectHubspotModal show={show} handleClose={handleClose} />

      <SalesforceModal open={open} closeOpen={closeOpen} />
    </>
  );
}

export default Crm;
