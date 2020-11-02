<template>
  <div class="content">
    
    <div class="content-logo">
      <img src="@/assets/logo.png" />
      <span>{{title}}</span>
    </div>
    <div class="content-top">
      <div class="content-top-bottom">
        <div class="list">
          <div class="list-content" :style="'transform: translateY(' + trans + 'px)'">
            <div v-for="item in menu" :key='item' class="item">
              ------ {{item}} ------
            </div>
          </div>  
        </div>        
      </div>
    </div>
    <div class="content-bottom">
      <a-button 
        type="primary" 
        @click="selectFun()"
        size="large" >
        点 击
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">  
import { reactive, toRefs, onUnmounted } from 'vue';
import { useStore } from 'vuex';
interface DataProps {
  menu: string []; // 展示列表
  trans: number;
  timer: number;
  title: string;
  selectFun: (index: number) => void;
}
export default ({
  name: 'Home',
  setup() {
    const store = useStore()
    const data: DataProps = reactive({
      menu: [],
      trans: 0,
      timer: 0,
      title: '',
      selectFun: () => {
        let speed = 1 // 速度
        const circle = 5 // 转动圈数
        const height = 41.6 // 每个item的高度
        const allHeight = height * (data.menu.length - 1) // 所有item的高度
        let index = 0
        const select = Math.floor(Math.random()*data.menu.length)
        const selectLength = select * height
        data.timer = setInterval(() => {
          // if判断最后一圈停下来
          if (index < circle) {
            if (Math.abs(data.trans) >= allHeight) {
              data.trans = 0
              index++              
            } else {
              if (speed < 5) {
                data.trans -= speed
                speed += 0.01
              } else {
                data.trans -= speed
              }
            }
          } else {
            if (Math.abs(data.trans) >= selectLength) {
              speed = 1
              return             
            } else {
              if (speed >= 1) {
                data.trans -= speed
                speed -= 0.1
              } else {
                data.trans -= speed
              }
            }
          }
        }, 16)
      }
    })
    data.menu = Array.from(store.state.menuState)
    data.title = store.state.title

    onUnmounted(() => {
      clearInterval(data.timer)
    })

    const refData = toRefs(data)

    return {
      ...refData
    }
  }
});
</script>

<style scoped lang='scss'>
.content {
  width: 100%;
  height: 700px;
  margin: 0 auto;
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
    background: url('../../assets/bg.png') no-repeat;
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
            overflow: hidden;
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