import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 引入用户页面的组件
import User from "@/components/user/User";
import Login from '@/components/user/Login';
import Register from '@/components/user/Register';
import Protocol from '@/components/user/Protocol';
import Home from "../components/user/Home";
import Personal from "../components/user/Personal";
import AddBlog from "../components/user/AddBlog";
// import Articles from "../components/user/Articles";

// 引入管理员页面的组件
import AdminHome from "../components/admin/AdminHome";
import AdminLogin from '../components/admin/AdminLogin';
import AdminRegister from '../components/admin/AdminRegister';
import License from "../components/admin/License";

// 引入找不到该页面
import NotFound from "../components/NotFound";
// 引入忘记密码页面
import Forget from "../components/Forget";


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/user' },
    {
      path: '/user',
      name: 'User',
      component: User,
      // 当有子路由时，直接重定向
      redirect: '/user/home',
      children: [
        { path: 'home', name: 'Home', component: Home, meta: { title: '博客首页' } },
        { path: 'personal', name: 'Personal', component: Personal, meta: { title: '个人中心' } },
        { path: 'addblog', name: 'AddBlog', component: AddBlog, meta: { title: '添加博客' } }
        // { path: 'articles', name: 'Articles', component: Articles, meta: { title: '文章列表' } }
      ]
    },
    // 用户页面的路由配置
    { path: '/user/login', name: 'Login', component: Login, meta: { title: '博客登录' } },
    { path: '/user/register', name: 'Register', component: Register, meta: { title: '博客注册' } },
    { path: '/user/register/protocol', name: 'Protocol', component: Protocol, meta: { title: '《博客用户协议》' } },
    { path: '/user/:otheruser', redirect: '/user' },
    { path: '/admin', redirect: '/admin/login' },
    { path: '/forget', name: 'Forget', component: Forget, meta: { title: '找回密码' } },
    { path: '/:other', redirect: '/' },

    // 管理员页面的路由配置
    { path: '/admin/home', name: 'AdminHome', component: AdminHome, meta: { title: '管理员主页' } },
    { path: '/admin/login', name: 'AdminLogin', component: AdminLogin, meta: { title: '管理员登录' } },
    { path: '/admin/register', name: 'AdminRegister', component: AdminRegister, meta: { title: '管理员注册' } },
    { path: '/admin/register/license', name: 'License', component: License, meta: { title: '获取注册码' } },
    { path: '/admin/:otheradmin', redirect: '/admin' },

    /**Not Found 路由，必须是最后一个路由 */
    { path: '*', name: 'NotFound', component: NotFound, meta: { title: '找不到页面' } }
  ]
})

// router.befo
