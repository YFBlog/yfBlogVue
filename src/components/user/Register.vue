<template>
  <div class="register container">
    <div class="row">
      <div class="col-lg-5 col-md-5 col-sm-5 img">
        <img src="../../assets/register.jpg" alt="图片加载异常，无法显示">
      </div>
      <div id="register" class="col-lg-4 col-md-4 col-sm-5">
        <h2>账号注册</h2><hr>
        <!-- action="http://localhost:4000/user/register" method="post" -->
        <!-- has-feedback类添加正确的图标 -->
        <form class="form" @submit.prevent="submit()">
          <div class="username form-group">
            <div class="input-group">
              <label for="username" class="input-group-addon">
                <span class="glyphicon glyphicon-user"></span>
              </label>
              <input type="text" class="form-control" id="username" placeholder="请输入用户名/邮箱/手机号" required name="username" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" v-model="username">
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <small style="display:none">以字母、数字、下划线、汉字或特殊字母开头的2~15位字符</small>
          </div>
          <div class="password form-group">
            <div class="input-group">
              <label for="password" class="input-group-addon">
                <span class="glyphicon glyphicon-lock"></span>
              </label>
              <input type="password" class="form-control" id="password" placeholder="请输入密码" required name="password" pattern="^[\w!@#$￥%&]{6,12}$" v-model="password">
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <small style="display:none">以字母、数字、下划线或特殊字母开头的6~12位字符</small>
          </div>
          <div class="confirm form-group">
            <div class="input-group">
              <label for="confirm" class="input-group-addon">
                <span class="glyphicon glyphicon-check"></span>
              </label>
              <input type="password" class="form-control" id="confirm" placeholder="请确认密码" required pattern="^[\w!@#$￥%&]{6,12}$" v-model="confirm">
              <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            </div>
            <small style="display:none">以字母、数字、下划线或特殊字母开头的6~12位字符并且与已输入密码相同</small>
          </div>
          <check-code class="has-success">
            <input type="text" id="checkcode" class="form-control" placeholder="请输入验证码" v-model="checkCode">
          </check-code>
          <div class="form-group text-center">
            <input class="submit btn btn-success" type="submit" value="立即注册">
          </div>
          <div class="form-group">
            <span class="fa fa-check-circle-o" v-if="isRead" @click="isRead=!isRead"></span>
            <span class="fa fa-check-circle" v-if="!isRead" @click="isRead=!isRead"></span>
            <small>注册即代表您阅读并同意
              <router-link to="/user/register/protocol">
                <span>博客服务协议</span>
              </router-link>
            </small>
          </div>
          <hr>
          <div>
            已有账号，立即
            <router-link to="/user/login">登录</router-link>
          </div>
        </form>
        <copy-right></copy-right>
      </div>
    </div>
    <!-- row -->
  </div>
  <!-- container -->
</template>
<script>
import axios from "axios";
import HeaderBar from "../HeaderBar";
import CopyRight from "../CopyRight";
import CheckCode from "../CheckCode";

export default {
  name: "Register",
  components: {
    HeaderBar,
    CopyRight,
    CheckCode
  },
  data() {
    return {
      isRead: true,
      username: "",
      password: "",
      confirm: "",
      checkCode: ""
    };
  },
  watch: {
    // 监听注册用户名是否符合要求
    username: function() {
      if (this.username != "") {
        $("div.username>small").show();
        const regexp = /^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$/;
        // console.log(regexp.test(this.username));
        if (regexp.test(this.username) == true) {
          const username = "username=" + this.username;
          axios
            .get("http://localhost:4000/user/exist?" + username)
            .then(function(res) {
              if (res.data.code == 1) {
                $("div.username>div")
                  .removeClass("has-error")
                  .addClass("has-success");
                $("div.username>div>span")
                  .removeClass("glyphicon-remove")
                  .addClass("glyphicon-ok");
                $("div.username>small").hide();
              } else {
                $("div.username>div")
                  .removeClass("has-success")
                  .addClass("has-error");
                $("div.username>div>span")
                  .removeClass("glyphicon-ok")
                  .addClass("glyphicon-remove");
                $("div.username>small").show();
              }
            })
            .catch(function(error) {
              console.log(error, "发生错误");
            });
        } else {
          $("div.username>div")
            .removeClass("has-success")
            .addClass("has-error");
          $("div.username>div>span")
            .removeClass("glyphicon-ok")
            .addClass("glyphicon-remove");
          $("div.username>small").show();
        }
      } else {
        $("div.username>div").removeClass("has-success has-error");
        $("div.username>div>span").removeClass("glyphicon-remove glyphicon-ok");
        $("div.username>small").hide();
      }
    },
    // 监听密码是否符合要求
    password: function() {
      if (this.password != "") {
        const regexp = /^[\w!@#$￥%&]{6,12}$/;
        if (regexp.test(this.password)) {
          $("div.password>div")
            .removeClass("has-error")
            .addClass("has-success");
          $("div.password>div>span")
            .removeClass("glyphicon-remove")
            .addClass("glyphicon-ok");
          $("div.password>small").hide();
        } else {
          $("div.password>div")
            .removeClass("has-success")
            .addClass("has-error");
          $("div.password>div>span")
            .removeClass("glyphicon-ok")
            .addClass("glyphicon-remove");
          $("div.password>small").show();
        }
      } else {
        $("div.password>div").removeClass("has-success has-error");
        $("div.password>div>span").removeClass("glyphicon-remove glyphicon-ok");
        $("div.password>small").hide();
      }
    },
    // 检测确认密码是否符合要求
    confirm: function() {
      if (this.confirm != "") {
        const regexp = /^[\w!@#$￥%&]{6,12}$/;
        if (regexp.test(this.confirm) && this.confirm == this.password) {
          $("div.confirm>div")
            .removeClass("has-error")
            .addClass("has-success");
          $("div.confirm>div>span")
            .removeClass("glyphicon-remove")
            .addClass("glyphicon-ok");
          $("div.confirm>small").hide();
        } else {
          $("div.confirm>div")
            .removeClass("has-success")
            .addClass("has-error");
          $("div.confirm>div>span")
            .removeClass("glyphicon-ok")
            .addClass("glyphicon-remove");
          $("div.confirm>small").show();
        }
      } else {
        $("div.confirm>div").removeClass("has-success has-error");
        $("div.confirm>div>span").removeClass("glyphicon-remove glyphicon-ok");
        $("div.confirm>small").hide();
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
              .post("http://localhost:4000/user/register", user)
              .then(function(res) {
                console.log(res.data);
                if (res.data.code == 1) {
                  alert(res.data.message);
                  location.href = "http://localhost:8080/#/user/login";
                } else {
                  alert(res.data.message);
                }
              })
              .catch(function(error) {
                console.log(error);
              });
          } else {
            alert("请您阅读并同意《博客服务协议》!");
          }
        } else {
          alert("验证码输入有误，请重新输入！");
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

#register {
  padding-top: 30px;
}
#register > form {
  width: 100%;
}
form .submit {
  width: 100%;
}
.fa-check-circle {
  color: lightgray;
}
form div.form-group:nth-of-type(-n + 3) > small {
  color: red;
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
  #register {
    width: 320px;
    padding: 30px 0 0 0;
  }
}
</style>


