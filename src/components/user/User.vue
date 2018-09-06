<template>
  <div class="user" @changePage="changePage">
    <!-- 主页导航栏 -->
    <!-- default:默认 inverse:反色 navbar-fixed-top:固定在顶部-->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#user-navbar-collapse" aria-expanded="false">
            <span class="glyphicon glyphicon-user"></span>
          </button>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-navbar-collapse" aria-expanded="false">
            <span class="glyphicon glyphicon-menu-down"></span>
          </button>
          <div role="navigation">
            <a href="/#/user/home" class="navbar-brand yfblog">
            <div class="weibo_logo"><img src="../../assets/weibo_logo.png" alt=""></div>
            <!-- <span class="fa fa-weibo"></span> -->
            <!-- <span class="fa fa-yelp"></span> -->
            <!-- <span class="glyphicon glyphicon-book"></span> -->
            YFBLOG
            </a>
          </div>
        </div>
        <div class="collapse navbar-collapse navbar-left" id="menu-navbar-collapse">
          <ul class="nav navbar-nav menu menu-bar">
            <li @click="page='home'" :class="page=='home'?'actives':''"><a href="/#/user/home"><span class="fa fa-home"></span> 首页</a></li>
            <li @click="page='personal'" :class="page=='personal'?'actives':''"><a href="/#/user/personal"><span class="fa fa-user-o"></span> 个人中心</a></li>
            <li @click="page='addblog'" :class="page=='addblog'?'actives':''"><a href="/#/user/addblog"><span class="fa fa-weibo"></span> &nbsp;博客</a></li>
            <li class="hidden-sm"><search-box></search-box></li>
          </ul>
        </div>
        <div class="collapse navbar-collapse navbar-right" id="user-navbar-collapse">
          <ul class="nav navbar-nav menu">
            <li><a href=""><span class="fa fa-bell"></span> 公告</a></li>
            <li v-show="isLogin==true" class="dropdown">
              <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <img src="../../assets/user1.jpg" alt="" style="width:20px">
                {{nickname}} <span class="caret"></span>
              </a>
              <!-- <transition name="fade" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
              <ul class="dropdown-menu">
                <li><a href="/#/user/personal"><span class="fa fa-reddit"></span> 个人资料</a></li>
                <li><a href=""><span class="fa fa-gear"></span> 设置</a></li>
                <li role="separator" class="divider"></li>
                <li @click="exitHandle()"><a><span class="fa fa-power-off"></span> 退出</a></li>
              </ul>
              <!-- </transition> -->
            </li>
            <li v-show="isLogin==false" style="display:flex;align-items: center;">
              <router-link to="/user/login">登录</router-link>|
              <router-link to="/user/register">注册</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import GoTop from "../GoTop";
import SearchBox from "../SearchBox";

export default {
  name: "User",
  components: {
    SearchBox
    // GoTop,
  },
  data() {
    return {
      isLogin: false,
      nickname: "",
      page: "home"
    };
  },
  mounted: function() {
    this.page = this.$store.state.page;
    // 判断是否是个人中心  是：显示   否：显示请先登录
    if ($.cookie("nickname")) {
      this.nickname = $.cookie("nickname");
      this.isLogin = true;
      // this.$store.commit('changePage','home');
      this.$store.commit("getName", $.cookie("nickname"));
      axios
        .post("/getId", { username: $.cookie("nickname") })
        .then(res => {
          this.$store.commit("getId", res.data.id);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.isLogin = false;
    }
    // console.log($route);
  },
  methods: {
    exitHandle: function() {
      $.removeCookie("nickname");
      location.href = "/";
    },
    changePage(data) {
      console.log(data);
      console.log("监听到修改页面");
    }
  }
};
</script>
<style scoped>
.user {
  width: 100%;
  min-height: 100vh;
  padding: 50px 0 20px;
  background-image: url("../../assets/body_bg_page.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
nav {
  border-top: 2px solid #fa7d3c;
}
nav ul.menu-bar li span.fa {
  font-size: 20px;
}
nav ul.menu li a {
  font-size: 16px;
}
nav ul.menu li a:hover {
  color: #f66518;
}
nav ul.menu li.actives a {
  color: #fa7d3c;
}
a.yfblog {
  font-style: italic;
}
a.yfblog .weibo_logo {
  display: inline-block;
  width: 36px;
  vertical-align: middle;
  overflow: hidden;
}
a.yfblog > .fa {
  font-size: 1.2em;
  padding: 0 5px;
  color: #f66518;
}
.main {
  width: 80%;
  min-width: 320px;
  margin: 0 auto;
}
</style>