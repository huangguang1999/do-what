import { createStore } from 'vuex'

export default createStore({
  state: {
    menuState: [
      "一起去看部最近评分高的电影吧",
      "叫上几个朋友玩下剧本杀鸭",
      "今天适合出去随便散散步", 
      "感觉可以呆在家吃着零食刷刷剧", 
      "不会真有人要去麦当劳吃一顿吧", 
      "这个选择就是让你再选一次0.0",
      "走路去附近的餐馆看看有啥好吃的",
      "点杯奶茶犒劳下自己~",
      "好久没去吃韩餐了呢",
      "今天就去图书馆看几本世界名著！",
      "为什么不去学校逛逛呢",
      "呆在自己的窝里打几把游戏嗨一下",
      "冲冲冲冲冲冲冲冲冲冲冲冲",
      "打开平板里随意一个视频网站看部电影",
      "刷刷B站里的排行榜视频吧"
    ],
    title: '今天一起去干什么呢?'
  },
  mutations: {
    changeMenu: (state, value) => {
      state.menuState = value
    },
    changeTitle: (state, value) => {
      state.title = value
    }
  },
  actions: {
  },
  modules: {
  }
})
