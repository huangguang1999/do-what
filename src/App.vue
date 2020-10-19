<template>
  <div id="nav">
    <router-link to="/">主页</router-link>
    <router-link to="/mine">我的</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
export default ({
  name: 'App',
  mounted () {
    /**
     * PC端和移动端判断逻辑
     */
    // function isMobile() {
    //   return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    // }
    // function initRem() {
    //   const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375;
    //   window.document.documentElement.style.fontSize = `${100 * cale}px`;
    // }
    // function judgePage() {
    //   if(isMobile()) {
    //     window.location.hash = '/m'
    //     initRem()
    //   } else {
    //     window.location.hash = '/'
    //   }
    // }
    // judgePage()
  }
})
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
#nav {
  padding: 10px;
  position: fixed;
  top: 10px;
  right: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  background-color: rgba(220, 220, 220, 0.5)
}
</style>
