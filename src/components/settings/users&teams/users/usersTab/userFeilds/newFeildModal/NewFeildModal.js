

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button, Row } from "react-bootstrap";

function NewFeildModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Custom User Field</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name..." autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>
                Type
                <p className="mb-0 mx-3 fw-light">Type cannot be changed after a custom field is created.</p>
              </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Single-line Text</option>
                <option value="1">Multi-line Text</option>
                <option value="2">Number</option>
                <option value="3">Date</option>
                <option value="3">Date/Time</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Max Text Length</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Name..."
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewFeildModal;
