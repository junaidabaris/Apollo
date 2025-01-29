
import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'

const PersonasAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Ideal customer profile",
        title_2: 'Create Persona',
        path_2: ``
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0 p-2">Create Persona</h4>
                            </div>
                            <form className="p-4">
                                <div className="row">
                                    {/* Persona Name */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="personaName" className="form-label">
                                            Persona Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="personaName"
                                            placeholder="e.g. Marketing Leaders"
                                        />
                                    </div>

                                    {/* Job Titles */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="jobTitles" className="form-label">
                                            Job Titles
                                        </label>
                                        <select className="form-control" id="jobTitles">
                                            <option value="">Select Job Titles</option>
                                            <option value="Marketing Manager">Marketing Manager</option>
                                            <option value="Sales Leader">Sales Leader</option>
                                        </select>
                                    </div>

                                    {/* Industry & Keywords */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="industryKeywords" className="form-label">
                                            Industry & Keywords
                                        </label>
                                        <select className="form-control" id="industryKeywords">
                                            <option value="">Select Industries</option>
                                            <option value="E-commerce">E-commerce</option>
                                            <option value="Fintech">Fintech</option>
                                        </select>
                                    </div>

                                    {/* Company Keywords */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="companyKeywords" className="form-label">
                                            Company Keywords
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="companyKeywords"
                                            placeholder="Enter keywords"
                                        />
                                    </div>

                                    {/* Location */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="location" className="form-label">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="location"
                                            placeholder="Enter location"
                                        />
                                    </div>

                                    {/* # Employees */}
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="employees" className="form-label">
                                            # Employees
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="employees"
                                            placeholder="Enter number of employees"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="submit" className="btn btn-primary mt-3">
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

export default PersonasAdd