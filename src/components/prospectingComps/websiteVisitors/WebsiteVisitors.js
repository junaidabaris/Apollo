import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import ApolloScript from './ApolloScript';
import WebsiteDomains from './WebsiteDomains';

function WebsiteVisitors() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Website Visitors",
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
                                        <h4 className="heading mb-0 p-2">Website Visitors</h4>
                                    </div>
                                    <div className="row" style={{ margin: "10px 0" }}>
                                        <div className="col-10" style={{ margin: '20px auto' }}>
                                            <ApolloScript />
                                            <WebsiteDomains />
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

export default WebsiteVisitors