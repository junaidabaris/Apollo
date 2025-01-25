import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Sequence(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add to Sequence
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {/* Sequence Dropdown */}
                    <Form.Group className="mb-3">
                        <Form.Label>Sequence</Form.Label>
                        <Form.Select>
                            <option>Select sequence...</option>
                            {/* Add other options as needed */}
                        </Form.Select>
                    </Form.Group>

                    {/* Send Emails From Section */}
                    <Form.Group className="mb-3">
                        <Form.Label>Send Emails From:</Form.Label>
                        <div className="d-flex align-items-center">
                            <Form.Check 
                                type="switch" 
                                id="rotate-mailboxes-switch" 
                                label="Rotate mailboxes" 
                                className="me-3"
                            />
                            <Form.Select>
                                <option>Select email...</option>
                                {/* Add other options as needed */}
                            </Form.Select>
                        </div>
                    </Form.Group>

                    {/* Skip Contacts Validation */}
                    <Form.Group className="mb-3">
                        <Form.Check 
                            type="checkbox" 
                            id="skip-contacts-validation" 
                            label="Skip Contacts Validation" 
                        />
                        <div className="alert alert-warning mt-2" role="alert">
                            Note that adding contacts without verification can speed up the process, but may impact email deliverability and performance. Additionally, without permission to add contacts, the final added total will differ from the selected total.
                        </div>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="outline-primary">
                    Schedule
                </Button>
                <Button variant="primary">
                    Add 0 contacts
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Sequence;
