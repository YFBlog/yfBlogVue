<template>
    <div class="go-top">
        <span class="fa fa-arrow-up" @click="goTopHandle()"></span>
    </div>
</template>
<script>
export default {
  name: "GoTop",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    goTopHandle() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }
};
</script>
<style scoped>
.go-top {
  position: fixed;
  bottom: 0;
  right: 50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 8px 10px;
  font-size: 25px;
  font-weight: 400;
}
</style>

