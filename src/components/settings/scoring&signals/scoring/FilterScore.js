import React from "react";

const FilterScore = () => {
  return (
    <div style={{ margin: "14px" }}>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption tbl-caption-2">
              <h4 className="heading mb-0 p-2">FILTER</h4>
            </div>
            <form className="tbl-captionn">
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Owned By
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">No Body</option>
                    <option value="">AnyBody</option>
                    <option value="">You</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Target Type
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">People</option>
                    <option value="">Company</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Category
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">select</option>
                    <option value="">select1</option>
                  </select>
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

export default FilterScore;
