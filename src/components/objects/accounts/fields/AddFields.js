import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddFields(props) {
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("Single-select picklist");
  const [customOptions, setCustomOptions] = useState(["Option 1", "Option 2"]);
  const [saveFieldAs, setSaveFieldAs] = useState("Global custom field");

  // Add a new option to the picklist
  const addOption = () => {
    setCustomOptions([...customOptions, `Option ${customOptions.length + 1}`]);
  };

  // Update the value of a specific option
  const updateOption = (index, value) => {
    const updatedOptions = [...customOptions];
    updatedOptions[index] = value;
    setCustomOptions(updatedOptions);
  };

  // Remove an option from the picklist
  const removeOption = (index) => {
    const updatedOptions = customOptions.filter((_, i) => i !== index);
    setCustomOptions(updatedOptions);
  };

  const handleSubmit = () => {
    const fieldData = {
      fieldName,
      fieldType,
      customOptions,
      saveFieldAs,
    };
    console.log("Field Data:", fieldData);
    props.onHide(); // Close the modal after submission
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Field
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Field Name */}
          <Form.Group className="mb-3" controlId="fieldName">
            <Form.Label>Field Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a name"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
          </Form.Group>

          {/* Field Type */}
          <Form.Group className="mb-3" controlId="fieldType">
            <Form.Label>Field Type</Form.Label>
            <Form.Select
              value={fieldType}
              onChange={(e) => setFieldType(e.target.value)}
            >
              <option>Single-select picklist</option>
              <option>Multi-select picklist</option>
              <option>Text</option>
              <option>Number</option>
            </Form.Select>
          </Form.Group>

          {/* Custom Picklist Value Set */}
          {fieldType.includes("picklist") && (
            <Form.Group className="mb-3" controlId="customOptions">
              <Form.Label>Custom Picklist Value Set</Form.Label>
              {customOptions.map((option, index) => (
                <div key={index} className="d-flex align-items-center mb-2">
                  <Form.Control
                    type="text"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className="me-2"
                  />
                  <Button
                    variant="danger"
                    onClick={() => removeOption(index)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
              <Button variant="outline-primary" onClick={addOption}>
                Add Option
              </Button>
            </Form.Group>
          )}

          {/* Save Field As */}
          <Form.Group className="mb-3" controlId="saveFieldAs">
            <Form.Label>Save Field As</Form.Label>
            <div>
              <Form.Check
                type="radio"
                id="globalField"
                label="Global custom field (visible to everyone)"
                value="Global custom field"
                checked={saveFieldAs === "Global custom field"}
                onChange={(e) => setSaveFieldAs(e.target.value)}
              />
              <Form.Check
                type="radio"
                id="privateField"
                label="Private field (visible only to you)"
                value="Private field"
                checked={saveFieldAs === "Private field"}
                onChange={(e) => setSaveFieldAs(e.target.value)}
              />
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Save Field
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddFields;
