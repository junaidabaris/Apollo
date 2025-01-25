import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";

function NewUsersModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <div>Invite your Team</div>
            <div>
              <p className="fw-normal fs-6 mb-0">
                Empower everyone to get more deals done—faster.
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Set permission profile</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Admin</option>
                <option value="1">Non-Admin</option>
                <option value="2">Number</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <TextArea placeholder="Add Multiple Email Address Seperated By Commas" rows={6}>

              </TextArea>
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

export default NewUsersModal;
