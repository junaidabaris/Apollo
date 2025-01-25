
import { SalespersonFilter } from "./salespersonFilter/SalespersonFilter"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { Tabs } from 'antd';
import AllComp from "./AllComp";
import TeamCompo from "./TeamCompo";
const ListsComp = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Lists",
    };

    const items = [
        {
            key: '1',
            label: 'All Lists',
            children: <AllComp/>,
        },
        {
            key: '2',
            label: 'My Lists',
            children: <AllComp/>,
        },
        {
            key: '3',
            label: 'Team Lists',
            children: <TeamCompo/>,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SalespersonFilter />
            <div>
                <div className="row m-2">
                    <div className="col-xl-12">

                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                       
                    </div>
                </div>
            </div>
            {/* <ToastContainer className="text-center" /> */}
        </>

    )
}

export default ListsComp