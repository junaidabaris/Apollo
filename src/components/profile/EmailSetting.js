import React from "react";

function EmailSettings() {
  return (
    <div
      className=" card email-settings-container"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h2>Email Settings</h2>

      <button
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          backgroundColor: "#f5f5f5",
          border: "1px solid #ddd",
          borderRadius: "5px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Manage Mailboxes
      </button>

      <div style={{ marginBottom: "15px" }}>
        <strong>Email Sending Limits:</strong> 250/day (Increase your limits by
        upgrading to a{" "}
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          paid plan
        </a>
        )
      </div>

      <div style={{ marginBottom: "15px" }}>
        <strong>Set Up Email Signature:</strong>{" "}
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          manage email signatures under each linked Mailbox!
        </a>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <input
          type="checkbox"
          id="appendOptOut"
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="appendOptOut">
          Append the following opt-out message after my signature in sequences
        </label>
      </div>

      <textarea
        placeholder="No longer interested in these messages? <%Unsubscribe%>"
        style={{
          width: "100%",
          height: "80px",
          marginBottom: "15px",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      ></textarea>

      <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
        Surround your opt-out link with brackets <code>&lt;%</code> and{" "}
        <code>%&gt;</code>. E.g. If you don't want to hear from me, you can{" "}
        <code>&lt;%unsubscribe here%&gt;</code>.
      </p>

      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}
      >
        <input
          type="checkbox"
          id="oneClickUnsubscribe"
          style={{ marginRight: "10px" }}
        />
        <label htmlFor="oneClickUnsubscribe">
          Include one-click unsubscribe headers
          <span style={{ fontSize: "12px", color: "#666", marginLeft: "10px" }}>
            (Recommended for organizations that send 5,000 emails or more within
            a 24-hour period)
          </span>
        </label>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <div>
          <input
            type="checkbox"
            id="openTracking"
            style={{ marginRight: "10px" }}
          />
          <label htmlFor="openTracking">Enable open tracking</label>
        </div>
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          Unlock Open Tracking
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <input
            type="checkbox"
            id="clickTracking"
            style={{ marginRight: "10px" }}
          />
          <label htmlFor="clickTracking">Enable click tracking</label>
        </div>
        <a href="#" style={{ color: "#007bff", textDecoration: "none" }}>
          Unlock Click Tracking
        </a>
      </div>
    </div>
  );
}

export default EmailSettings;
