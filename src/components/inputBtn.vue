<template>
  <div class="btnSubmit">
    <button :value="value">{{value}}</button>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style lang="less" scoped>
.btnSubmit {
  padding-top: 26/360 * 100vw;
  button {
    width: 100%;
    // height: 48/360*100vw;
    line-height: 48/360 * 100vw;
    font-size: 18 /360 * 100vw;
    // background: #2887c7;
    background: #54a9e2;
    color: white;
    border: none;
    outline: none;
    border-radius: 24/360 * 100vw;
    box-shadow: 7 /360 * 100vw 11 /360 * 100vw 13 /360 * 100vw 0px #ebe4e6;
  }
}
</style>