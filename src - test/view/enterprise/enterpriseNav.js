import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import qs from 'qs';
import {analysisItem, items} from '../../router';
import {Menu} from 'antd';

function EnterpriseNav() {
    let {search} = useLocation();
    let {enterprise} = qs.parse(search.substr(1));
    console.log( enterprise );
    let activeIndex = enterprise===undefined?0:(items.indexOf(enterprise));
    return <Menu
        mode ={"inline"}
        selectedKeys={[activeIndex+""]}
    >
        {
            analysisItem.map((item,index)=>{
                return <Menu.Item key={index} ><Link to={item.to}>{item.txt}</Link></Menu.Item>
            })
        }
    </Menu>;
}
export default EnterpriseNav
