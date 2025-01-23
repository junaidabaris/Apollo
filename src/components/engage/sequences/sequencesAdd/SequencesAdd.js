import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


const SequencesAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Engage",
        title_2: 'Sequences Add',
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
                                <h4 className="heading mb-0 p-2">Sequences Create</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Pused</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Pused"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Bounced</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Bounced"
                                        // value={filterInitial?.end_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Spam Bl</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Bounced"
                                        // value={filterInitial?.end_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Scheduled</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            placeholder="Enter Scheduled"
                                        // value={filterInitial?.end_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Status</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select Status</option>
                                            <option value={1}>Active</option>
                                            <option value={2}>InActive</option>
                                        </select>

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

export default SequencesAdd