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
    <!-- 滚动区域 -->
    <!-- {{movieList}} -->
    <div class="home-wrapper">
      <cube-recycle-list
        class="list"
        ref="list"
        :size="size"
        :on-fetch="onAjax"
        :offset="offset"
      >
        <template
          slot="item"
          slot-scope="{ data }"
        >
          <!-- {{data}} -->
          <div
            :id="data.id"
            class="item"
          >
            <h2 style="font-weight:bold;text-align:center">{{data.title}}</h2>
            <img
              :src="data.pic"
              alt=""
            >
            <p style="text-align:center">{{data.info}}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
  </div>
</template>

<script>
import * as types from "../../store/actions-type";
import HomeHeader from "./HomeHeader";
import { ajaxMovieList } from "@/api/home";
import { createNamespacedHelpers } from "vuex";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home");
export default {
  data() {
    // 放在data中的数据是可以被侦测，如果页面上有一些数据不想被侦测，可以放在create中
    return {
      size: 3, //一次加载多少
      // movieList:[],
      offset: 100 //底部拉取距离
    };
  },
  created() {
    this.offsetIndex = 0; //不放在data中就不会被侦测到
    this.hasMore = true; //后面还有数据
  },
  methods: {
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES]),
    ...mapMutations([types.SET_CURRENT_MOVIE]),
    change(value) {
      // console.log(value[0])
      this[types.SET_CURRENT_MOVIE](value[0]);

      this.hasMore = true; //点击菜单时，把hasMore置为true
      this.offsetIndex = 0; //点击菜单时把偏移量置为0
      this.$refs.list.reset(); //清空列表
    },
    // 定义一个方法，用来获取电影数据
    async onAjax() {
      if (this.hasMore) {
        let { result, hasMore } = await ajaxMovieList(
          this.size,
          this.offsetIndex
        );
        this.hasMore = hasMore;
        this.offsetIndex = this.offsetIndex + result.length;
        // this.movieList=result;

        return result;
      } else {
        return false;
      }
    }
  },
  computed: {
    ...mapState(["categories", "slides"])
  },
  // 激活钩子 再次返回时调用
  activated(){
    let position=sessionStorage.getItem("position")||0
    this.$refs.list.$el.scrollTop=position
  },
  deactivated(){},
  mounted() {
    this[types.SET_CATEGORIES]();
    this[types.SET_SLIDES]();
    // console.log(this.$refs.list.$el)
    // 注册一个滚动事件 事件源为整个列表
    let timer;
    this.$refs.list.$el.addEventListener("scroll", e => {
      // console.log(e.target.scrollTop)//得到滚动距离 每次都触发
      // 可以加防抖
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // console.log(e.target.scrollTop);
        // 保存高度
        sessionStorage.setItem("position",e.target.scrollTop)
      }, 75);
    });
  },
  components: {
    HomeHeader
  }
};
</script>
<style lang="stylus" scoped>
// img{
// width 100%
// max-width 100%
// }
.home {
  &-slide {
    width: 100%;
    height: 150px;
  }

  &-wrapper {
    height: calc(100vh - 300px); // 滚动区域高度
    width: 80%;
    margin: 0 auto;

    .item {
      display: flex;
      flex-direction: column;
      border: 2px solid #cccccc;
      margin: 10px;
      justify-content: center;
      height: 250px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
