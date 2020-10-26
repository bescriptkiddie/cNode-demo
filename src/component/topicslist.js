import React from 'react';
import {List, Col, Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import TopicTag from './topicTag';
import FromNow from './fromnow'

function TopicsList(props) {
    let {loading, data} = props;
    return <List className="topics_list"
                 loading={loading}
                 dataSource={data}
                 renderItem={(data) => {
                     console.log(data);
                     let {author, last_reply_at, good, top, tab, title, id} = data;
                     let {loginname, avatar_url} = author;
                     return <List.Item>
                         <Col xs={24}
                              md={20}
                         >
                             <Link to={`/user/${loginname}`}>
                                 <Avatar icon={<UserOutlined/>}
                                         src={avatar_url}
                                         className="topic_avatar"
                                     // onError={(error)=>{
                                     //     console.log(error);
                                     // }}
                                 />
                                 <TopicTag tab={top ? 'top' : (good ? 'good' : tab)}/>
                                 <Link to={`/topics/${id}`}>{title}</Link>
                             </Link>
                         </Col>


                         <Col className='topic_fromnow'
                              xs={0}
                              md={4}
                         >
                             <FromNow date={last_reply_at} />
                         </Col>
                     </List.Item>;
                 }}
    />;
}

export default TopicsList;
