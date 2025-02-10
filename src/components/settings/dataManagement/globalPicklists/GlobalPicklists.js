import { GoListUnordered } from "react-icons/go";

import { Button } from "react-bootstrap";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";


function GlobalPicklists() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Global Picklists",
  };
  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

      <div className="analytic_container " style={{}}>
        <div className="" style={{ width: "50%", margin: "auto" }}>
          <div
            className="video_container mt-3"
            style={{
              width: "100%",
            }}
          >
            <img
              src="https://assets.apollo.io/imgs/966770f2df4d866f1b00..svg"
              alt=""
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>Global Picklists</h4>
            <p className="fs-5">
              Create different sets of picklist values and reuse them for any of
              your custom fields that requires a picklist.
            </p>

            <Button type="button" variant="warning" className="text-dark">
              Upgrade to Professional
            </Button>

            <div className="mt-3 fs-6">
              <GoListUnordered className="me-2 mb-1" />
              <span>Define picklist values that you can reuse.</span>
            </div>
          </div>
        </div>
      </div>

      {/* <EditionAndUser /> */}
    </div>
  );
}
export default GlobalPicklists;
