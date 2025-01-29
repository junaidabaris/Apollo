import React from 'react'
import { Pagination } from 'react-bootstrap'

const AlertsReports = () => {
    return (
        <div className=' row m-4'>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption p-1 d-flex align-items-center justify-content-between">
                                <h4 className="heading mb-0 p-2">Alerts Managerment</h4>
                            </div>
                            <div>
                                <p className='text-start fs-5 mt-3'>This window gives you an overview of system and user alerts. <br /> 
                                    You can filter the alerts through the "Alert Status" drop-down list or the "Filter Table" option in the context menu or menu bar.<br /> 
                                    You can use the "Actions" button to create new user alerts, set alerts to active or inactive, or remove alerts. You can also remove user alerts through the context menu or by following "Data" then "Remove" in the main menu. <br /> 
                                    You can view or edit details of an alert and view its associated query by choosing the arrow link next to the alert name.</p>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <label className='form-label'>Alert Status</label>
                                            <select className='form-select shadow'>
                                                <option>All</option>
                                            </select>
                                        </div>
                                        <div className='col-6'>
                                        <label className='form-label'>Find / Find Net</label>
                                           <input className='form-control rounded'/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>#</th>
                                            <th style={{ width: '50px' }}>select</th>
                                            <th style={{ width: '150px' }}>Name</th>
                                            <th style={{ width: '150px' }}>Priority</th>
                                            <th style={{ width: '150px' }}>Condition</th>
                                            <th style={{ width: '150px' }}>Condition Threshold Value</th>
                                            <th style={{ width: '150px' }}>Active</th>
                                            <th style={{ width: '150px' }}> Saved Query</th>
                                            <th style={{ width: '150px' }}>Frequency</th>
                                            <th style={{ width: '150px' }}>Recurrence Period</th>
                                            <th style={{ width: '150px' }}>Recurrence Time</th>
                                            <th style={{ width: '150px' }}>Recurrence Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-center'>1</td>
                                            <td className='text-center'><input type='checkbox'/></td>
                                            <td className='text-center'>MPR Recommnendation Due</td>
                                            <td className='text-center'>Normal</td>
                                            <td className='text-center'>Discount %</td>
                                            <td className='text-center'></td>
                                            <td className='text-center'><input type='checkbox'/></td>
                                            <td className='text-center'></td>
                                            <td className='text-center'></td>
                                            <td className='text-center'></td>
                                            <td className='text-center'></td>
                                            <td className='text-center'></td>
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
    )
}

export default AlertsReports