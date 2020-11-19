<template>
  <div class="body">
    <div class="header">
      <headers :back="back" title="修改信息" />
      <div class="header_img">
        <img :src="'http://157.122.54.189:9083'+ head_img" />
      </div>
    </div>
    <item item_left="昵称" :item_right="nickname" />
    <item item_left="密码" item_right="******" />
    <item item_left="性别" :item_right="gender" />
  </div>
</template>

<script>
import item from "../components/item";
import headers from "../components/header";
export default {
  components: { item, headers },
  data() {
    return {
      nickname: "",
      head_img: "",
      gender: "男",
    };
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
        this.nickname = res.data.data.nickname;
        this.head_img = res.data.data.head_img;
        console.log(this.nickname);
        console.log(this.head_img);
        console.log(res.data.data.gender);
        if (res.data.data.gender != 1) {
          this.gender = "女";
        }
      }
    });
  },
  methods: {
    back() {
      window.location.href = "#/userindex";
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  height: 1000 /360 * 100vw;
  background-color: #f2f2f2;
}
.header {
  .header_img {
    width: 75 /360 * 100vw;
    height: 75 /360 * 100vw;
    border-radius: 50%;
    overflow: hidden;
    margin: 20 /360 * 100vw auto;
    img {
      width: 100%;
      transform: scale(1.1);
    }
  }
}
</style>