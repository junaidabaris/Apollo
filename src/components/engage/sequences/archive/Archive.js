import { Button, Modal } from "react-bootstrap"
import { CgDanger } from "react-icons/cg";
const Archive = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Archive</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="achive-height">
                            <div>
                                <div className="icon-set-ment">
                                    <CgDanger />
                                </div>
                                <div className="icon-set-ment">
                                    <h3>Archive sequence(s)?</h3>
                                </div>
                                <div className="icon-set-ment">
                                    <p>All contacts will be marked as finished and all scheduled emails will be deleted and cannot be recovered. Are you sure you want to archive?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button variant="primary">
                    Archive Sequence
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Archive