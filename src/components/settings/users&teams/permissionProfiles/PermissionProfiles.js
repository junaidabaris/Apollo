import { Button } from "react-bootstrap";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { FaUserCheck } from "react-icons/fa6";

function PermissionProfiles() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Permission Profiles",
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
              src="https://assets.apollo.io/imgs/52c3081a995ea726d3a9..svg"
              alt=""
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>Permission Profiles</h4>
            <p className="fs-5">
              Permission profiles allow you to edit the accounts, contacts, and
              permissions that users can access to prevent them from making
              unexpected changes.
            </p>

            <Button type="button" variant="primary">
              Upgrade To Organization
            </Button>

            <div className="mt-3 fs-6">
              <FaUserCheck className="me-2 mb-1"/>
              <span>Recommended for teams of 3 or more.</span>
            </div>
          </div>
        </div>
      </div>

      {/* <EditionAndUser /> */}
    </div>
  );
}

export default PermissionProfiles;
