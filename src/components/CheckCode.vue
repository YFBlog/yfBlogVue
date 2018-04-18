<template>
  <div class="check-code form-group">
    <div class="input-group checkcode">
      <div class="input-group-addon">
        <span></span>&nbsp;
        <span></span>&nbsp;
        <span></span>&nbsp;
        <span></span>&nbsp;
      </div>
      <slot></slot>
      <div class="input-group-addon" @click="creatCode(4)">
        <span class="glyphicon glyphicon-refresh"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckCode",
  data() {
    return {
      code: "",
      refresh: ""
    };
  },
  mounted: function() {
    // 页面加载完成后立即触发函数
    this.creatCode(4);
  },
  methods: {
    // 生成验证码
    creatCode: function(digit) {
      // 先清空上次的验证码，再赋值
      this.refresh = "";
      // 定义随机字符串
      var array =
        "1234567890ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz";
      var span = document.querySelectorAll("div.checkcode>div>span");
      for (let i = 0; i < parseInt(digit); i++) {
        //首先取出随机数组的索引
        var index = parseInt(Math.random() * array.length);
        //然后取出随机数组中的真正的值
        this.code = array[index];
        //将code的值赋值给上面取到的<span>元素的innerHTML
        span[i].innerHTML = this.code;
        //最后随机出的值通过style.color赋予随机颜色,这里我用到了一个封装函数
        // this.$options.methods一个方法调用另外一个方法；
        span[i].style.color = this.$options.methods.randomColor();
        this.refresh += this.code.toString();
      }
      //   更改store中的数据必须提交mutation
      this.$store.commit("refresh", this.refresh.toString());
    },
    // 封装函数,随机出现的颜色
    randomColor: function() {
      var r = parseInt(Math.random() * 256);
      var g = parseInt(Math.random() * 256);
      var b = parseInt(Math.random() * 256);
      var rgb = "rgb(" + r + "," + g + "," + b + ")";
      return rgb;
    }
  }
};
</script>
<style scoped>

</style>