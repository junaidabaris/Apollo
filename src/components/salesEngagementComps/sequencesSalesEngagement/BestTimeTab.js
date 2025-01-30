import React, { useState } from 'react';
import Select from "react-select";
import { GrDownload } from "react-icons/gr";

function BestTimeTab() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = [
        { value: "ABC User", label: "ABC User" },
        { value: "DEF User", label: "DEF User" },
        { value: "GHI User", label: "GHI User" },
    ];
    const handleChange = (selected) => {
        setSelectedOptions(selected);
    };
    const [selectedOptions1, setSelectedOptions1] = useState([]);
    const options1 = [
        { value: "ABC Sequence", label: "ABC Sequence" },
        { value: "DEF Sequence", label: "DEF Sequence" },
        { value: "GHI Sequence", label: "GHI Sequence" },
    ];
    const handleChange1 = (selected) => {
        setSelectedOptions1(selected);
    };

    return (
        <>
            <div className='row mt-5'>

                <div className='col-lg-3'>
                    <div className="card">
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <label htmlFor="direct_member" className="form-label">
                                        From Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter Date"
                                    />
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <label htmlFor="direct_member" className="form-label">
                                        To Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter Date"
                                    />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="plan_id" className="form-label">
                                        Select Date Range
                                    </label>
                                    <select className="form-select form-control" aria-label="Default select example" name="plan_id">
                                        <option selected>Select Date Range</option>
                                        <option value={"Default"}>Default</option>
                                        <option value={"Today"}>Today</option>
                                        <option value={"Yesterday"}>Yesterday</option>
                                        <option value={"This Week"}>This Week</option>
                                        <option value={"Next Week"}>Next Week</option>
                                        <option value={"Last Week"}>Last Week</option>
                                        <option value={"This Month"}>This Month</option>
                                        <option value={"Last Month"}>Last Month</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="plan_id" className="form-label">
                                        Select Users
                                    </label>
                                    <Select
                                        options={options}
                                        isMulti
                                        value={selectedOptions}
                                        onChange={handleChange}
                                        placeholder="Select Users"
                                    />
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="plan_id" className="form-label">
                                        Select Sequences
                                    </label>
                                    <Select
                                        options={options1}
                                        isMulti
                                        value={selectedOptions1}
                                        onChange={handleChange1}
                                        placeholder="Select Sequences"
                                    />
                                </div>


                            </div>
                        </form>

                    </div>
                </div>

                <div className='col-lg-9'>

                    <div className="card mb-2">
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-lg-12 mb-4">
                                    <label htmlFor="direct_member" className="form-label">
                                        Discard data if total number of emails or calls is under
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Discard data if total number of emails or calls is under"
                                    />
                                    <small>If there is only one email delivered, you may not care about its reply rate or open rate. In such case, there is too little data to make an informed decision.</small>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="card mb-2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h5>Best Email Times</h5>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <select style={{ boxShadow: 'none' }} className="form-select form-control" aria-label="Default select example" name="plan_id">
                                        <option selected>Select</option>
                                        <option value={"Default"}>Default</option>
                                        <option value={"Today"}>Today</option>
                                        <option value={"Yesterday"}>Yesterday</option>
                                        <option value={"This Week"}>This Week</option>
                                        <option value={"Next Week"}>Next Week</option>
                                        <option value={"Last Week"}>Last Week</option>
                                        <option value={"This Month"}>This Month</option>
                                        <option value={"Last Month"}>Last Month</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: '10px', color: 'white', backgroundColor: '#148ae7', padding: '8px 10px', borderRadius: '5px' }}>
                                    <GrDownload />
                                </div>

                            </div>
                        </div>
                        <hr />

                        <div>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>12 AM</th>
                                        <th>4 AM</th>
                                        <th>6 AM</th>
                                        <th>8 AM</th>
                                        <th>10 AM</th>
                                        <th>12 PM</th>
                                        <th>2 PM</th>
                                        <th>4 PM</th>
                                        <th>6 PM</th>
                                        <th>8 PM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <div className="card mb-2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h5>Best Call Times</h5>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div>
                                    <select style={{ boxShadow: 'none' }} className="form-select form-control" aria-label="Default select example" name="plan_id">
                                        <option selected>Select</option>
                                        <option value={"Answer"}>Answer</option>
                                        <option value={"Rate"}>Rate</option>
                                    </select>
                                </div>
                                <div style={{ marginLeft: '10px', color: 'white', backgroundColor: '#148ae7', padding: '8px 10px', borderRadius: '5px' }}>
                                    <GrDownload />
                                </div>

                            </div>
                        </div>
                        <hr />

                        <div>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>12 AM</th>
                                        <th>4 AM</th>
                                        <th>6 AM</th>
                                        <th>8 AM</th>
                                        <th>10 AM</th>
                                        <th>12 PM</th>
                                        <th>2 PM</th>
                                        <th>4 PM</th>
                                        <th>6 PM</th>
                                        <th>8 PM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BestTimeTab