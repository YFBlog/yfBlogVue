<template>
  <div class="not-found">
      <div class="container">
          <h1>抱歉,找不到该页面! <br><small>HTTP 404...</small></h1><hr>
          <img src="../assets/noFound.jpg" alt="图片加载异常，无法显示">
      </div>
  </div>
</template>
<script>
export default {
  name: "NotFound"
};
</script>
<style scoped>
.not-found {
  background-color: white;
  height: 100vh;
}
.container {
  padding-top: 2em;
  text-align: center;
}
img {
  width: 50%;
}
</style>


