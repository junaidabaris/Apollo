
import React from "react";

const Activity = () => {
  const historyItems = [
    { action: "You deleted the call task in step 2.", time: "4:08 pm" },
    { action: "You deleted the automatic email task in step 3.", time: "4:07 pm" },
    { action: "You edited the Automatic Email in step 3.", time: "3:37 pm" },
    { action: "You created the automatic email task in step 3.", time: "3:36 pm" },
    { action: "You created the sequence.", time: "1/21" },
  ];

  const styles = {
    container: {
    //   maxWidth: "900px",
      margin: "20px auto",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
    },
    item: {
      display: "flex",
      margin: "5px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 15px",
      borderBottom: "1px solid #eee",
      cursor: "pointer",
    },
    lastItem: {
      borderBottom: "none",
    },
    actionText: {
      fontSize: "14px",
      color: "#333",
    },
    timeText: {
      fontSize: "12px",
      color: "#666",
    },
    hover: {
      backgroundColor: "#f1f1f1",
    },
  };

  return (
    <div style={styles.container}>
      {historyItems.map((item, index) => (
        <div
          key={index}
          style={{
            ...styles.item,
            ...(index === historyItems.length - 1 ? styles.lastItem : {}),
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <span style={styles.actionText}>{item.action}</span>
          <span style={styles.timeText}>{item.time}</span>
        </div>
      ))}
    </div>
  );
};

export default Activity;
