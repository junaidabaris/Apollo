import React, { useState } from 'react'
import Bestsell from './Bestsell'
import Vendor from './Vendor'
import GrossProgress from './GrossProgress'
import Purchase from './Purchase'
import SaleAnalysis from './SaleAnalysis'

const PurchaseDashboardmain = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='row m-4'>
      <SaleAnalysis show={show} handleClose={handleClose}/>
      <div className='text-end'>
        <button className='btn btn-prmary' onClick={handleShow}><i class="fa-solid fa-pencil"></i></button>
      </div>
        <div className='col-6'>
            <Bestsell />
        </div>
        <div className='col-6'>
            <Vendor />
        </div>
        <div className='col-6'>
        <GrossProgress />
        </div>
        <div className='col-6'>
            <Purchase />
        </div>
    </div>
  )
}

export default PurchaseDashboardmain