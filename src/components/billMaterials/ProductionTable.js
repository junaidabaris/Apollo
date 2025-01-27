import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductionTable = () => {
  return (
    <div className="mt-3">
      <div className="table-responsive ">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>No.</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>UoM Name</th>
              <th>Warehouse</th>
              <th>Issue Method</th>
              <th>Production Std Cost</th>
              <th>Total Production Std Cost</th>
              <th>Price List</th>
              <th>Unit Price</th>
              <th>Total</th>
              <th>Comments</th>
              <th>WIP Account</th>
              <th>Route Sequence</th>
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
              <td></td>
              <td></td>
              <td>0</td>
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
              <td>$21,600.00</td>
              <td></td>
              <td></td>
              <td>0</td>
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
              <td></td>
              <td></td>
              <td>0</td>
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
              <td></td>
              <td></td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div>
          <strong>Total:</strong> $25,850.00
        </div>
      </div>
      <div className="d-flex align-items-center">
          <strong className="text-nowrap">Product Price:</strong>
          <input type="text" value={"$1,840.00"} className="form-control" />
        </div>
      <div className="d-flex align-items-center mt-3">
        <button className="btn btn-primary me-2 px-5">OK</button>
        <button className="btn btn-secondary px-5">Cancel</button>
      </div>
    </div>
  );
};

export default ProductionTable;
