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
      @push_num="get_name(arguments)"
    />
    <!-- :rule="/^\d{1,12}$/" -->
    <userInput
      type="password"
      placeholder="输入密码"
      :rule="/^.{3,12}$/"
      err_msg="不合法"
      @push_num="get_password(arguments)"
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
      //这个是正则判断
      namerule: "",
      pwdrule: "",
    };
  },
  //拿到input框的value值
  methods: {
    get_name(res) {
      this.name = res[0];
      this.namerule = res[1];
    },
    get_password(res) {
      this.pwd = res[0];
      this.pwdrule = res[1];
      console.log(this.pwd);
    },
    login() {
      if (this.namerule && this.pwdrule) {
        this.$axios({
          url: "/login",
          method: "POST",
          data: {
            username: this.name,
            password: this.pwd,
          },
        }).then((res) => {
          this.$toast.success(res.data.message);
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("userId", res.data.data.user.id);
          window.location.href = "#/userindex";
        });
      } else {
        this.$toast.fail("请输入正确格式");
      }
    },
  },
};
</script>

<style  lang="less" scoped >
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