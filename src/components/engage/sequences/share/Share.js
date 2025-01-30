import React from "react";
import { Modal, Button } from "react-bootstrap";

const Share = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Share</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <label for="exampleFormControlInput1" className="form-label">
              Visibility
            </label>
            <select
              className="form-control"
              aria-label="Default select example"
            >
              <option selected>Open this select Visibility</option>
              <option value={1}>Restricted</option>
              <option value={2}>Gmail</option>
            </select>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Share</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Share;
