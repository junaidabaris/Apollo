import React from 'react'

function DuplicateAccHandlingTab() {
    return (
        <div className="card">
            <h5>Duplicate Account Handling</h5>
            <hr />
            <div className="form-check">
                <p style={{ textAlign: 'left' }}>Select what happens when a contact matches multiple accounts in your CRM and/or Apollo</p>
            </div>

            <div >
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        <strong>Enable Automatic Mapping</strong> <span style={{ color: '#000000' }}>Apollo Automatically maps the account that was first created in case of multiple accounts.</span>
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                        <strong>Prompts Users to select an account to save to </strong> <span style={{ color: '#000000' }}>For users who want to decide which of the multiple accouts to map a contact to.</span>
                    </label>
                </div>
                <button style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#146EF6", border: "1px solid #ddd", borderRadius: "5px", cursor: "pointer", width: "100%", color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default DuplicateAccHandlingTab