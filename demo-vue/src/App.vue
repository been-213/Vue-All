<template>
  <main id="app">
    <el-container :style="styleObject" style="border: 1px solid #eee">
    <el-aside v-if="iHome">
      <Aside/>
  </el-aside>
    <el-main>
        <router-view id="Content" name="Content"></router-view>
    </el-main>
</el-container>


  </main>
</template>

<script>
import Aside from '@/components/Aside'

export default {
  name: 'app',
  components: {
    Aside
  },
  computed:{
    iHome:function() {
      return this.$route.path != '/'
    },
    styleObject: function () {
      return {
        height: window.innerHeight + 'px'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
