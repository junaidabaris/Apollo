import React from 'react';
import { FaRegBuilding } from "react-icons/fa";


function PrioritySettingTab() {
    return (
        <div className="card mt-5">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h5>Email Priority</h5>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h6 className='mt-2 me-2'><FaRegBuilding style={{ marginBottom: '2px', fontSize: "20px", marginRight: '5px', color: 'gray' }} /> Org-level setting</h6>
                    <button className='btn btn-primary' type='button'> Save</button>
                </div>
            </div>
            <hr />

            <div >
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Prioritize by their scheduled date <span style={{ color: 'gray' }}> (default)</span>
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Prioritize by sequencewith the highest interested rate
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Prioritize by step within a sequence with the highest interested rate
                    </label>
                </div>


            </div>

        </div>
    );
}

export default PrioritySettingTab