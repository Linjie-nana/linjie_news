<template>
  <div class="box">
    <div class="top">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <span class="iconfont iconsearch"></span>
      <input type="text" placeholder="许上林花费高价越南购买老婆" v-model="search" />
      <span @click="postSearch">搜索</span>
    </div>

    <div class="history" v-if="postList==0">
      <div class="historySearch">历史纪录</div>
      <!-- 历史记录 -->
      <div
        class="historyItem"
        v-for="(item,index) of history"
        :key="index"
        @click="history_search(item)"
      >{{item}}</div>
    </div>
    <div class="content" v-if="postList!=0">
      <div class="title" v-for="(item,index) of postList" :key="index" @click="link(item.id)">
        {{item.title}}
        <span class="iconfont iconjiantou1"></span>
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
      search: "",
      postList: "",
      history: "",
    };
  },
  created() {
    this.loadHistory();
  },
  methods: {
    postSearch() {
      if (this.search != "") {
        this.$axios({
          url: "/post_search",
          params: {
            keyword: this.search,
          },
        }).then((res) => {
          this.postList = res.data.data;
          //   判断历史记录去重;
          if (this.history.indexOf(this.search) == -1) {
            //获取历史;
            let obj = localStorage.getItem("history").split(",");
            console.log(obj, "获取的数组");
            //如果local里面没有history;
            if (obj == null) {
              obj = [];
            }
            //加入到数组中
            obj.push(this.search);
            console.log(obj, "加入数组后");
            localStorage.setItem("history", obj);
            //重新加载this.history
            this.loadHistory();
          } else if (res.data.data == 0) {
            this.$toast("无内容");
          }
        });
      } else {
        this.postList = "";
        this.$toast("请输入搜索内容");
      }
    },

    loadHistory() {
      this.history = localStorage.getItem("history").split(",");
      console.log(this.history);
    },
    history_search(item) {
      this.search = item;
      this.postSearch();
    },

    // 因为文章是根据   sessionStorage获取的，所以转跳直接将id加入到其中
    link(id) {
      sessionStorage.setItem("id", id);
      this.$router.push("/articleDetails");
    },
  },
};
</script>


<style lang="less" scoped>
.top {
  padding: 0 10 /360 * 100vw;
  position: relative;
  height: 50 /360 * 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .iconfont {
    font-size: 16 /360 * 100vw;
    font-weight: 700;
    color: rgb(158, 158, 158);
  }
  input {
    box-sizing: border-box;
    width: 80%;
    outline: none;
    height: 30 /360 * 100vw;
    border-radius: 15 /360 * 100vw;
    border: 1px solid #ccc;
    padding: 0 25 /360 * 100vw;
  }
  .iconsearch {
    position: absolute;
    left: 12%;
  }
}
.history {
  padding: 20 /360 * 100vw;
  .historySearch {
    font-size: 16 /360 * 100vw;
    font-weight: 700;
    margin-bottom: 10 /360 * 100vw;
  }
  .historyItem {
    margin: 5 /360 * 100vw;
    display: inline-block;
    width: 20%;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
}

.content {
  .title {
    height: 40 /360 * 100vw;
    line-height: 40 /360 * 100vw;
    border-bottom: 1px solid #ccc;
    padding: 0 10 /360 * 100vw;
    font-size: 13 /360 * 100vw;
    span {
      float: right;
      padding-right: 10 /360 * 100vw;
    }
  }
}
</style>