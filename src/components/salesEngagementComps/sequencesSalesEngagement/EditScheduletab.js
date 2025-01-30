import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditScheduletab() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <>
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2"> Level Income Master</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row mt-2">
                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="Name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="package_name" className="form-label">
                                            Time Zone
                                        </label>
                                        <select className="form-select form-control" aria-label="Default select example" name="package_name" >
                                            <option selected>Select Time Zone</option>
                                            <option value={"Percent"}>Abc</option>
                                            <option value={"Flat"}>Def</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-12 mb-4 mt-2">
                                        <div>
                                            <div className="form-check">
                                                <input className="form-check-input" style={{ border: "1px solid black" }} type="checkbox" defaultValue id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    Use the contact's local time zone instead of the schedule's time zone, if the contact contains location data.
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" style={{ border: "1px solid black" }} defaultValue id="flexCheckChecked" />
                                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                                    Skip the following national holidays: Labor Day, Independence Day, Memorial Day, Thanksgiving, Christmas Eve, Christmas, New Year's Day
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <p style={{ textAlign: 'left' }}>Sending Windows</p>
                                        <h6>Monday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <h6>Tuesday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <h6>Wednesday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <h6>Thursday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <h6>Friday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-4">
                                        <h6>Saturday:</h6>
                                        <div>
                                            <button
                                                onClick={() => setLgShow(true)}
                                                type="button"
                                                className="btn btn-primary ms-0"
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <h6>Sunday:</h6>
                                        <div>
                                            <button
                                                type="button"
                                                className="btn btn-primary ms-0"
                                                onClick={() => setLgShow(true)}
                                            >
                                                <GoPlus className="me-1" style={{ marginBottom: '2px' }} />  Add Time Block
                                            </button>
                                            <button className='btn btn-secondary' type='button'>Clear</button>
                                        </div>
                                    </div>



                                    <div className="col-xl-12 text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary float-end me-0"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger float-end me-0"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Time Block</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="tbl-captionn" >
                        <div className="row mt-2 p-2">

                            <div className="col-lg-6 mb-4">
                                <label htmlFor="package_name" className="form-label">
                                    From
                                </label>
                                <select className="form-select form-control" aria-label="Default select example" name="package_name" >
                                    <option selected>Select From</option>
                                    <option value={"1 am"}>1 am</option>
                                    <option value={"2 am"}>2 am</option>
                                    <option value={"3 am"}>3 am</option>
                                    <option value={"4 am"}>4 am</option>
                                    <option value={"5 am"}>5 am</option>
                                    <option value={"6 am"}>6 am</option>
                                    <option value={"7 am"}>7 am</option>
                                    <option value={"8 am"}>8 am</option>
                                    <option value={"9 am"}>9 am</option>
                                    <option value={"10 am"}>10 am</option>
                                    <option value={"11 am"}>11 am</option>
                                    <option value={"12 am"}>12 am</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-4">
                                <label htmlFor="package_name" className="form-label">
                                    To
                                </label>
                                <select className="form-select form-control" aria-label="Default select example" name="package_name" >
                                    <option selected>Select To</option>
                                    <option value={"1 pm"}>1 pm</option>
                                    <option value={"2 pm"}>2 pm</option>
                                    <option value={"3 pm"}>3 pm</option>
                                    <option value={"4 pm"}>4 pm</option>
                                    <option value={"5 pm"}>5 pm</option>
                                    <option value={"6 pm"}>6 pm</option>
                                    <option value={"7 pm"}>7 pm</option>
                                    <option value={"8 pm"}>8 pm</option>
                                    <option value={"9 pm"}>9 pm</option>
                                    <option value={"10 pm"}>10 pm</option>
                                    <option value={"11 pm"}>11 pm</option>
                                    <option value={"12 pm"}>12 pm</option>
                                </select>
                            </div>

                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        Add Time Block
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default EditScheduletab