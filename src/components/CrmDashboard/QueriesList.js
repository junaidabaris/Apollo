import React from "react";
import { Link } from "react-router-dom";

const QueriesList = () => {
  return (
    <div
      className="w-100 overflow-scroll"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <ul className="d-flex gap-3 p-3" style={{ width: "max-content" }}>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, #090909, #5d5a56)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">0</strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              Today's Queries
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-caret-down"></i> 0%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, #ff0000, #E49DD9)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">
              1.00
            </strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              Yesterday's Queries
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-caret-down"></i> 0%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, green, #2c2c2c)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">
              12.00
            </strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              Jan Month Queries
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, blue , skyblue)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">
              2.00
            </strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              {" "}
              Jan Confirmed Queries
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, #650F53 , #8E7088)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">
              2.00
            </strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              Jan Invoice{" "}
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 100%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
        <li
          className="card p-0"
          style={{
            width: "250px",
            background: "linear-gradient(90deg, #FF995E , #F5B901)",
          }}
        >
          <Link to="/" className="py-4 text-center d-block">
            <strong className="d-block text-white fs-2 mb-3 fw-bold">
              2.00
            </strong>
            <span className="d-block text-white mb-2 fs-4 fw-normal">
              Jan Voucher
            </span>
            <span className="d-block text-white">
              <span>
                <i className="fa-solid fa-sort-up"></i> 50%
              </span>{" "}
              Last week
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QueriesList;
