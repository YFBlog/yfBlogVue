<template>
  <div class="admin-login">
    <form @submit.prevent="submit(user)">
      <h3>管理员登录</h3>
      <div class="divide"></div>
      <div class="form-group">
        <div class="input-group has-feedback has-info">
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
          <input type="text" class="form-control" placeholder="用户名" v-model="user.username" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group has-feedback has-info">
          <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
          <input type="password" class="form-control" placeholder="密码" v-model="user.password" pattern="^[\w!@#$￥%&]{6,12}$" required>
        </div>
      </div>
      <div class="form-group forget">
        <router-link to="/forget">忘记密码？</router-link>
        <span>管理员 <router-link to="/admin/register">注册</router-link></span>
      </div>
      <div class="form-group submit">
        <input id="submit" class="btn btn-info form-control" type="submit" value="登录"><br>
      </div>
    </form>
    <!-- <copy-right></copy-right> -->
  </div>
</template>
<script>
// import CopyRight from "../CopyRight";
import axios from "axios";
export default {
  name: "AdminLogin",
  components: {
    // CopyRight
  },
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 点击登录
    submit: function(user) {
      console.log(user);
      axios.post("/admin/login", user).then(
        function(res) {
          if (res.data.code == 1) {
            $.cookie("adminname", this.user.username);
            location.href = "/#/admin/home";
          } else if (res.data.code == 2) {
            alert(res.data.message);
            this.user.password = "";
          } else {
            alert(res.data.message);
            location.reload();
          }
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.admin-login {
  height: 100vh;
  min-height: 500px;
  background-image: url("../../assets/adminlogin.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 100px;
}
h3 {
  color: #5bc0de;
  font-family: "Courier New", Courier, monospace;
}
.divide {
  border: 0.7px solid #31b0d5;
  margin: 20px 0;
}
form {
  width: 320px;
  min-width: 320px;
  padding: 10px;
  background-color: rgba(243, 243, 243, 0.92);
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 8px #969696;
}
form > div.form-group {
  margin-bottom: 15px;
}
div a {
  color: #31b0d5;
}
.forget {
  display: flex;
  justify-content: space-between;
}
.submit {
  text-align: center;
}
#submit {
  width: 240px;
}
div.copy-right {
  position: absolute;
}
@media screen and (max-width: 500px) {
  .admin-login {
    background-image: none;
    padding: 0;
  }
  form {
    background: none;
    box-shadow: none;
  }
}
</style>