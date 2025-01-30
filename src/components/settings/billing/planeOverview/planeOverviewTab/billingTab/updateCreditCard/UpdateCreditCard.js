import Modal from "react-bootstrap/Modal";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function UpdateCreditCard({ show, setShow, handleClose }) {
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
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Link credit card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div>
              <h5 className="mb-3">Billing address</h5>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control required type="text" placeholder="First name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control required type="text" placeholder="Last name" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

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
                  <Form.Control required type="text" placeholder="City" />
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

            <div>
              <h5 className="mb-3">Payment method</h5>
              <Row className="mb-4">
                <Form.Group as={Col} md="" controlId="validationCustom01">
                  <Form.Label>Credit Card Number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Credit Card Number"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Card expiration date</Form.Label>
                  <Form.Control required type="text" placeholder="MM | YY" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>Card CVC</Form.Label>
                  <Form.Control type="text" placeholder=" CVC" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Card CVC.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </div>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
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
export default UpdateCreditCard;
