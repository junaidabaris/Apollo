import React, { useState } from "react";

const BasicInfo = () => {
  // Unified state to manage all field values and edit statuses
  const [formData, setFormData] = useState({
    dealName: { value: "Website", isEditable: false },
    description: { value: "None", isEditable: false },
    company: { value: "ak", isEditable: false },
    owner: { value: "Junaid Abaris", isEditable: false },
    pipeline: { value: "Pipeline 1", isEditable: false },
    stage: { value: "Meeting Booked", isEditable: false },
  });

  // Handle edit button click
  const handleEditClick = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], isEditable: true },
    }));
  };

  // Handle save button click
  const handleSaveClick = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], isEditable: false },
    }));
    console.log(`Saved ${field}:`, formData[field].value);
  };

  // Handle input change
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: { ...prevData[field], value },
    }));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      {/* Separate input fields */}
      <div style={{ marginBottom: "15px" }}>
        <label>Deal Name:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.dealName.value}
            onChange={(e) => handleInputChange("dealName", e.target.value)}
            disabled={!formData.dealName.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.dealName.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("dealName")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("dealName")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Description:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.description.value}
            onChange={(e) => handleInputChange("description", e.target.value)}
            disabled={!formData.description.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.description.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("description")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("description")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Company:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.company.value}
            onChange={(e) => handleInputChange("company", e.target.value)}
            disabled={!formData.company.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.company.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("company")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("company")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Owner:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.owner.value}
            onChange={(e) => handleInputChange("owner", e.target.value)}
            disabled={!formData.owner.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.owner.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("owner")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("owner")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Pipeline:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.pipeline.value}
            onChange={(e) => handleInputChange("pipeline", e.target.value)}
            disabled={!formData.pipeline.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.pipeline.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("pipeline")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("pipeline")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Stage:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
          className="form-control"
            type="text"
            value={formData.stage.value}
            onChange={(e) => handleInputChange("stage", e.target.value)}
            disabled={!formData.stage.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.stage.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("stage")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("stage")}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
