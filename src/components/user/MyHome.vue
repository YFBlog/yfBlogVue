<template>
  <div class="my-home">
      <!-- 上传头像 模态框 -->
      <div class="my-home-left">
          <div data-toggle="modal" data-target="#my-user-photo" class="my-home-img"></div>
          <div id="my-user-photo" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog modal-sm" role="document">
                  <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">更换头像</h4>
                      </div>
                      <div class="modal-body text-center">
                          <!-- action="http://localhost:4000/user/upload" -->
                        <form @submit.prevent="submit" enctype="multipart/form-data">
                        <div class="modal-user-img" @click="uploadImgHandle()"></div><br>
                        <input type="file" name="photo" accept="image/*" style="display:none">
                        <input type="submit" value="上传" class="btn btn-info">
                        </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="my-home-right">
        <div class="panel panel-info">
          <!-- default,primary,success,info,warning,danger -->
          <!-- panel:面板；panel-heading:标题容器标签；panel-title:标题;panel-body:面板内容；panel-footer:面板脚注；
           -->
          <div class="panel-heading">
            <div class="panel-title">添加博客</div>
          </div>
          <div class="panel-body well">
            <div class="well">
              <form action="">
                div.
              </form>
               
            </div>
            <div class=" " id="writeBlog">
                        <h3>写博客--
                            <small>YFblog后台管理系统</small>
                        </h3>
                        <form action="" class="form-horizontal">
                            <div class="form-group">
                                <label for="title" class="col-sm-2 control-label">文章标题：</label>
                                <div class="col-md-7 col-sm-10">
                                    <input type="text" name="title" class="form-control" id="title" placeholder="请输入文章标题">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="author" class="col-sm-2 control-label">发布者：</label>
                                <div class="col-md-7 col-sm-10">
                                    <input type="text" name="author" class="form-control" id="author" placeholder="Yuanfang">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="kind" class="col-sm-2 control-label">博客类别：</label>
                                <div class="col-md-7 col-sm-10">
                                    <select name="kind" id="kind" class="form-control">
                                        <option value="NodeJS">NodeJS</option>
                                        <option value="JavaScript" selected>JavaScript</option>
                                        <option value="Environment">Environment</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="content" class="col-sm-2 control-label">博客内容：</label>
                                <div class="col-sm-9">
                                    <script id="editor" type="text/plain" style="width:100%;height:400px;">
                                    </script>
                                </div>
                            </div>
                            <div class="form-group text-center">
                                <button type="submit" class="btn btn-success" style="padding:0.5em 2em">添加</button>
                            </div>
                        </form>
                    </div>


          </div>
          <div class="panel-footer">
            <copy-right></copy-right>
          </div>
        </div>
           

      </div>
  </div>
</template>
<script>
import axios from "axios";
import CopyRight from "../CopyRight";
export default {
  name: "MyHome",
  components:{
    CopyRight,
  }, 
  mounted: function() {},
  methods: {
    uploadImgHandle: function() {
      //   点击图片的标签div 等价于点击input[type=file];
      $(":file").click();
    },
    submit: function() {
      axios
        .post("http://localhost:4000/user/upload", null)
        .then(function(res) {
          if (res.data.code == 1) {
            alert(res.data.message);
            location.reload();
            // location.href = "/#/user/home/myhome";
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style scoped>
.my-home-img {
  width: 50px;
  height: 50px;
  margin: 10%;
  border-radius: 50%;
  /* placeholder.jpg:占位图片 */
  /* background-image: url('../upload/head.png'); */
  background-image: url("../../assets/head.png"), url("../../assets/user1.jpg");
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
</style>


