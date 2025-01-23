import React, { useState } from "react";

const CustomFields = () => {
  // Unified state to manage all field values and edit statuses
  const [formData, setFormData] = useState({
    lead_source: { value: "none", isEditable: false },
    type: { value: "none", isEditable: false },
    
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
        <label>Lead Source
        :</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.lead_source.value}
            onChange={(e) => handleInputChange("lead_source", e.target.value)}
            disabled={!formData.lead_source.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.lead_source.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("lead_source")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("lead_source")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Type:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.type.value}
            onChange={(e) => handleInputChange("type", e.target.value)}
            disabled={!formData.type.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.type.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("type")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("type")}>Edit</button>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default CustomFields;
