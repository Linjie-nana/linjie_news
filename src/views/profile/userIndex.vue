<template>
  <div class="body">
    <headers title="个人主页" />
    <div class="header" @click="link">
      <img :src="'http://157.122.54.189:9083'+ head_img" class="header_img" />
      <div class="user_name">
        <span class="name">
          <span
            class="iconfont"
            :class="{  iconxingbienan: gender === 1,
                        iconxingbienv: gender === 0,}"
          ></span>
          {{nickname}}
        </span>
        <p>2019-10-10</p>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>

    <div class="content">
      <item item_left="我的关注" item_right="关注的用户" @click.native="link_love" />
      <item item_left="我的跟帖" item_right="跟帖/回复" @click.native="link_comment" />
      <item item_left="我的收藏" item_right="文章/视频" @click.native="link_star" />
      <item item_left="设置" />
    </div>
    <div class="out" @click="back">退出登录</div>
  </div>
</template>





<script>
import item from "@/components/item";
import headers from "@/components/header";
export default {
  data() {
    return {
      nickname: "",
      head_img: "",
      gender: "",
    };
  },
  components: { item, headers },
  methods: {
    link() {
      window.location.href = "#/userupdata";
    },
    link_love() {
      window.location.href = "#/userfollows";
    },
    link_comment() {
      window.location.href = "#/usercomment";
    },
    link_star() {
      window.location.href = "#/userStar";
    },
    back() {
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
      this.$toast.fail("成功登出");
      this.$router.replace("/login");
    },
  },
  created() {
    this.$axios({
      url: `/user/${localStorage.getItem("userId")}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      this.nickname = res.data.data.nickname;
      this.head_img = res.data.data.head_img;
      this.gender = res.data.data.gender;
    });
  },
};
</script>




<style lang="less" scoped>
.body {
  min-height: 100vh;
  background-color: #ffffff;
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 130 /360 * 100vw;
    width: 100%;
    //   background-color: #54a9e2;
    background: -webkit-linear-gradient(right, #8cbddd, #54a9e2);
    .header_img {
      float: left;
      margin-left: 30 /360 * 100vw;
      width: 75 /360 * 100vw;
      height: 75 /360 * 100vw;
      background-color: pink;
      border-radius: 50%;
      object-fit: cover;
    }
    .user_name {
      float: left;
      padding-left: 20 /360 * 100vw;

      .name {
        display: inline-block;
        font-size: 17 /360 * 100vw;
        color: #f2f2f2;
        font-weight: 700;
      }
      .iconfont {
        vertical-align: middle;
        font-size: 20 /360 * 100vw;
        font-weight: 400;
      }
      .iconxingbienan {
        color: #f2f2f2;
      }
      .iconxingbienv {
        color: rgb(247, 73, 102);
      }
      p {
        padding-top: 10 /360 * 100vw;
        color: #f2f2f2;
        font-size: 15 /360 * 100vw;
      }
    }
    .iconjiantou1 {
      position: absolute;
      right: 10 /360 * 100vw;
      font-size: 20 /360 * 100vw;
      font-weight: 700;
      color: #d6d6d6;
      display: block;
    }
  }
  .content {
    padding: 0 10 /360 * 100vw;
    border-top: 10 /360 * 100vw solid #e4e4e4;
  }
  .out {
    position: fixed;
    bottom: 10 /360 * 100vw;
    width: 100%;
    text-align: center;
    color: #58abe2;
    font-weight: 700;
  }
}
</style>