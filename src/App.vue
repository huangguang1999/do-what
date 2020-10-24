<template>
  <mNav v-if="flag" />
  <pcNav v-if="!flag" />
  <router-view/>
</template>

<script lang="ts">
import mNav from './components/common/nav/mIndex.vue'
import pcNav from './components/common/nav/pcIndex.vue'
import judgePcOrMoblie from './utils/judgePcOrMoblie'
import { ref } from 'vue'
export default ({
  name: 'App',
  components: {
    mNav,
    pcNav
  },
  setup() {
    const flag = ref(judgePcOrMoblie())
    return {
      flag
    }
  }  
})
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
}
</style>
