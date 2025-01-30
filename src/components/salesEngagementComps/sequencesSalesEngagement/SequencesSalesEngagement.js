import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Tabs, Tab } from 'react-bootstrap';
import SequenceAlertTab from './SequenceAlertTab';
import PrioritySettingTab from './PrioritySettingTab';
import ScedulesTab from './ScedulesTab';
import BestTimeTab from './BestTimeTab';

function SequencesSalesEngagement() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Sequences",
    };



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Sequences</h4>
                                    </div>
                                    <div className="row" style={{ margin: "10px 0" }}>


                                        <div className="col-xl-12">
                                            <Tabs defaultActiveKey="Sequence Alerts" id="uncontrolled-tab-example" className='pt-3 dzm-tabs'>
                                                <Tab eventKey="Sequence Alerts" title="Sequence Alerts" className='p-1'>
                                                    <SequenceAlertTab />
                                                </Tab>
                                                <Tab eventKey="Priority Settings" title="Priority Settings" className='p-1'>
                                                    <PrioritySettingTab />
                                                </Tab>
                                                <Tab eventKey="Schedules" title="Schedules" className='p-1'>
                                                    <ScedulesTab />
                                                </Tab>
                                                <Tab eventKey="Best Times" title="Best Times" className='p-1'>
                                                    <BestTimeTab />
                                                </Tab>
                                            </Tabs>
                                        </div>

                                        {/* <div className="col-10" style={{ margin: '20px auto' }}>


                                            <div className="card">
                                                hello
                                            </div>



                                        </div> */}
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

export default SequencesSalesEngagement