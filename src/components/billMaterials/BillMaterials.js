import React from 'react'
import ProductionTable from './ProductionTable'
import BillMaterialsForm from './BillMaterialsForm'

const BillMaterials = () => {
  return (
    <div className='card m-2'>
      <div className='d-flex aling-items-center justify-content-between bg-black p-2'>
        <h4 className='text-white fs-4'>Bill of Materials</h4>
      </div>
      <BillMaterialsForm />
      <ProductionTable />
    </div>
  )
}

export default BillMaterials