import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// 引入用户页面的组件
import Home from "@/components/user/Home";
import Login from '@/components/user/Login';
import Register from '@/components/user/Register';
import Protocol from '@/components/user/Protocol';
import MyHome from "../components/user/MyHome";

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
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/user'
    }, {
      path: '/user',
      redirect: '/user/home'
    }, {
      path: '/admin',
      redirect: '/admin/login'
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget,
      meta: { title: '找回密码' }
    },
    {
      path: '/:other',
      redirect: '/user'
    },
    // 用户页面的路由配置
    {
      path: '/user/home',
      name: 'Home',
      component: Home,
      meta: { title: '微博首页' },
      children: [
        {
          path: 'myhome',
          name: 'MyHome',
          component: MyHome,
          meta: { title: '个人中心' }
        },
        {
          path: '',
          redirect: 'myhome'
        }
      ]
    }, {
      path: '/user/login',
      name: 'Login',
      component: Login,
      meta: { title: '微博登录' }
    }, {
      path: '/user/register',
      name: 'Register',
      component: Register,
      meta: { title: '微博注册' }
    }, {
      path: '/user/register/protocol',
      name: 'Protocol',
      component: Protocol,
      meta: { title: '《微博服务使用协议》' }
    }, {
      path: '/user/:otheruser',
      redirect: '/user/home'
    },
    // 管理员页面的路由配置
    {
      path: '/admin/home',
      name: 'AdminHome',
      component: AdminHome,
      meta: { title: '管理员主页' }
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin,
      meta: { title: '管理员登录' }
    }, {
      path: '/admin/register',
      name: 'AdminRegister',
      component: AdminRegister,
      meta: { title: '管理员注册' },
    }, {
      path: '/admin/register/license',
      name: 'License',
      component: License,
      meta: { title: '获取注册码' }
    },
    {
      path: '/admin/:otheradmin',
      redirect: '/admin'
    },



    {/**Not Found 路由，必须是最后一个路由 */
      path: '*',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '找不到页面' }
    }
  ]
})

// router.befo
