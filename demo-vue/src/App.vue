<template>
  <main id="app">
    <el-container>
    <el-aside v-if="iHome">
      <Aside/>
  </el-aside>
  
  <el-container>
    <el-main>
        <router-view id="Content" name="Content"></router-view>
    </el-main>
  </el-container>
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
}
</style>
