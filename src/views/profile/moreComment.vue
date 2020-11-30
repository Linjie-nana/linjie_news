<template>
  <div class="box">
    <headers title="更多跟帖" />
    <van-list
      @load="loadMore"
      :immediate-check="false"
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
    >
      <comment :commentData="item" v-for="(item, index) in commentList" :key="index" />
    </van-list>
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
      pageIndex: 1,
      pageSize: 5,
      loading: false,
      finished: false,
    };
  },
  created() {
    this.loadComment();
  },
  methods: {
    loadComment() {
      this.$axios({
        url: "/post_comment/" + this.$route.query.id,
        params: {
          pageSize: this.pageSize,
          pageIndex: this.pageIndex,
        },
      }).then((res) => {
        console.log(res.data.data);
        this.commentList = [...this.commentList, ...res.data.data];
        this.loading = false;
        if (res.data.data.length < this.pageSize) {
          this.finished = true;
        }
      });
    },
    loadMore() {
      this.pageIndex += 1;
      this.loadComment();
    },
  },
};
</script>

<style>
</style>