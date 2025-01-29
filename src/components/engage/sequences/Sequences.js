import { Pagination } from "antd";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { Link } from "react-router-dom";
import SequencesFilter from "./sequencesFilter/SequencesFilter";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import Share from "./share/Share";
import { Button } from "react-bootstrap";
import Archive from "./archive/Archive";
import Clone from "./clone/Clone";

const Sequences = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Engage",
        title_2: 'Sequences',
        path_2: ``
    };
    const [modalShow, setModalShow] = useState(false);
    const [modalShowAchicve, setModalShowAchicve] = useState(false);
    const [modalShowClone, setModalShowClone] = useState(false);
    const [open, setOpen] = useState(false)
    const openTogle = () => {
        setOpen(!open)
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SequencesFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Sequences</h4>
                                        <Link to='/sequences-add' className="btn btn-primary">Create Sequences</Link>
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
                                                    <th style={{ width: '150px' }}>Sequences</th>
                                                    <th style={{ width: '150px' }}>Created by</th>
                                                    <th style={{ width: '150px' }}>Active</th>
                                                    <th style={{ width: '150px' }}>Pused</th>
                                                    <th style={{ width: '150px' }}>Not Sent</th>
                                                    <th style={{ width: '150px' }}>Bounced</th>
                                                    <th style={{ width: '150px' }}>Spam Bl</th>
                                                    <th style={{ width: '150px' }}>Finished</th>
                                                    <th style={{ width: '150px' }}>Scheduled</th>
                                                    <th style={{ width: '150px' }}>Delivered</th>
                                                    <th style={{ width: '150px' }}>Reply</th>
                                                    <th style={{ width: '150px' }}>Intrested</th>
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
                                                    <td className="position-set">
                                                        <BsThreeDotsVertical onClick={openTogle} />
                                                        {open && (
                                                            <div className="box-open-ser">
                                                                <div className="link-set-set" >
                                                                    <Link to='#' onClick={() => setModalShow(true)}>Share</Link>

                                                                </div>
                                                                <div className="link-set-set">
                                                                    <Link to='#' onClick={() => setModalShowAchicve(true)}>Archive</Link>
                                                                </div>
                                                                <div className="link-set-set">
                                                                    <Link to='' onClick={() => setModalShowClone(true)}>Clone</Link>
                                                                </div >
                                                                <div className="link-set-set">
                                                                    <Link to='/sequences-edit/212'>Edit</Link>
                                                                </div>
                                                            </div>
                                                        )}

                                                    </td>
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
                    <div
                      className="dataTables_info"
                      role="status"
                      aria-live="polite"
                    >
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
        <Share show={modalShow} onHide={() => setModalShow(false)} />
        <Archive
          show={modalShowAchicve}
          onHide={() => setModalShowAchicve(false)}
        />
        <Clone show={modalShowClone} onHide={() => setModalShowClone(false)} />
      </div>
    </>
  );
};

export default Sequences;
