<template>
  <div class>
    <router-link to="/login">登录页</router-link>
    <router-link to="/register">注册页</router-link>
    <button @click="gogogo">aaa</button>
  </div>
</template>

<script>
export default {
  methods: {
    gogogo() {
      this.$axios({
        // 一样是配置对象
        // 可以使用 http://157.122.54.189:9083/post
        // 或者本地 127.0.0.1:3000 测试
        url: "http://157.122.54.189:9083/post",
        // jq 的 type 变成了 method
        method: "get",
        // 这里注意,成功回调 不再是 success
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
// axios 使用方式
</script>

<style lang="less" scoped>
</style>