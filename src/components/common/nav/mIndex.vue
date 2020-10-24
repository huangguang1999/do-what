<template>
  <div id="nav">
    <router-link to="/mHome">主页</router-link>
    <router-link to="/mMine">我的</router-link>
  </div>
</template>

<style lang="scss" scoped>

#nav {
  width: 100%;
  height: .6rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #42b983;
  display: flex;
  a {
    width: 100%;
    line-height: .6rem;
    text-align: center;
    font-size: .2rem;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
  }
  a:nth-of-type(1) {
    border-right: 1px solid #fff
  }
  a.router-link-exact-active {
    color: #fff;
  }
}
</style>