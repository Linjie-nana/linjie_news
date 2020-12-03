<template>
  <div>
    <TopNav title="我的跟帖" />
    <div class="list">
      <div class="item" v-for="comment in commentList" :key="comment.id">
        <div class="date">2000-01-01</div>
        <div class="parent" v-if="comment.parent">
          <div class="nickname">
            回复:
            {{
            comment.parent.user.nickname ||
            comment.parent.user.username
            }}
          </div>
          <div class="content">{{ comment.parent.content }}</div>
        </div>
        <div class="mainContent">{{ comment.content }}</div>
        <div class="post" v-if="comment.post">原文: {{ comment.post.title }}</div>
        <div v-else class="post">原文: 该帖子已被删除</div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "../../components/header";
export default {
  components: {
    TopNav,
  },
  data() {
    return {
      commentList: [],
    };
  },
  created() {
    // 加载我的评论数据
    this.$axios({
      url: "/user_comments",
    }).then((res) => {
      console.log(res.data);
      this.commentList = res.data.data;
    });
  },
};
</script>

<style lang="less" scoped>
.list {
  .item {
    padding: 14 /360 * 100vw;
    border-bottom: 1px solid #e4e4e4;
    .date {
      font-size: 14 /360 * 100vw;
      color: #888;
    }
    .parent {
      background: #e4e4e4;
      margin: 10 /360 * 100vw 0;
      padding: 10 /360 * 100vw;
      color: #888;
      .nickname {
        font-size: 14 /360 * 100vw;
      }
      .content {
        font-size: 16 /360 * 100vw;
        margin-top: 10 /360 * 100vw;
      }
    }
    .mainContent {
      font-size: 16 /360 * 100vw;
      color: #333;
    }
    .post {
      font-size: 14 /360 * 100vw;
      color: #888;
      margin-top: 10 /360 * 100vw;
    }
  }
}
</style>