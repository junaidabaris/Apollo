import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Clone = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Clone Sequence</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-12">
                        <label for="exampleFormControlInput1" class="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                        // value={filterInitial?.end_date}
                        // name="start_date"
                        // onChange={handleChange}
                        />
                    </div>
                    <div className="col-lg-12">
                        <label for="exampleFormControlInput1" class="form-label">Schedule:</label>
                        <select className="form-control" aria-label="Default select example">
                            <option selected>Open this select Schedule</option>
                            <option value={1}>Normal Business</option>

                        </select>
                    </div>
                    <div className="col-lg-12">
                        <p><strong>Monday:</strong> 8 AM – 5 PM</p>
                        <p><strong>Tuesday:</strong> 8 AM – 5 PM</p>
                        <p><strong>Wednesday:</strong> 8 AM – 5 PM</p>
                        <p><strong>Thursday:</strong> 8 AM – 5 PM</p>
                        <p><strong>Friday:</strong> 8 AM – 5 PM</p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary">
                    Clone
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Clone