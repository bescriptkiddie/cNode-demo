import axios from "axios";
import { useDispatch } from "react-redux";
const http = axios.create({
    baseURL: " https://cnodejs.org/api/v1"
});

// 获取主题列表数据
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        // 通过 dispatch与redux 相连
        dispatch({ // 发起请求
            type:"topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({ // 请求之后
                type:"topics_loadover",
                data:res.data.data
            })
        });
    }
}
export {useTopicsList}
