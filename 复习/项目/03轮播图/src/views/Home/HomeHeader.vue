<template>
  <div class="header">
    <h1>这是一个Logo</h1>
    <span @click="showDrawer">菜单</span>

    <cube-drawer
      ref="drawer"
      title="请选择"
      :data="data"
      :selected-index="selectedIndex"
      @select="selectHandler"
    ></cube-drawer>
  </div>
</template>
<script>
export default {
  // $attrs
  props: {
    categories: {
      type:Array
    }
  },
  computed:{
      data(){
        //   return [this.categories]
          let allActive=[{text:"全部电影",value:-1}];
          return this.categories.length>0
          ?[[...allActive,...this.categories]] :[allActive]
      }
  },
  data() {
    return {
      selectedIndex: []
    };
  },
  methods: {
    showDrawer() {
      this.$refs.drawer.show();
    },
    // 确定点击了哪一个
      selectHandler(selectedVal, selectedIndex, selectedText) {
          // console.log(selectedVal)
        this.$emit("change",selectedVal)
    },
  }
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
  background-color: #ccc;
}
</style>