import React from "react";
import { Button } from "react-bootstrap";
import UpdateCreditCard from "./updateCreditCard/UpdateCreditCard";
import { useState } from "react";
import UpdateCompanyAddress from "./updateCompanyAddress/UpdateCompanyAddress";

function BillingTab() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow1 = () => setShow1(true);
   const handleClose1 = () => setShow1(false);

  return (
    <div>
      <div className="mb-4">
        <div className="Free_P_box_h d-flex align-items-center justify-content-between p-3">
          <div>
            <h4 className="mb-1">Credit Card Information</h4>
            {/* <p className="text-start mb-0">
              You are on a free plan and your credits will refresh on Feb 21,
              2025
            </p> */}
          </div>

          <div>
            <Button type="" variant="primary" onClick={handleShow}>
              Update Credit Card
            </Button>
          </div>
        </div>

        <div className="Free_P_box_h  p-3">
          <div className="mb-4">
            <p className="text-start mb-3">
              You have not entered any credit card information yet.
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-1">Credit Card Information</h4>
            </div>

            <div>
              <Button type="" variant="primary" onClick={handleShow1}>
                Update Company Address
              </Button>
            </div>
          </div>
        </div>

        <div className="Free_P_box_h  p-3">
          <div className="mb-4">
            <p className="text-start mb-3">
              You do not have company address added yet.
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h4 className="mb-1">Billing Information</h4>
            </div>

            <div>
              <Button type="" variant="primary">
                Save Billing Information
              </Button>
            </div>
          </div>
        </div>

        <div className="Free_P_box_h  p-3">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="mb-4">
                <label htmlFor="">Send Invoices To:</label>
                <p className="text-start mb-3">
                  Apollo users with the permission to manage billing will also
                  receive those emails.
                </p>

                <div>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="mb-4">
                <label htmlFor="">Additional Invoice Information:</label>
                <p className="text-start mb-3">
                  This information will attach to all your future invoices. If
                  your accounting department uses PO boxes, you can use this to
                  note down your PO box number for Apollo. If you are a German
                  company, you can note down the full location required for
                  invoice payments.
                </p>

                <div>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    placeholder="E.g"
                    rows={3}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <div>
                <h4 className="mb-1">Invoice History</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="  p-3">
          <div className="mb-4">
            <p className="text-start mb-3">
              You do not have any invoice history.
            </p>
          </div>
        </div>
      </div>

      <UpdateCreditCard
        show={show}
        setShow={setShow}
        handleClose={handleClose}
      />

      <UpdateCompanyAddress
        show1={show1}
        setShow={setShow1}
        handleClose={handleClose1}
      />
    </div>
  );
}

export default BillingTab;
