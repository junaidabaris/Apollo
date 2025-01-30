import React from 'react';
import { PiInfoThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

function PrimaryEmailAddressTab() {
    return (
        <div className="card">
            <h5>Primary Email Address</h5>
            <hr />
            <div className="form-check">
                <p style={{ textAlign: 'left' }}>Select which type of email address you want to set as <strong>Primary</strong>. This is the only email address Apollo charges you for. When you contact prospects, Apollo uses the <strong>Primary</strong> email.</p>
            </div>
            <div className="form-check mb-4">
                <span style={{ textAlign: 'left' }}> <PiInfoThin style={{ fontSize: "20px" }} /> Learn more about <Link to={"#"} style={{ textDecoration: 'none', fontSize: '12px' }}>how we charge email credits based on your Primary Email settings and how this affects your existing & newly saved contacts.</Link></span>
            </div>

            <div >
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        <strong>Business Email</strong> <span style={{ color: '#000000' }}>(Primary)</span>
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                        <strong>Personal Email</strong>
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault1">
                        <strong>Any</strong>
                    </label>
                </div>
                <button style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#146EF6", border: "1px solid #ddd", borderRadius: "5px", cursor: "pointer", width: "100%", color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default PrimaryEmailAddressTab