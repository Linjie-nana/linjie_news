<template>
  <div class="fa">
    <Parent v-if="parentData.parent" :parentData="parentData.parent" />
    <div class="info">
      <div class="name">{{parentData.user.nickname}}</div>
      <div class="date">3小时前</div>
      <div class="btnReply">回复</div>
    </div>
    <div class="faText">{{parentData.content}}</div>
  </div>
</template>

<script>
export default {
  name: "Parent",
  props: ["parentData"],
  mothods: {},
};
</script>

<style lang="less" scoped>
.info {
  display: flex;
  .name {
    font-size: 14 /360 * 100vw;
  }
  .date {
    flex: 1;
    padding-left: 10/360 * 100vw;
    font-size: 12/360 * 100vw;
    color: #888;
  }
  .btnReply {
    font-size: 14/360 * 100vw;
    color: #888;
  }
}
.fa {
  margin: 3/360 * 100vw;
  padding: 3/360 * 100vw;
  border: 1px solid#ccc;
  border-radius: 8px;
  background-color: rgba(131, 131, 131, 0.13);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.faText {
  padding: 10/360 * 100vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>