<template>
  <div class="forget">
      <div>
        <form>
            <h3><span class="fa fa-key"></span> 找回密码</h3>
            <hr>
            <div class="form-group has-feedback" style="color:#555">
                <label for="forget">请输入电子邮件</label>
                <input type="email" class="form-control" id="forget" placeholder="Email">
                <span class="form-control-feedback fa fa-envelope"></span>
            </div>
            <div class="form-group text-right">
                <button type="button" class="btn btn-danger">发送邮件</button>
                <!-- <input type="submit" class="btn btn-danger"> -->
            </div>
        </form>
        <!-- $router.go(-1)：返回上一页 ，在方法中写调用this -->
        <div class="text-center back">
            <strong @click="$router.go(-1)">返回登录</strong>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Forget"
};
</script>
<style scoped>
.forget {
  height: 100vh;
  background-color: #1c1f23;
  padding-top: 50px;
}
.forget > div {
  width: 320px;
  margin: 0 auto;
  border: solid 10px #394557;
  border-radius: 5px;
}
h3 {
  color: orangered;
}
form {
  background-color: white;
  padding: 10px;
}
.back {
  color: #fe9;
  background-color: #c16050;
  width: 100%;
  padding: 10px;
}
</style>


