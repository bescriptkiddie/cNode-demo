import React from 'react';
import {PageHeader, Button, Row, Col} from 'antd';
import {
    IdcardOutlined,
    PayCircleOutlined,
    LineChartOutlined,
    AppstoreOutlined,
    TeamOutlined,
    TagsOutlined,
    FieldTimeOutlined,
    EnvironmentOutlined,
    SecurityScanOutlined,
    DeploymentUnitOutlined,
} from '@ant-design/icons';

import {Demo, Demo2} from '../charts/risk_chart';

function EnterpriseDetail() {

    return <div>
        <PageHeader
            className="site-page-header"
            onBack={() => null}
            title="企业基本信息"
            subTitle="企业名称"
            extra={[
                <Button key="3">更新数据</Button>,
                <Button key="2">分享数据</Button>,
                <Button key="1" type="primary">
                    导出数据
                </Button>,
            ]}
        />
        <div className="iconsList">
            <Row>
                <Col xs={12}><IdcardOutlined
                    style={{fontSize: 25, padding: 12, textAlign: 'center'}}/>
                    <sapn>企业ID</sapn>
                </Col>
                <Col xs={12}><PayCircleOutlined
                    style={{fontSize: 25, padding: 12}}/>
                    <sapn>注册资本</sapn>
                </Col>
            </Row>
            <Row>
                <Col xs={12}><TagsOutlined style={{fontSize: 25, padding: 12}}/>
                    <sapn>分类结果</sapn>
                </Col>
                <Col xs={12}><DeploymentUnitOutlined
                    style={{fontSize: 25, padding: 12}}/>
                    <sapn>行业</sapn>
                </Col>
            </Row>
            <Row>
                <Col xs={12}><FieldTimeOutlined
                    style={{fontSize: 25, padding: 12}}/>
                    <sapn>司龄</sapn>
                </Col>
                <Col xs={12}><EnvironmentOutlined
                    style={{fontSize: 25, padding: 12}}/>
                    <sapn>区域</sapn>
                </Col>
            </Row>
            <Row>
                <Col xs={12}><AppstoreOutlined
                    style={{fontSize: 25, padding: 12}}/>
                    <sapn>企业类型</sapn>
                </Col>
                <Col xs={12}><TeamOutlined style={{fontSize: 25, padding: 12}}/>控制人类型</Col>
            </Row>
            <Row>
                <Col xs={12}><SecurityScanOutlined
                    style={{fontSize: 25, padding: 12}}/><span>风险预测</span></Col>
                <Col xs={12}><LineChartOutlined
                    style={{fontSize: 25, padding: 12}}/>经营状况</Col>

            </Row>
            <Row>
                <Col xs={12}><Demo/></Col>
                <Col xs={12}><Demo2/></Col>
            </Row>

        </div>
    </div>;
}

export default EnterpriseDetail;




