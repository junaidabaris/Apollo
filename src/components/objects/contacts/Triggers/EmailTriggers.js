import React from "react";
function EmailTriggers() {

    return (
        <div>
            <div className="table-responsive active-projects style-1">
                <div className="tbl-caption d-flex justify-content-between align-items-center">
                    <h4 className="heading mb-0 p-2">Email Triggers</h4>
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
                                <td>Prospect created</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Email delivered</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Email bounced</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Spam blocked </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Prospect unsubscribed </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Prospect replied </td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Appointment or email marked as interested</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Unresponsive X days after sequence last step (X configurable in each sequence)</td>
                                <td>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Select</option>
                                        <option value="1">Cold</option>
                                        <option value="2">Not Interested</option>
                                        <option value="2">Unresponsive</option>
                                        <option value="2">Replied</option>
                                        <option value="2">Approaching</option>
                                        <option value="2">Changed Job</option>
                                        <option value="2">Interested</option>
                                        <option value="2">Do Not Contact</option>
                                        <option value="2">Bad Data</option>
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
