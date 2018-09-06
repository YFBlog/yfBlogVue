<template>
  <div class="profile panel panel-info">
    <div class="panel-heading">
      <div class="panel-title">编辑或修改个人资料</div>
    </div>
    <div class="panel-body">
      <form class="form-group" @submit.prevent="changeUserProfileHandle(personalDate)">
        <div class="form-group username">
          <label for="username">用 户 名:</label>
          <input type="text" name="" id="username" v-model="username" disabled>
        </div>
        <div class="form-group realname">
          <label for="realname">真实姓名:</label>
          <input type="text" name="realname" id="realname" v-model="personalDate.realname">
        </div>
        <div class="form-group sex">
          <label for="sex">性&#x3000;别:</label>&#x3000;
          <input type="radio" v-model="personalDate.sex" name="sex" value="male">男&#x3000;
          <input type="radio" v-model="personalDate.sex" name="sex" value="female">女&#x3000;
          <!-- <input type="radio" v-model="user.sex" name="sex">保密 -->
        </div>
        <!-- <div class="form-group databirth">
          <label for="databirth">出生日期:</label>
          <input type="text" name="databirth" id="databirth" v-model="user.databirth">
        </div> -->
        <div class="form-group age">
          <label for="age">年&#x3000;龄:</label>
          <input type="text" name="age" id="age" v-model="personalDate.age">
        </div>
        <div class="form-group address">
          <label for="address">居住地址:</label>
          <input type="text" name="address" id="address" v-model="personalDate.address">
        </div>
        <div class="form-group signature">
          <label for="signature">签&#x3000;名:</label>
          <input type="text" name="signature" id="signature" v-model="personalDate.signature">
        </div>
        <div class="form-group info">
          <label for="info">个人说明:</label>
          <textarea name="info" id="info" cols="30" rows="10" v-model="personalDate.info"></textarea>
        </div>
        <div class="form-group save">
            <button type="submit" class="btn btn-info">保存</button>
        </div> 
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Profile",
  data() {
    return {
      username: "",
      userId: "",
      personalDate: {}
    };
  },
  mounted: function() {
    this.username = $.cookie("nickname");
    if ($.cookie("nickname")) {
      axios
        .post("/getId", { username: $.cookie("nickname") })
        .then(res => {
          this.userId = res.data.id;
        })
        .catch(error => {
          console.log(error);
        });
      axios
        .get("/get_personalDate?username=" + this.username)
        .then(res => {
          if (res.data.code == 1) {
            this.personalDate = res.data.message;
          } else {
            alert(res.data.message);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  methods: {
    // 修改个人资料
    changeUserProfileHandle(personalDate) {
      axios
        .post("/change_personalDate", {
          userId: this.userId,
          personalDate: personalDate
        })
        .then(res => {
          alert(res.data.message);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.profile {
  max-width: 500px;
}
div.profile div.panel-body form {
  max-width: 400px;
  min-width: 280px;
  margin: 0 auto;
}
div.profile div.panel-body form div > label {
  width: 25%;
  text-align: right;
  font-weight: 500;
}
div.profile div.panel-body form div.form-group input {
  width: 70%;
  padding: 5px 10px;
  outline: none;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  vertical-align: middle;
}
div.profile div.panel-body form div.form-group input:focus,
div.profile div.panel-body form div.info textarea:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
div.profile div.panel-body form div.sex input {
  width: 5%;
  vertical-align: middle;
  margin-top: 0;
}
div.profile div.panel-body form div.info textarea {
  padding: 10px 15px;
  width: 70%;
  height: 80px;
  outline: none; /*去掉蓝色边框*/
  resize: none; /*大小不可变*/
  display: inline-block;
  font-size: 13px;
  border: 1px solid #dcdcdc;
  /* background: #f7f7f7; */
  border-radius: 4px;
  vertical-align: top;
}

div.profile form div.save {
  text-align: center;
}
div.profile div.form-group button.btn {
  font-weight: 500;
  padding: 6px 25px;
  border-radius: 20px;
}
</style>
