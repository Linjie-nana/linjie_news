<template>
  <div class="header_color">
    {{title}}
    <span class="iconfont iconjiantou2" @click="back"></span>
  </div>
</template>

<script>
/**
 * @back 引用中输入函数
 *@title 引用中输入标题
 */
export default {
  props: ["title"],
  methods: {
    back() {
      window.location.href = "#/userindex";
    },
  },
};
</script>

<style lang="less" scoped>
.header_color {
  width: 100%;
  height: 60 /360 * 100vw;
  // background: -webkit-linear-gradient(bottom, #f2f2f2, #54a9e2);
  background-color: #54a9e2;
  color: white;
  font-size: 16 /360 * 100vw;
  font-weight: 700;
  text-align: center;
  line-height: 60 /360 * 100vw;
  .iconjiantou2 {
    float: left;
    margin-left: 10px;
    font-size: 18 /360 * 100vw;
    font-weight: 700;
  }
}
</style>