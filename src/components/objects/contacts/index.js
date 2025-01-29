
import { Tabs } from 'antd';
import StagesList from './Stages/StagesList';
import RolesList from './Roles/RolesList';
import EmailTriggers from './Triggers/EmailTriggers';
import Fields from './fields/Fields';
import MainRow from './fields/MainRow';
function ContactsComponent() {
 

  const items = [
    {
      key: '1',
      label: 'Stages',
      children: <StagesList/>,
    },
    {
      key: '2',
      label: 'Contact Roles',
      children: <RolesList/>,
    },
    {
      key: '3',
      label: 'Triggers',
      children: <EmailTriggers/>,
    },
    {
      key: '4',
      label: 'Fields',
      children: <MainRow/>,
    },
  ];
  return (
    <div>
      <div className="row m-2">
        <div className="col-xl-12">
          <div className="">
            <div className="card-body p-0">
              
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={(key) => {
                  console.log(key);
                }}
                indicator={{
                  size: (origin) => origin - 20,
                  align: 'center',
                }}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactsComponent;