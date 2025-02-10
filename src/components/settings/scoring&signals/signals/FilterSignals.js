
import React from "react";

const FilterSignal = () => {
  return (
    <div style={{ margin: "14px" }}>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption tbl-caption-2">
              <h4 className="heading mb-0 p-2">FILTER Signals</h4>
            </div>
            <form className="tbl-captionn">
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Signal Name
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Signal Group
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Engagement</option>
                    <option value="">Company momentum</option>
                    <option value="">Persona</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Target Object
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">People</option>
                    <option value="">Company</option>
                  </select>
                </div>

                <div className="col-xl-12 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Description
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    rows={3}
                    placeholder="Add context or useful details about this signal"
                  ></textarea>
                </div>

                <div className="col-xl-4 text-center mt-4">
                  <button type="button" className="btn btn-primary mt-3">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSignal;
