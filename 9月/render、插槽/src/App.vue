<template>
  <div id="app">
      <List :data="['html','css','vue','node']" >
          <template v-slot="{item}">
            <p >{{item}}</p>
          </template>
      </List>
  </div>
</template>
<script>
import List from "./List"
export default {
  components:{List}
}
</script>