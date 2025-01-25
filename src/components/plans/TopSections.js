import React, { useState } from "react";

const TopSections = () => {
  const [billingType, setBillingType] = useState("Annual Billing");
  const [userCount, setUserCount] = useState(1);

  const handleBillingChange = (type) => {
    setBillingType(type);
  };

  const handleUserChange = (change) => {
    setUserCount((prev) => Math.max(1, prev + change));
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "20px",
      }}
    >
      <h1>Upgrade Your Plan</h1>
      <h3>Pricing for one-person startups to Fortune 500 enterprises.</h3>
      <div
        style={{
          display: "inline-block",
          border: "1px solid #ddd",
          borderRadius: "25px",
          overflow: "hidden",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            backgroundColor:
              billingType === "Annual Billing" ? "#007bff" : "white",
            color: billingType === "Annual Billing" ? "white" : "#000",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleBillingChange("Annual Billing")}
        >
          Annual Billing
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor:
              billingType === "Monthly Billing" ? "#007bff" : "white",
            color: billingType === "Monthly Billing" ? "white" : "#000",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleBillingChange("Monthly Billing")}
        >
          Monthly Billing
        </button>
      </div>
      <p style={{ margin: "10px 0", fontSize: "14px", color: "green" }}>
        Save 20%
      </p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h2>1. Edition & Users</h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h4>How many users do you have?</h4>
          <button
            style={{
              padding: "5px 15px",
              fontSize: "16px",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            onClick={() => handleUserChange(-1)}
          >
            -
          </button>
          <span style={{ fontSize: "16px" }}>{userCount}</span>
          <button
            style={{
              padding: "5px 15px",
              fontSize: "16px",
              cursor: "pointer",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            onClick={() => handleUserChange(1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSections;
