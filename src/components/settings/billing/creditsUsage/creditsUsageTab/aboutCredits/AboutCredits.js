import cbody from "../../../../../../assets/images/billing/c-usage/c-body.png";

import Accordion from "react-bootstrap/Accordion";

import work1 from "../../../../../../assets/images/billing/c-usage/work1.svg"
import work2 from "../../../../../../assets/images/billing/c-usage/work2.svg"
import work3 from "../../../../../../assets/images/billing/c-usage/work3.svg"

function AboutCredits() {
  return (
    <>
      <div>
        <div className="c_body_box">
          <img src={cbody} alt="" style={{ width: "100%" }} />
        </div>

        <div className="h_work_box mt-5 mb-5 py-5">
          <div className="text-center mt-4 mb-5">
            <h3>How it works</h3>
          </div>

          <div className="row">
            <div className="col-lg-4 text-center">
              <div>
                <img src={work1} alt="" />
              </div>
              <div className="mt-4 mb-2">
                <h4>Find buyers</h4>
              </div>
              <div>
                <p>
                  Access reliable and trustworthy data powered by our
                  proprietary data contributor network.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div>
                <img src={work2} alt="" />
              </div>
              <div className="mt-4 mb-2">
                <h4>Streamline workflows</h4>
              </div>
              <div>
                <p>
                  Apollo’s seamless integrations keep contact data fresh across
                  your tech stack.
                </p>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div>
                <img src={work3} alt="" />
              </div>
              <div className="mt-4 mb-2">
                <h4>Connect confidently</h4>
              </div>
              <div>
                <p>
                  You’re only charged credits for email addresses that Apollo
                  can verify.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 mt-3">
          <div className="text-center">
            <h2>Frequently asked questions</h2>
          </div>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0" className="mb-0">
                <Accordion.Header>
                  Why don’t I see the additional credits I just bought in my
                  balance?
                </Accordion.Header>
                <Accordion.Body>
                  If you recently purchased additional credits and notice a
                  slight delay, don’t worry! Our system may take a little bit of
                  time to process the transaction and update your credit
                  balance. If your credits are not updated within 24 hours,
                  please reach out to our support team for assistance.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="mb-0">
                <Accordion.Header>
                  How do I purchase more credits?
                </Accordion.Header>
                <Accordion.Body>
                  You can easily add additional credits to your plan on the plan
                  subscription page here. Credits will automatically refresh at
                  the beginning of each billing cycle.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2" className="mb-0">
                <Accordion.Header>When do credits expire?</Accordion.Header>
                <Accordion.Body>
                  Your credits expire at the end of each billing cycle. Your
                  current billing cycle ends on Feb 21, 2025 at 01:30 PM
                  GMT+5:30. Credits do not roll over into the following billing
                  cycle or upon renewal.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3" className="mb-0">
                <Accordion.Header>When do credits renew?</Accordion.Header>
                <Accordion.Body>
                  Your credits renew on the first day of each billing cycle.
                  Your next billing cycle begins on Feb 21, 2025 at 01:30 PM
                  GMT+5:30. upon renewal.
                  <br />
                  <br />
                  For plans billed annually, all credits are unlocked at the
                  beginning of the annual billing cycle. If you're on an annual
                  plan with quarterly or semi-annual billing, the credits will
                  be released accordingly.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4" className="mb-0">
                <Accordion.Header>
                  Are there other ways credits can be used?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, credits may sometimes be used when exporting company data
                  from Apollo. Additionally, future product features that are
                  released may consume credits. You'll always be notified before
                  any action that uses credits.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCredits;
