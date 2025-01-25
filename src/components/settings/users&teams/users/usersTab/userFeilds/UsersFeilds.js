import React, { useState } from "react";
import { Button } from "react-bootstrap";
import userf from "../../../../../../assets/images/userfeild/download (1).svg";
import NewFeildModal from "./newFeildModal/NewFeildModal";

function UsersFeilds() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              src={userf}
              alt=""
              style={{
                marginLeft: "40%",
              }}
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>Get started with user fields</h4>
            <p className="fs-5">
              User fields allow you to specify person-specific information on
              the General information tab for each user in your account.
            </p>

            <Button type="button" variant="primary" onClick={handleShow}>
              New Feild
            </Button>
          </div>
        </div>
      </div>

      <NewFeildModal show={show} setShow={setShow} handleClose={handleClose} />
    </>
  );
}

export default UsersFeilds;
