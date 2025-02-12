import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddToList({show, handleClose}) {
  const [tab , setTab] = useState(0)

  const handleTab = (num)=>{
    setTab(num)
  }
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="">
      <div className="d-block p-3 w-full">
        <input type="text" className="form-control mb-2" placeholder="Search..." />

        <ul className="d-flex p-0 m-0 border-b">
          <li className={tab === 0 ? "border-b border-3" : ""} onClick={()=>handleTab(0)}>
            <a className="p-2 text-black d-block text-decoration-none" href="#">All lists</a>
          </li>
          <li className={tab === 1 ? "border-b border-3" : ""} onClick={()=>handleTab(1)}>
            <a className="p-2 text-black d-block text-decoration-none" href="#">My lists</a>
          </li>
          <li className={tab === 2 ? "border-b border-3" : ""} onClick={()=>handleTab(2)}>
            <a className="p-2 text-black d-block text-decoration-none" href="#">Team lists</a>
          </li>
        </ul>

        <div className="text-center p-3">
          <img
            src=""
            alt="No lists"
            className="img-fluid"
          />
          <p className="mt-2 fw-bold">No lists created</p>
          <p className="text-muted small">
            Better organize contacts and accounts in your target market.
            <a href="#"> Learn more about lists.</a>
          </p>
        </div>
      </div>
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          Add to list
          </Button>
          <Button variant="primary" onClick={handleClose}>Create new list</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToList ;