<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>
    <userInput type="text" err_msg="不合法名称" :rule="/^.{6,12}$/" placeholder="输入电话号码" />
    <userInput type="text" err_msg="不合法名称" :rule="/^.{6,12}$/" placeholder="输入电话号码" />
    <userInput type="password" err_msg="不合法" :rule="/^\d{6,12}$/" placeholder="输入密码" />
    <inputBtn value="注册" />
  </div>
</template>

<script>
import inputBtn from "../components/inputBtn.vue";
import userInput from "../components/userInput.vue";
export default {
  components: { userInput, inputBtn },
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