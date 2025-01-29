import React from "react";

const AnalysisQuarterlyList = () => {
  return (
    <div className="card m-2">
      <div className="d-flex aling-items-center justify-content-between bg-black p-2">
        <h4 className="text-white fs-4">
          Sales Analysis Report by Items (Quarterly)
        </h4>
      </div>
      <div className="table-responsive mt-4">
        <div className="d-flex align-items-center justify-content-between">
          <p className="text-center">
            Double-click on a row number for a detailed display of all sales
          </p>
          <div className="form-check d-flex align-items-center gap-2"  >
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label m-0" for="flexCheckDefault">
              Default checkbox
            </label>
          </div>
        </div>

        <table className="table table-bordered table-striped">
          <thead className="thead-light">
            <tr>
              <th scope="col" rowSpan={"2"} className="align-middle">
                #
              </th>
              <th scope="col" rowSpan={"2"} className="align-middle">
                Item No.
              </th>
              <th scope="col" rowSpan={"2"} className="align-middle">
                Item Description
              </th>
              <th scope="col" rowSpan={"2"} className="align-middle">
                Annual Total
              </th>
              <th scope="col" colSpan="3" className="text-center">
                Quarter 1 (2019)
              </th>
              <th scope="col" colSpan="3" className="text-center">
                Quarter 2 (2019)
              </th>
              <th scope="col" colSpan="3" className="text-center">
                Quarter 3 (2019)
              </th>
              <th scope="col" colSpan="3" className="text-center">
                Quarter 4 (2019)
              </th>
            </tr>
            <tr>
              <th>Quantity</th>
              <th>Sales Amount</th>
              <th>Gross Profit</th>
              <th>Quantity</th>
              <th>Sales Amount</th>
              <th>Gross Profit</th>
              <th>Quantity</th>
              <th>Sales Amount</th>
              <th>Gross Profit</th>
              <th>Quantity</th>
              <th>Sales Amount</th>
              <th>Gross Profit</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <th scope="row">1</th>
              <td>00097</td>
              <td>EC112 L80 Trailer</td>
              <td>$4,625.00</td>
              <td>6</td>
              <td>$8,167.50</td>
              <td>$4,522.49</td>
              <td>8</td>
              <td>$4,625.00</td>
              <td>$2,255.00</td>
              <td>12</td>
              <td>$9,927.50</td>
              <td>$5,970.75</td>
              <td>10</td>
              <td>$6,000.00</td>
              <td>$4,000.00</td>
            </tr>
            {/* Add additional rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalysisQuarterlyList;
