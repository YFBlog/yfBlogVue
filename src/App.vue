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
#app {
  width: 100%;
  /* height: 100vh; */
  /* background-color: #8E8CD8; */
  /* background-color: #AAAAAA; */
  
}
h1 {
  margin: 0;
}
a:hover{
  text-decoration-line: none;
}
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
