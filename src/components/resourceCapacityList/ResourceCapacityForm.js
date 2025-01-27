import React from "react";

const ResourceCapacityForm = () => {
  return (
    <div className="row g-3 mt-2">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          capacity Type
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Capacity Pariod From
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Capacity Pariod To
        </label>
        <input type="date" placeholder="" className="form-control" />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Warehouse Code Fore
        </label>
        <input
          type="text"
          placeholder="Warehouse Code Fore"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Warehouse Code To
        </label>
        <input
          type="text"
          placeholder="Warehouse Code To"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Resource No. From
        </label>
        <input
          type="text"
          placeholder="Resource No. From"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="employee" className="form-label">
          Resource No. To
        </label>
        <input
          type="text"
          placeholder="Resource No. To"
          className="form-control"
        />
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Resource Group From
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Resource Group To
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <label htmlFor="downline" className="form-label">
          Resource Type
        </label>
        <select id="downline" className="form-select">
          <option selected>Open this select menu</option>
          <option>1</option>
          <option>2</option>
        </select>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="form-check d-flex align-items-center gap-2 mt-5">
          <input className="form-check-input m-0" type="checkbox" value="" />
          <label className="form-check-label m-0" for="flexCheckDefault">
            Show Cumulative Cappacity from Today
          </label>
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex gap-3 align-items-center mt-3">
          <button className="btn btn-primary m-0 px-5">OK</button>
          <button className="btn btn-danger m-0 px-5">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ResourceCapacityForm;
