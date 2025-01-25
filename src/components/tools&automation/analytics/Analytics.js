import { Button } from "react-bootstrap";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";


function Analytics() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Analytics",
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
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
            }}
          >
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/__E4iNOcM5I?si=fRxD2BMXKk7Xehl_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className="text-center mt-3 px-5">
            <h4>Data-Enriched Analytics</h4>
            <p className="fs-5">
              Leverage the power of our data-enriched analytics to manage your
              team and find insights on how to improve messaging, targeting,
              call & email connect rates, and sales velocity.
            </p>

            <Button type="button" variant="primary">Upgrade To Professional</Button>
          </div>
        </div>
      </div>

      {/* <EditionAndUser /> */}
    </div>
  );
}

export default Analytics;
