import React from 'react'

function EmailSyncingtab() {
    return (
        <div className="card">
            <h5>Email Syncing</h5>
            <hr />
            <div className="form-check">
                <p style={{ textAlign: 'left' }}>Select whether unverified emails can be synced across connected integrations.</p>
            </div>

            <div >
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        <strong>Enable Unverified Email Syncing</strong> <span style={{ color: '#000000' }}>Apollo will Sync unverified emails to any connected integrations. Note that this can be overhidden by salesforce setting</span>
                    </label>
                </div>
                <div className="form-check">
                    <input style={{ border: "1px solid black" }} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                        <strong>Disable Unverified Email Syncing </strong> <span style={{ color: '#000000' }}>Apollo will not Sync unverified emails to any connected integrations.</span>
                    </label>
                </div>
                <button style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#146EF6", border: "1px solid #ddd", borderRadius: "5px", cursor: "pointer", width: "100%", color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default EmailSyncingtab