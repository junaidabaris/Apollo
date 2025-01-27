import React from 'react'
import ProjectServerForm from './ProjectServerForm'
import ProjectServerTable from './ProjectServerTable'

const ProjectServerPrinters = () => {
  return (
    <div className='card m-2'>
    <div className="d-flex aling-items-center justify-content-between bg-black p-2">
        <h4 className="text-white fs-4">
          Project - Server and Printers installation
        </h4>
      </div>
        <ProjectServerForm />
        <ProjectServerTable />
    </div>
  )
}

export default ProjectServerPrinters