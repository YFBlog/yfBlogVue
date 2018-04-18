<template>
  <div class="admin-login">
    <!-- <h1>博客后台管理</h1><br> -->
    <form class="form-inline" @submit.prevent="submit(user)">
      <h3>管理员登录</h3><hr>
      <div class="form-group">
        <div class="input-group has-feedback has-success">
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
          <input type="text" class="form-control" placeholder="用户名" v-model="user.username" pattern="^[\w\u4e00-\u9fa5!@#$￥%&]{2,15}$" required>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group has-feedback has-success">
          <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
          <input type="password" class="form-control" placeholder="密码" v-model="user.password" pattern="^[\w!@#$￥%&]{6,12}$" required>
        </div>
      </div>
      <div class="form-group forget">
        <router-link to="/forget">忘记密码？</router-link>
        <span>管理员 <router-link to="/admin/register">注册</router-link></span>
      </div>
      <div class="form-group submit">
        <input id="submit" class="btn btn-success form-control" type="submit" value="登录"><br>
      </div>
    </form>
    <copy-right></copy-right>
  </div>
</template>
<script>
import CopyRight from "../CopyRight";
import axios from "axios";
export default {
  name: "AdminLogin",
  components: {
    CopyRight
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
      axios.post("http://localhost:4000/admin/login", user).then(
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
  background-image: url("../../assets/adminlogin.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding-top: 100px;
}
h3 {
  color: green;
  font-family: "Courier New", Courier, monospace;
}
form {
  width: 280px;
  padding: 10px;
  background-color: lightblue;
  opacity: 0.94;
  border-radius: 10px;
  margin: 0 auto;
}
form > div.form-group {
  margin-bottom: 15px;
}
div a {
  color: green;
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
  h3 {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #5cb85c;
    color: white;
    margin: 0;
    padding: 10px;
  }
  .admin-login {
    background-image: none;
    background-color: #f2f2f2;
    padding: 0;
  }
  form {
    width: 320px;
    background-color: #f2f2f2;
    padding-top: 25px;
  }
}
</style>


