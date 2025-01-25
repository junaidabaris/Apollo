import React from "react";

const Settings = () => {
  const styles = {
    container: {
    //   maxWidth: "800px",
      margin: "20px auto",
      fontFamily: "Arial, sans-serif",
      fontSize: "14px",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    select: {
      width: "100%",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box",
    },
    schedule: {
      marginBottom: "10px",
    },
    scheduleRow: {
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 0",
    },
    triggers: {
      marginTop: "20px",
    },
    checkboxGroup: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
    },
    checkbox: {
      marginRight: "10px",
    },
    buttonGroup: {
      display: "flex",
      gap: "5px",
      marginTop: "10px",
    },
    button: {
      padding: "5px 10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#f9f9f9",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="name">
          Name:
        </label>
        <input style={styles.input} type="text" id="name" placeholder="Name" />
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="owner">
          Owner:
        </label>
        <select style={styles.select} id="owner">
          <option value="junaid">Junaid Abaris (You)</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label} htmlFor="schedule">
          Schedule:
        </label>
        <select style={styles.select} id="schedule">
          <option value="normal">Normal Business Hours</option>
        </select>
        <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
          You may edit or create new schedules{" "}
          <a href="#!" style={{ color: "#007bff", textDecoration: "none" }}>
            here
          </a>
        </p>
        <div style={styles.schedule}>
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
            (day) => (
              <div key={day} style={styles.scheduleRow}>
                <span>{day}:</span>
                <span>8 AM - 5 PM</span>
              </div>
            )
          )}
        </div>
      </div>

      <div style={styles.triggers}>
        <label style={styles.label}>Triggers:</label>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            When there is another reply within the same account,
          </label>
          <select style={styles.select}>
            <option value="">Select...</option>
          </select>
        </div>

        <div style={styles.checkboxGroup}>
          <input
            style={styles.checkbox}
            type="checkbox"
            id="call-task"
          />
          <label htmlFor="call-task">
            Create a phone call task if an active contact opens an email at
            least{" "}
            <input
              style={{
                ...styles.input,
                display: "inline-block",
                width: "50px",
                marginLeft: "5px",
              }}
              type="number"
              defaultValue={3}
            />{" "}
            times.
          </label>
        </div>

        <div style={styles.checkboxGroup}>
          <input
            style={styles.checkbox}
            type="checkbox"
            id="mark-contact"
          />
          <label htmlFor="mark-contact">
            Mark contact as finished in the sequence when he/she clicks on a
            link in the email.
          </label>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Mark contacts as unresponsive if they do not reply or schedule
            appointment{" "}
            <input
              style={{
                ...styles.input,
                display: "inline-block",
                width: "50px",
                marginLeft: "5px",
              }}
              type="number"
              defaultValue={5}
            />{" "}
            days after the last step.
          </label>
        </div>

        <div style={styles.buttonGroup}>
          {["Bad Data", "Do Not Contact", "Replied", "Interested"].map(
            (text) => (
              <button key={text} style={styles.button}>
                {text}
              </button>
            )
          )}
        </div>

        <div style={styles.buttonGroup}>
          {[
            "Current Client",
            "Active Opportunity",
            "Dead Opportunity",
            "Do Not Prospect",
          ].map((text) => (
            <button key={text} style={styles.button}>
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
