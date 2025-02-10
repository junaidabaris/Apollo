



import React from "react";
import { Button } from "react-bootstrap";

function JobChangeAlert({ data }) {
  return (
    <>
      <div className="analytic_container " style={{}}>
        <div className="" style={{ width: "55%", margin: "auto" }}>
          <div
            className="video_container mt-5 mb-5"
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <img
              src={data?.img}
              alt="img"
              style={{
                marginLeft: "0%",
                width: "100%",
                height:"100%"
              }}
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>{data?.title}</h4>
            <p className="fs-5">{data?.p}</p>

            <Button type="button" variant="warning" className="text-dark">
              {data?.btn}
            </Button>

            <div className="d-flex justify-content-center mt-3">
              <span className="me-2">{data?.icons}</span>

              <a href="" className="" style={{ textDecoration: "none" }}>
                {data?.des}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobChangeAlert;
