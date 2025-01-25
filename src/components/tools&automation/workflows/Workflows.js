import { Button } from "react-bootstrap";
import WorkflowHeader from "./workflowHeader/WorkflowHeader";
import WorkFlowsCardbody from "./workflowsCardbody/WorkFlowsCardbody";
import { BsStars } from "react-icons/bs";

function Workflows() {
  //  const [show, setShow] = useState(false);
  return (
    <div className="workflows_container">
      <WorkflowHeader />

      <WorkFlowsCardbody />

      <div className="px-4 py-3">
        <div className="d-flex align-item-center justify-content-between py-5 mb-4">
          <div>
            <h4 className="fw-bold">
              Get started ASAP with workflow templates
            </h4>
          </div>

          <div>
            <Button varient="success">View All</Button>
          </div>
        </div>

        <div className="zp_card_container">
          <div className="row">
            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Engage new hires within their first 90 days
                </h5>
                <p className="text-start">
                  Engage new hires at key accounts within their first 90 days
                  when they’re likely to review software and systems.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Outreach tailored to your target persona's challenges
                </h5>
                <p className="text-start">
                  Tailoring your outreach to your target persona’s challenges
                  and goals can improve engagement and response rate.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">Target rapidly growing companies</h5>
                <p className="text-start">
                  Target fast-growing accounts by identifying companies with
                  rapid expansion. Early engagement positions your solution as
                  an integral part of their success.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Win customers using your competitors' solutions
                </h5>
                <p className="text-start">
                  Target users of competitive solutions and let them know why
                  yours is better!
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Identify and target your Ideal Customer Personas
                </h5>
                <p className="text-start">
                  Run this campaign to identify and target your Ideal Customer
                  Personas (ICPs) who are most likely to convert into customers.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-3">
              <div className="template_card">
                <div className="mb-3">
                  <span className="pointer_c py-1 px-2 rounded-4 fw-bold">
                    <BsStars className="mb-1 me-2" />
                    General with Apollo AI
                  </span>
                </div>
                <h5 className="py-2">
                  Target companies researching your category
                </h5>
                <p className="text-start">
                  Leverage buying intent data to pinpoint when potential buyers
                  are actively seeking solutions you offer.
                </p>

                <button
                  className="bt py-2 fw-bold rounded-1"
                  style={{ width: "100%" }}
                >
                  Try it
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflows;
