import React from 'react';
import { FaPlus } from "react-icons/fa6";

function SequenceAlertTab() {
    return (
        <>
            <div className="card mt-5">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h5>Threshold Settings For Sequence Alerts</h5>
                    <div>
                        <button className='btn btn-secondary' type='button'>Reset To default</button>
                        <button className='btn btn-primary' type='button'> Save</button>
                    </div>
                </div>
                <hr />
                <div className="form-check">
                    <p style={{ textAlign: 'left' }}>Apollo triggers alerts every time a sequence thread (with a minimum of 200 sent emails) performs below the specified threshold. The default values below are based on the global averages for top performing Apollo users. You can edit the threshold values according to your team’s goals.</p>
                </div>

                <div className='row mt-3'>
                    <div className="col-lg-4 mb-4">
                        <label htmlFor="Level" className="form-label">
                            Benchmark Open Rate (%)
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Benchmark Open Rate (%)"
                        />
                        <small>Recommended target rate: 20%</small>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <label htmlFor="Level" className="form-label">
                            Benchmark Reply Rate (%)
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Benchmark Reply Rate (%)"
                        />
                        <small>Recommended target rate: 1%</small>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <label htmlFor="Level" className="form-label">
                            Benchmark Interested Rate (%)
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Benchmark Interested Rate (%)"
                        />
                        <small>Recommended target rate: 0.3%</small>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SequenceAlertTab