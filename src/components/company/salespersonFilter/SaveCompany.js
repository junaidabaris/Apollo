import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SaveCompany({ show, handleClose }) {


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Save Accounts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <form>
                    <div className='row'>
                        <div className='col-12'>
                            <label className='form-label'>Owner:</label>
                            <select className='form-select shadow'>
                                <option>Abais</option>
                            </select>
                        </div>
                        <div className='col-12 mt-3  fs-6'>
                            <p className='m-0 text-start'> <input className="form-check-input" type='checkbox'/> <span className='fw-bold'> Also update the owner of any EXISTING </span> Accounts in your current selection</p>
                            <p className='m-0 text-start'> If left unchecked, Apollo will assign the owner to any Net New companies in your current selection, but it will not overwrite that of existing Accounts. If checked, this will OVERWRITE the ownership for any existing Accounts in your current selection.</p>
                        </div>
                        <div className='col-12 mt-5'>
                            <label className='form-label'>Lists: (Optional)</label>
                            <input className='form-control'/>
                        </div>
                    </div>
                   </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Save Accounts
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SaveCompany;