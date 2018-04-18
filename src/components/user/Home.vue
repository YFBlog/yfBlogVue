<template>
  <div class="home">
    <!-- default:默认 inverse:反色 navbar-fixed-top:固定在顶部-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div role="navigation">
          <a href="" class="navbar-brand"><span class="glyphicon glyphicon-book"></span> YFBLOG</a>
        </div>
        <ul class="nav navbar-nav navbar-left">
          <li><a href=""><span class="fa fa-user"></span> 个人中心</a></li>
          <li><a href=""><span class="fa fa-home"></span> 我的主页</a></li>
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group input-group">
            <input type="text" class="form-control" placeholder="Search">
            <div class="input-group-addon">
              <span class="glyphicon glyphicon-search"></span>
            </div>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href=""><span class="fa fa-bell"></span>
          公告</a></li>
          <li v-show="isLogin==true" class="dropdown">
            <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span><img src="../../assets/user1.jpg" alt="" style="width:20px"></span>
            {{nickname}}
            <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href=""><span class="fa fa-reddit"></span> 个人资料</a></li>
              <li><a href=""><span class="fa fa-gear"></span> 设置</a></li>
              <!-- <li><a href=""><span class="fa fa-user"></span>换肤</a></li> -->
              <li role="separator" class="divider"></li>
              <li @click="exitHandle()"><a><span class="fa fa-power-off"></span> 退出</a></li>
            </ul>
          </li>
          <li v-show="isLogin==false" style="display:flex;align-items: center;">
            <!-- style="display:inline-block" -->
            <router-link to="/user/login">登录</router-link>|
            <router-link to="/user/register">注册</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>

    <ul>
          <li><a href=""><span></span></a></li>
          <li><a href=""><span>博客</span></a></li>
          <li><a href=""><span>留言</span></a></li>
        </ul>
        <!-- 导航条 -->
      <nav>
          他的主页/他的博客/他的留言
          我的主页/我的博客/我的留言
          搜索框
          用户名/退出
          登录/注册
      </nav>
      <!-- 个人主页 -->
      <div>
          左侧：头像用户名
          右侧：默认用户主页（左侧:关注、被关注、博客数目，右侧：博客）/他的微博内容/他的留言
      </div>
      div>ul>li{#000}*1000
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <a href="" class="blog-nav-item active">主页</a>
          <a href="" class="blog-nav-item">分类</a>
          <a href="" class="blog-nav-item">留言</a>
          <a href="" class="blog-nav-item">关于我</a>
          <a href="" class="blog-nav-item">还是</a>
        </nav>
      </div>
    </div>
       
      
 
      
      <br>
      <hr>
      <search-box></search-box>
  </div>
</template>
<script>
import axios from "axios";
import SearchBox from "../SearchBox";

export default {
  name: "Home",
  components: {
    SearchBox
  },
  data() {
    return {
      isLogin: false,
      nickname: ""
    };
  },
  mounted: function() {
    if ($.cookie("nickname")) {
      this.nickname = $.cookie("nickname");
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    exitHandle: function() {
      $.removeCookie("nickname");
      location.reload();
    }
  }
};
</script>
<style scoped>

@media screen and (max-width: 768px){
  .home{
    width: 800px;
  }

}

</style>