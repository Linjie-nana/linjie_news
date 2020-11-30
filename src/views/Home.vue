<template>
  <div class="body">
    <indexHeader />

    <div class="nav">
      <van-tabs
        v-model="active"
        swipeable
        class="van-tabs"
        background="#f4f4f4"
        title-active-color="#54a9e2"
      >
        <van-tab v-for="item in arr" :title="item.name" :key="item.id">
          <van-list
            @load="loadMore"
            :immediate-check="false"
            v-model="item.loading"
            :finished="item.finished"
            finished-text="我是有底线的"
          >
            <indexPostIten
              v-for="artic in item.postList"
              :postData="artic"
              :key="artic.id"
              @click.native="link(artic.id)"
            />
          </van-list>
        </van-tab>
      </van-tabs>
      <div class="icon">
        <span class="iconfont iconjiantou"></span>
      </div>
    </div>
  </div>
</template>

<script>
import indexHeader from "../components/indeHeader";
import indexPostIten from "../components/indexPostItem";
export default {
  components: { indexHeader, indexPostIten },
  data() {
    return {
      // tabs栏监听
      active: 0,
      // arr 是tabs栏渲染的分类，将文章页存放于此
      arr: [],
      isLoading: false,
    };
  },
  watch: {
    active() {
      // vant框架的tab栏监听的索引号，通过这个this.active得到需要发送的数值
      console.log(this.active, "获取改变后的索引");
      const currentItem = this.arr[this.active];
      console.log(currentItem, "根据索引在tab栏分类数组种找到相关数据");

      // 因为将文章储存的数据储存在了postList[]种，在监听到发生改变的时候就进行判断看是否有获取过文章列表
      if (currentItem.postList.length == 0) {
        // 如果没有获取过文章列表，则判定获取列表
        this.loadPost();
      }
    },
  },
  created() {
    this.$axios({
      url: "/category",
    }).then((res) => {
      const res_data = res.data.data;
      // /这一种是去重渲染首页
      let new_arr = new Set();
      res_data.forEach((element) => {
        if (!new_arr.has(element.name)) {
          new_arr.add(element.name);
          this.arr.push(element);
        }
      });
      // 得到列表项目的同时，将文章数组放入该列表内的postList[]
      this.arr = this.arr.map((item) => {
        return {
          ...item,
          postList: [],
          //端口的页数参数，初始化文章数据的时候加进去
          pageIndex: 1,
          pageSize: 6,
          loading: false,
          finished: false,
        };
      });
      console.log(this.arr);
      this.loadPost();
    });
  },

  methods: {
    loadMore() {
      //获取对应的文章数据
      const page = this.arr[this.active];
      // 文章数量加1
      page.pageIndex += 1;
      // 加1后再次提交数据
      this.loadPost();
    },
    loadPost() {
      // 获取分类列表对应的数据
      const currentDate = this.arr[this.active];
      this.$axios({
        url: "/post",
        params: {
          //发送id
          category: currentDate.id,
          //发送上加上页码页pageIndex和每页加载的文章数量pageSize
          pageSize: currentDate.pageSize,
          pageIndex: currentDate.pageIndex,
        },
      }).then((res) => {
        console.log(res, "请求文章列表数据");
        currentDate.postList = [...currentDate.postList, ...res.data.data];
        console.log(this.arr, "检查数据");

        currentDate.loading = false;
        //判断如果页面获取的文章数量大小，来判断是否到达了最底部,小于每页要求的加载数量则是到底部了
        if (res.data.data.length < currentDate.pageSize) {
          currentDate.finished = true;
        }
      });
    },

    link(id) {
      sessionStorage.setItem("id", id);
      this.$router.push("/articleDetails");
    },
  },
};
// axios 使用方式
</script>

<style lang="less" scoped>
.nav {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 35 /360 * 100vw;
  background-color: #fff;
  .icon {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 35 /360 * 100vw;
    width: 35 /360 * 100vw;
    background-color: #f4f4f4;
    text-align: center;
    line-height: 35 /360 * 100vw;
    transform: rotate(270deg);
    .iconjiantou {
      font-size: 18 /360 * 100vw;
    }
  }
  /deep/ .van-tabs__wrap {
    height: 35 /360 * 100vw;
  }
  /deep/ .van-tab__text {
    font-size: 14 /360 * 100vw;
  }
  /deep/ .van-tabs__line {
    background-color: #54a9e2;
  }
}
</style>