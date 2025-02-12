import React, { useState } from 'react'

function AboutTab() {
   const fullText = `We are the International Development Society at UEA, open to all students 
  from the School of International Development. Throughout the year we run a 
  number of academic and non-academic socials (such as quizzes, balls and 
  barbecues), some to raise money for charity, ensuring our members are able 
  to make the most of their time at university. We work in close connection 
  with the School to provide great opportunities for our members.`;

   const shortText = fullText.slice(0, 150) + ""; // Shortened version
   const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <p className="text_elip text-start">
        {expanded ? fullText : shortText}
        <button
          onClick={() => setExpanded(!expanded)}
          className="border-none"
          style={{ border: "none" }}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </p>

      <div className="d-flex justify-content-start mb-3">
        <div className="col-xl-4">
          <small className="text-secondary fs-6">Keywords</small>
        </div>
        <div className="col-xl-8">
          <div className="mb-2">
            <span className="back_peoples me-2">
              <a href="#" style={{ textDecoration: "none" }}>
                <small className="">academic society</small>
              </a>
            </span>

            <span className="back_peoples me-2">
              <a href="#" style={{ textDecoration: "none" }}>
                <small className="">
                  international development & academic society
                </small>
              </a>
            </span>
          </div>

          <div>
            <span className="back_peoples me-2">
              <a href="#" style={{ textDecoration: "none" }}>
                <small className="">international development</small>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-start mb-3">
        <div className="col-xl-4">
          <small className="text-secondary fs-6">Industry</small>
        </div>
        <div className="col-xl-8">
          <span className="back_peoples me-2">
            <a href="#" style={{ textDecoration: "none" }}>
              <small className="">international trade & development</small>
            </a>
          </span>
        </div>
      </div>

      <div className="d-flex justify-content-start">
        <div className="col-xl-4">
          <small className="text-secondary fs-5">Account location</small>
        </div>
        <div className="col-xl-8">
          <span className="back_peoples me-2">
            <a href="#" style={{ textDecoration: "none" }}>
              <small className="">Norwich, United Kingdom</small>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutTab
