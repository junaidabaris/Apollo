import Select from "react-select";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

function FilterWf() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const breadCrumbsTitle = {
    id: "1",
    title_1: "Filter Workflows",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <div style={{ margin: "14px" }}>
        <div className="card">
          <div className="card-body p-0">
            <div
              className="table-responsive active-projects style-1"
              style={{ height: "300px" }}
            >
              <div className="tbl-caption tbl-caption-2">
                <h4 className="heading mb-0 p-2">Filter workflows</h4>
              </div>
              <form className="tbl-captionn">
                <div className="row">
                  <div className="col-xl-4 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Workflows Status
                    </label>
                    <select
                      class="form-control"
                      aria-label="Default select example"
                    >
                      <option selected>Active</option>
                      <option value="1">Active</option>
                      <option value="2">InActive</option>
                      <option value="3">Archived</option>
                    </select>
                  </div>

                  <div className="col-xl-4 mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mb-1"
                    >
                      Owner
                    </label>
                    <Select
                      isMulti
                      id="filter_type"
                      value={""}
                      onChange={""}
                      options={[
                        { value: "Win", label: "Win" },
                        { value: "Upcomming", label: "Upcomming" },
                        { value: "Live", label: "Live" },
                      ]}
                      placeholder="Select filter types"
                      className="py-1"
                    />
                  </div>

                  <div className="col-xl-4 mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Folders
                    </label>
                    <div>
                      <button
                        type="button"
                        className="btn  btn-outline-primary m-0 py-2"
                        onClick={handleShow}
                      >
                        Create Folder
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Folder</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control" placeholder="Folder Name..."/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FilterWf;
