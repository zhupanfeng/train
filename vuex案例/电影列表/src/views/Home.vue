<template>
    <div class="home">
        <button @click="f">热门电影</button>
       <div v-for="(item) in msg" :key="item.id" class="title">
           <img :src="item.poster" alt="">
           <div class="detail">
                <p>{{item.name}}</p>
                <p>观众评分：{{item.grade}}</p>
                <p>主演：{{item.director}}</p>
                <span>{{item.nation}}</span>
                |
                <span>{{item.runtime}}分钟</span>
           </div>
       </div>
    </div>
</template>
<script>
    import axios from "axios"
    import {constants} from 'crypto'
    export default{
        data(){
            return{
                  msg:""

            }
        },
        methods:{
            f(){
               axios.get("https://www.easy-mock.com/mock/5d3f98e7eaf09a2873a09d22/films/films")
                .then(res=>{
                    //  console.log(res.data.data.films)
                      this.msg=res.data.data.films.map(item=>item)
                })
                .catch(err=>{
                     console.log(err)
                })
            }
        }
    }
</script>
<style>
    .title{
        display: flex;
        margin: 10px 10px;
        width: 300px;
        height: 100px;
        /* background-color:gainsboro; */
    }
     img{
         height: 100px;
         width: 80px;
     }  
     .detail{
         margin-left:25px; 
         width: 200px;
         height: 100px;
         background-color: white;
     }
     p{
         font-size: 12px;
         height: 10px;
     }
     span{
         font-size: 12px;
     }
    
</style>
