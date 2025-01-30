import React, { useState } from "react";
import Select from "react-select";
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';

function Contexts() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Contexts",
    };

    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = [
        { value: "Mobile Freindly", label: "Mobile Freindly" },
        { value: "Outlook", label: "Outlook" },
        { value: "Gmail", label: "Gmail" },
        { value: "Google Tag Manager", label: "Google Tag Manager" },
    ];
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const options1 = [
        { value: "Project Manager", label: "Project Manager" },
        { value: "Manager", label: "Manager" },
        { value: "Owner", label: "Owner" },
        { value: "Team Leader", label: "Team Leader" },
    ];
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const options2 = [
        { value: "United States", label: "United States" },
        { value: "North America", label: "North America" },
        { value: "India", label: "India" },
        { value: "Canada", label: "Canada" },
    ];



    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Context Settings</h4>
                            </div>
                            <form className="tbl-captionn" >
                                <h6 className="mt-2 mb-3">Context Settings inform what kind of info appears in Company and Person Context</h6>
                                <div className="row mt-4">

                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="amount" className="form-label">
                                            Show The Following Technologies
                                        </label>
                                        <Select
                                            options={options}
                                            isMulti
                                            value={selectedOptions}
                                            onChange={setSelectedOptions}
                                            placeholder="Select options"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="amount" className="form-label">
                                            Job Posting Titles
                                        </label>
                                        <Select
                                            options={options1}
                                            isMulti
                                            value={selectedOptions1}
                                            onChange={setSelectedOptions1}
                                            placeholder="Select options"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="amount" className="form-label">
                                            Job Posting Locations
                                        </label>
                                        <Select
                                            options={options2}
                                            isMulti
                                            value={selectedOptions2}
                                            onChange={setSelectedOptions2}
                                            placeholder="Select options"
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-4">
                                        <label htmlFor="amount" className="form-label">
                                            Show Funding Events Within The Past__Days
                                        </label>
                                        <input
                                            style={{ boxShadow: 'none' }}
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Show Funding Events Within The Past__Days"
                                        />
                                    </div>


                                    <div className="col-xl-12 text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary float-end me-0"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contexts