
import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';

const SignalsAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Ideal customer profile",
        title_2: 'Create Signals',
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
                                <h4 className="heading mb-0 p-2">Create Signals</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Target type</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Target type</option>
                                            <option value={1}>People</option>
                                            <option value={2}>Companies</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Signal name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Signal name "
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Signal group</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Target type</option>
                                            <option value={1}>One</option>
                                            <option value={2}>Two</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Signal description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Signal description"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>


                                    <div className="col-xl-12 text-center mt-4">
                                        <button type="button" className="btn btn-primary mt-3">
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

export default SignalsAdd