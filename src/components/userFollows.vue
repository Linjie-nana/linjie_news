<template>
  <div class="love_item">
    <div class="img">
      <img :src="'http://157.122.54.189:9083'+ head_img" />
    </div>
    <div class="title">
      <span>{{nickname}}</span>
      <p>2019-10-10</p>
    </div>
    <button>取消关注</button>
  </div>
</template>

<script>
// 用户关注列表;
export default {
  props: ["nickname", "head_img"],
};
</script>
<style lang="less" scoped>
.love_item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100 /360 * 100vw;
  background-color: #f2f2f2;
  border-bottom: 1px solid #cccccc;
  .img {
    overflow: hidden;
    margin: 0 20 /360 * 100vw;
    width: 50 /360 * 100vw;
    height: 50 /360 * 100vw;
    border-radius: 50%;
    background-color: yellow;
    img {
      width: 100%;
      transform: scale(2);
    }
  }
  .title {
    span {
      font-size: 15 /360 * 100vw;
    }
    p {
      color: #b0b0b0;
    }
  }

  button {
    margin-left: 80 /360 * 100vw;
    height: 30 /360 * 100vw;
    width: 75 /360 * 100vw;
    border-radius: 19px;
    font-size: 11 /360 * 100vw;
    border: 0px;
    background-color: #54a9e2;
    color: snow;
  }
}
</style>