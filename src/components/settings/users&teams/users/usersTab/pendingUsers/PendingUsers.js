
import pendingIMG from "../../../../../../assets/images/userfeild/pendinguser.svg";

function PendingUsers() {
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
              src={pendingIMG}
              alt=""
              style={{
                marginLeft: "40%",
              }}
            />
          </div>

          <div className="text-center mt-3 px-5">
            <h4>There Are No Pending Request</h4>

            {/* <Button type="button" variant="primary">
              New Feild
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingUsers;
