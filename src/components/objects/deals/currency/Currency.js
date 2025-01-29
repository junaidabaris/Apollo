import React from "react";
function Currency() {
    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Company currency
                    </h4>
                </div>
                <div className="card mt-3">
                    <h5>Company currency</h5>
                    <p>Set the company currency to the currency used for reporting revenue. Changing the company currency will adjust all conversion rates accordingly.</p>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Currency</label>
                            <select className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <option>United States Dollar</option>
                                <option>United States Dollar</option>
                                <option>United States Dollar</option>
                                <option>United States Dollar</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default Currency;
