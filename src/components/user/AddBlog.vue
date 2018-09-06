<template>
  <div class="my-blog">
    <side-menu></side-menu>
    <div class="myblog panel panel-info">
      <!-- default,primary,success,info,warning,danger -->
      <!-- panel:面板；panel-heading:标题容器标签；panel-title:标题;panel-body:面板内容；panel-footer:面板脚注；
      -->
      <div class="panel-heading">
          <div class="panel-title">添加博客</div>
      </div>
      <div class="panel-body">
          <form class="form-group" @submit.prevent="addBlogHandle()">
              <div class="form-group input-group">
                  <label class="input-group-addon" for="title">标题</label>
                  <input type="text" class="form-control" placeholder="请输入博客标题" v-model="title" id="title" required>
              </div>
              <div class="form-group input-group">
                  <label class="input-group-addon" for="kinds">分类</label>
                  <select class="kinds form-control" v-model="kinds" id="kinds" placeholder="请输入博客类别" required>
                      <option v-for="sort in sorts" :key="sort.id">{{sort}}</option>
                  </select>
              </div>
              <div class="form-group" style="">
                  <!-- <label for="content">内容：</label> -->
                  <textarea name="content" id="content" cols="30" rows="10" v-model="content" placeholder="请输入博客内容" class="form-control" required></textarea>
                  <!-- <div class="col-sm-9">
                      <script id="editor" type="text/plain" style="width:100%;height:400px;">
                      </script>
                  </div> -->
              </div>
              <div class="form-group">
                  <button type="submit" class="btn btn-info">发表</button>
              </div> 
          </form>
      </div>
    </div>
  </div>
</template>
<script>
import SideMenu from "./SideMenu";
// import CopyRight from "../../CopyRight";
import axios from "axios";
export default {
  name: "AddBlog",
  components: {
    SideMenu
    // CopyRight
  },
  data() {
    return {
      author: "",
      title: "",
      kinds: "",
      content: "",
      article: {},
      sorts: [
        "人工智能",
        "移动开发",
        "物联网",
        "云计算/大数据",
        "互联网",
        "游戏开发",
        "运维",
        "数据库",
        "前端",
        "后端",
        "编程语言",
        "研究开发",
        "研发管理",
        "安全",
        "程序人生",
        "其它"
      ]
    };
  },
  mounted() {
    if ($.cookie("nickname")) {
      this.$store.commit("changePage", "addblog");
    } else {
      alert("请先登录");
      location.href = "/";
    }
  },
  methods: {
    addBlogHandle() {
      this.author = $.cookie("nickname");
      //   console.log($.cookie("nickname"));
      this.article = {
        title: this.title,
        kinds: this.kinds,
        content: this.content,
        author: this.author
      };
      //   console.log(this.article);
      if (this.author) {
        axios
          .post("/addblog", this.article)
          .then(
            function(res) {
              alert(res.data.message);
              this.title = "";
              this.kinds = "";
              this.content = "";
              location.href = "/";
            }.bind(this)
          )
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("请先登录再发表博客");
        location.href = "/#/user/login";
      }
    }
  }
};
</script>
<style scoped>
.my-blog {
  display: flex;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.5);
}
.myblog {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
}
.myblog .panel-body {
  text-align: center;
}
div.myblog div.panel-body form textarea {
  padding: 10px 15px;
  outline: none; /*去掉蓝色边框*/
  resize: none; /*大小不可变*/
  border: 1px solid #dcdcdc;
}
div.myblog div.form-group button.btn {
  font-weight: 500;
  padding: 8px 30px;
  border-radius: 20px;
}
@media screen and (max-width: 500px) {
  .myblog {
    width: 99%;
  }
}
</style>


