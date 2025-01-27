import React from 'react'
import QueriesList from './QueriesList'
import MonthWise from './MonthWise'
import TotalSells from './TotalSells'
import TopSell from './TopSell'
import WiseStatus from './WiseStatus'
import CrmTable from './CrmTable'
import QuertySells from './QuertySells'
import TopAgentsChart from './TopAgent'
import TopSellersChart from './TopSeller'
import Task from './Task'

const CrmDahboardMain = () => {
  return (
    <div>
        <div> <QueriesList /></div>
        <div className='row p-2 mt-3'>
            <div className='col-6'>
                <TotalSells />
            </div>
            <div className='col-6'>
            <MonthWise />
            </div>
            <div className='col-6'>
            <TopSell />
            </div>
            <div className='col-6'>
            <WiseStatus />
            </div>
            <div className='col-6'>
            <QuertySells />
            </div>
            <div className='col-6'>
            <TopAgentsChart />
            <TopSellersChart />
            </div>
        </div>
        <div className='my-4'>
            <Task />
        </div>
        <div>
            <CrmTable />
        </div>
    </div>
  )
}

export default CrmDahboardMain