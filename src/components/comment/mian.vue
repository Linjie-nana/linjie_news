<template>
  <div class="box">
    <!-- 如果还有父级评论，则调用其组件，嵌套显示 -->
    <div class="top">
      <img
        class="avatar"
        v-if="commentData.user.head_img"
        :src="$axios.defaults.baseURL + commentData.user.head_img"
        alt
      />
      <img class="avatar" v-else src="@/assets/laopo.jpg" alt />
      <div class="info">
        <div class="name">{{commentData.user.nickname}}</div>
        <div class="date">2小时前</div>
      </div>
      <div class="btnReply">回复</div>
    </div>
    <commmentParent :parentData="commentData.parent" v-if="commentData.parent" />
    <div class="text">{{commentData.content}}</div>
  </div>
</template>

<script>
import commmentParent from "./parent";
export default {
  components: {
    commmentParent,
  },
  props: ["commentData"],
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  padding-bottom: 10/360 * 100vw;
  .avatar {
    width: 36/360 * 100vw;
    height: 36/360 * 100vw;
    border-radius: 50%;
    object-fit: cover;
  }
  .info {
    flex: 1;
    padding-left: 10/360 * 100vw;
    .name {
      font-size: 16/360 * 100vw;
      color: #333;
    }
    .date {
      font-size: 12/360 * 100vw;
      color: #888;
    }
  }
  .btnReply {
    font-size: 14/360 * 100vw;
    color: #888;
  }
}
.box {
  margin: 10/360 * 100vw 0;
  padding: 10/360 * 100vw;
  border-top: 1px solid #ccc;
}
.text {
  font-size: 16/360 * 100vw;
  color: #333;
  padding-top: 10/360 * 100vw;
}
</style>