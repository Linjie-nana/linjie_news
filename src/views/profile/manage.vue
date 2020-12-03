<template>
  <div class="box">
    <headers title="栏目管理" />
    <div class="box_body">
      <div class="title">点击删除以下频道</div>
      <div class="item_box">
        <div
          class="item"
          v-for="(item,index) in activeList"
          :key="index"
          @click="remove(index)"
        >{{item.name}}</div>
      </div>
      <div class="title">点击添加一下频道</div>
      <div class="item_box">
        <div
          class="item"
          v-for="(item,index) in deactiveList"
          :key="index"
          @click="add(index)"
        >{{item.name}}</div>
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
      activeList: [],
      deactiveList: [],
    };
  },
  watch: {
    activeList() {
      localStorage.setItem("activeList", JSON.stringify(this.activeList));
    },
    deactiveList() {
      localStorage.setItem("deactiveList", JSON.stringify(this.deactiveList));
    },
  },
  created() {
    //判断，如果用户的永久存储里面有两个数组则将数据存入变量中
    if (localStorage.getItem("activeList")) {
      this.activeList = JSON.parse(localStorage.getItem("activeList"));
      if (localStorage.getItem("deactiveList")) {
        this.deactiveList = JSON.parse(localStorage.getItem("deactiveList"));
      }
    }
    //没有则发送请求从接口获取
    else {
      this.$axios({
        url: "/category",
      }).then((res) => {
        const res_data = res.data.data;
        // /这一种是去重
        let new_arr = new Set();
        res_data.forEach((element) => {
          if (!new_arr.has(element.name)) {
            new_arr.add(element.name);
            this.activeList.push(element);
          }
        });
        console.log(this.activeList);
      });
    }
  },
  methods: {
    remove(index) {
      if (this.activeList.length == 1) {
        this.$toast("求求溜一个吧");
      } else {
        this.deactiveList.push(this.activeList[index]);
        this.activeList.splice(index, 1);
      }
    },
    add(index) {
      if (this.deactiveList.length == 1) {
        this.$toast("求求溜一个吧");
      } else {
        this.activeList.push(this.deactiveList[index]);
        this.deactiveList.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.box_body {
  padding: 10 /360 * 100vw;
  .title {
    font-size: 13 /360 * 100vw;
    color: #979797;
  }
  .item_box {
    margin: 15 /360 * 100vw 0;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    .item {
      padding: 7 /360 * 100vw 15 /360 * 100vw;
      display: inline-block;
      font-size: 16 /360 * 100vw;
      border: 1px solid #ccc;
      margin: 6 /360 * 100vw 10 /360 * 100vw;
    }
  }
}
</style>