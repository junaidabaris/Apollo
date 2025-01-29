import React from "react";
function EmailTriggers() {

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Triggers & Exclusions</h4>
                </div>
                <div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">When...</th>
                                <th scope="col">Change contact stage to...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>When an account is created
                                </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Current Client</option>
                                        <option value="2">Active Operrtuites</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Warn the team if they try to prospect any people from the following account stages in Prospect Searcher:
                                </td>
                                <td>
                                <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Current Client</option>
                                        <option value="2">Active Operrtuites</option>
                                    </select>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
            </div>

        </div>
    );
}

export default EmailTriggers;
