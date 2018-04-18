<template>
  <div class="header-bar">
      <slot name="left"></slot>
      <slot name="center"></slot>
      <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: "HeaderBar",
  data() {
    return {};
  }
};
</script>
<style scoped>
.header-bar {
  width: 100%;
  height: 40px;
  padding: 0.5rem 2rem;
  font-size: 1.8rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* flex-wrap: wrap */
  align-items: center;
  /* align-content: center; */
}
</style>


