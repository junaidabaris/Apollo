import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AccountInfo() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        title: "",
        email: "test@gmail.com",
    });

    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);

    return (
        <div className="card">
            <h6>Account Info</h6>
            <hr />
            <form>
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" id="firstName" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" id="lastName" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.email}
                            disabled
                            id="email"
                        />
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label>Change Password</label>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setShowPasswordModal(true)}
                        >
                            Change Password
                        </button>
                    </div>
                    <div className="form-group col-md-6 mt-3">
                        <label>Change Email</label>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => setShowEmailModal(true)}
                        >
                            Change Email
                        </button>
                    </div>
                </div>
            </form>

            {/* Backdrop Blur */}
            {showPasswordModal || showEmailModal ? (
                <div
                    className="position-fixed w-100 h-100"
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        backdropFilter: "blur(5px)",
                        top: 0,
                        left: 0,
                        zIndex: 1040,
                    }}
                ></div>
            ) : null}

            {/* Change Password Modal */}
            <div
                className={`modal fade ${showPasswordModal ? "show d-block" : ""}`}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Password</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowPasswordModal(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="newPassword">New Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Log me out of all devicesss
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowPasswordModal(false)}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Change Email Modal */}
            <div
                className={`modal fade ${showEmailModal ? "show d-block" : ""}`}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Email</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowEmailModal(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="newEmail">New Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="newEmail"
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => setShowEmailModal(false)}
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountInfo;
