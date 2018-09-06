<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
  // data
};
</script>

<style>
/***************初始化样式**********************/
#app {
  width: 100%;
  /* height: 100%; */
  height: 100vh;
  min-width: 320px;
  /* max-height: 100vh;
  overflow: scroll; */
}
h1 {
  margin: 0;
}
a {
  color: black;
}
a:hover {
  text-decoration: none;
}
a:focus {
  text-decoration: none;
}

ul {
  padding: 0;
}
li {
  list-style: none;
}
/* 定义登录注册输入框info样式 2823*/
.has-info .form-control {
  border-color: #478fca;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.has-info .form-control:focus {
  border-color: #0ca2cf;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #5bc0de;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #5bc0de;
}
.has-info .input-group-addon {
  color: #0c81a5;
  background-color: #bae6f3;
  border-color: #478fca;
}
.has-info .form-control-feedback {
  color: #0c81a5;
}
.btn-info {
  /* background-color: #79c7df;
  border: #6db3c9; */
}
@media screen and (max-width: 768px) {
  aside {
    display: none;
  }
}
</style>
