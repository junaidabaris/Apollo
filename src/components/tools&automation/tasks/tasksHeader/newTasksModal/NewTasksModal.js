import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function NewTasksModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>New Tasks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tasks Title</Form.Label>
              <Form.Control type="text" placeholder="Tasks Title" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Associate with</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Contact</option>
                <option value="1">Contact</option>
                <option value="2">Account</option>
                <option value="3">Deal</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Select Contact</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                as={Col}
                md="6"
              >
                <Form.Label>Tasks</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Tasks</option>
                  <option value="1">Manual Email</option>
                  <option value="2">Action Item</option>
                </Form.Select>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                as={Col}
                md="6"
              >
                <Form.Label>Assigned to</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>option</option>
                  <option value="1">Option 1</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className="mb-3" as={Col} md="">
              {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                as={Col}
                md="3"
              >
                <Form.Label>Tasks</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Tasks</option>
                  <option value="1">Manual Email</option>
                  <option value="2">Action Item</option>
                </Form.Select>
              </Form.Group> */}

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                as={Col}
                md="6"
              >
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" placeholder="Tasks Title" autoFocus />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
                as={Col}
                md="6"
              >
                <Form.Label>Priority</Form.Label>
                <Form.Select aria-label="Default select example">
                  <option>Medium</option>
                  <option value="1">Low</option>
                  <option value="2">High</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Add Description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Tasks
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewTasksModal;
