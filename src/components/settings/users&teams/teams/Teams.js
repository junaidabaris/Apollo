import { Button } from "react-bootstrap";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import { FaUserGroup } from "react-icons/fa6";

function Teams() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "Teams",
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
              src="https://assets.apollo.io/imgs/eeed665e9f9a03ad9dd7..svg"
              alt=""
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>Teams</h4>
            <p className="fs-5">
              Create different teams to group your users together and organize
              the types of actions they can do.
            </p>

            <Button type="button" variant="primary">
              Upgrade To Organization
            </Button>

            <div className="mt-3 fs-6">
              <FaUserGroup className="me-2 mb-1" />
              <span>Recommended for teams of 3 or more.</span>
            </div>
          </div>
        </div>
      </div>

      {/* <EditionAndUser /> */}
    </div>
  );
}
export default Teams;
