<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/movie">我的电影</router-link>
      <router-link to="/profile">个人中心</router-link>
    </div> -->
    <!-- <router-view /> -->
    <div class="container">
      <router-view />
    </div>
    <!-- tabbar -->
    <div class="footer">
      <cube-tab-bar
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="changeHandler"
      >
      </cube-tab-bar>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
          label: "首页",
          value: "/",
          icon: "cubeic-home"
        },
        {
          label: "我的电影",
          value: "/movie",
          icon: "cubeic-like"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "cubeic-person"
        }
      ]
    };
  },
  methods: {
    changeHandler(label) {
      // console.log(label)
      this.$router.push(label);
    }
  },
  watch:{
    $route:{
      handler(to,from){
        // console.log("new--->",newValue)
        //  console.log("old--->",oldValue)
        this.selectedLabelDefault=to.path;
      },
      immediate:true
    }
  }
};
</script>>

<style lang="stylus">
  html,body,#app{
    width 100%
    height 100%
  }
  #app{
    display flex
    flex-direction column
  }
  .container{
    flex 1
    overflow scroll
  }
  .footer{
    background-color #ccc
  }
  .cube-tab{
    i{
      font-size 25px
    }
  }
</style>
