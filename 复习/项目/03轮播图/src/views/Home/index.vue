<template>
  <div class="home">
    <!-- 首页头部 -->
    <HomeHeader
      :categories="categories"
      @change="change"
    ></HomeHeader>
    <!-- {{categories}} -->
    <!-- 轮播图 -->
    <div>
      <cube-slide :data="slides" />
    </div>

  </div>
</template>

<script>
import * as types from "../../store/actions-type";
import HomeHeader from "./HomeHeader";
import { ajaxCategory } from "@/api/home";
// import {mapActions, mapState} from "vuex"
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");
export default {
  methods: {
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(value) {
      // console.log(value[0])
      this[types.SET_CURRENT_MOVIE](value[0]);
    }
  },
  computed: {
    ...mapState(["categories", "slides"])
  },
  mounted() {
    this[types.SET_CATEGORIES]();
    this[types.SET_SLIDES]();
  },
  components: {
    HomeHeader
  }
};
</script>
<style lang="stylus" scoped>
.cube-slide {
  width: 100%;
  height: 200px;
}
</style>
