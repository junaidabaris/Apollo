export const SalespersonFilter = () => {
  return (
    <div style={{ margin: "14px" }}>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption tbl-caption-2">
              <h4 className="heading mb-0 p-2">People Filter</h4>
            </div>
            <form className="tbl-captionn">
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Lists
                  </label>
                  <select name="" id="" className="form-select">
                    <option value="">Select lists</option>
                    <option value="">Select lists1</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Industries
                  </label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select Industries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Status"
                  />
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Job Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Job Title"
                  />
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Company
                  </label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Please select Company</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Location
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Employees
                  </label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Please select Employees</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>

                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Company Industries 
                  </label>
                  <select
                    className="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Please select Industries</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                  </select>
                </div>

                <div className="col-xl-12 text-center">
                  <button type="button" className="btn btn-primary">
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
