<template>
  <div class="head">
    <span class="iconfont iconwode" @click="link"></span>
    <div class="search" @click="$router.push('/postSearch')">
      <span class="iconfont iconsearch"></span>
      搜索新闻
    </div>
    <span class="iconfont iconnew"></span>
  </div>
</template>

<script>
export default {
  methods: {
    link() {
      this.$router.push("/userindex");
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50/360 * 100vw;
  background-color: #54a9e2;
  .iconwode {
    font-size: 20 /360 * 100vw;
    color: white;
  }
  .search {
    box-sizing: border-box;
    padding: 0 20 /360 * 100vw;
    width: 70%;
    height: 32 /360 * 100vw;
    line-height: 32 /360 * 100vw;
    background-color: #b8dcf7;
    border-radius: 22px;
    text-align: center;
    font-size: 14 /360 * 100vw;
    color: white;
    // font-weight: 700;
    .iconsearch {
      float: left;
    }
  }
  .iconnew {
    font-size: 35 /360 * 100vw;
    color: white;
  }
  .iconsearch {
    font-size: 15 /360 * 100vw;
  }
}
</style>