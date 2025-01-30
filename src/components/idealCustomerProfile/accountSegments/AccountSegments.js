
import React from 'react'
import { Pagination } from 'react-bootstrap';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import AccountSegmentsFilter from './accountSegmentsFilter/AccountSegmentsFilter';
import { Link } from 'react-router-dom';

const AccountSegments = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Ideal customer profile",
        title_2: 'Account Segment',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <AccountSegmentsFilter />
            <div className="row m-2">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0 p-2">Personas List</h4>
                                    <Link to='#' className="btn btn-primary">Create Personas</Link>
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
                                                <th style={{ width: '50px' }}>S.No</th>
                                                <th style={{ width: '150px' }}>Account Segment Name</th>
                                                <th style={{ width: '150px' }}>Account HQ Location</th>
                                                <th style={{ width: '150px' }}>Account Stage</th>
                                                <th style={{ width: '150px' }}>Employees</th>
                                                <th style={{ width: '150px' }}>Technologies</th>
                                                <th style={{ width: '150px' }}>Funding</th>
                                                <th style={{ width: '150px' }}>Account Custom Fields</th>
                                                <th style={{ width: '150px' }}>Parent Accounts</th>
                                                <th style={{ width: '150px' }}>Account Engagement</th>
                                                <th style={{ width: '150px' }}>Buying Intent</th>
                                                <th style={{ width: '150px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td>--</td>
                                            </tr>
                                            {/* {data && data?.map((item, i) => {
                                                    return <tr role="row" key={item?._id}>
                                                        <td valign="top" className="dataTables_empty">{(i + 1) + (page * count)}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.name}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.slug}</td>
                                                        <td valign="top" className="dataTables_empty" >{item?.isActive == true ? 'Active' : 'InActive'}</td>
                                                        <td>
                                                            <div className="d-flex">
                                                                <Link to={`/hotel-amendments-type-update/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                    <i className="fa fa-pencil" />
                                                                </Link>
                                                                <Popconfirm
                                                                    title="Delete Amendments Type!"
                                                                    description="Are you sure to delete?"
                                                                    onConfirm={() => confirm(item?._id)}
                                                                    // onCancel={cancel}
                                                                    okText="Yes"
                                                                    cancelText="No"
                                                                >
                                                                    <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                        <i className="fa fa-trash" />
                                                                    </Link>
                                                                </Popconfirm>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                })} */}
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
        </>
    )
}

export default AccountSegments