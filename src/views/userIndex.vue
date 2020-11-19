<template>
  <div class="body">
    <div class="header" @click="link">
      <div class="header_img">
        <img :src="'http://157.122.54.189:9083'+ head_img" />
      </div>
      <div class="user_name">
        <span class="name">
          <span class="iconfont iconxingbienan"></span>
          {{nickname}}
        </span>
        <p>2019-10-10</p>
      </div>
      <span class="iconfont iconjiantou1"></span>
    </div>

    <div class="content">
      <item item_left="我的关注" item_right="关注的用户" />
      <item item_left="我的跟帖" item_right="跟帖/回复" />
      <item item_left="我的收藏" item_right="文章/视频" />
      <item item_left="设置" />
    </div>
  </div>
</template>

<script>
import item from "../components/item";
export default {
  data() {
    return {
      nickname: "",
      head_img: "",
    };
  },
  components: { item },
  methods: {
    link() {
      window.location.href = "#/userupdata";
    },
  },
  mounted() {
    this.$axios({
      url: `http://157.122.54.189:9083/user/${localStorage.getItem("userId")}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      if (res.data.statusCode == 401) {
        window.location.href = "#/login";
      } else {
        console.log(this.nickname);
        console.log(this.head_img);
        this.nickname = res.data.data.nickname;
        this.head_img = res.data.data.head_img;
      }
    });
  },
};
</script>

<style lang="less" scoped>
.body {
  height: 1000px;
  background-color: #f2f2f2;
}
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
    overflow: hidden;
    img {
      transform: scale(1.1);
      width: 100%;
    }
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
    .iconxingbienan {
      vertical-align: middle;
      font-size: 20 /360 * 100vw;
      color: #f2f2f2;
      font-weight: 400;
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
</style>