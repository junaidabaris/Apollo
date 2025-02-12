import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img1 from "../../../assets/images/create-sequence/download (4).svg"
import img2 from "../../../assets/images/create-sequence/download.svg"
import img3 from "../../../assets/images/create-sequence/download (1).svg"

function CreateSequence({ create, sequenceClose }) {
  return (
    <>
      <Modal show={create} onHide={sequenceClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Create a sequence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-start mb-3">
            Sequences are a series of automated or manual touchpoints and
            activities, designed to drive deeper engagement with your contacts.
          </p>
          <div className="row ">
            <div className="col-xl-4">
              <div className="card py-3 px-2" style={{ height: "200px" }}>
                <div className="d-flex align-item-center justify-content-center mb-3">
                  <img src={img1} alt="" style={{ width: "35%" }} />
                </div>

                <div className="text-center">
                  <h4>AI-assisted</h4>
                  <p>Create a simple outbound sequence with one click.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card py-3 px-2" style={{ height: "200px" }}>
                <div className="d-flex align-item-center justify-content-center mb-3">
                  <img src={img2} alt="" style={{ width: "35%" }} />
                </div>

                <div className="text-center">
                  <h4>Templates</h4>
                  <p>Start with one of our sequence templates.</p>
                </div>
              </div>
            </div>

            <div className="col-xl-4">
              <div className="card py-3 px-2" style={{ height: "200px" }}>
                <div className="d-flex align-item-center justify-content-center mb-3">
                  <img src={img3} alt="" style={{ width: "35%" }} />
                </div>

                <div className="text-center">
                  <h4>From scratch</h4>
                  <p>Create a new sequence from scratch.</p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={sequenceClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sequenceClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSequence;
