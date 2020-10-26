export default function topics(topics = {
    loading: true,
    data: [],
}, action) {
    // 1. 请求中 =>清空数据
    switch (action.type) {
        // 注意: reducer 没有前缀一说,最好命名的时候带前缀
        case 'topics_loading':
            // 返回一个对象,避免引用地址不相同,导致视图不更新
            return {
                loading: true,
                data: [],
            };
        case 'topics_loadover':
            return {
                loading: false,
                data: action.data,
            };
        default:
            return topics;
    }
}
