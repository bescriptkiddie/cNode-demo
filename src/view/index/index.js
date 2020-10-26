import React, {useEffect} from 'react';
import IndexNav from './indexNav';
import TopicsList from '../../component/topicslist';
import {useSelector} from 'react-redux';
import {useTopicsList} from '../../store/action';
import {useLocation} from 'react-router-dom';
import IndexPagination from './indexPagination'
import qs from 'qs';

function IndexPage(props) {
    let {loading, data} = useSelector(state => state.topic); // useSelector 拿的是所有的state
    let getData = useTopicsList();
    let {search} = useLocation();
    let {tab, page} = qs.parse(search.substr(1));

    useEffect(() => {
        getData(tab, page);
    }, [tab, page]);
    return (<div>
        <IndexNav/>
        <TopicsList
            data={data}
            loading={loading}
        />
        <IndexPagination />
    </div>);
}

export default IndexPage;
