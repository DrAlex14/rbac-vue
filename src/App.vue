<template>
  <div id="app">
    <div id="nav" style="background-color: #2c3e50">
      <h4>权限管理系统</h4>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6e7a86;
}

#nav {
  padding: 5px;
}

#nav a {
  font-weight: bold;
  color: #c7d0da;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
