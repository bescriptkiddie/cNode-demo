import React from 'react';
import {route} from './router/index';
import {Route, Switch} from 'react-router-dom';
import {Layout} from 'antd';
import Header from './component/header';
import Footer from './component/footer';

function App() {
    return < Layout className="page">
        <Header/>
        <Layout.Content>
            <div className="wrap">
                <Switch>
                    {route.map((itemData, index) => {
                        return (<Route
                            key={index}
                            path={itemData.path}
                            exact={itemData.exact}
                            render={(props) => {
                                // 这里可以添加路由信息 eg:props.username = 'pika'
                                return itemData.render(props);
                            }}/>);
                    })}
                </Switch>
            </div>
        </Layout.Content>
        <Footer/>
    </Layout>;
}

export default App;
