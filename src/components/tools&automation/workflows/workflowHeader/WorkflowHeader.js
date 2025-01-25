import Dropdown from "react-bootstrap/Dropdown";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { Link } from "react-router-dom";
function WorkflowHeader() {
  return (
    <>
      {/* ---fiest--header--workflows */}
      <header className="workflows_header d-flex align-items-center justify-content-between px-3 py-3">
        <div>
          <h4>Workflows</h4>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className="fw-normal fs-6"
            >
              Create Workflows
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1" className="fs-6">
                Create From Scratch
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="fs-6">
                Start With a template
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="fs-6">
                Clone from Existing workflows
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </header>

      {/* ----here second header filter btn-- */}
      <div className="filter_flows d-flex align-items-center justify-content-between px-4 py-2">
        <div
          className="d-flex align-item-center  justify-content-between fs-5"
          style={{ width: "30%" }}
        >
          <Link to="filterWF" className="WF_filter px-3 rounded-2">
            <TbAdjustmentsHorizontal className="me-2 mb-2" />
            <span className="text-decoration-none  fs-3 filter_btn">
              Filters
            </span>
          </Link>

          <div>
            <input
              type="text"
              className="form-control own_input"
              placeholder="Search workflows"
            />
          </div>
        </div>

        <div>
          <Dropdown>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              className="fw-normal fs-6"
            >
              Sort
            </Dropdown.Toggle>

            <Dropdown.Menu className="px-2">
              <h6 className="px-3">Sort By</h6>

              <select className="form-select mb-2" name="type" id="type">
                <option value="">Created Date</option>
                <option>Name</option>
                <option>Target</option>
                <option>Owner</option>
              </select>

              <select className="form-select" name="type" id="type">
                <option value="">Descending</option>
                <option>Ascending</option>
              </select>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default WorkflowHeader;
