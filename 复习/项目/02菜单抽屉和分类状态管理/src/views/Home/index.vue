<template>
  <div class="home">
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
    {{categories}}
    <!-- <ul>
      <li>1</li>
    </ul> -->
  </div>
</template>

<script>
import *as types from "../../store/actions-type"
import HomeHeader from "./HomeHeader";
import { ajaxCategory } from "@/api/home";
// import {mapActions, mapState} from "vuex"
import { createNamespacedHelpers } from "vuex";
let {mapActions,mapState,mapMutations } = createNamespacedHelpers("home");
export default {
  // create和mounted 都可以发起ajax请求
  created() {
    // ajaxCategory().then(data=>{
    //     console.log(data)
    // })
    // 直接调用
    // this.$store.dispatch("home/setCategories")
  },

  // 直接映射 actions映射成方法 state映射成属性
  methods: {
    // ...mapActions('home',['setCategories'])
    ...mapActions([types.SET_CATEGORIES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(value){
      // console.log(value[0])
      this[types.SET_CURRENT_MOVIE](value[0])
    }
  },
  computed: {
    ...mapState(["categories"])
  },
  mounted() {
    this[types.SET_CATEGORIES]();
  },
  components: {
    HomeHeader
  }
};
</script>
