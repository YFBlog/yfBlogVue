<template>
  <div class="admin-home">
    <!-- navbar-fixed-top:固定在顶部 -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <div role="navigation">
            <a href="/#/admin/home" class="navbar-brand">
              <!-- <img src="../../assets/logo.png" alt="Brand" style="width:20px;display:inline-block"> -->
              YFBLOG后台管理
            </a>
          </div>
          <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#admin-navbar-collapse" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <!-- <span class="glyphicon glyphicon-menu-hamburger"></span> -->
          </button>
        </div>
        <div class="collapse navbar-collapse" id="admin-navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a>
                <span class="glyphicon glyphicon-volume-up"></span>
                系统通知
              </a>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span class="glyphicon glyphicon-user"></span>
                {{adminname}} 
              </a>
              <!-- dropdown:向下弹出；dropup:向上弹出; 默认左对齐 添加.dropdown-menu-right:右对齐-->
              <ul class="dropdown-menu dropdown-menu-right">
                <li><a>
                  <span class="fa fa-id-card"></span>
                  <span> 个人资料</span>
                  </a>
                </li>
                <li><a>
                  <span class="fa fa-cog"> </span>
                  <span> 修改密码</span>
                  </a>
                </li>
                <!-- <li><a href="">换肤</a></li> -->
                <li role="separator" class="divider"></li>
                <li @click="adminExit()">
                  <a>
                  <span class="fa fa-power-off"> </span>
                  <span>退出</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="home">
      <aside>
        <div><img src="../../assets/default_header.jpg" alt=""></div>
        <ul>
          <li @click="page='user'"><i class="glyphicon glyphicon-th-large"></i>用户管理</li>
          <li @click="page='blog'"><i class="fa fa-weibo"></i>博客管理</li>
        </ul>
      </aside>
      <manage-user class="main" v-show="page=='user'"></manage-user>
      <manage-blog class="main" v-show="page=='blog'"></manage-blog>
    </div>
    <!-- <div class="home" style="width:500px;margin:0 auto;">
      <manage-user></manage-user>
    </div> -->
  </div>
</template>
<script>
import ManageUser from "./ManageUser";
import ManageBlog from "./ManageBlog";
export default {
  name: "AdminHome",
  components: {
    ManageUser,
    ManageBlog
  },
  data() {
    return {
      isLogin: false,
      adminname: "",
      page: "user"
    };
  },
  mounted: function() {
    if ($.cookie("adminname")) {
      this.adminname = $.cookie("adminname");
      this.isLogin = true;
    } else {
      this.isLogin = false;
      $("div.admin-home").html(
        '<h4>请先<a href="/#/admin/login">登录</a>...</h4>'
      );
    }
  },
  methods: {
    adminExit: function() {
      $.removeCookie("adminname");
      location.href = "/#/admin/login";
    }
  }
};
</script>
<style scoped>
.admin-home{
  height: 100vh;
}
nav {
  border-top: 2px solid #2f4050;
}
div.home {
  height: 100vh;
  margin-top: 40px;
  display: flex;
}
.home aside {
  width: 20%;
  height: 100%;
  background-color: #2f4050;
}
.home aside ul > li {
  color: #ffffff;
  font-weight: 600;
  padding: 14px 20px 14px 25px;
  /* border-left: 4px solid #19aa8d; */
  background: #293846;
}
.home aside ul > li:hover{
  color: aliceblue;
  border-left: 4px solid #19aa8d;

}
.home aside ul > li i{
  margin-right: 10px;
}
.home aside img {
  width: 50px;
  border-radius: 50%;
  text-align: center;
  margin: 40px 30px 30px; 
}
.home .main{
  margin-top: 10px;


}
</style>