import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

function AddToList({ show, handleClose, modalHeading }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="mb-0">
              <Accordion.Header>Add to Lists</Accordion.Header>
              <Accordion.Body>
                Please note: Adding net-new contacts to a list costs 1 email
                credits per verified email. Adding previously saved contacts to
                a list does not cost credits.
                <br />
                <div>
                  <label htmlFor="" className="">
                    Add to Lists:
                  </label>

                  <select name="" id="" className="form-select">
                    <option value="">Enter or Create lists...</option>
                    <option value="">Enter 1</option>
                    <option value="">Enter 2</option>
                  </select>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="mb-0">
              <Accordion.Header>Send Email With AI</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="mb-0">
              <Accordion.Header>Add to Sequence</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="mb-0">
              <Accordion.Header>Assign Owner</Accordion.Header>
              <Accordion.Body>
                Please note: Adding net-new contacts to a list costs 1 email
                credits per verified email. Adding previously saved contacts to
                a list does not cost credits.
                <br />
                <div>
                  <label htmlFor="" className="">
                    Assign Owner:
                  </label>

                  <select name="" id="" className="form-select">
                    <option value="">Enter owner</option>
                    <option value="">Enter 1</option>
                    <option value="">Enter 2</option>
                  </select>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4" className="mb-0">
              <Accordion.Header>Mobile Number</Accordion.Header>
              <Accordion.Body>
                Every successfully enriched mobile number will cost 1 mobile
                number credits. Saved contacts - if any - in your selection do
                not cost credits.
                <br />
                <div className="d-flex ">
                  <input type="checkbox" className="me-2" />
                  <span className="fw-bold">
                    Try to find mobile numbers for newly prospected people.
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5" className="mb-0">
              <Accordion.Header>Export as CSV</Accordion.Header>
              <Accordion.Body>
                Please note: Exporting net-new contacts to a CSV costs
                <span>
                  <strong>1 export credit per verified email.</strong>
                </span>
                Saved contacts with emails already available will not incur a
                credit cost.
                <br />
                <div className="d-flex align-items-center">
                  <input type="radio" className="me-2" />
                  <span className="fw-bold">Export All Emails</span>
                </div>
                <div className="d-flex align-items-center">
                  <input type="radio" className="me-2" />
                  <span className="fw-bold">Export Verified Emails Only</span>
                </div>
                <div
                  className="py-3 px-4 rounded-2 mt-2"
                  style={{ backgroundColor: "#ECF3FE" }}
                >
                  <p>
                    Please note: Exporting existing records does not
                    automatically enrich emails and mobile numbers. To enrich
                    your existing records, visit the "Search" page, select your
                    records, and then click "Enrich."
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-start">
                    You can edit what default columns are always exported in
                    your CSV file.
                  </p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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

export default AddToList;
