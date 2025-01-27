import React from "react";

const ApInvoiceLTable = () => {
  return (
    <div className="border p-2 rounded mt-3">
      <div className="d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-3">
          <label htmlFor="employee" className="form-label text-nowrap">
            Item/Service Type
          </label>
          <input type="text" placeholder="" className="form-control" />
        </div>
        <div className="d-flex align-items-center gap-3">
          <label htmlFor="downline" className="form-label text-nowrap">
            Summary Type
          </label>
          <select id="downline" className="form-select">
            <option selected>Open this select menu</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
      </div>
      <div className="table-responsive ">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Item No.</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Discount %</th>
              <th>Tax Code</th>
              <th>Total (Doc)</th>
              <th>Bin Location Alocation</th>
              <th>UoM Code</th>
              <th>Country/Region of Origin</th>
              <th>Blanket Agreement No.</th>
              <th>Standard Item Identification</th>
              <th>Commodity Classfication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item</td>
              <td>A00001</td>
              <td>J.B. Officeprint 1420</td>
              <td>10</td>
              <td></td>
              <td>01</td>
              <td>Backflush</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>Base Price</td>
              <td>$400.00</td>
              <td>$4,000.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Item</td>
              <td>P10001</td>
              <td>PC - 8x core, DDR 32GB, 2TB HDD</td>
              <td>15</td>
              <td></td>
              <td>01</td>
              <td>Backflush</td>
              <td>$0.00</td>
              <td>$0.00</td>
              <td>Base Price</td>
              <td>$1,440.00</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Resource</td>
              <td>R300004</td>
              <td>Testing Machine</td>
              <td>1</td>
              <td></td>
              <td>01</td>
              <td>Backflush</td>
              <td>$50.00</td>
              <td>$50.00</td>
              <td></td>
              <td>$0.05</td>
              <td>$50.00</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Resource</td>
              <td>R300006</td>
              <td>Senior Technician</td>
              <td>1</td>
              <td></td>
              <td>01</td>
              <td>Backflush</td>
              <td>$200.00</td>
              <td>$200.00</td>
              <td></td>
              <td>$0.20</td>
              <td>$200.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex align-items-center mt-3">
        <button className="btn btn-primary me-2 px-5">OK</button>
        <button className="btn btn-secondary px-5">Cancel</button>
      </div>
    </div>
  );
};

export default ApInvoiceLTable;
