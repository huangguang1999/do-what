import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import judgePcOrMoblie from './utils/judgePcOrMoblie'

createApp(App).use(store).use(router).mount('#app')

router.beforeEach((to, from, next) => {
  // 当移动端试图访问pc端页面时
  if (judgePcOrMoblie() && to.meta.type !== 'm') {
    const routers = router.options.routes.filter(item => item.name && (item as any).name.charAt(0) === 'm')
    const path = routers.filter(item => (item as any).name.slice(1) === to.name)[0].path
    if (path) {
      next(path)
    } else {
      next('/')
    }
  }
  // 当pc端试图访问移动端页面时
  if (!judgePcOrMoblie() && to.meta.type !== 'pc') {
    const routers = router.options.routes
    const path = routers.filter(item => item.name === (to as any).name.slice(1))[0].path
    if (path) {
      next(path)
    } else {
      next('/')
    }
  }
  next()
})

// 按端类型动态添加网页meta和使用三方插件
if (judgePcOrMoblie()) {
  const oMeta = document.createElement('meta')
  oMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0'
  oMeta.name = 'viewport'
  document.getElementsByTagName('head')[0].appendChild(oMeta)
  // 移动端适配
  const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * cale}px`
}

