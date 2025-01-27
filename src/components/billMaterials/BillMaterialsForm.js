import React from "react";

const BillMaterialsForm = () => {
  return (
    <div className="row g-3 mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Product No
        </label>
        <input type="text" placeholder="Product No" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Quantity
        </label>
        <input type="text" placeholder="Quantity" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Product Description
        </label>
        <input type="text" placeholder="Product Description" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          BOM Type
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Production Std Cost
        </label>
        <input
          type="text"
          placeholder="Production Std Cost"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Planned Average Production Size
        </label>
        <input type="text" placeholder="Planned Average Production Size" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Warehouse
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Price List
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Distr. List
        </label>
        <input type="text" placeholder="Distr. List" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Project
        </label>
        <input type="file" placeholder="Project" className="form-control" />
      </div>
    </div>
  );
};

export default BillMaterialsForm;
