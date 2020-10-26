import React from 'react';
import {Card, Breadcrumb, Layout} from 'antd';
import {Link} from 'react-router-dom';
import EnterpriseNav from './enterpriseNav';
import EnterpriseDetail from '../../component/enterpriseDetail';

const {Content, Sider} = Layout;

function EnterprisePage() {
    return (<div>
        <Card
            title={<Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">首页</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>企业详情</Breadcrumb.Item>
            </Breadcrumb>}
            style={{
                marginTop: 10,
            }}
            type="inner"
        >
            <Layout>
                <Content>
                    <Layout className="site-layout-background">
                        <Sider className="site-layout-background">
                            <EnterpriseNav/>
                        </Sider>
                        <Content style={{
                            padding: '0 24px',
                            minHeight: 280,
                        }}>
                            <EnterpriseDetail/>
                        </Content>
                    </Layout>
                </Content>
            </Layout>
        </Card>

    </div>);
}

export default EnterprisePage;



