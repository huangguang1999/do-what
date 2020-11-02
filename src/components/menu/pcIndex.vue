<template>
  <div class="content">
    <section class="sectionTitle">
      <h1 class="content-title">主题信息</h1>
      <div class="content-table" @click="changeTitle()">
        <span class="item-span" v-show="displayTitle">{{title}}</span>
        <input v-show="!displayTitle" :value="title" @input="handleTitle($event)" @click.stop=""/>
      </div>
    </section>
    <section class="sectionList">
      <h1 class="content-title">列表信息</h1>
      <div class="content-add">
        <a-button type="primary" shape="circle" @click="addItem()">
          <template v-slot:icon><PlusOutlined /></template>
        </a-button>
      </div>
      <div class="content-table">
        <div class="item" v-for="(item, index) in menu" :key='item' @click="changeItem(index)">
          <span class="item-span" v-show="display[index]">{{item}}</span>
          <input v-show="!display[index]" :value="menu[index]" @input="handleItem($event, index)" @click.stop=""/>
          <CloseOutlined
            v-show="display[index]"
            :class="item-icon"
            @click.stop="deleteItem(index)" />
        </div>
      </div>      
    </section>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import { CloseOutlined, PlusOutlined } from '@ant-design/icons-vue'

export default ({
  name: 'Menu',
  components: {
    CloseOutlined,
    PlusOutlined
  },
  setup() {
    const store = useStore()
    const menuState = Array.from(store.state.menuState)
    const menu = ref(menuState)
    const title = ref(store.state.title)
    const display = ref(new Array(menu.value.length).fill(true))
    const displayTitle = ref(true)

    // 对某行进行显示/隐藏操作
    const changeItem = (index: number) => {
      display.value[index] = !display.value[index]
    }
    const changeTitle = () => {
      displayTitle.value = !displayTitle.value
    }

    // 对某行进行改操作
    const handleItem = (event: any, index: number) => {
      menuState[index] = event.target.value
      store.commit('changeMenu', menuState)
    }

    const handleTitle = (event: any) => {
      title.value = event.target.value
      store.commit('changeTitle', title.value)
    }

    // 对某行进行删除操作
    const deleteItem = (index: number) => {
      menu.value.splice(index, 1)
      store.commit('changeMenu', menu.value)
    }

    // 增加一行
    const addItem = () => {
      menu.value.push('这是一条新的行')
      store.commit('changeMenu', menu.value)
    }

    return  {
      menu,
      title,
      changeItem,
      display,
      displayTitle,
      handleItem,
      deleteItem,
      addItem,
      changeTitle,
      handleTitle
    }
  }
})
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  
  .sectionTitle {
    width: 100%;
    display: flex;
    justify-content: center;

    .content-title {
      width: 30px;  
      height: 96px;
      line-height: 24px;  
      font-size: 20px;
      color: #42b983;
      border-right: 2px dashed #42b983;
      transform: translate(-30px, 100px);
    }

    .content-table {
      margin: 100px 0 0 40px;
      width: 500px;
      max-height: 50px;
      border: 1px solid #42b983;
      text-align: center;

      span {
        display: inline-block;
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 20px;
      }


      input {
        font-size: 20px;
        width: 300px;
        outline-style: none;
        border: 0px;
        border-radius: 5px;
        margin: 8px auto;
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
      }
    }



  }
  .sectionList {
    width: 100%;
    display: flex;
    justify-content: center;
      

    .content-title {
      width: 30px;  
      height: 96px;
      line-height: 24px;  
      font-size: 20px;
      color: #42b983;
      border-right: 2px dashed #42b983;
      transform: translate(-30px, 150px);
    }
    .content-add {
      margin: 150px 10px 0 0;    
    }
    .content-table {
      margin: 150px 0;
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
        display: flex;
        .anticon {
          line-height: 50px;
          padding-right: 10px;
        }
        .item-span {
          display: inline-block;
          width: 100%;
          height: 50px;
          font-size: 20px;
        }
        input {
          font-size: 20px;
          width: 300px;
          outline-style: none;
          border: 0px;
          border-radius: 5px;
          margin: 10px auto;
          box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
        }
      }
      .item:hover {
        background-color: rgba($color: #42b983, $alpha: 0.2);
        cursor: pointer;
      }
    }
  }
}
</style>