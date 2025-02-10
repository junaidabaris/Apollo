import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Strategy() {
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
    <div className="card">
      <h6>Strategy</h6>
      <hr />
      <br />
      <div className="card">
        <h6>Key factors</h6>
        <p className="text-start">
          This will be used to highlight your company and its offerings in
          generated emails.
        </p>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom01"
              className="mb-3"
            >
              <Form.Label>Company or product name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Company or product name"
                className="own_input"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Customer pain points</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Value proposition</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Call-to-action</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Company overview</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Additional context</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </div>

      <div className="card">
        <h6>Competitors</h6>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Primary competitors</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              controlId="validationCustom02"
              className="mb-3"
            >
              <Form.Label>Product differentiators</Form.Label>
              <FloatingLabel controlId="floatingTextarea2">
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  className="own_input"
                />
              </FloatingLabel>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

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
      </div>
    </div>
  );
}

export default Strategy;
