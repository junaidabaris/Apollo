import React from 'react'
import { Pagination } from 'react-bootstrap'

const CrmTable = () => {
  return (
    <div className="card-body m-4 p-0">
        <div className="table-responsive active-projects style-1">
            <div className="tbl-caption p-1 d-flex align-items-center justify-content-between">
                <h4 className="heading mb-0 p-2">Tour Master Sheet</h4>
            </div>
            <div id="banner-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                <table id="banner-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="banner-tblwrapper_info">
                    <thead>
                        <tr role="row">
                            <th style={{ width: '50px' }}>QUERY</th>
                            <th style={{ width: '150px' }}>DATE</th>
                            <th style={{ width: '150px' }}>FLIGHT</th>
                            <th colSpan={2} style={{ width: '150px' }}>PICK UP TIME</th>
                            <th style={{ width: '150px' }}>RETURN TIME</th>
                            <th style={{ width: '150px' }}>TOUR</th>
                            <th style={{ width: '150px' }}>GUEST</th>
                            <th style={{ width: '150px' }}>PAX</th>
                            <th style={{ width: '150px' }}>TYPE</th>
                            <th style={{ width: '150px' }}>HOTEL</th>
                            <th style={{ width: '150px' }}>DRIVER</th>
                            <th style={{ width: '150px' }}>GUIDE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td> #FIT000021</td>
                            <td> 26 Jan 2025</td>
                            <td> </td>
                            <td> 23:45 Hrs.</td>
                            <td> 23:45 Hrs</td>
                            <td> 23:45 Hrs.</td>
                            <td> Coral Island Tour By Speedboat With Indian Lunch Package</td>
                            <td> test
                            1234567890</td>
                            <td> A- 2</td>
                            <td> SIC</td>
                            <td> Nova Platinum</td>
                            <td> </td>
                            <td></td>
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
  )
}

export default CrmTable