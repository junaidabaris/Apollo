import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaymentRun = () => {
    return (
        <div className='row mt-4'>
            <div className="col-xl-12">
                <div className="table-responsive active-projects style-1">
                    <div className="tbl-caption p-1 d-flex align-items-center justify-content-between">
                        <h4 className="heading mb-0 p-2">House Bank</h4>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Country/Region</label>
                            <select className='form-select shadow'>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Bank</label>
                            <select className='form-select shadow'>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Account</label>
                            <select className='form-select shadow'>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Branch</label>
                            <input className='form-control rounded' type='text' />
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>IBAN</label>
                            <select className='form-select shadow'>
                                <option></option>
                            </select>
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>BIC/SWIFT Code</label>
                            <input className='form-control rounded' type='text' />
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Contact No.</label>
                            <input className='form-control rounded' type='text' />
                        </div>
                        <div className='col-4 d-flex mt-2 gap-2 align-items-center'>
                            <input className='form-input-checkbox rounded' type='checkbox' />
                            <label className='form-label'>Payment Block</label>
                        </div>
                        <div className='col-4 d-flex mt-2 gap-2 align-items-center'>
                            <input className='form-input-checkbox rounded' type='checkbox' />
                            <label className='form-label'>Single Payment</label>
                        </div>
                        <div className='col-4'>
                            <label className='form-label mt-2'>Bank Charges Alication code</label>
                            <select className='form-select shadow'>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="table-responsive active-projects mt-4 style-1">
                <div className="tbl-caption p-1 d-flex align-items-center justify-content-between">
                        <h4 className="heading mb-0 p-2">Payment Methods</h4>
                    </div>
                            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th style={{ width: '50px' }}>#</th>
                                            <th style={{ width: '50px' }}>Code</th>
                                            <th style={{ width: '150px' }}>Description</th>
                                            <th style={{ width: '150px' }}>InClude</th>
                                            <th style={{ width: '150px' }}>Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Outgoing BT</td>
                                            <td>Outgoing Bank transfer from BNY</td>
                                            <td><input type='checkbox'/></td>
                                            <td><input type='checkbox'/></td>
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
    )
}

export default PaymentRun