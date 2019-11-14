// 管理home页的状态
import {ajaxCategory} from "@/api/home.js"
import *as types from "../actions-type"

export default{
    namespaced:true,//仅允许home组件使用
    state:{
        categories:[],//存放分类信息
        currentMovie:-1//当前分类
    },
    mutations:{
        [types.SET_CATEGORIES](state,payload){
            // 给categories赋数据
            state.categories=payload;
        },
        [types.SET_CURRENT_MOVIE](state,currentMovie){
            state.currentMovie=currentMovie;
        }
    },
    actions:{
        async [types.SET_CATEGORIES]({commit}){
            let cgs=await ajaxCategory();
            commit(types.SET_CATEGORIES,cgs)
        }
    }
}