// 用户相关的接口

import axios from "../libs/ajaxRequest"

// 调用获取用户信息的接口，向外暴露getUser方法，调用这个方法即调用了接口
export const getUser=()=>{
    return axios.request({
        url:'user',
        method:'get'
    })
}

// 登录
export const login=(username)=>{
    return axios.request({
        url:'/login',
        method:'post',
        data:{
            username
        }
    })
}

export const validate=()=>{
    return axios.request({
        url:'/validate',
        method:'get',
    })
}