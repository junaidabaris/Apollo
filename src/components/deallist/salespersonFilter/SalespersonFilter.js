export const SalespersonFilter = () => {
  return (
    <div style={{ margin: "14px" }}>
      <div className="card">
        <div className="card-body p-0">
          <div className="table-responsive active-projects style-1">
            <div className="tbl-caption tbl-caption-2">
              <h4 className="heading mb-0 p-2">Deals Filter</h4>
            </div>
            <form className="tbl-captionn">
              <div className="row">
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Deal Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Deal Name"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Pipline
                  </label>
                  <select
                    class="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select Pipline</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Owner
                  </label>
                  <select
                    class="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select Owner</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="col-xl-4 mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Stage
                  </label>
                  <select
                    class="form-control"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select Stage</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
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
