import React, { useState } from "react";
import Card from "../Card";



function StagesList() {
    const data = [
        { title: "Cold", coloe_code: "#867250" },
        { title: "Current Client", coloe_code: "#e86f5f" },
        { title: "Active Opportunity", coloe_code: "#4b814f" },
        { title: "Dead Opportunity", coloe_code: "#867250" },
        { title: "Do Not Prospect", coloe_code: "#867250" },
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
                    <h4 className="heading mb-0 p-2">Apollo Account Stage</h4>
                    <button className="btn btn-primary btn-sm" onClick={() => setShowModal(true)}>
                        Add Stage
                    </button>
                </div>
            </div>
            {stages.map((item, index) => (
                <Card key={index} title={item.title} coloe_code={item.coloe_code} />
            ))}

            {/* Modal */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Add Stage</h5>
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
                                        placeholder="Enter stage name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <div>Used for predictive insights and recommendations</div>
                                    <div className="row">
                                        <div className="form-check form-check-inline">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="category"
                                                value="in progress"
                                                checked={newStage.category === "in progress"}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">In Progress</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="category"
                                                value="succeeded"
                                                checked={newStage.category === "succeeded"}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">Succeeded</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="category"
                                                value="Not Category"
                                                checked={newStage.category === "Not Category"}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">Not Category</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                type="radio"
                                                className="form-check-input"
                                                name="category"
                                                value="Not succeeded"
                                                checked={newStage.category === "Not succeeded"}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label">Not Succeeded</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">
                                            Event triggers will not reassign contacts manually set to "this stage"
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Cancel
                                </button>
                                <button className="btn btn-primary" onClick={handleAddStage}>
                                    Create Stage
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StagesList;
