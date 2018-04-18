<template>
  <div class="admin-register">
    <form class="form-inline" @submit.prevent="submit">
      <h3>管理员注册</h3><hr>
      <div class="form-group">
        <div class="input-group has-feedback has-warning">
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
          <input type="text" class="form-control" placeholder="用户名" v-model="username" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group has-feedback has-warning">
          <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
          <input type="password" class="form-control" placeholder="密码" v-model="password" pattern="^[\w!@#$￥%&]{6,12}$" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group has-feedback has-warning">
          <div class="input-group-addon"><span class="glyphicon glyphicon-check"></span></div>
          <input type="password" class="form-control" placeholder="确认密码" v-model="confirm" pattern="^[\w!@#$￥%&]{6,12}$" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group has-feedback has-error">
          <div class="input-group-addon"><span class="fa fa-id-card"></span></div>
          <input type="text" class="form-control" placeholder="请先获取注册码" v-model="license" required>
          <div class="input-group-addon">
            <router-link to="register/license">获取注册码</router-link>
          </div>
        </div>
      </div>
      <div class="form-group submit">
        <input class="btn btn-warning" type="submit" value="立即注册">
        <span>已有账号，直接<router-link to="/admin/login">登录</router-link> </span>
      </div>
    </form>
    <copy-right></copy-right>
  </div>
</template>
<script>
import CopyRight from "../CopyRight";
import axios from "axios";
export default {
  name: "AdminRegister",
  components: {
    CopyRight
  },
  data() {
    return {
      username: "",
      password: "",
      confirm: "",
      license: ""
    };
  },
  methods: {
    submit: function() {
      var user = {
        username: this.username,
        password: this.password,
        license: this.license
      };
      if (this.password == this.confirm) {
        if (this.license == this.$store.state.license) {
          axios
            .post("http://localhost:4000/admin/register", user)
            .then(function(res) {
              console.log(res.data);
              if (res.data.code == 1) {
                alert(res.data.message);
                location.href = "http://localhost:8080/#/admin/login";
              } else {
                alert(res.data.message);
                // location.reload();
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          alert("注册码错误或已失效，请重新获取！");
        }
      } else {
        alert("两次输入密码不一致,请重新输入!");
      }
    }
  }
};
</script>
<style scoped>
.admin-register {
  height: 100vh;
  background-image: url("../../assets/adminregister.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 50px;
}
h3 {
  color: orange;
  font-family: "Courier New", Courier, monospace;
}
form {
  width: 320px;
  padding: 10px;
  background-color: lightblue;
  opacity: 0.94;
  border-radius: 10px;
  margin: 0 auto;
}
form > div.form-group {
  margin-bottom: 15px;
}
form > div.form-group > .input-group {
  width: 300px;
}
.submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
a {
  color: #f0ad4e;
}
div > a {
  color: #a94442;
}
div.copy-right{
  position: absolute;
}
@media screen and (max-width: 500px) {
  h3 {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #eea742;
    color: white;
    margin: 0;
    padding: 10px;
  }
  .admin-register {
    background-image: none;
    background-color: #f2f2f2;
    padding: 0;
  }
  form {
    /* width: 320px; */
    background-color: #f2f2f2;
    padding-top: 25px;
  }
}
</style>