
import { SalespersonFilter } from "./salespersonFilter/SalespersonFilter"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import SelectedConmany from "./salespersonFilter/SelectedConmany";
import { useState } from "react";
const ListsComps = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Company",
    };

    const [isChecked , setIsChecked] = useState(false) 

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SalespersonFilter />
            {isChecked &&<SelectedConmany />}
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Company</h4>

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
                                                    <th style={{ width: '50px' }}>
                                                    <input class="form-check-input" type="checkbox" />
                                                    </th>
                                                    <th style={{ width: '150px' }}>Name</th>
                                                    <th style={{ width: '150px' }}>Job Title </th>
                                                    <th style={{ width: '150px' }}>Company</th>
                                                    <th style={{ width: '150px' }}>Email</th>
                                                    <th style={{ width: '150px' }}>Phone Number</th>
                                                    <th style={{ width: '150px' }}>Links</th>
                                                    <th style={{ width: '100px' }}>Action</th>
                                                    <th style={{ width: '100px' }}>Location</th>
                                                    <th style={{ width: '100px' }}>Company</th>
                                                    <th style={{ width: '100px' }}>Company industries</th>
                                                    <th style={{ width: '100px' }}>Company. keys</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr role="row" >
                                                <td style={{ width: '50px' }}>
                                                    <input class="form-check-input" type="checkbox" 
                                                    checked={isChecked}
                                                    onClick={()=>setIsChecked(!isChecked)}
                                                    />
                                                    </td>
                                                    <td ><Link>Larry Fink</Link></td>
                                                    <td >Sales Team Leader </td>
                                                    <td > <img /> BlackRock</td>
                                                    <td >
                                                        <button className="btn btn-outline-secondary p-1 text-black"><i class="fa-regular fa-envelope"></i> Access Email</button>
                                                    </td>
                                                    <td ><button className="btn btn-outline-secondary p-1 text-black"><i class="fa-solid fa-phone"></i> Access Phone</button></td>
                                                    <td ><i class="fa-brands fa-linkedin-in"></i></td>
                                                    <td >
                                                        <div className="d-flex gap-1">
                                                            <button className="btn m-0 btn-outline-secondary p-1 text-black"><i class="fa-regular fa-square-plus"></i></button>
                                                            <button className="btn m-0 btn-outline-secondary p-1 text-black"><i class="fa-regular fa-paper-plane"></i></button>
                                                            <button className="btn m-0 btn-outline-secondary p-1 text-black"><i class="fa-solid fa-eye"></i></button>
                                                            <button className="btn m-0 btn-outline-secondary p-1 text-black"><i class="fa-solid fa-ellipsis"></i></button>
                                                        </div>
                                                    </td>
                                                    <td >Limeira, Brazil</td>
                                                    <td >3.4k</td>
                                                    <td >Food & Beverages</td>
                                                    <td >N/A</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <div className="dataTables_info" role="status" aria-live="polite">
                                            Total 0 entries
                                        </div>
                                        <div className="dataTables_paginate paging_simple_numbers">
                                            <Pagination
                                                defaultCurrent={1}
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
            </div>
            {/* <ToastContainer className="text-center" /> */}
        </>

    )
}

export default ListsComps