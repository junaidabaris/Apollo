
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { Tabs } from 'antd';
import Overview from "./Overview";
import Activity from "./Activity";
import Settings from "./Settings";
const SequeseDetail = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Sequences Detail",
    };

    const items = [
        {
            key: '1',
            label: 'Overview',
            children: <Overview/>,
        },
       
        {
            key: '2',
            label: 'Contacts',
            children: <Overview/>,
        },
        {
            key: '3',
            label: 'Emails',
            children: '<TeamCompo/>',
        },
        {
            key: '4',
            label: 'Tasks',
            children: '<TeamCompo/>',
        }, 

        {
            key: '5',
            label: 'Activity',
            children: <Activity/>,
        },
        {
            key: '6',
            label: 'Report',
            children: '<TeamCompo/>',
        },
        {
            key: '7',
            label: 'Settings',
            children: <Settings/>,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
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

export default SequeseDetail