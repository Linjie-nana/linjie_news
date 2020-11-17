<template>
  <div class="container">
    <div class="btnClose">
      <span class="iconfont iconicon-test"></span>
    </div>
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <firstInput type="text" placeholder="输入用户名" />
    <firstInput type="password" placeholder="输入密码" />

    <div class="btnSubmit">
      <button>登录</button>
    </div>
  </div>
</template>


<script>
import firstInput from "../components/firstInput";
export default {
  components: { firstInput },
};
</script>

<style  lang="less">
.container {
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
    color: #3a7ada;
  }
}

.btnSubmit {
  padding-top: 26/360 * 100vw;
  button {
    width: 100%;
    // height: 48/360*100vw;
    line-height: 48/360 * 100vw;
    font-size: 18 /360 * 100vw;
    background: #2887c7;
    color: white;
    border: none;
    outline: none;
    border-radius: 24/360 * 100vw;
  }
}
</style>