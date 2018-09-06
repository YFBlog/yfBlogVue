<template>
    <div class="sidemenu">
        <!-- 上传头像 模态框 -->
        <aside class="personal-left">
            <div class="personal-img">
            <div data-toggle="modal" data-target="#personal-photo" class="head-img"></div><br>
            <span>{{nickname}}</span>
            </div>
            <ul class="menu">
            <li><a href="/#/user/personal"><i class=""></i><span>个人资料</span></a></li>
            <li><a href="/#/user/addblog"><i class=""></i><span>博客管理</span></a></li>
            <li><a href="/"><i class=""></i><span>留言管理</span></a></li>
            </ul>
        </aside>
        <!-- 用户更换头像模态框 -->
        <div id="personal-photo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-sm" role="document">
            <!--  @submit.prevent="changeHeadImg()"-->
            <form class="modal-content" action="/headimg" method="post" enctype="multipart/form-data">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title" id="myModalLabel" style="color:#007ACC;">更换头像</h4>
                </div>
                <div class="modal-body text-center">
                    <div class="modal-user-img" @click="uploadImgHandle()"></div>
                </div>
                <div class="modal-footer text-center">
                    <input type="file" name="photo" accept="image/*" style="display:none">
                    <!-- @change="getFile($event)" -->
                    <input type="submit" value="上传" class="btn btn-info">
                </div>
            </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SideMenu",
  data() {
    return {
      nickname: "",
      imgFile: "",
      imgSrc: ""
    };
  },
  mounted: function() {
    if ($.cookie("nickname")) {
      this.$store.commit("changePage", "personal");
      this.nickname = $.cookie("nickname");
    } else {
      alert("请先登录");
      location.href = "/";
    }
  },
  methods: {
    // 修改个人资料
    uploadImgHandle: function() {
      //   点击图片的标签div 等价于点击input[type=file];
      $(":file").click();
    }
    // getFile(event){
    //   this.imgFile = event.target.files[0];
    //   console.log(this.imgFile);
    // },
    // changeHeadImg() {
    //   let formData = new FormData();
    //   formData.append('file',this.imgFile)
    //   axios.post('/headimg',formData,{headers:{'Content-Type':'multipart/form-data'}}).then((res)=>{
    //     console.log('修改头像成功')
    //   })
    // }
  }
};
</script>
<style scoped>
.personal-img {
  text-align: center;
}
.personal-img > div {
  display: inline-block;
  width: 50px;
  height: 50px;
  /* text-align: center; */
  /* margin: 10%; */
  border-radius: 50%;
  /* placeholder.jpg:占位图片 */
  /* background-image: url('../upload/head.png'); */
  background-image: url("../../assets/user1.jpg");
  background-size: 100% 100%;
}
.modal-user-img {
  width: 100px;
  height: 100px;
  margin: 5% auto;
  border: solid 2px gray;
  background-image: url("../../assets/user1.jpg");
  background-size: 100% 100%;
}
.personal-left {
  width: 20%;
  min-width: 200px;
  height: 70%;
  min-height: 320px;
  margin-right: 20px;
  padding-top: 20px;
  /* padding: 20px; */
  background-color: aliceblue;
  opacity: 0.8;
  /* text-align: center; */
}
.sidemenu .menu {
  margin: 0;
  padding-top: 30px;
}
.sidemenu .menu li a {
  display: block;
  font-size: 17px;
  padding: 5px 20px;
}
.sidemenu .menu li a:hover {
  color: orange;
  background-color: rgba(222, 222, 333, 0.2);
}
</style>


