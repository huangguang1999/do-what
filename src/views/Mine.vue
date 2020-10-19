<template>
  <div class="mine">
    <div class="mine-list">
      <router-link to="/menu"><div>列表信息</div></router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default({
  
})
</script>

<style lang="scss" scoped>
.mine {
  width: 100%;
  height: 100%;
  position: relative;
  .mine-list {
    position: absolute;
    top: 50%;
    left:50%;
    width: 500px;
    height: 400px;
    margin-top: 200px;
    margin-left: -250px;
    border: 1px solid #ccc;
    a {
      text-decoration: none;
      color: #42b983;
    }
    div {
      width: 100%;
      border-bottom: 1px solid #ccc;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      text-align: center;
      margin: 0;
      transition: all .5s;
    }
    div:hover {
      background-color: rgba($color: #42b983, $alpha: 0.2);
      cursor: pointer;
    }
  }
}
</style>