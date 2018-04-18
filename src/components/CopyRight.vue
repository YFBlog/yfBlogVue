<template>
  <div class="copy-right">
      Copyright &copy; 2017-2018, YfBlog designed by XuYaofang,  All Right Reserved.
  </div>
</template>
<script>
export default {
  name: "CopyRight"
};
</script>
<style scoped>
.copy-right {
  width: 100%;
  padding: 1rem;
  /* 绝对定位，参考点是添加了定位属性的父标签，直到body,会把标签修改为行内块 */
  /* position: absolute; */
  left: 0;
  bottom: 0;
  color: #a9a9a9;
}
</style>