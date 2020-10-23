import { createStore } from 'vuex'

export default createStore({
  state: {
    menuState: [
      "一起去看部最近评分高的电影吧1",
      "叫上几个朋友玩下剧本杀鸭",
      "今天适合出去随便散散步", 
      "感觉可以呆在家吃着零食刷刷剧", 
      "不会真有人要去麦当劳吃一顿吧", 
      "这个选择就是让你再选一次11", 
      "一起去看部最近评分高的电影吧1",
      "叫上几个朋友玩下剧本杀鸭",
      "今天适合出去随便散散步", 
      "感觉可以呆在家吃着零食刷刷剧", 
      "不会真有人要去麦当劳吃一顿吧", 
      "这个选择就是让你再选一次112"
    ]
  },
  mutations: {
    changeMenu(state, value) {
      state.menuState = value
    }
  },
  actions: {
  },
  modules: {
  }
})
