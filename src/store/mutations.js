export default {
    refresh: function (state, data) {
        state.checkCode = data;
    },
    license:function (state,data) {
        state.license = data;
    },
    changePage:function (state,data) {
        state.page = data;
    },
    getName:function (state,data) {
        state.username = data;
    },
    getId:function (state,data) {
        state.username = data;
    }
}