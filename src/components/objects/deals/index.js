
import { Tabs } from 'antd';
import MainRow from './fields/MainRow';
import PiplineList from './piplies/PiplineList';
import DealesRoles from './dealsroles/DealesRoles';
import Currency from './currency/Currency';
function DealsComponent() {
 

  const items = [
    {
      key: '1',
      label: 'Pipelines',
      children: <PiplineList/>,
    },
    {
      key: '3',
      label: 'Deals Roles',
      children: <DealesRoles/>,
    },
    {
      key: '4',
      label: 'Fields',
      children: <MainRow/>,
    },
    {
      key: '5',
      label: 'Currency',
      children: <Currency/>,
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
export default DealsComponent;