import React from 'react';
import {Pagination} from 'antd';
import {Link} from 'react-router-dom';

function IndexPagination() {
    return <div className="index-pagination">
        <Pagination defaultCurrent={1} defaultPageSize={20} total={1000}
            // 每项里面的内容
            itemRender={(page,type) => {
                // console.log(page,type);
            }}
        />
    </div>;
}

export default IndexPagination;
