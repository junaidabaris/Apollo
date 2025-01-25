import { TbCheckbox } from "react-icons/tb";
import { RxFileText } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import { PiSkipForwardLight } from "react-icons/pi";

function TasksTotalTab() {
  return (
    <div className="total_tab_container ">
      <table className="tab_table ">
        <thead className="">
          <tr className="thead-r ">
            <th className="fw-normal px-3 py-2" style={{ width: "45%" }}>
              Tasks
            </th>
            <th className="fw-normal px-3 py-2" style={{ width: "20%" }}>
              Associated with
            </th>
            <th className="fw-normal px-3 py-2" style={{ width: "10%" }}>
              Due Date
            </th>
            <th className="fw-normal px-3 py-2" style={{ width: "10%" }}>
              Priority
            </th>
            <th className="fw-normal px-3 py-2" style={{ width: "5%" }}>
              owner
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="" style={{ borderBottom: "1px solid #CACACC" }}>
            <td
              className="px-3 py-4"
              style={{ width: "35%", borderRight: "1px solid " }}
            >
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ justifyContent: "" }}
              >
                <div className="d-flex align-items-center ">
                  <div className="me-4">
                    <input
                      type="checkbox"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <div
                      className=" d-flex"
                      style={{
                        borderRadius: "50%",
                        width: "40px",
                        height: "40px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FCDDC7",
                      }}
                    >
                      <TbCheckbox
                        className="fs-3"
                        style={{ width: "30px", color: "#73350B" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="zp_mJI0D">gfdgdfgdfg</div>
                    <div className="">
                      <div className="d-flex align-items-center">
                        <RxFileText className="zp-icon apollo-icon apollo-icon-file-alt zp_mMqLX zp_EASSb zp_DkdTN" />
                        <div className="zp_yeDG8" style={{ maxWidth: 380 }}>
                          bfdbgfh
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className="d-flex"
                    style={{
                      boxShadow:
                        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                    }}
                  >
                    <div>
                      <button
                        type="button "
                        className="bg-white btn_check_skip"
                        style={{
                          border: "none",
                          borderRight: "1px solid #CACACC",
                        }}
                      >
                        <BsCheck2 className="fs-3 btn_check_skip" />
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="bg-white "
                        style={{ border: "none" }}
                      >
                        <PiSkipForwardLight className="fs-3 btn_check_skip" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td className="px-3 py-4" style={{ width: "5%" }}>
              <div
                className="d-flex align-items-center justify-content-between"
                style={{ justifyContent: "" }}
              >
                <div className="d-flex align-items-center ">
                  <div className="d-flex align-items-center me-3">
                    <div
                      className=" d-flex"
                      style={{
                        borderRadius: "5%",
                        width: "30px",
                        height: "30px",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#ECE7FF",
                      }}
                    >
                      Jo
                    </div>
                  </div>

                  <div>
                    <div className="zp_mJI0D">John</div>
                    <div className="">
                      <div className="d-flex align-items-center">
                        {/* <RxFileText className="zp-icon apollo-icon apollo-icon-file-alt zp_mMqLX zp_EASSb zp_DkdTN" /> */}
                        <div className="zp_yeDG8" style={{ maxWidth: 380 }}>
                          Profit Register
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </td>

            <td className="px-3 py-4" style={{ width: "5%" }}>
              <div
                className="d-flex align-items-center "
                style={{ color: "red" }}
              >
                11:53 am
              </div>
            </td>

            <td className="px-3 py-4" style={{ width: "5%" }}>
              <div
                className="d-flex align-items-center "
                style={{ color: "red" }}
              >
                <span className="bg-danger text-white py-1 px-2 rounded-2">
                  Med
                </span>
              </div>
            </td>

            <td className="px-3 py-4" style={{ width: "5%" }}>
              <div
                className=" d-flex"
                style={{
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FCDDC7",
                }}
              >
                DA
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TasksTotalTab;
