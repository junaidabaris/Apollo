import React, { useState } from 'react'
import GeneralBusiness from './GeneralBusiness'
import PaymentRun from './PaymentRun'

const BusinessPa = () => {
    const [tab , setTab] = useState(0)
    const tabHandle = (num) =>{
        setTab (num)
    }
    return (
        <div className=' row m-4'>
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption p-1 d-flex align-items-center justify-content-between">
                                <h4 className="heading mb-0 p-2">Business Patner Master Data</h4>
                            </div>
                            <div className='row mt-2'>
                                <div className='col-4'>
                                    <label className='form-label mt-2'>Code</label>
                                    <input className='form-control rounded' type='text' />
                                </div>
                                <div className='col-4'>
                                    <label className='form-label mt-2'>Currency</label>
                                    <select className='form-select shadow'>
                                        <option></option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>Name</label>
                                <input className='form-control rounded' type='text' />
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>Foreign Name</label>
                                <input className='form-control rounded' type='text' />
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>order</label>
                                <input className='form-control rounded' type='number' />
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>Group</label>
                                    <select className='form-select shadow'>
                                        <option></option>
                                    </select>
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>Oppertunities</label>
                                <input className='form-control rounded' type='number' />
                                </div>
                                <div className='col-4'>
                                <label className='form-label mt-2'>Federal tax Id</label>
                                <input className='form-control rounded' type='number' />
                                </div>
                                <div className='col-4'></div>
                                <div className='col-4'></div>
                            </div>
                            <div className='d-flex gap-2 mt-3'>
                                <button className={tab === 0 ? "btn-light m-0 btn" : "btn btn-outline-light m-0 btn"} onClick={()=>tabHandle(0)}>General</button>
                                <button className={tab === 1 ? "btn-light m-0 btn" : "btn btn-outline-light m-0 btn"} onClick={()=>tabHandle(1)}>Payment Terns</button>
                                <button className={tab === 2 ? "btn-light m-0 btn" : "btn btn-outline-light m-0 btn"} onClick={()=>tabHandle(2)}>Payment Run</button>
                            </div>

                            <div className={tab === 0 ? "d-block" : "d-none"}>
                                <GeneralBusiness />
                            </div>
                            <div className={tab === 2 ? "d-block" : "d-none"}>
                                <PaymentRun />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusinessPa