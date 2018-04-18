<template>
  <div class="login container">
    <div class="row">
      <div class="col-lg-5 col-md-5 col-sm-5 img">
        <img src="../../assets/login1.jpg" alt="图片加载异常，无法显示">
      </div>
      <div id="login" class="col-lg-4 col-md-5 col-sm-5">
        <h2>账号登录</h2>
        <hr>
        <!-- action="http://localhost:4000/user/login" method="post" -->
        <form class="" @submit.prevent="submit(user)">
          <div class="form-group">
            <div class="input-group has-success">
              <label for="username" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></label>
              <input type="text" class="form-control" id="username" placeholder="请输入用户名/邮箱/手机号" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" v-model="user.username" required>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group has-success">
              <label for="password" class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" pattern="^[\w!@#$￥%&]{6,12}$" v-model="user.password" required>
            </div>
          </div>
          <check-code class="has-success">
              <input type="text" id="checkcode" class="form-control" placeholder="请输入验证码" v-model="checkCode" required>
          </check-code>
          <div class="form-group">
            <span>
              <input type="checkbox" v-model="rempwd">
              记住密码
            </span>
            <span class="pull-right">
              <router-link to="/forget">
              忘记密码？
              </router-link>
            </span>
          </div>
          <div class="form-group text-center">
            <input class="submit btn btn-success" type="submit" value="登录">
          </div>
          <div class="form-group">
            <p>
              还没有博客账号？立即
              <router-link to="/user/register">注册</router-link>
            </p><hr>
            <h5>第三方账号登录</h5>
            <div class="third-party">
              <router-link to="user/login/qq"><span class="btn btn-info fa fa-qq"></span></router-link>
              <router-link to="user/login/weixin"><span class="btn btn-success fa fa-weixin"></span></router-link>
              <router-link to="user/login/weibo"><span class="btn btn-danger fa fa-weibo"></span></router-link>
            </div>
          </div>
        </form>
        <copy-right></copy-right>
      </div>
    </div>
    <!-- row -->
  </div>
</template>
<script>
import HeaderBar from "../HeaderBar";
import CopyRight from "../CopyRight";
import CheckCode from "../CheckCode";
import axios from "axios";
export default {
  name: "Login",
  components: {
    HeaderBar,
    CopyRight,
    CheckCode
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      checkCode: "",
      rempwd: true,
      holdtime: ""
    };
  },
  mounted: function() {
    this.user = $.cookie();
  },
  methods: {
    submit: function(user) {
      console.log(user);
      if (this.checkCode == this.$store.state.checkCode) {
        axios
          .post("http://localhost:4000/user/login", user)
          .then(
            function(res) {
              if (res.data.code == 1) {
                if (this.rempwd == true) {
                  this.holdtime = 7;
                } else {
                  this.holdtime = "";
                }
                // expires:存储时间
                $.cookie("username", this.user.username, {
                  expires: this.holdtime
                });
                $.cookie("password", this.user.password, {
                  expires: this.holdtime
                });
                $.cookie("nickname", this.user.username);
                location.href = "/#/user/home";
              } else {
                alert(res.data.message);
                this.user = {};
              }
            }.bind(this)
          )
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("验证码输入有误，请重新输入");
        this.checkCode = "";
      }
    }
  }
};
</script>
<style scoped>
.login {
  width: 100%;
}
div.row {
  display: flex;
  justify-content: space-between;
  height: 100vh;
}
img {
  width: 100%;
  height: 100%;
}
#login {
  padding-top: 30px;
}
#login > form {
  width: 100%;
}
form .submit {
  width: 100%;
}
.third-party .btn {
  width: 25px;
  height: 25px;
  padding: 0.8px 3px;
  margin: 1px 5px;
  border-radius: 50%;
  font-size: 1.2em;
}
div.copy-right{
  position: absolute;
}

@media screen and (max-width: 768px) {
  h2 {
    width: 100%;
    position: fixed;
    background-color: #5cb85c;
    left: 0;
    top: 0;
    margin: 0;
    padding: 10px;
    color: white;
    text-align: center;
  }
  .row {
    padding: 0 10px;
  }
  div.img {
    display: none;
  }
  #login {
    width: 320px;
    padding: 30px 0 0 0;
  }
}
</style>


