import React from "react";
import { Pagination, Switch } from "antd";

function Overview() {
  return (
    <div className="card">
      <div className="card-body p-0">
        <div className="table-responsive active-projects style-1">
          {/* Table Header */}
          <div className="tbl-caption d-flex align-items-center justify-content-between p-3">
            <h4 className="heading mb-0">Day 1: Manual Email</h4>
            <span>Schedule task in 10 minutes</span>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "50px" }}>
                  <Switch size="small" />
                </th>
                <th>Thread</th>
                <th>Subject</th>
                <th>Scheduled</th>
                <th>Delivered</th>
                <th>Bounced</th>
                <th>Spam Blocked</th>
                <th>Reply</th>
                <th>Interested</th>
                <th>Opt Out</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Switch size="small" />
                </td>
                <td>New Thread</td>
                <td>(No Subject)</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <button className="btn btn-link">...</button>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Add AB Test Section */}
          <div className="d-flex justify-content-between align-items-center p-3 border-top">
            <button className="btn btn-light btn-sm">Add A/B Test</button>
          </div>
        </div>

        {/* Add Step Button */}
        <div className="p-3">
          <button className="btn btn-warning w-100">Add a step</button>
        </div>
      </div>
    </div>
  );
}

export default Overview;
