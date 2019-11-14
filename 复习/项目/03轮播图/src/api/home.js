// 封装首页中的一些请求方法
import axios from "../utils/axiosRequest"

// 封装电影分类的方法
export const ajaxCategory = ()=>{
    return axios.request({
        url:"/category"
    })
}
// 封装获取轮播图的方法
export const ajaxSlides= ()=>{
    return axios.request({
        url:"/slides"
    })
}