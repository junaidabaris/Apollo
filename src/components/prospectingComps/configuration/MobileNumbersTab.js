import React from 'react'

function MobileNumbersTab() {
    return (
        <div className="card">
            <h5>Mobile Numbers</h5>
            <hr />
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>By default, request mobile numbers in Prospect Searcher and LinkedIn Extension. (Users can still choose not to request mobile numbers for each Prospect Searcher request.)
                    </h6>
                </label>
            </div>

        </div>
    );
}

export default MobileNumbersTab