import React from "react";
import { Button } from "react-bootstrap";

function MultiFacAuthentication({ data }) {
  return (
    <>
      <div className="analytic_container " style={{}}>
        <div className="" style={{ width: "50%", margin: "auto" }}>
          <div
            className="video_container mt-3"
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <img
              src={data?.img}
              alt="img"
              style={{
                marginLeft: "30%",
              }}
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>{data?.title}</h4>
            <p className="fs-5">{data?.p}</p>

            <Button type="button" variant="primary">
              {data?.btn}
            </Button>

            <div className="d-flex justify-content-center mt-3">
              <span className="me-2">{ data?.icons}</span>
              <p>{data?.des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultiFacAuthentication;
