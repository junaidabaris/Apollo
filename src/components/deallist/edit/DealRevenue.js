import React, { useState } from "react";

const DealRevenue = () => {
  // Unified state to manage all field values and edit statuses
  const [formData, setFormData] = useState({
    amount: { value: "amount", isEditable: false },
    currency: { value: "currency", isEditable: false },
    deal_amount: { value: "deal_amount", isEditable: false },

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
        <label>Amount:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.amount.value}
            onChange={(e) => handleInputChange("amount", e.target.value)}
            disabled={!formData.amount.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.amount.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("amount")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("amount")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Currency:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.currency.value}
            onChange={(e) => handleInputChange("currency", e.target.value)}
            disabled={!formData.currency.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.currency.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("currency")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("currency")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Deal amount:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.deal_amount.value}
            onChange={(e) => handleInputChange("deal_amount", e.target.value)}
            disabled={!formData.deal_amount.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.deal_amount.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("deal_amount")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("deal_amount")}>Edit</button>
          )}
        </div>
      </div>

    </div>
  );
};

export default DealRevenue;
