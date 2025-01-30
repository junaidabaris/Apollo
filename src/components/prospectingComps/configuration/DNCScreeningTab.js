import React from 'react'
import { Link } from 'react-router-dom';
import { PiInfoThin } from "react-icons/pi";

function DNCScreeningTab() {
    return (
        <div className="card">
            <h5>DNC list screening</h5>
            <hr />
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>Enable to automatically flag new direct dials you request that are on the Do Not Call list to help ensure adherence to telemarketing regulations. Direct dials on the DNC list still cost 1 credit. <Link to={"#"} style={{ textDecoration: 'none', fontSize: '12px' }}>Learn more.</Link>
                    </h6>
                </label>
            </div>

            <div className="form-check mb-4">
                <span style={{ textAlign: 'left' }}> <PiInfoThin style={{ fontSize: "20px" }} /> Currently only available for US and UK Do Not Call lists.</span>
            </div>

        </div>
    )
}

export default DNCScreeningTab