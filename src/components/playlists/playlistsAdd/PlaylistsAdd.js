
import React from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

const PlaylistsAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Playlist",
        title_2: 'Create playlist',
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
                                <h4 className="heading mb-0 p-2">Create playlist</h4>
                            </div>
                            <form className="tbl-captionn">
                                <div className="row">
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Playlist name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Playlist name"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Playlist description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Playlist description"
                                        // value={filterInitial?.start_date}
                                        // name="start_date"
                                        // onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-xl-4 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">General access</label>
                                        <select className="form-control" aria-label="Default select example">
                                            <option selected>Open this select General access</option>
                                            <option value={1}>Private</option>
                                            <option value={2}>Tag2</option>
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

export default PlaylistsAdd