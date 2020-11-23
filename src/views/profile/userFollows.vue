<template>
  <div class="body">
    <headers title="我的关注" />
    <!-- <userFollows
      :nickname="item.nickname"
      :head_img="item.head_img"
      v-for="(item, index) of data"
      :key="index"
      :index="item.id"
    />-->
    <div class="love_item" v-for="(item, index) of data" :key="index">
      <div class="img">
        <img :src="'http://157.122.54.189:9083'+ item.head_img" />
      </div>
      <div class="title">
        <span>{{item.nickname}}</span>
        <p>2019-10-10</p>
      </div>
      <button @click="delet(item.id)">取消关注</button>
    </div>
    <input type="text" placeholder="输入关注的用户id" v-model="flllowID" />
    <button @click="follow">关注</button>
  </div>
</template>

<script>
import headers from "@/components/header";
// import userFollows from "@/components/followItem";

export default {
  components: { headers },
  data() {
    return {
      flllowID: "",
      data: "",
    };
  },
  created() {
    this.load();
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
        this.load();
      });
    },

    // 去掉关注-----------------------
    delet(id) {
      console.log(id);
      this.$axios({
        url: `/user_unfollow/${id}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        this.$toast(res.data.message);
        this.load();
      });
    },
    //封装请求-------------------
    load() {
      this.$axios({
        url: `http://157.122.54.189:9083/user_follows`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        this.data = res.data.data;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.love_item {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100 /360 * 100vw;
  background-color: #f2f2f2;
  border-bottom: 1px solid #cccccc;
  .img {
    overflow: hidden;
    margin: 0 20 /360 * 100vw;
    width: 50 /360 * 100vw;
    height: 50 /360 * 100vw;
    border-radius: 50%;
    background-color: yellow;
    img {
      width: 100%;
      transform: scale(2);
    }
  }
  .title {
    span {
      font-size: 15 /360 * 100vw;
    }
    p {
      color: #b0b0b0;
    }
  }

  button {
    position: absolute;
    right: 10 /360 * 100vw;
    height: 30 /360 * 100vw;
    width: 75 /360 * 100vw;
    border-radius: 19px;
    font-size: 11 /360 * 100vw;
    border: 0px;
    background-color: #54a9e2;
    color: snow;
  }
}
</style>