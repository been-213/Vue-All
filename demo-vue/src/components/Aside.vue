<template>
  <main>
    <div class="outer">
      <router-link id="tit" to="/">Demo for Been</router-link>
      <div class="Nav">
        <ul>
          <li>
            <router-link to="/todolist">To do list</router-link>
          </li>
          <li>
            <router-link to="/JSONP">Baidu JSONP</router-link>
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
    name: 'Aside'
}
</script>

<style scoped>
main {
  height: 900px;
}
#tit {
  font-weight: bolder;
}
ul {
  list-style-type: none;
}
</style>