<template>
  <div class="forget">
    <caption-bar></caption-bar>
    <div>
      <form>
          <h4><span class="fa fa-key"></span> 找回密码</h4>
          <div class="divide"></div>
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
          <i class="fa fa-arrow-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
import CaptionBar from "./CaptionBar";
export default {
  name: "Forget",
  components: {
    CaptionBar
  }
};
</script>
<style scoped>
.forget {
  height: 100vh;
  /* background-color: #1c1f23; */
  padding: 10px 5px;
}
.forget > div {
  min-width: 320px;
  max-width: 360px;
  margin: 0 auto;
  /* border: solid 3px #F2F2F2; */
  box-shadow: 0 0 9px rgba(0, 0, 0, .6);
  border-radius: 5px;
  overflow: hidden;
}
h4 {
  color: #dd5a43;
}
form {
  background-color: white;
  padding: 10px;
}

.divide {
  border: 0.7px solid #F3CDC6;
  margin: 20px 0;
}
.btn-danger{
  background: #dd5a43;
}
.back {
  color: #fe9;
  background-color: #c16050;
  width: 100%;
  padding: 10px;
}
</style>


