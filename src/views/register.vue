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
      err_msg="不合法名称"
      :rule="/^.{6,12}$/"
      placeholder="输入昵称"
      @push_num="get_nick"
      :names="name"
    />
    <userInput
      type="text"
      err_msg="不合法名称"
      :rule="/^.{6,12}$/"
      placeholder="输入用户名"
      @push_num="get_name"
      :names="name"
    />
    <userInput
      type="password"
      err_msg="不合法"
      :rule="/^\d{6,12}$/"
      placeholder="输入密码"
      @push_num="get_password"
      :names="name"
    />
    <inputBtn value="注册" @click.native="register" />
  </div>
</template>

<script>
import inputBtn from "../components/inputBtn.vue";
import userInput from "../components/userInput.vue";
export default {
  components: { userInput, inputBtn },
  data() {
    return {
      nick: "",
      name: "",
      pwd: "",
    };
  },
  methods: {
    get_nick(res) {
      this.nick = res;
      console.log(this.nick);
    },
    get_name(res) {
      this.name = res;
      console.log(this.name);
    },
    get_password(res) {
      this.pwd = res;
      console.log(this.pwd);
    },

    register() {
      this.$axios({
        url: "http://157.122.54.189:9083/register",
        method: "POST",
        data: {
          username: this.name,
          password: this.pwd,
          nickname: this.nick,
        },
      }).then((res) => {
        if (res.data.statusCode == 401) {
          this.$toast.fail("组成失败");
        } else {
          this.$toast.success(res.data.message);
        }
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
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