import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Button from 'react-bootstrap/Button';

function WebsiteDomains() {
    const [lgShow, setLgShow] = useState(false);

    const [rows, setRows] = useState([
        { BasePrice: "", TaxPrice: "", TotalPrice: "", Currency_id: "" },
    ]);
    const handleAddRow = () => {
        setRows([...rows, { BasePrice: "", TaxPrice: "", TotalPrice: "", Currency_id: "" }]);
    };
    const handleRemoveRow = (index) => {
        const updatedRows = rows.filter((_, i) => i !== index);
        setRows(updatedRows);
    };
    const handleRowsChange = (index, field, value) => {
        const updatedRows = rows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setRows(updatedRows);
    };

    return (
        <>
            <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h5>Website Domains</h5>
                    <div>
                        <button className='btn btn-secondary' type='button'>Test Connection</button>
                        <button className='btn btn-primary' type='button' onClick={() => setLgShow(true)}><FaPlus style={{ marginBottom: '2px' }} /> Add Domain</button>
                    </div>
                </div>
                <hr />
                <div className="form-check">
                    <p style={{ textAlign: 'left' }}>Powered by Apollo’s proprietary IP matching algorithm that reveals the identities of organizations that visit your website and provides visualized analytics.</p>
                </div>
            </div>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add New Domain
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h5>Type or paste the URL of the website you’d like to connect to</h5>
                        <div className='row mt-4 mb-2'>
                            <div className="col-lg-12 mb-4">
                                <label htmlFor="Level" className="form-label">
                                    Enter URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="https//:yourdomain.com"
                                />
                            </div>

                            <div className="col-lg-12 mb-4 mt-5">
                                <h6 style={{ color: '#146EF6' }}>Advanced Internet Settings</h6>
                                <p style={{ textAlign: "left" }}>Which pages on your site send the strongest intent signals? Flag these as High, Medium or Low by adding exact URLs or rules.</p>
                            </div>

                            <div className='col-lg-12'>
                                <button type='button' onClick={handleAddRow} className='btn btn-primary float-end me-0'><FaPlus style={{ marginBottom: '2px' }} /> Add New</button>
                            </div>

                            <div className="col-lg-12 mb-4">
                                {rows.map((row, index) => (
                                    <div className="row align-items-center" key={index}>
                                        <div className="col-lg-3 mb-4">
                                            <label htmlFor={`BasePrice-${index}`} className="form-label">
                                                Condition
                                            </label>
                                            <input
                                                disabled
                                                type="text"
                                                name={`BasePrice-${index}`}
                                                className="form-control"
                                                placeholder="Enter Condition"
                                                value={row.BasePrice}
                                                onChange={(e) => handleRowsChange(index, "BasePrice", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-3 mb-4">
                                            <label htmlFor={`TaxPrice-${index}`} className="form-label">
                                                Page URL
                                            </label>
                                            <input
                                                type="text"
                                                name={`TaxPrice-${index}`}
                                                className="form-control"
                                                placeholder="Enter Page URL"
                                                value={row.TaxPrice}
                                                onChange={(e) => handleRowsChange(index, "TaxPrice", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-3 mb-4">
                                            <label htmlFor={`TotalPrice-${index}`} className="form-label">
                                                Label
                                            </label>
                                            <input
                                                type="text"
                                                name={`TotalPrice-${index}`}
                                                className="form-control"
                                                placeholder="Enter Label"
                                                value={row.TotalPrice}
                                                onChange={(e) => handleRowsChange(index, "TotalPrice", e.target.value)}
                                            />
                                        </div>

                                        <div className="col-lg-2 mb-4">
                                            <label htmlFor={`Currency_id-${index}`} className="form-label">
                                                Intent
                                            </label>
                                            <select
                                                className="form-select form-control"
                                                name={`Currency_id-${index}`}
                                                value={row.Currency_id}
                                                onChange={(e) => handleRowsChange(index, "Currency_id", e.target.value)}
                                            >
                                                <option value="">Select Intent</option>
                                                <option value={"Low"}>Low</option>
                                                <option value={"Mid"}>Mid</option>
                                                <option value={"High"}>High</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-1 mt-2">
                                            {rows.length > 1 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => handleRemoveRow(index)}
                                                >
                                                    <MdDeleteForever />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default WebsiteDomains