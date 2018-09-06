<template>
    <div class="manage-blog">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3>博客管理</h3>
            </div>
            <div class="panel-body">
                <!-- <table class="table table-bordered table-hover table-striped">
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
                </tbody> -->
            <!-- </table> -->
                
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
                <!-- <div class="well" id="visitUser" style="display:{{change == changes[2]?'':'none'}}">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="active" style="color:#676A6C">
                                    <th>ID</th>
                                    <th>IP地址</th>
                                    <th>cxIP地址</th>
                                    <th>cx地理位置</th>
                                    <th>cx浏览器</th>
                                    <th>cx浏览系统 </th>
                                    <th>高德地理位置</th>
                                    <th>访问时间</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style="color:#676A6C">
                                    <td>952</td>
                                    <td>::ffff:192.168.1.160</td>
                                    <td>129.168.1.110</td>
                                    <td>查询网无法定位</td>
                                    <td>Mozilla/5.0 (Windows NT 6.1; WOW64; rv:57.0) Gecko/20100101 Firefox/57.0</td>
                                    <td>Windows NT 6.1; WOW64</td>
                                    <td>江苏省南京市江宁区东山街道天印大道680号石羊公园</td>
                                    <td>2018-01-16 14:20:54</td>
                                    <td>
                                        <button class="btn btn-danger">删除记录</button>
                                    </td>
                                </tr>
                            </tbody>
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
import CopyRight from "../CopyRight";
export default {
    name:'ManageBlog',
    components:{
        CopyRight,
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.manage-blog{
    width: 100%;
    /* height: 100%; */
}

</style>

