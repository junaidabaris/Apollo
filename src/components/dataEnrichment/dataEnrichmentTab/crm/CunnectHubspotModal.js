import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import modal1 from "../../../../assets/images/data-enrich/modal1.svg";

function CunnectHubspotModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
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
                    <img src={modal1} alt="" style={{ width: "130px" }} />
                  </div>

                  <div className="py-2">
                    <h5>Allow Apollo to access your HubSpot account?</h5>
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
            </div>

            <div>
              <p className="" style={{ fontSize: "13px", lineHeight: "17px" }}>
                By clicking "Yes, Continue" below, you acknowledge that business
                contact data submitted from your HubSpot account to Apollo may
                be used to provide and improve Apollo's services as further
                described in our
                <a href="https://www.apollo.io/terms">
                  Terms of Service. Learn more{" "}
                </a>
                about data sharing. Allow access Cancel
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Allow Access
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CunnectHubspotModal;
