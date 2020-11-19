<template>
  <div class="item">
    <span class="title_left">{{item_left}}</span>
    <span class="title_right">
      {{item_right}}
      <span class="iconfont iconjiantou1"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["item_left", "item_right"],
};
</script>

<style lang="less" scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 10 /360 * 100vw;
  height: 50 /360 * 100vw;
  width: 100%;
  border-bottom: 1 /360 * 100vw solid #ccc;
  background-color: #f2f2f2;
  .title_left {
    margin-left: 10 /360 * 100vw;
    font-size: 15 /360 * 100vw;
  }
  .title_right {
    margin-right: 10 /360 * 100vw;
    font-size: 15 /360 * 100vw;
    color: rgb(138, 138, 138);

    .iconjiantou1 {
      color: #54a9e2;
      font-weight: 700;
    }
  }
}
</style>