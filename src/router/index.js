import React from "react";
import IndexPage from "../view/index/index";
import TopicPage from "../view/topic/index";
import UserPage from "../view/user/index";
import GetstartPage from "../view/getstart/index";
import AboutPage from "../view/about/index";
import Page404 from "../view/page404/index";
import qs from "qs";
import EnterprisePage from '../../src/view/enterprise';

const types = ["all","good","share","ask","job","dev"]; // 首页导航的类型

const route = [
    {
        path: "/",
        exact: true,
        render(props){
            // 通过 props 拿到路由信息
            let {location} = props;
            let {search} = location; // 获取的是字符串
            // 利用 qs 第三方库 - qs.parse 将字符串转化成 对象
            //                - qs.stringify 将对象转化成字符串
            // str.substr() 截取字符串
            let {tab,page} = qs.parse(search.substr(1));
            // 1.tab,page不存在的时候,直接index
            // 2.tab存在的时候,page不存在
            if((tab===undefined&&page===undefined)
                ||(types.includes(tab)&&(page===undefined||page>0))){
                return <IndexPage {...props} />
            }
            return <Page404 {...props} />
        }
    },{
        path: "/topics/:id",
        exact: true,
        render(props){
            return <TopicPage {...props} />
        }
    },{
        path: "/user/:loginname",
        exact: true,
        render(props){
            return <UserPage {...props} />
        }
    },{
        path: "/getstart",
        exact: true,
        render(props){
            return <GetstartPage {...props} />
        }
    },{
        path: "/about",
        exact: true,
        render(props){
            return <AboutPage {...props} />
        }
    },{
        path: "/enterprise",
        exact: true,
        render(props){
            return <EnterprisePage {...props} />
        }
    },{
        path: "",
        exact: false,
        render(props){
            return <Page404 {...props} />
        }
    }
];

const nav = [{
    to: "/",
    txt:"首页"
},{
    to: "/getstart",
    txt:"新手入门"
},{
    to: "/about",
    txt:"关于我们"
},{
    to: "/enterprise",
    txt:"企业详情"
}];

const indexNav = [
    {
        txt:"全部",
        to :"/?tab=all"
    },{
        txt:"精华",
        to :"/?tab=good"
    },{
        txt:"分享",
        to :"/?tab=share"
    },{
        txt:"问答",
        to :"/?tab=ask"
    },{
        txt:"招聘",
        to :"/?tab=job"
    },{
        txt:"客户端测试",
        to :"/?tab=dev"
    }
];

export {route,nav,indexNav,types}
