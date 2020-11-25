<template>
  <div>
    <div class="header">
      <div class="icon">
        <span class="iconfont iconjiantou2" @click="$router.replace('/')"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div v-if="date.has_follow==true" class="follow" @click="un_follow">已关注</div>
      <div v-else class="follow" @click="follow">关注</div>
    </div>
    <div class="article">
      <h2>{{date.title}}</h2>
      <span>{{date.user.nickname}} 2020-12-25</span>

      <div class="content" v-html="this.date.content"></div>
    </div>

    <div class="buttom">
      <div @click="like">
        <span class="iconfont icondianzan" :class="nice_c"></span>
        {{date.like_length}}
      </div>
      <div class="wechat">
        <span class="iconfont iconweixin">微信</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      //点赞栏目类名-----
      nice_c: "",
    };
  },
  //   根据在sessionStorage中传过来的id请求
  mounted() {
    this.article_load();
  },
  methods: {
    article_load() {
      this.$axios({
        url: `/post/${sessionStorage.getItem("id")}`,
      }).then((res) => {
        this.date = res.data.data;
        console.log(this.date);
        console.log(this.date.has_follow);
        if (res.data.data.has_like) {
          this.nice_c = "nice_y";
        }
      });
    },

    //点赞-------------------------
    like() {
      this.$axios({
        url: `/post_like/${sessionStorage.getItem("id")}`,
      }).then((res) => {
        console.log(res);
        if (res.data.message == "点赞成功") {
          this.$toast(res.data.message);
          this.nice_c = "nice_y";
          this.article_load();
        } else {
          this.$toast(res.data.message);
          this.nice_c = "nice_n";
          this.article_load();
        }
      });
    },

    //关注-----------------------------
    follow() {
      this.$axios({
        url: `/user_follows/${this.date.user.id}`,
      }).then((res) => {
        console.log(res);
        this.article_load();
      });
    },

    //取消关注----------------------------
    un_follow() {
      this.$axios({
        url: `/user_unfollow/${this.date.user.id}`,
      }).then((res) => {
        console.log(res);
        this.article_load();
      });
    },
  },
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
    font-size: 13 /360 * 100vw;
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
  .nice_y {
    color: #389cdf !important;
    font-weight: 700;
  }
  .wechat {
    .iconweixin {
      color: #00c100;
    }
  }
}
</style>