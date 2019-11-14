// 管理home页的状态
import {ajaxCategory,ajaxSlides} from "@/api/home.js"
import * as types from "../actions-type"

export default{
    namespaced:true,//仅允许home组件使用
    state:{
        categories:[],//存放分类信息
        currentMovie:-1,//当前分类
        slides:[],//轮播图的状态
    },
    mutations:{
        [types.SET_CATEGORIES](state,payload){
            // 给categories赋数据
            state.categories=payload;
        },
        [types.SET_SLIDES](state,slides){
            state.slides=slides;
        },
        [types.SET_CURRENT_MOVIE](state,currentMovie){
            state.currentMovie=currentMovie;
        }
    },
    actions:{
        async [types.SET_CATEGORIES]({commit}){
            let cgs=await ajaxCategory();
            commit(types.SET_CATEGORIES,cgs)
        },
        async [types.SET_SLIDES]({commit}){
            let slides=await ajaxSlides();
            commit(types.SET_SLIDES,slides)
        }
    },
}