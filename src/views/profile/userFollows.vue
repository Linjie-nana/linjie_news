<template>
  <div class="body">
    <headers title="我的关注" />
    <userFollows
      :nickname="item.nickname"
      :head_img="item.head_img"
      v-for="(item, index) of data"
      :key="index"
      :index="item.id"
    />
    <input type="text" placeholder="输入关注的用户id" v-model="flllowID" />
    <button @click="follow">关注</button>
  </div>
</template>

<script>
import headers from "@/components/header";
import userFollows from "@/components/followItem";

export default {
  components: { headers, userFollows },
  data() {
    return {
      flllowID: "",
      data: "",
    };
  },
  methods: {
    follow() {
      this.$axios({
        url: `/user_follows/${this.flllowID}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.$axios({
      url: `http://157.122.54.189:9083/user_follows`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      this.data = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
</style>