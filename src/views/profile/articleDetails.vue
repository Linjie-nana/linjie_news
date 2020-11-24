<template>
  <div>
    <div class="header">
      <div class="icon">
        <span class="iconfont iconjiantou2" @click="$router.replace('/')"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div class="follow">关注</div>
    </div>
    <div class="article">
      <h2>{{date.title}}</h2>
      <span>{{date.user.nickname}} 2020-12-25</span>

      <div class="content" v-html="this.date.content"></div>
    </div>

    <div class="buttom">
      <div class="nice">点赞</div>
      <div class="wechat">
        <span class="iconfont iconweixin"></span> 微信
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },
  mounted() {
    this.$axios({
      url: `/post/${sessionStorage.getItem("id")}`,
    }).then((res) => {
      this.date = res.data.data;
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.header {
  height: 40 /360 * 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10 /360 * 100vw;
  background-color: #54a9e2;
  .icon {
    display: flex;
    color: white;
    align-items: center;
    .iconjiantou2 {
      font-size: 15 /360 * 100vw;
    }
    .iconnew {
      font-size: 50 /360 * 100vw;
    }
  }
  .follow {
    background-color: #fff;
    border-radius: 20px;
    width: 50 /360 * 100vw;
    height: 25 /360 * 100vw;
    text-align: center;
    line-height: 25 /360 * 100vw;
  }
}
.article {
  padding: 20 /360 * 100vw 10 /360 * 100vw 0;
  span {
    display: inline-block;
    margin-top: 15 /360 * 100vw;
    color: #888;
  }
  .content {
    margin-top: 7 /360 * 100vw;
  }
  /deep/img {
    width: 100%;
  }
}
.buttom {
  margin-top: 10 /360 * 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13 /360 * 100vw;
  div {
    padding: 0 10 /360 * 100vw;
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 25 /360 * 100vw;
    text-align: center;
    line-height: 25 /360 * 100vw;
  }

  .wechat {
    .iconweixin {
      color: #00c100;
    }
  }
}
</style>