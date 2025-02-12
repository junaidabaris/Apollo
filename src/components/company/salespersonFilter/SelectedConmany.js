import React, { useState } from 'react'
import SaveCompany from './SaveCompany'
import AddToList from './AddToList';
import WorkflowUI from './CreateWorkFlow';

const SelectedConmany = () => {
    const [show, setShow] = useState(false);
    const [showadd, setShowadd] = useState(false);
    const [showWorkFlow, setShowWorkFlow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseadd = () => setShowadd(false);
  const handleShowadd = () => setShowadd(true);
  const handleCloseWord = () => setShowWorkFlow(false);
  const handleShowWork = () => setShowWorkFlow(true);
    return (
        <div style={{ margin: "14px" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <form className="tbl-captionn">
                            <div className="d-flex gap-2 flex-wrap justify-content-center">
                                <div>
                                    <button type='button' className='btn m-0 btn-outline-secondary'>1 Selected</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-warning' type='button' onClick={handleShow}><i class="fa-solid fa-plus"></i> Save</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary'><i class="fa-solid fa-user-plus"></i> Find Person</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary' type='button' onClick={handleShowadd}><i class="fa-solid fa-user-plus"></i> Add to list</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary' onClick={handleShowWork} type='button'>Create Workflow</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary'><i class="fa-solid fa-download"></i> Export</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary'><i class="fa-solid fa-pen"></i> Edit</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-primary'> Run AI Prompt</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary'>Pulling from</button>
                                </div>
                                <div>
                                    <button className='btn m-0 btn-outline-secondary'><i class="fa-solid fa-ellipsis"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <SaveCompany show={show} handleClose={handleClose}/>
            <AddToList  show={showadd} handleClose={handleCloseadd}/>
            <WorkflowUI show={showWorkFlow} handleClose={handleCloseWord}/>
        </div>
    )
}

export default SelectedConmany