function Conversations() {
    return (
        <div className="card">
            <h6>Conversations</h6>
            <hr />
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                <label className="form-check-label" for="flexSwitchCheckChecked">
                    <h6>Enable Private Conversations</h6>
                    <div>Enable this setting to keep all conversations private. Only hosts, internal participants, and individuals with the link can access the conversation.</div>
                </label>
            </div>
            <div style={{ padding: "10px", margin: "10px", borderRadius: "10px", backgroundColor: "#f5f5f5" }}>
                <h6>Which conversations should be made private?</h6>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" for="flexRadioDefault1">
                        Only Future Conversations
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="form-check-label" for="flexRadioDefault2">
                        All Past and Future Conversations
                    </label>
                </div>
                <button type="button" className="btn btn-primary" style={{ backgroundColor: "#ebf212" }}>Done</button>
            </div>
            <hr />
            <h6>Revoke access to all shared recording links</h6>
            <p>All individuals that you’ve shared recordings with will no longer be able to access them.</p>
            <button style={{ marginBottom: "20px", padding: "10px 15px", backgroundColor: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px", cursor: "pointer", width: "100%" }}>
              Revoke Access
            </button>
        </div>
    );
}

export default Conversations;