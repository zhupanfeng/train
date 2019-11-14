<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <ul>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader"
import {ajaxCategory} from "../../api/home"
export default {
  // create和mounted 都可以发起ajax请求
  created(){
        ajaxCategory().then(data=>{
            console.log(data)
        })
    },
  components: {
    HomeHeader
  }
}
</script>
