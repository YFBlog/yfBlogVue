// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from "./store/index";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 使用 router.beforeEach 注册一个全局前置守卫
router.beforeEach((to, from, next) => {
  // to:Route:即将要进入的目标路由对象
  // from:Route:当前导航正要离开的路由
  // next:Function:一定要调用该方法来resolve这个钩子。
  // 路由发生变化修改页面title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})
