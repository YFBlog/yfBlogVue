<template>
  <div class="personal">
      <side-menu></side-menu>
      <profile class="personal-right"></profile>
  </div>
</template>
<script>
import axios from "axios";
import Profile from "../Profile";
import SideMenu from "./SideMenu";
export default {
  name: "Personal",
  components: {
    Profile,
    SideMenu
  },
  data() {
    return {
      nickname: "",
      imgFile: "",
      imgSrc: ""
    };
  }
};
</script>
<style scoped>
div.personal {
  width: 100%;
  padding: 5px;
  display: flex;
  background-color: rgba(255, 255, 255, .5);
  /* justify-content: space-around; */
  /* flex-wrap: wrap; */
}
.personal-right {
  width: 80%;
  min-width: 320px;
}

@media screen and (max-width: 768px) {
  .personal {
    padding: 0;
  }
  .personal-right {
    width: 100vw;
    min-width: 300px;
  }
}
@media screen and (max-width: 600px) {
  .personal {
    padding: 0;
  }
}
</style>


