import React from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import GDPRCompilanceTab from './configuration/GDPRCompilanceTab';
import DuplicateAccHandlingTab from './configuration/DuplicateAccHandlingTab';
import EmailSyncingtab from './configuration/EmailSyncingtab';
import MobileNumbersTab from './configuration/MobileNumbersTab';
import ExcludeAccountsStageTab from './configuration/ExcludeAccountsStageTab';
import PrimaryEmailAddressTab from './configuration/PrimaryEmailAddressTab';
import DNCScreeningTab from './configuration/DNCScreeningTab';

function Configuration() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Configuration",
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
                                        <h4 className="heading mb-0 p-2">Configuration</h4>
                                    </div>
                                    <div className="row" style={{ margin: "10px 0" }}>
                                        <div className="col-6">
                                            <GDPRCompilanceTab />
                                            <DuplicateAccHandlingTab />
                                            <EmailSyncingtab />
                                        </div>
                                        <div className="col-6">
                                            <MobileNumbersTab />
                                            <ExcludeAccountsStageTab />
                                            <PrimaryEmailAddressTab />
                                            <DNCScreeningTab />
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

export default Configuration