import React from "react";

const ResourceCapacityTable = () => {
  return (
    <div className="border p-3 mt-3">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-3 py-3 ">
          <label htmlFor="employee" className="form-label text-nowrap">
            Resource Properties
          </label>
          <input
            type="text"
            placeholder="Resource Properties"
            className="form-control"
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Resource</th>
              <th>Resource DesC...</th>
              <th>Whse</th>
              <th>Type</th>
              <th>Total</th>
              <th>01/23</th>
              <th>01/24</th>
              <th>01/25</th>
              <th>01/26</th>
              <th>01/27</th>
              <th>01/28</th>
              <th>01/29</th>
              <th>01/30</th>
              <th>01/31</th>
              <th>02/01</th>
              <th>02/02</th>
              <th>02/03</th>
              <th>02/04</th>
              <th>02/05</th>
              <th>02/06</th>
              <th>02/07</th>
              <th>02/08</th>
              <th>02/09</th>
              <th>02/10</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item</td>
              <td>A00001</td>
              <td>01</td>
              <td>10</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Item</td>
              <td>A00001</td>
              <td>01</td>
              <td>10</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Item</td>
              <td>A00001</td>
              <td>01</td>
              <td>10</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
              <td>34</td>
              <td>45</td>
              <td>01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResourceCapacityTable;
