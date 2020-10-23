<template>
  <div class="content">
    <div class="content-table">
      <div class="item" v-for="(item, index) in menu" :key='item' @click="changeVal(index)">
        <span v-show="display[index]">{{item}}</span>
        <!-- TODO：input只能输入一次 -->
        <input v-show="!display[index]" v-model="menu[index]" @click.stop=""/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
export default ({
  name: 'Menu',
  setup() {
    const store = useStore()
    const menuState = Array.from(store.state.menuState)
    const menu = ref(menuState)
    const display = ref(new Array(menuState.length).fill(true))
    const generateClassName = (index: number) => {
      return `${index}`
    }
    const changeVal = (index: number) => {
      display.value[index] = !display.value[index]
      store.commit('changeMenu', menu.value)
    }
    return  {
      menu,
      changeVal,
      display,
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .content-table {
    margin-top: 100px;
    width: 500px;
    border-left: 1px solid #42b983;
    border-right: 1px solid #42b983;
    border-top: 1px solid #42b983;
    .item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid #42b983;
      transition: all .5s;
      span {
        display: inline-block;
        width: 100%;
        height: 50px;
        font-size: 20px;
      }
      span:hover {
        background-color: rgba($color: #42b983, $alpha: 0.2);
        cursor: pointer;
      }
      input {
        font-size: 20px;
        width: 300px;
        padding: 5px 0px;
        outline-style: none;
        border: 0px;
        border-radius: 5px;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
      }
    }
  }
}
</style>