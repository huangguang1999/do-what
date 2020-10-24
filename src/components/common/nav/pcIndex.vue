<template>
  <div id="nav">
    <router-link to="/home">主页</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
</template>

<style lang="scss" scoped>

#nav {
  height: 40.8px;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #ddd;
  a {
    height: 40.8px;
    line-height: 40.8px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 0 20px;
  }
  a:nth-of-type(1) {
    border-right: 1px solid #42b983;
  }
  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>