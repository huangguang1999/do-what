<template>
  <nav class="content-nav">
    <a-dropdown>
      <a class="ant-dropdown-link" @click="e => e.preventDefault()"> <AlignRightOutlined /> <DownOutlined /> </a>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item>
            <a href="javascript:;"><router-link to="/">主页信息</router-link></a>
            <a href="javascript:;"><router-link to="/menu">列表修改</router-link></a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </nav>
</template>

<script lang="ts">
import { AlignRightOutlined } from '@ant-design/icons-vue'
export default ({
  components: {
    AlignRightOutlined
  }
})
</script>

<style lang="scss" scoped>
.content-nav {
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px 20px 0 0;
  font-size: 16px;
}
</style>