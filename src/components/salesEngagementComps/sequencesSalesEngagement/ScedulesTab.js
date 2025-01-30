import React, { useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { Pagination } from 'antd';

function ScedulesTab() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <div className="row mt-5">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0 p-2">All Schedules List</h4>
                                    <div>
                                        <button
                                            onClick={() => setLgShow(true)}
                                            style={{ textTransform: 'uppercase' }}
                                            className="btn btn-primary btn-sm bg-primary"
                                            role="button"
                                            type="button"
                                        >
                                            <GoPlus className="me-1" style={{ marginBottom: '2px' }} />
                                            New Schedule
                                        </button>
                                    </div>
                                </div>
                                <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="banner-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px', textAlign: 'center' }}>#</th>
                                                <th style={{ width: '150px', textAlign: 'center' }}>Normal Business Hours (Default)</th>
                                                <th style={{ width: '150px', textAlign: 'center' }}>Mon,Tue,Wed,Thu,Fri</th>
                                                <th style={{ width: '150px', textAlign: 'center' }}>Time</th>
                                                <th style={{ width: '150px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr role="row">
                                                <td valign="top" className="dataTables_empty">1</td>
                                                <td valign="top" className="dataTables_empty" >Morning</td>
                                                <td valign="top" className="dataTables_empty" >----</td>
                                                <td valign="top" className="dataTables_empty" >Pacific Time</td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/scheduletab/edit/:1`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                            <i className="fa fa-pencil" />
                                                        </Link>
                                                        {/* <Popconfirm
                                                            title="Delete Amendments Type!"
                                                            description="Are you sure to delete?"
                                                            onConfirm={() => confirm(item?._id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                <i className="fa fa-trash" />
                                                            </Link>
                                                        </Popconfirm> */}
                                                    </div>
                                                </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" role="status" aria-live="polite">
                                        Total 0 entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers">
                                        <Pagination
                                        // defaultCurrent={1}
                                        // onChange={onChangeVal}
                                        // total={totalCount}
                                        />
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
                    <Modal.Title>New Schedule</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="tbl-captionn" >
                        <div className="row mt-2 p-2">
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
                                        <input className="form-check-input" style={{ border: "1px solid black" }} type="checkbox" defaultValue id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Skip the following national holidays: Labor Day, Independence Day, Memorial Day, Thanksgiving, Christmas Eve, Christmas, New Year's Day
                                        </label>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setLgShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setLgShow(false)}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    )
}

export default ScedulesTab