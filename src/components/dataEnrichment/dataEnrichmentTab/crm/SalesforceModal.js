

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import weather from "../../../../assets/images/data-enrich/weather.svg";

function SalesforceModal({ open, closeOpen }) {
  return (
    <>
      <Modal show={open} onHide={closeOpen}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="keybenefit_item_card"
                  style={{ width: "80%", margin: "auto" }}
                >
                  <div className="mb-2">
                    <img src={weather} alt="" style={{ width: "130px" }} />
                  </div>

                  <div className="py-2">
                    <h5>Allow Apollo to access your Salesforce account?</h5>
                  </div>

                  <div>
                    <p>
                      Link Salesforce to automatically dedupe against existing
                      contacts/leads, bidirectionally sync your activities, and
                      enrich your Salesforce records.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="" style={{ fontSize: "13px", lineHeight: "17px" }}>
                By clicking "Yes, Continue" below, you acknowledge that business
                contact data submitted from your Salesforce account to Apollo
                may be used to provide and improve Apollo's services as further
                described in our{" "}
                <a href="https://www.apollo.io/terms">
                  Terms of Service. Learn more{" "}
                </a>
                about data sharing.
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeOpen}>
            Close
          </Button>
          <Button variant="warning" onClick={closeOpen}>
            Allow Access
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SalesforceModal;
