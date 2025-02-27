import { useEffect, useState } from "react";
import DearMearchantPopUp from "../../common/dearMearchantPopUp/DearMearchantPopUp";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import {
  DashboardGet,
  getContestDash,
  getLength,
  getMenusdata,
} from "../../api/login/Login";
import { FaBookReader, FaGlobeEurope } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { TopTenColleges } from "./TopTenColleges";
import StaffKycModal from "../../common/staffKycmodal/StaffKycModal";
import { FaSchool } from "react-icons/fa";
import TopTenCourse from "./TopTenCourse";
import TopTenCountries from "./TopTenCountries";

function DasBoardRight() {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  const [count, setCountLenData] = useState();
  const [dasboradData, setdasboradData] = useState();
  const [kycState, setKycState] = useState();
  const today = new Date();

  const [data, setData] = useState();

  const getCountData = async () => {
    const today = new Date();
    const dates = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

    try {
      const response = await getLength();
      const response1 = await getContestDash();
      setData(response1?.data);
      // const response2 = await DashboardGet({ data: JSON.stringify(dates) })
      const response2 = await DashboardGet({ data: dates });

      setCountLenData(response?.data?.user);
      setdasboradData(response2?.data);
    } catch (error) {
      alert(error.message);
    }
    try {
      const kycStatusDta = await getMenusdata();
      setKycState(kycStatusDta);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setModalShow(true);
    }, 1000);
    getCountData();
  }, []);
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Dashboard",
    path_1: "/admin",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-9 wid-100">
            <div className="row">
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-yellow align-items-center">
                  <div className="boxicons">
                    <FaSchool className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Contest</span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">
                        {data?.ContestPart?.totalContest}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-gold align-items-center">
                  <div className="boxicons">
                    <PiStudentBold className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Contest expired </span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">
                        {data?.ContestPart?.expired_Count}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-danger align-items-center">
                  <div className="boxicons">
                    <FaSchool className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Contest upcoming </span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">
                        {data?.ContestPart?.upcomming_Count}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-green align-items-center">
                  <div className="boxicons">
                    <FaGlobeEurope className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Customer </span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">{data?.users}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-blue align-items-center">
                  <div className="boxicons">
                    <MdOutlinePayment className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Customer Won </span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">{data?.customer_won.count}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-gold align-items-center">
                  <div className="boxicons">
                    <FaBookReader className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Winning Amount</span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">{data?.ContestPart?.won_Amount}</span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6">
                <div className="retailers-container bg-gold align-items-center">
                  <div className="boxicons">
                    <FaBookReader className="ico" />
                  </div>
                  <div>
                    <h4 className="retailers-title text-center px-4 text-white my-1 ">
                      <span className="">Total Contest Amt Received</span>
                    </h4>
                    <h4 className="retailers-title text-center px-4 text-white my-3">
                      <span className="">
                        {data?.ContestPart?.amount_recived}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card overflow-hidden">
                  <div className="card-header border-0 pb-0 flex-wrap">
                    <h4 className="heading mb-0 bg-dark p-2 rounded">
                      {" "}
                      Overview
                    </h4>
                  </div>
                  <div
                    className="card-body  p-0"
                    style={{ position: "relative" }}
                  >
                    <TopTenColleges dasboradData={dasboradData} />
                    {/* <TopTenCourse />
                                        <TopTenCountries/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 t-earn">
            <div className="card">
              <div className="card-header border-0 pb-0"></div>
            </div>
          </div>
        </div>
      </div>
      {/* {kycState?.error ? (<StaffKycModal show={show} setShow={setShow} kycState={kycState} />) : (<DearMearchantPopUp
                show={modalShow}
                onHide={() => setModalShow(false)}
            />)} */}
    </>
  );
}
export default DasBoardRight;
