import React, { useState } from "react";

const Customize = ({ title_1, title_2 ,prices }) => {
  const [creditValue, setCreditValue] = useState(250000); // Default value
  const [price, setPrice] = useState("$10,000/yr");

  const creditOptions = [
    { value: 0, label: "0/yr", price: "$0/yr" },
    { value: 10000, label: "10K/yr", price: "$1,000/yr" },
    { value: 25000, label: "25K/yr", price: "$2,500/yr" },
    { value: 50000, label: "50K/yr", price: "$5,000/yr" },
    { value: 100000, label: "100K/yr", price: "$7,500/yr" },
    { value: 250000, label: "250K/yr", price: "$10,000/yr" },
    { value: 500000, label: "500K/yr", price: "$15,000/yr" },
    { value: 1000000, label: "1M/yr", price: "$20,000/yr" },
    { value: 2500000, label: "2.5M/yr", price: "$30,000/yr" },
    { value: 5000000, label: "5M/yr", price: "$50,000/yr" },
    { value: 10000000, label: "10M/yr", price: "$75,000/yr" },
    { value: "custom", label: "Custom", price: "Custom Pricing" },
  ];

  const handleSliderChange = (event) => {
    const selectedIndex = event.target.value;
    const selectedOption = creditOptions[selectedIndex];
    setCreditValue(selectedOption.value);
    setPrice(selectedOption.price);
  };

  return (
    <div style={styles.container} className="card">
      <h3 style={styles.heading}>{title_1}</h3>
      <p style={styles.description}>{title_2}</p>
      <div style={styles.sliderWrapper}>
        <span style={styles.selectedPlan}>
          {prices}K (Selected plan) + {creditValue.toLocaleString()} credits/yr
        </span>
        <input
          type="range"
          min="0"
          max={creditOptions.length - 1}
          step="1"
          defaultValue="5"
          onInput={handleSliderChange}
          style={styles.slider}
        />
        <div style={styles.labels}>
          {creditOptions.map((option, index) => (
            <span key={index} style={styles.label}>
              {option.label}
            </span>
          ))}
        </div>
        <div style={styles.price}>{price}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    // width: "80%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  sliderWrapper: {
    position: "relative",
    margin: "20px 0",
  },
  selectedPlan: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
    display: "block",
  },
  slider: {
    width: "100%",
    appearance: "none",
    height: "6px",
    borderRadius: "5px",
    background: "#d3d3d3",
    outline: "none",
    transition: "background 0.3s",
    cursor: "pointer",
  },
  labels: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "12px",
    color: "#555",
  },
  label: {
    textAlign: "center",
    flex: "1",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#007bff",
    marginTop: "10px",
  },
};

export default Customize;
