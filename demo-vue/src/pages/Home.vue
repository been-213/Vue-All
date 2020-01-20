<template>
  <main>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <p>Been's Demo</p>

      <div class="deli">
        <ul>
          <li>
            <router-link to="/todolist">ToDoList</router-link>
          </li>
          <li>
            <router-link to="/JSONP">JSONP</router-link>
          </li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    name:'Home'
}
</script>
<style scoped>
p{
  font-weight: bolder;
  font-size: 200%;
}
ul{
  list-style-type: none;
}
</style>
