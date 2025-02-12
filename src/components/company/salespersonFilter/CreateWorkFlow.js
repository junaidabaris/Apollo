import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function WorkflowUI({ show, handleClose }) {
    const [tab, setTab] = useState(0)

    const handleTab = (num) => {
        setTab(num)
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title><div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label class="form-check-label" for="flexSwitchCheckChecked">New Workflow - Feb 12, 2025 13:05</label>
                    </div> </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ul className="d-flex p-0 m-0 border-b">
                        <li className={tab === 0 ? "border-b border-3" : ""} onClick={() => handleTab(0)}>
                            <a className="p-2 text-black d-block text-decoration-none" href="#">Workflow Builder</a>
                        </li>
                        <li className={tab === 1 ? "border-b border-3" : ""} onClick={() => handleTab(1)}>
                            <a className="p-2 text-black d-block text-decoration-none" href="#">Settings</a>
                        </li>
                    </ul>

                    <div className={tab === 0 ? "d-block" : "d-none"}>
                        <div className="p-3">
                            <h6 className="text-primary">  Workflow Builder</h6>
                            <div className="card mt-3 p-3 border-primary">
                                <span className="badge bg-primary">When this happens</span>
                                <h6 className="mt-2">📅 Run this workflow every week on Wednesday</h6>
                                <ul>
                                    <li>Start immediately after activation</li>
                                    <li>Run this workflow every week on Wednesday</li>
                                </ul>
                                <div className="border p-2 mt-2">
                                    <h6 className="mb-1">Enrollment Criteria</h6>
                                    <p className="mb-1">Companies matching these attributes...</p>
                                    <span className="badge bg-light text-dark">Current matches: 1</span>
                                    <div className="mt-2 p-2 border rounded bg-light">
                                        <span className="fw-bold">Companies</span>
                                        <div className="badge bg-secondary mt-1">Abaris Softech</div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3 p-3 border-info">
                                <span className="badge bg-info">Then do this</span>
                                <button className="btn btn-outline-primary mt-2">+ Add action</button>
                            </div>
                        </div>
                    </div>


                    <div className={tab === 1 ? "d-block" : "d-none"}>
                        <div className="card shadow bg-light p-4 mt-3">

                            <h5 className="mb-3">Basic Info</h5>
                            <div className='row'>
                                <div className="mb-3 col-xl-6">
                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control bg-light border-black" value="New workflow - Feb 12, 2025 13:30" readOnly />
                                </div>
                                <div className="mb-3 col-xl-6">
                                    <label className="form-label">Folder</label>
                                    <select className="form-select bg-light border-black">
                                        <option>Select...</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-12">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control bg-light border-black" rows="3"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow bg-ligth p-4 mt-3">
                            <h5 className="mb-3">Customization</h5>

                            <div className="mb-3">
                                <label className="form-label d-flex align-items-center">Enrollment approval <span className="badge bg-success ms-2">New</span></label>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="approval" id="autoApproval" />
                                    <label className="form-check-label" htmlFor="autoApproval">
                                        <strong>Automatic approval</strong>
                                        <br />
                                        <span className="text-muted">Approve companies that meet the enrollment criteria and take actions automatically</span>
                                    </label>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="radio" name="approval" id="manualApproval" defaultChecked />
                                    <label className="form-check-label" htmlFor="manualApproval">
                                        <strong>Manual approval</strong>
                                        <br />
                                        <span className="text-muted">Tasks are created for manual review and approval of companies before actions can be taken.</span>
                                    </label>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Limit records processed <i className="bi bi-info-circle"></i></label>
                                <p className="text-muted small">Note: Active workflows process up to 10K companies in each run.</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="maxCompaniesRun" />
                                    <label className="form-check-label" htmlFor="maxCompaniesRun">Max companies per run</label>
                                    <input type="number" className="form-control bg-light border-black mt-1" placeholder="10" />
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="checkbox" id="maxCompaniesWorkflow" />
                                    <label className="form-check-label" htmlFor="maxCompaniesWorkflow">Max companies per workflow</label>
                                    <input type="number" className="form-control bg-light border-black mt-1" placeholder="10000" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Re-enrollment</label>
                                <p className="text-muted small">If eligible, how often should the same company be added to this workflow?</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="reenrollment" id="everyRun" />
                                    <label className="form-check-label" htmlFor="everyRun">Every run</label>
                                </div>
                                <div className="form-check mt-2">
                                    <input className="form-check-input" type="radio" name="reenrollment" id="onlyOnce" defaultChecked />
                                    <label className="form-check-label" htmlFor="onlyOnce">Only once</label>
                                </div>
                                <div className="form-check mt-2 d-flex gap-2">
                                    <input className="form-check-input" type="radio" name="reenrollment" id="onlyOnce" defaultChecked />
                                    <label className="form-check-label" htmlFor="onlyOnce">Once Every </label>
                                    <input type="number" className="form-control bg-light border-black mt-1" placeholder="10" />
                                    <input type="number" className="form-control bg-light border-black mt-1" placeholder="10" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Save workflow
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default WorkflowUI;