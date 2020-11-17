<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <userInput
      type="text"
      placeholder="输入用户名"
      :rule="/^.{3,12}$/"
      err_msg="不合法"
      @push_num="get_name"
      :names="name"
    />

    <userInput
      type="password"
      placeholder="输入密码"
      :rule="/^\d{3,12}$/"
      err_msg="不合法"
      @push_num="get_password"
      :pwds="pwd"
    />
    <inputBtn value="登录" @click.native="login" />
  </div>
</template>


<script>
import userInput from "../components/userInput";
import inputBtn from "../components/inputBtn";

export default {
  components: { userInput, inputBtn },
  data() {
    return {
      name: "",
      pwd: "",
    };
  },
  //拿到input框的value值
  methods: {
    get_name(res) {
      this.name = res;
      console.log(this.name);
    },
    get_password(res) {
      this.pwd = res;
      console.log(this.pwd);
    },

    login() {
      this.$axios({
        url: "http://157.122.54.189:9083/login",
        method: "POST",
        data: {
          username: this.name,
          password: this.pwd,
        },
      }).then((res) => {
        if (res.data.statusCode == 401) {
          this.$toast.fail("登录失败");
        } else {
          this.$toast.success(res.data.message);
        }
        console.log(res);
      });
    },
  },
};
</script>

<style  lang="less" scoped >
body {
  background-color: #fff6f9;
}
.container {
  // background-color: #fff6f9;
  padding: 24 /360 * 100vw;
}
.btnClose {
  .iconfont {
    font-size: 28/360 * 100vw;
  }
}
.logo {
  text-align: center;
  .iconfont {
    font-size: 126/360 * 100vw;
    // color: #3a7ada;
    color: #54a9e2;
  }
}
</style> 