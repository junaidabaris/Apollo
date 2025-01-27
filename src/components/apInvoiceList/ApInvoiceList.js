import React from 'react'
import ApInvoiceLForm from './ApInvoiceLForm'
import ApInvoiceLTable from './ApInvoiceLTable'


const ApInvoiceList = () => {
  return (
    <div className='card m-2'>
      <div className='d-flex aling-items-center justify-content-between bg-black p-2'>
        <h4 className='text-white fs-4'>A/P Invoice</h4>
      </div>
      <ApInvoiceLForm />
      <ApInvoiceLTable />

    </div>
  )
}

export default ApInvoiceList