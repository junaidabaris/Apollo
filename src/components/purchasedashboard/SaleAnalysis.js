import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SaleAnalysis({ show, handleClose }) {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                size="sm"
                style={{ width: "800px", margin: "auto", left: "0", right: "0" }}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sales Analysiis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Annu Report</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Invoice</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Invoice Display</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Total by Customer</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Monthly Report</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Order</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Group Display</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Tatal by Blanket Agreement</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Tatal by Blanket Agreement</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Quarterly Report</label>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex gap-2 align-items-center'>
                                <input type='radio' />
                                <label className='form-label m-0 fs-6 fw-normal'>Delivery Note</label>
                            </div>
                        </div>
                        <div className='row gap-2 align-items-center mt-2'>
                            <div className='col-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <input type='checkbox' />
                                    <label className='form-label m-0 fs-6 fw-normal'>Posting Date</label>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label  m-0'>Form Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label m-0'>To Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <input type='checkbox' />
                                    <label className='form-label m-0 fs-6 fw-normal'>Due Date</label>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label  m-0'>Form Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label m-0'>To Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <input type='checkbox' />
                                    <label className='form-label m-0 fs-6 fw-normal'>Document Data</label>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label  m-0'>Form Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <label className='form-label m-0'>To Date</label>
                                    <input className='form-control rounded' type='date' />
                                </div>
                            </div>
                        </div>
                        <hr className='my-3' />
                        <h1 className='fs-5'>Main selection</h1>
                        <div className='row'>
                            <div className='col-4'>
                                <label className='form-label mt-2'>Code</label>
                                <input className='form-control rounded' type='text' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label mt-2'>To</label>
                                <input className='form-control rounded' type='date' />
                            </div>
                            <div className='col-4'>
                                <label className='form-label mt-2'>Group</label>
                                <select className='form-select'>
                                    <option></option>
                                </select>
                            </div>
                            <div className='col-4'>
                                <label className='form-label mt-2'>Properties</label>
                                <input className='form-control rounded' type='text' />
                            </div>
                            <div className='col-12'>
                                <div className='d-flex gap-2 mt-2 align-items-center'>
                                    <input type='checkbox' />
                                    <label className='form-label m-0 fs-6 fw-normal'>Due Date</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancle
                    </Button>
                    <Button variant="primary">Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SaleAnalysis;