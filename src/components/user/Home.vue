<template>
    <div class="home">
        <!-- 个人中心页面 -->
        <aside>
          <ul>
            <li class="active"><a href="/#/user/home"><span class="fa fa-home"></span> 首页</a></li>
            <li><a href="/#/user/home"><span class="fa fa-star-o"></span> 我的收藏</a></li>
            <li><a href="/#/user/home"><span class="fa fa-thumbs-o-up"></span> 我的赞</a></li>
            <li><a href="/#/user/home"><span class="fa fa-weibo"></span> 我的博客</a></li>
          </ul>
        </aside>
        <main>
          <article v-for="(article,index) in articles" :key="index" v-if="article.author.includes(search)||article.title.includes(search)">
            <div class="author">
              <a class="user-pto"></a>&nbsp;
              <div class="user-info">
                <a>{{article.author}}</a><br>
                <time>{{article.time}}</time>
              </div>
              <div class="user-op dropdown">
                <a class="dropdown-toggle" id="user-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><i class="fa fa-angle-down"></i></a>
                <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="user-option">
                  <li>
                    <a href=""><i class="glyphicon glyphicon-star-empty"></i> 收藏</a>
                    <!-- <a href=""><i class="glyphicon glyphicon-star"></i> 取消收藏</a> -->
                  </li>
                  <li><a href=""><i class="glyphicon glyphicon-edit"></i> 编辑</a></li>
                  <!-- <li><a href=""><i class="glyphicon glyphicon-eye-open"></i> 展开</a></li> -->
                  <li v-if="article.author==username" @click="deleteBlogHandle(article._id,index)"><a><i class="glyphicon glyphicon-trash"></i> 删除</a></li>
                  <li v-else><a href=""><i class="glyphicon glyphicon-eye-close"></i> 隐藏</a></li>
                </ul>
              </div>
            </div>
            <h4><a>{{article.title}}</a></h4>
            <p class="article">
              {{article.content}}
              <span @click="articleIsShow==true" v-show="articleIsShow==false">阅读全文 <i class="fa fa-angle-down"></i></span>
            </p>
            <ul class="meta">
                <li class="kind">{{article.kinds}}</li>
                <li><i class="fa fa-eye"></i>{{article.pageView}}</li>
                <li><i class="fa fa-commenting-o"></i>{{article.comment}}</li>
                <li class="praise" :class="article.like.includes(userId)?'praised':''" @click="praiseHandle($event,article._id,article.like.length,index)">{{article.like.length}}</li>
            </ul>
          </article><hr>
          <div class="more"><a>加载更多</a></div>
        </main>
        <go-top></go-top>
    </div>
</template>
<script>
import axios from "axios";
import GoTop from "../GoTop";
import bus from "../../bus";
// import SearchBox from "../SearchBox";
export default {
  name: "Home",
  components: {
    // SearchBox
    GoTop
  },
  data() {
    return {
      userId: "",
      articles: [],
      username: "",
      articleIsShow: false,
      search: ""
      // praise:false
    };
  },
  mounted() {
    this.username = $.cookie("nickname");
    this.$store.commit("changePage", "home");
    if ($.cookie("nickname")) {
      axios
        .post("/getId", { username: $.cookie("nickname") })
        .then(res => {
          this.userId = res.data.id;
        })
        .catch(error => {
          console.log(error);
        });
    }
    axios
      .get("/article-lists")
      .then(res => {
        this.articles = res.data.data.reverse();
      })
      .catch(error => {
        console.log(error);
      });
    bus.$on(
      "search",
      function(data) {
        console.log(data);
        this.search = data;
      }.bind(this)
    );
  },
  methods: {
    // 点赞
    praiseHandle(event, id, num, index) {
      // console.log($.cookie("nickname"));
      if ($.cookie("nickname")) {
        // console.log(event.target.className);
        if (event.target.className == "praise") {
          event.target.classList.add("praised");
        } else {
          event.target.classList.remove("praised");
        }
        axios
          .post("/praise", { userId: this.userId, id })
          .then(res => {
            if (res.data.code == 1) {
              this.articles.splice(index, 1, res.data.message);
            }
          })
          .catch(error => {});
      } else {
        alert("请先登录");
      }
    },
    // 删除博客
    deleteBlogHandle(id, index) {
      axios.post("/deleteblog", { id }).then(res => {
        alert(res.data.message);
        if (res.data.code == 1) {
          this.articles.splice(index, 1);
        }
      });
    }
  }
};
</script>
<style scoped>
.home {
  padding: 15px 20px 0 0;
  display: flex;
  background-color: rgba(95, 95, 95, 0.2);
}
.home aside {
  width: 20%;
  min-width: 180px;
}

aside ul > li {
  font-size: 20px;
  padding: 5px 10px;
}
aside ul > li a {
  color: #ffffff;
  font-weight: 500;
}
aside ul > li.active {
  background-color: rgba(255, 255, 255, 0.3);
}
aside ul > li:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
aside li span.fa-home {
  color: #4579d8;
}
aside li span.fa-star-o {
  color: #fcb83a;
}
aside li span.fa-thumbs-o-up {
  color: #ffa405;
}
aside li span.fa-weibo {
  color: #54a8e5;
}
.home main {
  min-width: 300px;
}
.home article {
  overflow: hidden;
  width: 105%;
  max-width: 600px;
  margin-bottom: 12px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}
.home .author {
  /* display: flex; */
  /* align-items: center; */
}
.home .author .user-pto {
  display: inline-block;
  width: 50px;
  height: 50px;
  background-image: url("../../assets/default_header.jpg");
  background-size: 100% 100%;
  border: 1.5px solid #f5f5f5;
  border-radius: 50%;
}
.home .author .user-info {
  display: inline-block;
  margin-top: 5px;
  vertical-align: top;
}
.user-info > a {
  font-size: 17px;
  font-weight: 600;
}
.user-info > a:hover {
  color: #eb7350;
}
.home .author time {
  font-size: 12px;
  color: #717274;
}
.home .author .user-op {
  float: right;
}

.user-op > a {
  font-size: 22px;
  padding: 10px;
}
.dropdown-menu-right li a {
  display: block;
}
.dropdown-menu-right li a:hover {
  color: orange;
}
.dropdown-menu-right li a i {
  margin-right: 5px;
}
article h4 a {
  color: #eb7350;
}
.home h4 > a:hover {
  color: #eb7350;
  text-decoration: underline;
}
.home .article {
  font-size: 13px;
  /* max-height: 150px; */
  /* 合并空白符序列，但是保留换行符 */
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
}

.home .meta {
  display: flex;
  margin: 0;
}
.home .meta li {
  margin-right: 20px;
  line-height: 20px;
  color: #787878;
}
.meta li:hover {
  color: #2f2f2f;
}
.home .meta li.kind {
  color: salmon;
  border: 0.8px solid salmon;
  border-radius: 4px;
  font-size: 12px;
  padding: 0 6px;
}
.home .meta li.kind:hover {
  color: #ec6149;
  background-color: rgba(236, 97, 73, 0.05);
  border-color: #ec6149;
}
.home .meta li i {
  margin-right: 8px;
}

.meta .praise {
  padding-left: 20px;
  position: relative;
}
.meta .praise::before {
  display: inline-block;
  content: " ";
  width: 23px;
  height: 26px;
  background: url("../../assets/steps_praised.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 483px 28px;
  position: absolute;
  left: -4px;
  top: -8px;
}

main .more {
  /* display: inline-block; */
  margin: 20px 0 50px;
  text-align: center;
  font-size: 25px;
}
.more a {
  font-weight: lighter;
  color: gray;
  /* */
  padding: 10px 20px;
  border-radius: 30px;
  border: 1px solid #717274;
}
.more a:hover {
  background-color: lightgray;
}
/* .meta .praised::before{
  background-position: right;
} */

@keyframes praise {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
.meta .praised::before {
  animation: praise 0.6s steps(20) forwards;
}

.meta .praised:hover {
  color: #eb7350;
}
@media screen and (max-width: 500px) {
  .home {
    width: 100%;
  }
}
</style>

