
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import AccountInfo from "./AccountInfo";
import Conversations from "./Conversations";
import CustomUser from "./CustomUser";
import EmailExtention from "./EmailExtention";
import EmailSetting from "./EmailSetting";
import Extension from "./Extension";
const ProfileComp = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Profile",
    };


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">
                        <div className="">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption">
                                        <h4 className="heading mb-0 p-2">Profile</h4>
                                    </div>
                                    <div className="row" style={{ margin: "10px 0" }}>
                                        <div className="col-6">
                                            <AccountInfo />
                                            <CustomUser />
                                            <Extension />
                                        </div>
                                        <div className="col-6">
                                            <EmailSetting />
                                            <EmailExtention />
                                            <Conversations />
                                        </div>
                                    </div>
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

export default ProfileComp