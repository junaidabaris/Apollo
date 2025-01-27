import React from "react";

const SalesAnalysisTable = () => {
  return (
    <div className="table-responsive mt-3">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Document</th>
            <th>Sales Employee</th>
            <th>Posting Date</th>
            <th>Due Date</th>
            <th>Item Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Sales Amount</th>
            <th>Gross Profit</th>
            <th>%</th>
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
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SalesAnalysisTable;
