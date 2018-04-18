// Vuex管理数据共享
// 提供一个单例类Store,store对象用来存储组件共享数据;
import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
    // state存共享数据
    state: {
        checkCode: null,
        // 注册码
        license: "shkYUKhjikjljK867E9fheiohorijlqw"
    },
    mutations,
    actions,
})