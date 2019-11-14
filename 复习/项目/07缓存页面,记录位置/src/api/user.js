import axios from "../utils/axiosRequest"

// 封装登录的方法
export const login= (user)=>{
    return axios.request({
        url:"/login",
        methods:"POST",
        data:user
    })
}