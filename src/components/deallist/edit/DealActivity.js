import React, { useState } from "react";

const DealActivity = () => {
  // Unified state to manage all field values and edit statuses
  const [formData, setFormData] = useState({
    lastActivityDate: { value: "2025-01-22", isEditable: false },
    createdDate: { value: "2025-01-01", isEditable: false },
    createdBy: { value: "Junaid Abaris", isEditable: false },
    estimatedCloseDate: { value: "2025-02-15", isEditable: false },
    actualClosedDate: { value: "2025-03-01", isEditable: false },
    stageLastUpdatedDate: { value: "2025-01-15", isEditable: false },
    nextStep: { value: "Follow-up", isEditable: false },
    nextStepDate: { value: "2025-01-30", isEditable: false },
    closedWonReason: { value: "Successful negotiation", isEditable: false },
    closedLostReason: { value: "Budget constraints", isEditable: false },
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
        <label>Last Activity Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.lastActivityDate.value}
            onChange={(e) => handleInputChange("lastActivityDate", e.target.value)}
            disabled={!formData.lastActivityDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.lastActivityDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("lastActivityDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("lastActivityDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Created Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.createdDate.value}
            onChange={(e) => handleInputChange("createdDate", e.target.value)}
            disabled={!formData.createdDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.createdDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("createdDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("createdDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Created By:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.createdBy.value}
            onChange={(e) => handleInputChange("createdBy", e.target.value)}
            disabled={!formData.createdBy.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.createdBy.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("createdBy")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("createdBy")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Estimated Close Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.estimatedCloseDate.value}
            onChange={(e) => handleInputChange("estimatedCloseDate", e.target.value)}
            disabled={!formData.estimatedCloseDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.estimatedCloseDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("estimatedCloseDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("estimatedCloseDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Actual Closed Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.actualClosedDate.value}
            onChange={(e) => handleInputChange("actualClosedDate", e.target.value)}
            disabled={!formData.actualClosedDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.actualClosedDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("actualClosedDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("actualClosedDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Stage Last Updated Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.stageLastUpdatedDate.value}
            onChange={(e) => handleInputChange("stageLastUpdatedDate", e.target.value)}
            disabled={!formData.stageLastUpdatedDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.stageLastUpdatedDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("stageLastUpdatedDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("stageLastUpdatedDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Next Step:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="date"
            value={formData.nextStep.value}
            onChange={(e) => handleInputChange("nextStep", e.target.value)}
            disabled={!formData.nextStep.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.nextStep.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("nextStep")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("nextStep")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Next Step Date:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.nextStepDate.value}
            onChange={(e) => handleInputChange("nextStepDate", e.target.value)}
            disabled={!formData.nextStepDate.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.nextStepDate.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("nextStepDate")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("nextStepDate")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Closed Won Reason:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.closedWonReason.value}
            onChange={(e) => handleInputChange("closedWonReason", e.target.value)}
            disabled={!formData.closedWonReason.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.closedWonReason.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("closedWonReason")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("closedWonReason")}>Edit</button>
          )}
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Closed Lost Reason:</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="form-control"
            type="text"
            value={formData.closedLostReason.value}
            onChange={(e) => handleInputChange("closedLostReason", e.target.value)}
            disabled={!formData.closedLostReason.isEditable}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {formData.closedLostReason.isEditable ? (
            <button className="btn btn-success" onClick={() => handleSaveClick("closedLostReason")}>Save</button>
          ) : (
            <button className="btn btn-danger" onClick={() => handleEditClick("closedLostReason")}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealActivity;
