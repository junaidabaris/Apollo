import React from "react";

const ApInvoiceLForm = () => {
  return (
    <div className="row g-3 mt-2">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          vender 
        </label>
        <input type="text" placeholder="vender" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Name
        </label>
        <input type="text" placeholder="Name" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Contact Person
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Vendor Inv #
        </label>
        <input
          type="text"
          placeholder="Product Description"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Currency
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Country
        </label>
        <input
          type="text"
          placeholder="Country"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Amount
        </label>
        <input
          type="text"
          placeholder="Amount"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          No.
        </label>
        <input type="text" placeholder="No." className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          status
        </label>
        <input type="file" placeholder="status" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Posting Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Due Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Document Date
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Buyer
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Ownera
        </label>
        <input type="text" placeholder="Ownera" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Total Before Discount
        </label>
        <input type="text" placeholder="Total Before Discount" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Discount %
        </label>
        <input type="text" placeholder="Discount %" className="form-control" />
      </div>

        
      
    </div>
  );
};

export default ApInvoiceLForm;
