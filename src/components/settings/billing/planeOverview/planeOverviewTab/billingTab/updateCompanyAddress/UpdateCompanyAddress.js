import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function UpdateCompanyAddress({ show1, setShow, handleClose }) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <Modal show={show1} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit company address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div>
              <h5 className="mb-3">Company address</h5>

              <Row className="mb-4">
                <Form.Group as={Col} md="" controlId="validationCustom03">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Address" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>City</Form.Label>
                  <Form.Control required type="text" placeholder="City" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>State</Form.Label>
                  <Form.Control required type="text" placeholder="State" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>Country</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Postal Code"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default UpdateCompanyAddress;
