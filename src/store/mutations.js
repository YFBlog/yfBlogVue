export default {
    refresh: function (state, data) {
        state.checkCode = data;
    },
    license:function (state,data) {
        state.license = data;
    }
}