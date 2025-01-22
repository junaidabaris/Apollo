import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import CardsComp from "../../components/plans/CardsComp";
import Customize from "../../components/plans/Customize";
import EditionAndUser from "../../components/plans/EditionAndUser";
import FrequentlyQues from "../../components/plans/FrequentlyQues";
import JustTake from "../../components/plans/JustTake";
import TablesData from "../../components/plans/TablesData";
import TopSections from "../../components/plans/TopSections";
import TrustedBy from "../../components/plans/TrustedBy";

function PlansPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dashboard",
        title_2: 'Plans',
    }
    return (
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <TopSections />
            <hr />
            <CardsComp />
            <TablesData />
            <div className="container-fluid">
                <h2>2. Customize Credits</h2>
                <Customize title_1={'Export Credits'} title_2='Export credits are shared across users. Select how many Export credits you would like for your team below.' prices={12} />
                <Customize title_1={'Mobile Number Credits'} title_2='Mobile number credits are shared across users. Select how many mobile number credits you would like for your team below.' prices={6} />
            </div>

            <div className="container text-center card">
                <h2>Trusted by over 100,000 professionals
                    at the world's best companies
                </h2>
                <TrustedBy />
                <TrustedBy />
            </div>
            <div className="container-fluid text-center">
                <h2>Don't just take it from us</h2>
                <div className="row">
                    <div className="col-md-4">
                        <JustTake quote='“My favorite part is everything is integrated. So, there are tools that will allow you to find contacts or sequences. Having it all in one place."' name='Julian Malinak' title='VP of Marketing at Apollo' />
                    </div>
                    <div className="col-md-4">

                        <JustTake quote='“the tool. It has enabled me to be more productive and efficient. I am able to do more work in less time.”' name='Bryan B.' title='VP of Marketing at Apollo' />
                    </div>
                    <div className="col-md-4">
                        <JustTake quote='“My favorite part is everything is integrated. So, there are tools that will allow you to find contacts or sequences. Having it all in one place."' name='Julian Malinak' title='VP of Marketing at Apollo' />
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center">
                <h2>Frequently Asked Questions</h2>
                <FrequentlyQues />
            </div>

            {/* <EditionAndUser /> */}
        </div>
    );
}
export default PlansPage