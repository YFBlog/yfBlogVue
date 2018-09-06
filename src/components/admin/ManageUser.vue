<template>
  <div class="manage-user">
      <div class="panel panel-default">
          <div class="panel-heading">
              <h3>用户管理</h3>
          </div>
          <div class="panel-body">
            <!-- table-bordered table-hover table-striped:为tbody每一行添加斑马线 -->
            <table class="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <td>用户名</td>
                        <td></td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{user.username}}</td>
                    <td></td>
                    <td @click="deleteUserHandle($event,user)"><button class="btn btn-danger">删除</button></td>
                  </tr>
                </tbody>
            </table>
              <!-- <div class="well" id="article" style="display:{{change == changes[1]?'':'none'}}">
                  <nav class="navbar navbar-default">
                      <button type="button" class="btn btn-info navbar-btn" onclick="change('{{changes[0]}}')">写博客</button>
                  </nav>
                  <div class="table-responsive">
                      <table class="table table-bordered">
                          <table class="table table-bordered">
                              <thead>
                                  <tr class="active" style="color:#676A6C">
                                      <th>博客ID</th>
                                      <th>分类</th>
                                      <th>博客标题</th>
                                      <th>发布者</th>
                                      <th>发布时间</th>
                                      <th>浏览数</th>
                                      <th>点赞数</th>
                                      <th>评论数</th>
                                      <th>操作</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  
                                  <tr style="color:#676A6C">
                                      <td>6</td>
                                      <td>}</td>
                                      <td>{{article.title}}</td>
                                      <td>{{article.author}}</td>
                                      <td>{{article.date}}</td>
                                      <td>55</td>
                                      <td>11</td>
                                      <td>未开放</td>
                                      <td>
                                          <button id="edit" class="btn btn-success" onclick="change('{{changes[3]}}')">修改博客</button>
                                          <button id="delete" class="btn btn-danger">删除博客</button>
                                      </td>
                                  </tr>
                                  {{/each}}
                              </tbody>
                          </table>
                      </table>
                  </div>
              </div> -->
          </div>
          <div class="panel-footer">
              <copy-right></copy-right>
          </div>
      </div>
      
  </div>
</template>
<script>
import axios from "axios";
import CopyRight from "../CopyRight";
export default {
  name: "ManageUser",
  components:{
    CopyRight,
  },
  data() {
    return {
      users:[]

    };
  },
  mounted() {
    axios
      .get("/admin/manage-user")
      .then(function(res) {
        this.users = res.data.data;          
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      });
  },
  methods:{
    deleteUserHandle(event,user){
      axios.post("/admin/delete-user",user).then(function (res) {
        if (res.data.code==1) {
          alert(res.data.message);
          event.target.parentNode.remove();
        } else {
          alert(res.data.message);
        }
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
};
</script>
<style scoped>
.manage-user{
  width: 100%;
}

</style>
