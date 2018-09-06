<template>
  <div class="login">
    <caption-bar></caption-bar>
    <div class="login-in">
      <form class="" @submit.prevent="submit(user)">
        <h4><span class="fa fa-coffee"></span>
        请输入您的信息</h4>
        <div class="divide"></div>
        <div class="form-group">
          <div class="input-group has-info">
            <label for="username" class="input-group-addon"><span class="glyphicon glyphicon-user"></span></label>
            <input type="text" class="form-control" id="username" placeholder="请输入用户名/邮箱/手机号" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" v-model="user.username" required>
          </div>
        </div>
        <div class="form-group">
          <div class="input-group has-info">
            <label for="password" class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></label>
            <input type="password" class="form-control" id="password" placeholder="请输入密码" pattern="^[\w!@#$￥%&]{6,12}$" v-model="user.password" required>
          </div>
        </div>
        <check-code class="has-info">
            <input type="text" id="checkcode" class="form-control" placeholder="请输入验证码" v-model="checkCode" required>
        </check-code>
        <div class="form-group rempwd">
          <span>
            <input type="checkbox" v-model="rempwd">
            记住密码
          </span>
          <input class="submit btn btn-info" type="submit" value="登录">
        </div>
        <div class="third-party">
          <h4><span>第三方登录</span></h4>
          <div class="third-party">
            <router-link to="user/login/qq"><span class="btn btn-info fa fa-qq"></span></router-link>
            <router-link to="user/login/weixin"><span class="btn btn-success fa fa-weixin"></span></router-link>
            <router-link to="user/login/weibo"><span class="btn btn-danger fa fa-weibo"></span></router-link>
          </div>
        </div>
      </form>
      <div class="back">
        <router-link to="/forget">
          <i class="fa fa-arrow-left"></i>
          <strong>忘记密码</strong>
        </router-link>
        <router-link to="/user/register">
          <strong>注册</strong>
          <i class="fa fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import CaptionBar from "../CaptionBar";
import CheckCode from "../CheckCode";
import axios from "axios";
export default {
  name: "Login",
  components: {
    CaptionBar,
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
          .post("/user/login", user)
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
                location.href = "/";
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
  padding: 10px 5px;
}
.login-in {
  min-width: 320px;
  max-width: 360px;
  margin: 0 auto;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  overflow: hidden;
}
form {
  padding: 10px;
  background: #f7f7f7;
}
.login-in h4 {
  color: #478fca;
}
.login-in h4 .fa {
  color: #69aa46;
}
.divide {
  border: 0.7px solid #478fca;
  margin: 20px 0;
}
form .rempwd {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .rempwd > span > input {
  margin: 0;
  vertical-align: middle;
}
form .rempwd .submit {
  padding: 6px 25px;
}
.third-party {
  text-align: center;
}
.third-party h4 {
  position: relative;
}
.third-party h4 > span::before {
  content: "";
  width: 35%;
  position: absolute;
  top: 50%;
  left: 0;
  border-top: 1px dotted #a6c4db;
}
.third-party h4 > span::after {
  content: "";
  width: 35%;
  position: absolute;
  top: 50%;
  right: 0;
  border-top: 1px dotted #a6c4db;
}
.third-party .btn {
  width: 32px;
  height: 32px;
  padding: 3px 4px;
  margin: 1px 5px;
  border-radius: 50%;
  font-size: 1.2em;
}
.back {
  padding: 10px 15px;
  background-color: #5090c1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.back a {
  color: #fe9;
}
</style>


