import React from 'react';
import {Affix, Layout, Row, Col, Menu} from 'antd';
import {Link ,useLocation} from 'react-router-dom';
import {nav} from '../router/index';

function Header(props) {
    // 获取路径
    let {pathname} = useLocation()
    // to 与 路径相对应
    let activeIndex = nav.findIndex((navData)=>{
        return pathname === navData.to
    })
    return (<Affix offsetTop={0}><Layout.Header id="header">
        <div className="wrap">
            <Row>
                <Col xs={6}
                     sm={4}
                     md={2}>
                    <h1 className="logo"><Link to="/"/>logo</h1>
                </Col>
                <Col xs={18}
                     sm={20}
                     md={22}>
                    <Menu mode="horizontal" theme="dark"
                          defaultSelectedKeys={[activeIndex+""]}>
                        {nav.map((navData, index) => {
                            return <Menu.Item key={index}><Link
                                to={navData.to}>{navData.txt}</Link></Menu.Item>;
                        })}
                    </Menu>
                </Col>
            </Row>
        </div>
    </Layout.Header></Affix>);
}

export default Header;
