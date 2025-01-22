import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import DealCreate from "./masterForm/DealCreate";

function CreateDeal() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Deals",
        title_2: 'Create Deal',
    }
    return (
        <div>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <DealCreate/>
        </div>
    );
}
export default CreateDeal;