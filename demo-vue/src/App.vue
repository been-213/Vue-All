<template>
  <main id="app">
    <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <Aside/>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
    </el-header>
    
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
