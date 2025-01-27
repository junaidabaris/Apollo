import React, { useState } from "react";
import Card from "./Card";



function RolesList() {
    const data = [
        { title: "Business User" },
        { title: "Buyer" },
        { title: "Decision Maker" },
        { title: "Evaluator" },
        { title: "Executive Sponsor" },
        { title: "Gatekeeper" },
        { title: "Influencer" },
        { title: "Project Manager" },
        { title: "Other" },
    ];
    const [stages, setStages] = useState(data);
    const [showModal, setShowModal] = useState(false);
    const [newStage, setNewStage] = useState({ name: "", category: "in progress" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStage((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddStage = () => {
        if (newStage.name.trim()) {
            setStages([
                ...stages,
                { title: newStage.name, coloe_code: newStage.category === "in progress" ? "#4b814f" : "#867250" },
            ]);
            setNewStage({ name: "", category: "in progress" });
            setShowModal(false);
        }
    };

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Create, edit and map contact roles</h4>
                    <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>
                        Add Roles
                    </button>
                </div>
            </div>
            {stages.map((item, index) => (
                <Card key={index} title={item.title}  />
            ))}

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Roles</h5>
                                <span onClick={() => setShowModal(false)}>&times;</span>

                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={newStage.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter Role name"
                                    />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleAddStage}>
                                    Create Role
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RolesList;
