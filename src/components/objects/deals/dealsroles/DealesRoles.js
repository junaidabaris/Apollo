import React, { useState } from "react";
import Card from "../Card";

function DealesRoles() {
  const [data, setData] = useState([
    { title: "Initial Contact", coloe_code: "#ffff" },
    { title: "Business User", coloe_code: "#ffff" },
    { title: "Buyer", coloe_code: "#ffff" },
    { title: "Decision Maker", coloe_code: "#ffff" },
    { title: "Evaluator", coloe_code: "#ffff" },
    { title: "Executive Sponsor", coloe_code: "#ffff" },
    { title: "Gatekeeper", coloe_code: "#ffff" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    if (newRole.trim()) {
      setData([...data, { title: newRole, coloe_code: "#ffff" }]);
      setNewRole("");
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="table-responsive active-projects style-1">
        <div className="tbl-caption d-flex justify-content-between align-items-center">
          <h4 className="heading mb-0 p-2">Create, edit and map deal roles</h4>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add Role
          </button>
        </div>
        <div>
          {data.map((item, index) => (
            <Card key={index} title={item.title} coloe_code={item.coloe_code} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">New Deal role</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="roleName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roleName"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    placeholder="Enter role name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddRole}
                >
                  Save Role
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DealesRoles;
