<template>
  <div class="content">
    <div class="content-logo">
      <img src="@/assets/logo.png" />
      <span>今天一起去干什么呢？</span>
    </div>
    <div class="content-top">
      <div class="content-top-bottom">
        <div class="list">
          <div class="list-content" :style="'transform: translateY(' + trans + 'px)'">
            <div v-for="item in menu" :key='item' class="item">
              {{item}}
            </div>
          </div>  
        </div>        
      </div>
    </div>
    <div class="content-bottom">
      <a href="#" class="btn-3d blue" @click="selectFun()">点 击</a>
    </div>
  </div>
</template>

<script lang="ts">  
import { reactive, toRefs, onUnmounted } from 'vue';
import '../style/common/button.css'
interface DataProps {
  menu: string []; // 展示列表
  trans: number;
  timer: number;
  speed: number;
  circle: number;
  selectFun: (index: number) => void;
}
export default ({
  name: 'Home',
  setup() {
    const data: DataProps = reactive({
      menu: [
        "一起去看部最近评分高的电影吧",
        "叫上几个朋友玩下剧本杀鸭",
        "今天适合出去随便散散步", 
        "感觉可以呆在家吃着零食刷刷剧", 
        "不会真有人要去麦当劳吃一顿吧", 
        "这个选择就是让你再选一次", 
      ],
      trans: -204,
      timer: 0,
      speed: 5,
      circle: 5,
      selectFun: () => {

        const height = 40.8
        let index = 0, i = 0
        const select = Math.floor(Math.random()*6)
        data.timer = setInterval(() => {
          if (index < data.circle) {
            if (data.trans > 0) {
              data.trans = -204
              index++
              return
            }
            data.trans += data.speed
          } else {
            while(i++ < select) {
              data.trans += height
            }
          }
        }, 20)
      }
    })

    onUnmounted(() => {
      clearInterval(data.timer)
    })

    const refData = toRefs(data)

    return {
      ...refData
    }
  },
  mounted () {
    const menu = Array.from((this as any).$store.state.menuState)
    console.log(menu)
  }
});
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  height: 700px;
  .content-logo {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 50px;
    margin: 10px;
    display: flex;
    img {
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 20px;
      font-weight: 400;
      line-height: 50px;
      margin-left: 10px;
      color: #42b983;
    }
  }
  .content-top {
    width: 100%;
    height: 70%;
    background: url('../assets/bg.png') no-repeat;
    background-size: 800px 155%;
    background-position: 50% 22%;
    .content-top-bottom {
      width: 100%;
      float: bottom;
      padding-top: 300px;
      .list {
        width: 100%;
        height: 42.8px;
        overflow: hidden;
        .list-content {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .item {
            width: 50%;
            padding: 10px;
            text-align: center;
          }
        }
      }
    }
  }
  .content-bottom {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>