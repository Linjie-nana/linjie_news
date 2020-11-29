<template>
  <div class="box">
    <headers title="更多跟帖" />
    <comment :commentData="item" v-for="(item, index) in commentList" :key="index" />
  </div>
</template>

<script>
import headers from "../../components/header";
import comment from "../../components/comment/mian";
export default {
  components: {
    comment,
    headers,
  },
  data() {
    return {
      commentList: "",
    };
  },
  created() {
    this.$axios({
      url: "/post_comment/" + this.$route.query.id,
    }).then((res) => {
      console.log(res.data.data);

      this.commentList = res.data.data;
    });
  },
};
</script>

<style>
</style>