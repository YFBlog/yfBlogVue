<template>
  <form class="navbar-form search-box">
    <div class="form-group input-group">
      <input type="text" v-model="search" class="form-control" placeholder="搜索博客、找人 ">
      <div class="input-group-addon" @click="searchHandle()">
        <span class="glyphicon glyphicon-search"></span>
      </div>
    </div>
  </form>
</template>
<script>
import bus from "../bus";
export default {
  name: "SearchBox",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchHandle() {
      bus.$emit("search", this.search);
    }
  }
};
</script>
<style scoped>
</style>


