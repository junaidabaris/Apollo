import { useState } from "react";

import ModalTab1 from "./modalTab/ModalTab1";
import WorkflowsCardbodyModal from "./workflowsCardbodyModal/WorkflowsCardbodyModal";
import ImageModalVideo from "./imageModalVideo/ImageModalVideo";

function WorkFlowsCardbody() {
  const [show, setShow] = useState(false);
  const [showvideo, setShowvideo] = useState(false);

  const tabData = [
    { title: "All templates", comp: <ModalTab1 /> },
    { title: "Generate pipeline", comp: "Generate pipeline" },
  ];
  return (
    <>
      <div className="zp_card_body px-5 py-4 d-flex justify-content-between">
        <div className="zp_sq py-5 mt-5" style={{ width: "40%" }}>
          <h4>
            Meet workflows: the easy way to get more done—with less manual
            effort
          </h4>
          <p className="fs-6 mt-3 mb-5">
            From reaching out to newly funded companies to getting ahead of
            renewals, workflows can automate key revenue-driving activities.
          </p>

          <div className="zp_y_BPR ">
            <button
              type="button"
              className="temp_btn py-2 fs-5"
              onClick={() => setShow(true)}
            >
              See all workflow templates
            </button>
          </div>
        </div>
        <div className="zp_NV">
          <div
            className="me-3" 
            onClick={() => setShowvideo(true)}
            style={{cursor:"pointer"}}
          >
            <img
              src="https://assets.apollo.io/imgs/a12a4b99b26f456adb48..svg"
              alt=""
              style={{ width: "100%" }}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <WorkflowsCardbodyModal show={show} setShow={setShow} tabData={tabData} />
      <ImageModalVideo setShowvideo={setShowvideo} showvideo={showvideo} />
    </>
  );
}

export default WorkFlowsCardbody;
