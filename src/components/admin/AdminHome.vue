<template>
  <div class="adminhome">
    <!-- navbar-fixed-top:固定在顶部 -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div role="navigation">
          <a href="" class="navbar-brand">
            <img src="../../assets/logo.png" alt="Brand" style="width:20px;display:inline-block">
            YFBLOG后台管理
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="">
              <span class="glyphicon glyphicon-volume-up"></span>
              系统通知
            </a>
          </li>
          <li class="dropdown">
            <a href="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              <span class="glyphicon glyphicon-user"></span>
              {{adminname}} 
            </a>
            <!-- dropdown:向下弹出；dropup:向上弹出; 默认左对齐 添加.dropdown-menu-right:右对齐-->
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="">
                <span class="fa fa-id-card"></span>
                <span> 个人资料</span>
                </a>
              </li>
              <li><a href="">
                <span class="fa fa-cog"> </span>
                <span> 修改密码</span>
                </a>
              </li>
              <!-- <li><a href="">换肤</a></li> -->
              <li role="separator" class="divider"></li>
              <li @click="adminExit()">
                <a href="/#/admin/login">
                <span class="fa fa-power-off"> </span>
                <span>退出</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "AdminHome",
  data() {
    return {
      isLogin: false,
      adminname: ""
    };
  },
  mounted: function() {
    if ($.cookie("adminname")) {
      this.adminname = $.cookie("adminname");
      this.isLogin = true;
    } else {
      this.isLogin = false;
      $("div.adminhome").html(
        '<h1>请先登录...</h1>在导航栏地址处输入:localhost:8080/admin &#x3000;或者点击<a href="/#/admin/login">登录</a>'
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

</style>