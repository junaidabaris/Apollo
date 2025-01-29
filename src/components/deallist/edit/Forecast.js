import React, { useState } from "react";

const Forecast = () => {
  // Unified state to manage all field values and edit statuses
  const [formData, setFormData] = useState({
    deal_probability: { value: "33", isEditable: false },
    forecast_category: { value: "pipline", isEditable: false },
    
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
        <label>Deal probability (%)        :</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.deal_probability.value}
            onChange={(e) => handleInputChange("deal_probability", e.target.value)}
            disabled={!formData.deal_probability.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.deal_probability.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("deal_probability")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("deal_probability")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Forecast category
        :</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.forecast_category.value}
            onChange={(e) => handleInputChange("forecast_category", e.target.value)}
            disabled={!formData.forecast_category.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.forecast_category.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("forecast_category")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("forecast_category")}>Edit</button>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default Forecast;
