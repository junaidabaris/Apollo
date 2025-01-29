import React from "react";

const Task = () => {
  return (
    <div className="mt-4 mx-2">
      <div className="row">
        {/* Recent Tasks & Follow-ups */}
        <div className="col-md-4">
          <div className="card p-0 shadow-sm">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Recent Tasks & Follow-up's</h5>
            </div>
            <div className="card-body">
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center bg-light">
                <div>
                  <p className="mb-0"><strong>18 January 2025 14:00</strong></p>
                  <p className="text-muted mb-0">Test</p>
                  <small>Saurav Sharma</small>
                </div>
                <span className="badge bg-success">Task Completed</span>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>18 January 2025 02:00</strong></p>
                  <p className="text-muted mb-0">Complete Flyer</p>
                  <small>Saurav Sharma</small>
                </div>
                <span className="badge bg-secondary">Task Not Completed</span>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>15 January 2025 14:00</strong></p>
                  <p className="text-muted mb-0">Agents want to add flight as well</p>
                  <small>Karan Sharma</small>
                </div>
                <span className="badge bg-secondary">Task Not Completed</span>
              </div>
              <div className="p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>14 August 2024 10:00</strong></p>
                  <p className="text-muted mb-0">VISA Details Update</p>
                  <small>Karan Sharma</small>
                </div>
                <span className="badge bg-secondary">Task Not Completed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scheduled Payments */}
        <div className="col-md-4">
          <div className="card p-0 shadow-sm">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Scheduled Payment's</h5>
            </div>
            <div className="card-body">
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>#FIT000028</strong></p>
                  <p className="text-muted mb-0">Payer: Manish Srivastava</p>
                  <small>03-01-2025</small>
                </div>
                <div>
                  <span className="badge bg-success">Active</span>
                  <p className="text-end mb-0"><strong>₹49,850.00</strong></p>
                </div>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>#FIT000003</strong></p>
                  <p className="text-muted mb-0">Payer: Sarthak Singh</p>
                  <small>18-01-2025</small>
                </div>
                <div>
                  <span className="badge bg-success">Active</span>
                  <p className="text-end mb-0"><strong>₹1,000.00</strong></p>
                </div>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>#F000025</strong></p>
                  <p className="text-muted mb-0">Payer: Shivam</p>
                  <small>21-01-2025</small>
                </div>
                <div>
                  <span className="badge bg-success">Active</span>
                  <p className="text-end mb-0"><strong>₹2,000.00</strong></p>
                </div>
              </div>
              <div className="p-2 border rounded d-flex justify-content-between align-items-center">
                <div>
                  <p className="mb-0"><strong>#FIT000021</strong></p>
                  <p className="text-muted mb-0">Payer: Mansi</p>
                  <small>31-01-2025</small>
                </div>
                <div>
                  <span className="badge bg-success">Active</span>
                  <p className="text-end mb-0"><strong>₹80,000.00</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Login Users */}
        <div className="col-md-4">
          <div className="card p-0 shadow-sm">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0">Login User's</h5>
            </div>
            <div className="card-body">
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center bg-light">
                <div>
                  <strong>Ishika Bhargava</strong>
                  <p className="text-muted mb-0">Operation Person</p>
                </div>
                <span className="badge bg-danger">11 minutes ago</span>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center bg-light">
                <div>
                  <strong>Saurav Sharma</strong>
                  <p className="text-muted mb-0">Customer Service</p>
                </div>
                <span className="badge bg-danger">1 day ago</span>
              </div>
              <div className="mb-3 p-2 border rounded d-flex justify-content-between align-items-center bg-light">
                <div>
                  <strong>Sanjana Tiwari</strong>
                  <p className="text-muted mb-0">Accounts</p>
                </div>
                <span className="badge bg-danger">4 days ago</span>
              </div>
              <div className="p-2 border rounded d-flex justify-content-between align-items-center bg-light">
                <div>
                  <strong>Sarthak Singh</strong>
                  <p className="text-muted mb-0">Sales Person</p>
                </div>
                <span className="badge bg-danger">1 week ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
