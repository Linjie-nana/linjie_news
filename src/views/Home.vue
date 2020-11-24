<template>
  <div class="body">
    <indexHeader />

    <div class="nav">
      <van-tabs v-model="active" s class="van-tabs" background="#f4f4f4" @click="gogogo">
        <van-tab v-for="(item,index) in arr" :title="item.name" :key="index" :name="item.id">
          <indexPostIten v-for="(item,index) in postData" :postData="item" :key="index" />
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
      active: 11,
      // arr 是nav栏渲染的分类
      arr: [],
      postData: [],
    };
  },

  created() {
    this.gogogo(11),
      this.$axios({
        url: "/category",
        method: "GET",
      }).then((res) => {
        const res_data = res.data.data;
        //这一种提取is_top的类型渲染首页
        // console.log(this.arr);
        // res_data.forEach((item) => {
        //   if (item.is_top == 0) {
        //     this.arr.push(item);
        //   }
        // });

        // /这一种是去重渲染首页

        let new_arr = new Set();
        res_data.forEach((element) => {
          if (!new_arr.has(element.name)) {
            new_arr.add(element.name);
            this.arr.push(element);
          }
        });
        console.log(this.arr);
      });
  },

  methods: {
    gogogo(name) {
      this.$axios({
        url: `/post?category=${name}`,
        method: "get",
      }).then((res) => {
        // console.log(res);
        this.postData = res.data.data;
        console.log(this.postData);
      });
      // console.log(name);
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