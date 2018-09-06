<template>
  <div class="register">
    <caption-bar></caption-bar>
    <div class="login-up">
      <form class="form" @submit.prevent="submit()">
        <h4><span class="fa fa-users"></span> 用户注册</h4>
        <div class="divide"></div>
        <div class="username form-group">
          <div class="input-group" :class="isUsernameSuccess">
            <label for="username" class="input-group-addon">
              <span class="glyphicon glyphicon-user"></span>
            </label>
            <!-- v-model.trim:自动忽略前后空格 -->
              <!--   -->
            <input type="text" class="form-control" id="username" placeholder="请输入用户名/邮箱/手机号" required name="username" v-model.lazy="username" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$">
            <span class="glyphicon form-control-feedback" :class="isUsernameOk" aria-hidden="true"></span>
          </div>
          <small>{{usernameHint}}</small>
        </div>
        <div class="password form-group">
          <div class="input-group" :class="isPwdSuccess">
            <label for="password" class="input-group-addon">
              <span class="glyphicon glyphicon-lock"></span>
            </label>
            <input type="password" class="form-control" id="password" placeholder="请输入密码" required name="password" pattern="^[\w!@#$￥%&]{6,12}$" v-model.lazy="password">
            <span class="glyphicon form-control-feedback" aria-hidden="true" :class="isPwdOk"></span>
          </div>
          <small>{{passwordHint}}</small>
        </div>
        <div class="confirm form-group">
          <div class="input-group" :class="confirm?isConfirmSuccess:'has-success'">
            <label for="confirm" class="input-group-addon">
              <span class="glyphicon glyphicon-check"></span>
            </label>
            <input type="password" class="form-control" id="confirm" placeholder="请确认密码" required pattern="^[\w!@#$￥%&]{6,12}$" v-model.lazy="confirm">
            <span class="glyphicon form-control-feedback" aria-hidden="true" :class="isConfirmOk"></span>
          </div>
          <small>{{confirmHint}}</small>
        </div>
        <check-code class="has-success">
          <input type="text" id="checkcode" class="form-control" placeholder="请输入验证码" v-model="checkCode">
        </check-code>
        <div class="form-group isread">
          <input type="checkbox" v-model="isRead" id="isread">
          接受
          <router-link to="/user/register/protocol">博客用户协议</router-link>
          <input class="submit btn btn-success pull-right" type="submit" value="立即注册">
        </div>
      </form>
      <div class="back">
        <router-link to="/user/login">
        <i class="fa fa-arrow-left"></i>
        <strong>返回登录</strong></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import CaptionBar from "../CaptionBar";
import CheckCode from "../CheckCode";

export default {
  name: "Register",
  components: {
    CaptionBar,
    CheckCode
  },
  data() {
    return {
      isRead: true,
      username: "",
      usernameHint: "",
      isUsernameSuccess: "has-success",
      isUsernameOk: "",
      password: "",
      passwordHint: "",
      isPwdSuccess: "has-success",
      isPwdOk: "",
      confirm: "",
      confirmHint:'',
      isConfirmSuccess: "has-info",
      isConfirmOk: "",
      checkCode: ""
    };
  },
  watch: {
    // 监听注册用户名是否符合要求
    username: function() {
      if (this.username != "") {
        $("div.username>small").show();
        const regexp = /^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$/;
        console.log(regexp.test(this.username));
        if (regexp.test(this.username) == true) {
          const username = "username=" + this.username;
          axios
            .get("/user/exist?" + username)
            .then(
              function(res) {
                if (res.data.code == 1) {
                  this.usernameHint = "";
                  this.isUsernameSuccess = "has-success";
                  this.isUsernameOk = "glyphicon-ok";
                } else {
                  this.usernameHint = res.data.message;
                  this.isUsernameSuccess = "has-error";
                  this.isUsernameOk = "glyphicon-remove";
                }
              }.bind(this)
            )
            .catch(function(error) {
              console.log(error, "发生错误");
            });
        } else {
          this.usernameHint =
            "以字母、数字、下划线、汉字或特殊字母开头的2~15位字符";
          this.isUsernameSuccess = "has-error";
          this.isUsernameOk = "glyphicon-remove";
        }
      } else {
        this.usernameHint = "has-success";
        this.isUsernameSuccess = "has-error";
        this.isUsernameOk = "glyphicon-remove";
      }
    },
    // 监听密码是否符合要求
    password: function() {
      if (this.password != "") {
        const regexp = /^[\w!@#$￥%&]{6,12}$/;
        if (regexp.test(this.password)) {
          this.passwordHint = "";
          this.isPwdSuccess = "has-success";
          this.isPwdOk = "glyphicon-ok";
        } else {
          this.passwordHint = "以字母、数字、下划线或特殊字母开头的6~12位字符";
          this.isPwdSuccess = "has-error";
          this.isPwdOk = "glyphicon-remove";
        }
      } else {
        this.passwordHint = "";
        this.isPwdSuccess = "has-success";
        this.isPwdOk = "";
      }
    },
    // 检测确认密码是否符合要求
    confirm: function() {
      if (this.confirm != "") {
        const regexp = /^[\w!@#$￥%&]{6,12}$/;
        if (regexp.test(this.confirm) && this.confirm == this.password) {
          this.confirmHint='';
          this.isConfirmSuccess='has-success';
          this.isConfirmOk='glyphicon-ok';
        } else {
          this.isConfirmSuccess='has-error';
          this.isConfirmOk='glyphicon-remove';
          this.confirmHint='以字母、数字、下划线或特殊字母开头的6~12位字符并且与已输入密码相同';
        }
      } else {
        this.confirmHint='';
        this.isConfirmSuccess='has-success';
        this.isConfirmOk='';
      }
    }
  },
  methods: {
    submit: function() {
      var user = {
        username: this.username,
        password: this.password
      };
      // 首先判断密码与确认密码是否一致
      if (this.password == this.confirm) {
        // 判断验证码输入是否正确
        if (this.$store.state.checkCode == this.checkCode) {
          // 判断是否同意《博客服务协议》
          if (this.isRead == true) {
            axios
              .post("/user/register", user)
              .then(
                function(res) {
                  console.log(res.data);
                  if (res.data.code == 1) {
                    alert(res.data.message);
                    location.href = "/#/user/login";
                  } else {
                    alert(res.data.message);
                    this.username = "";
                  }
                }.bind(this)
              )
              .catch(function(error) {
                console.log(error);
              });
          } else {
            alert("请您阅读并同意《博客服务协议》!");
          }
        } else {
          alert("验证码输入有误，请重新输入！");
          this.checkCode = "";
        }
      } else {
        alert("密码与确认密码输入不一致，请重新输入！");
      }
    }
  }
};
</script>
<style scoped>
.register {
  padding: 10px 5px;
}
.login-up {
  min-width: 320px;
  max-width: 360px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 9px rgba(0, 0, 0, 0.6);
  overflow: hidden;
}
form {
  padding: 10px;
  background: #f7f7f7;
}
.login-up h4 {
  color: #69aa46;
}
.login-up h4 .fa {
  color: #478fca;
}
.divide {
  border: 0.7px solid #cce2c1;
  margin: 20px 0;
}
input#isread {
  vertical-align: middle;
  margin: 0;
}
.isread a {
  color: #23527c;
}
.back {
  background: #76b774;
  text-align: center;
  padding: 10px;
}
.back a {
  color: #fe9;
}
form div.form-group> small {
  color: red;
}
</style>


