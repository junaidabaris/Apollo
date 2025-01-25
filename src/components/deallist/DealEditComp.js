import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import BasicInfo from "./edit/BasicInfo";
import DealActivity from "./edit/DealActivity";
import DealRevenue from "./edit/DealRevenue";
import Forecast from "./edit/Forecast";
import CustomFields from "./edit/CustomFields";

const DealEditComp = () => {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Deals Upadate",
  };
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <div>
        <div className="row m-2">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                <div className="table-responsive active-projects style-1">
                  <div className="tbl-caption">
                    <h4 className="heading mb-0 p-2">Deals Upadate</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Basic information</h4>
                                    </div>
                                    <BasicInfo />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Deal activity</h4>
                                    </div>
                                    <DealActivity />

                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Deal revenue</h4>
                                    </div>
                                    <DealRevenue />

                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Deal forecast</h4>
                                    </div>
                                    <Forecast />

                                </div>
                            </div>
                        </div>
                    </div>  


                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Custom fields</h4>
                                    </div>
                                    <CustomFields />

                                </div>
                            </div>
                        </div>
                    </div>  



                </div>
            </div>
            {/* <ToastContainer className="text-center" /> */}
    </>
  )
}
export default DealEditComp;
