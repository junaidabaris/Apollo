import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import Conversations from "../../../profile/Conversations";
import EmailExtention from "../../../profile/EmailExtention";
import EmailSettings from "../../../profile/EmailSetting";
import Strategy from "./Strategy";

function AiContentCenter() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Settings",
    title_2: "ai Content Center",
  };

  return (
    <div>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <header
        className="workflows_header d-flex align-items-center justify-content-between px-3 py-3"
        style={{ borderBottom: "1px solid rgb(211, 206, 206)" }}
      >
        <div>
          <h4>Content Center</h4>
        </div>
      </header>

      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption mb-4">
                    <h6 className="heading mb-0 p-2">
                      Optimize your messaging strategy with AI to create
                      targeted and personalized emails.
                    </h6>
                  </div>
                  <div className="row" style={{ margin: "10px 0" }}>
                    <div className="col-6">
                      <Strategy />
                    </div>
                    <div className="col-6">
                      <div
                        className=" card email-settings-container"
                        style={{
                          padding: "20px",
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        <h5>Email preview</h5>

                        <button
                          style={{
                            marginBottom: "20px",
                            padding: "10px 15px",
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #ddd",
                            borderRadius: "5px",
                            cursor: "pointer",
                            width: "100%",
                          }}
                        >
                          Manage Mailboxes
                        </button>

                        <div className="card" style={{ height: "300px" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiContentCenter;
