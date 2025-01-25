import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"


const EmailAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Email",
        title_2: 'Email Add',
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
                                <h4 className="heading mb-0 p-2">Email Template</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Name"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Tags</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Tags</option>
                                            <option value={1}>Tag1</option>
                                            <option value={2}>Tag2</option>
                                        </select>

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Owner:</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Owner</option>
                                            <option value={1}>Name</option>

                                        </select>

                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Subject:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Subject"
                                        // value={filterInitial?.end_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Body:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Body"
                                        // value={filterInitial?.end_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 text-center mt-4">
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

export default EmailAdd