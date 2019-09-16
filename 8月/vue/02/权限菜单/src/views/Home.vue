<template>
    <div class="home">
        <el-menu default-active="2" class="el-menu-vertical-demo"  :router="true"  >
        <template v-for="m in menuList" >
            <ReSubMenu :data="m" :key="m.auth" v-if="m.children"></ReSubMenu>
            <el-menu-item v-else :key="m.auth" :index="m.path">{{m.name}}</el-menu-item>
        </template>
    </el-menu>
      <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import {mapState} from "vuex";
import ReSubMenu from "./ReSubMenu"
export default {
  name: "home",
  computed:{
    //   把store中的menuList映射过来
      ...mapState(['menuList'])
  },
  components:{
        ReSubMenu
    },
};
</script>