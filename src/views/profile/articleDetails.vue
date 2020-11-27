<template>
  <div>
    <!-- 判断文章 -->
    <div v-if="date.type==1" class="text">
      <div class="header">
        <div class="icon">
          <span class="iconfont iconjiantou2" @click="$router.back()"></span>
          <span class="iconfont iconnew"></span>
        </div>
        <div
          class="follow"
          :class="{ follow_has:!date.has_follow}"
          @click="follow"
        >{{date.has_follow? '已关注' : '关注'}}</div>
      </div>
      <div class="article">
        <h2>{{date.title}}</h2>
        <span>{{date.user.nickname}} 2020-12-25</span>

        <div class="content" v-html="this.date.content"></div>
      </div>
    </div>

    <!-- 判断视频 -->

    <div v-if="date.type==2" class="video">
      <headers title="视频页" />
      <video
        src=" https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
        controls
        poster="http://157.122.54.189:9083/uploads/image/IMG1606459976647.jpeg"
      >
        <span class="iconfont iconshipin"></span>
      </video>

      <div class="author">
        <div class="user">
          <img :src="date.user.head_img| fixImgUrl" alt />
          <span>{{date.user.nickname}}</span>
        </div>
        <div
          class="follow"
          :class="{ follow_has:!date.has_follow}"
          @click="follow"
        >{{date.has_follow? '已关注' : '关注'}}</div>
      </div>
      <div class="content">{{date.title}}</div>
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
import headers from "../../components/header";
export default {
  components: {
    headers,
  },
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
          this.date.like_length++;
        } else {
          this.$toast(res.data.message);
          this.nice_c = "";
          this.date.like_length--;
        }
      });
    },

    //关注-----------------------------
    follow() {
      //如果已关注
      if (this.date.has_follow) {
        this.$axios({
          url: `/user_unfollow/${this.date.user.id}`,
        }).then((res) => {
          console.log(res);
        });
        this.date.has_follow = false;
      } else {
        this.$axios({
          url: `/user_follows/${this.date.user.id}`,
        }).then((res) => {
          console.log(res);
          this.date.has_follow = true;
        });
      }
    },
  },
};
</script>





<style lang="less" scoped>
//文章----------------------------------------------------------
.text {
  .header {
    height: 40 /360 * 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10 /360 * 100vw;
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
}

//视频----------------------------------------------------------
.video {
  video {
    position: relative;
    width: 100%;
    .iconshipin {
      position: absolute;
      font-size: 46/360 * 100vw;
      background-color: #dddd;
      color: #fff;
      border-radius: 50%;
    }
  }

  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30 /360 * 100vw;
    padding: 10 /360 * 100vw 20 /360 * 100vw 0;

    .user {
      display: flex;
      align-items: center;
      img {
        width: 30 /360 * 100vw;
        height: 30 /360 * 100vw;
        border-radius: 50%;
        object-fit: cover;
      }
      span {
        padding-left: 5 /360 * 100vw;
        color: rgb(182, 178, 178);
        font-size: 13 /360 * 100vw;
      }
    }
    .follow {
      // background-color: #ccc;
      border: 1px #ccc solid;
      border-radius: 20px;
      width: 50 /360 * 100vw;
      height: 25 /360 * 100vw;
      text-align: center;
      font-size: 13 /360 * 100vw;
      line-height: 25 /360 * 100vw;
    }
    .follow_has {
      background-color: #54a9e2;
      color: white;
    }
  }
  .content {
    font-size: 16 /360 * 100vw;
    padding: 10 /360 * 100vw 20 /360 * 100vw;
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

.follow_has {
  background-color: #97cbee !important;
  color: white;
}
</style>