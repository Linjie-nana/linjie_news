<template>
  <div>
    <!-- 专门显示单图片新闻 -->
    <div
      class="singleNews"
      v-if="
                postData.type == 1 &&
                postData.cover.length >= 1 &&
                postData.cover.length < 3
            "
    >
      <div class="left">
        <div class="title">{{ postData.title }}</div>
        <div class="info">
          {{ postData.user.nickname }}
          {{ postData.comment_length }} 跟帖
        </div>
      </div>
      <img :src="postData.cover[0].url |fixImgUrl" alt class="cover" />
    </div>

    <!-- 专门显示多图片新闻 -->
    <div class="multipNews" v-if="postData.type == 1 && postData.cover.length >= 3">
      <div class="title">{{postData.title}}</div>
      <div class="coversWrapper">
        <img class="cover" :src="postData.cover[0].url| fixImgUrl" alt />
        <img class="cover" :src="postData.cover[1].url| fixImgUrl" alt />
        <img class="cover" :src="postData.cover[2].url| fixImgUrl" alt />
      </div>
      <div class="info">{{postData.user.nickname}} {{postData.comment_length}} 跟帖</div>
    </div>

    <!-- 专门显示视频 -->
    <div class="singleVideo" v-if="postData.type == 2 && postData.cover.length >= 1">
      <div class="title">{{postData.title}}</div>
      <div class="coverWrapper">
        <img :src="postData.cover[0].url| fixImgUrl" class="cover" alt />
        <span class="iconfont iconshipin"></span>
      </div>
      <div class="info">{{postData.user.nickname}} {{postData.comment_length}} 跟帖</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["postData"],
  methods: {
    //局部调用方法---------------------
    // fnFixImgUrl(oldUrl) {
    //   if (oldUrl.indexOf("http") > -1) {
    //     return oldUrl;
    //   } else {
    //     return this.$axios.defaults.baseURL + oldUrl;
    //   }
    // },
  },
};
</script>


<style lang="less" scoped>
.singleNews {
  display: flex;
  padding: 16/360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .cover {
    width: 120/360 * 100vw;
    height: 76/360 * 100vw;
    object-fit: cover;
  }
  .left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .title {
      font-size: 16/360 * 100vw;
      color: #333;
    }
    .info {
      font-size: 14/360 * 100vw;
      color: #888;
    }
  }
}

.multipNews {
  padding: 16/360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .coversWrapper {
    display: flex;
    justify-content: space-between;
    padding: 10/360 * 100vw 0;
    .cover {
      width: 32%;
      height: 74/360 * 100vw;
      object-fit: cover;
    }
  }
  .title {
    color: #333;
    font-size: 16/360 * 100vw;
  }
  .info {
    color: #888;
    font-size: 14/360 * 100vw;
  }
}

.singleVideo {
  padding: 10/360 * 100vw;
  border-bottom: 1px solid #e4e4e4;
  .title {
    font-size: 16/360 * 100vw;
    color: #333;
  }
  .info {
    color: #888;
    font-size: 14/360 * 100vw;
  }
  .coverWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10/360 * 100vw 0;
    .cover {
      width: 100%;
      height: 170/360 * 100vw;
      object-fit: cover;
    }
    .iconshipin {
      position: absolute;
      font-size: 46/360 * 100vw;
      background-color: #dddd;
      color: #fff;
      border-radius: 50%;
    }
  }
}
</style>