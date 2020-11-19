<template>
  <div class="body">
    <headers :back="back" title="我的关注" />
    <div v-for="(item, index) of data" :key="index">
      <userFollows :nickname="item.nickname" :head_img="item.head_img" />
    </div>
  </div>
</template>

<script>
import headers from "../components/header";
import userFollows from "../components/userFollows";

export default {
  components: { headers, userFollows },
  methods: {
    back() {
      window.location.href = "#/userindex";
    },
  },
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.$axios({
      url: `http://157.122.54.189:9083/user_follows`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      this.data = res.data.data;
      console.log(this.data);
      // if (res.data.statusCode == 401) {
      //   window.location.href = "#/login";
      // } else {
      //   console.log(this.nickname);
      //   console.log(this.head_img);
      //   this.nickname = res.data.data.nickname;
      //   this.head_img = res.data.data.head_img;
      // }
    });
  },
};
</script>

<style lang="less" scoped>
</style>