import React, { useState } from "react";
import Select from "react-select";

function ExcludeAccountsStageTab() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const options = [
        { value: "Cold", label: "Cold" },
        { value: "Current Client", label: "Current Client" },
        { value: "Active Oppurtunity", label: "Active Oppurtunity" },
        { value: "Dead Oppurtunity", label: "Dead Oppurtunity" },
    ];

    return (
        <div className="card">
            <h5>Exclude Account Stages</h5>
            <hr />

            <div >
                <div className="mb-3">
                    <label>
                        <h6>Warn the team if they try to prospect any people from the following account stages in Prospect Searcher:
                        </h6>
                    </label>
                    <Select
                        options={options}
                        isMulti
                        value={selectedOptions}
                        onChange={setSelectedOptions}
                        placeholder="Select options"
                    />
                </div>


                <button style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#146EF6", border: "1px solid #ddd", borderRadius: "5px", cursor: "pointer", width: "100%", color: 'white', fontSize: '14px', fontWeight: '600' }}>
                    Save
                </button>
            </div>

        </div>
    );
}

export default ExcludeAccountsStageTab