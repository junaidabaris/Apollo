import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaPlus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Link } from 'react-router-dom';
import { MdOutlineInfo } from "react-icons/md";

function TrackingSubdomain() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Tracking Subdomain",
    };

    const [lgShow, setLgShow] = useState(false);


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Tracking Subdomain</h4>
                                    </div>
                                    <div className="row" style={{ margin: "10px 0" }}>
                                        <div className="col-10" style={{ margin: '20px auto' }}>


                                            <div className="card">
                                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                    <h5>No Custom Tracking Subdomain Set Up</h5>
                                                    <div>
                                                        <button className='btn btn-primary' type='button' onClick={() => setLgShow(true)}><FaPlus style={{ marginBottom: '2px' }} /> Create Subdomain</button>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="form-check">
                                                    <p style={{ textAlign: 'left' }}>Custom tracking subdomains allow you to personalize your open tracking, click tracking, and unsubscribe links. It can improve your spam score by putting these services under a domain that matches your brand. Read more about custom tracking subdomains <Link to={"#"}>here</Link>. Without your own tracking subdomain, Apollo will use a URL from a rotational pool shared by all clients.</p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Set Up Subdomain
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h6>Identify how you're doing as a sender, keep your domain reputation safe and improve the delivery rates.</h6>

                        <div style={{ padding: '10px 20px', textAlign: 'center', margin: '30px 10px 20px 10px', backgroundColor: '#C7DCFC', borderRadius: '10px' }}><MdOutlineInfo style={{ fontSize: '20px', marginBottom: '2px' }} /> CNAME value: thoughtful-kale.aploconnect.com</div>
                        <div className='mt-5'>
                            <h5 className='mb-0'>Step 1</h5>
                            <p style={{ textAlign: 'left' }}>Access to your company's hosting service (e.g. AWS, GoDaddy etc) <Link to={"#"}>Learn how</Link></p>
                        </div>
                        <div className='mt-3'>
                            <h5 className='mb-0'>Step 2</h5>
                            <p style={{ textAlign: 'left' }}>Add the domain from the previous step here:</p>
                        </div>

                        <div className='row mt-4 mb-2'>
                            <div className="col-lg-12 mb-4">
                                <label htmlFor="Level" className="form-label">
                                    Domain
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="https//:yourdomain.com"
                                />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        Support Article
                    </Button>
                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        Create Subdomain
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <ToastContainer className="text-center" /> */}
        </>

    )
}

export default TrackingSubdomain