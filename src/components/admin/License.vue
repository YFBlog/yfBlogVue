<template>
  <div class="license container">
    <div>{{message}} <span>{{license}}</span></div>
    <div>
      返回
      <router-link to="/admin/register">注册</router-link>
      页面！
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "License",
  data() {
    return {
      license: "",
      message: ""
    };
  },
  mounted: function() {
    axios
      .get("http://localhost:4000/admin/register/license")
      .then(
        function(res) {
          if (res.data.code == 1) {
            this.license = res.data.message;
            this.message = "您好！你获取的注册码为：";
            this.$store.commit("license", res.data.message);
          } else {
            this.message = "";
            this.message = res.data.message;
          }
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.license > div {
  font-size: 3rem;
  margin: 50px auto;
}
.license span {
  color: tomato;
}
</style>


