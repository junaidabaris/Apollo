import React from 'react'

function GDPRCompilanceTab() {
    return (
        <div className="card">
            <h5>GDPR Compliance</h5>
            <hr />
            <div className="form-check">
                <p style={{ textAlign: 'left' }}>The General Data Protection Regulation (GDPR) is a new regulation enacted by the European Union (EU) to protect its member country citizens' right to privacy and control over their personal data in the digital world.</p>
            </div>
            <div className="form-check">
                <p style={{ textAlign: 'left' }}>Apollo has added the following safeguards to help customers ensure compliance with GDPR</p>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>Forbid prospecting of people in the European Union
                    </h6>
                </label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>Forbid email sending to people in the European Union
                    </h6>
                </label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>
                        Forbid tracking on emails sent to people in the European Union
                    </h6>
                </label>
            </div>

        </div>
    );
}

export default GDPRCompilanceTab