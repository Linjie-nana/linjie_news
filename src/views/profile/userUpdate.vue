<template>
  <div class="body">
    <div class="header">
      <headers title="修改信息" />
      <div class="header_img">
        <!-- <img :src="'http://157.122.54.189:9083'+ head_img" /> -->
        <van-uploader :after-read="afterRead">
          <img :src="'http://157.122.54.189:9083'+userInfo.head_img" alt class="img" />
        </van-uploader>
      </div>
    </div>
    <item item_left="昵称" :item_right="userInfo.nickname" @click.native="nickshow = true;" />
    <item item_left="密码" item_right="******" @click.native="pwdshow = true;" />
    <item
      item_left="性别"
      :item_right="userInfo.gender == 1 ? '男' : '女'"
      @click.native="gendershow = true;"
    />

    <van-dialog v-model="nickshow" title="修改昵称" show-cancel-button @confirm="setNickname">
      <van-field v-model="nickname" label="用户名" :placeholder="nickname" />
    </van-dialog>

    <van-dialog v-model="pwdshow" title="修改密码" show-cancel-button @confirm="setPassword">
      <van-field v-model="password" label="密码" :placeholder="nickname" />
    </van-dialog>

    <!-- vant弹出选项模板，actions为选项，-->
    <van-action-sheet
      v-model="gendershow"
      :actions="genderList"
      @select="setGender"
      cancel-text="取消"
    />
  </div>
</template>






<script>
import item from "@/components/item";
import headers from "@/components/header";
// import { Dialog } from "vant";

export default {
  components: {
    item,
    headers,
  },
  data() {
    return {
      userInfo: {},

      //修改后的值
      nickname: "",
      head_img: "",
      password: "",

      //vant组件的显示状态
      nickshow: false,
      pwdshow: false,
      gendershow: false,

      //性别组件选项
      genderList: [
        { name: "男", gender: 1 },
        { name: "女", gender: 0 },
      ],
    };
  },

  // 首次加载请求数据渲染页面
  created() {
    this.load();
  },

  methods: {
    load() {
      this.$axios({
        url: `/user/${localStorage.getItem("userId")}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((res) => {
        const { data, message } = res.data;
        if (message == "获取成功") {
          this.userInfo = data;
        }
      });
    },

    // 上传图片功能-------------------------
    afterRead(file) {
      console.log(file);
      let formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
      formData.append("file", file.file);
      // 此时可以自行将文件上传至服务器
      this.$axios({
        url: "/upload",
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: formData,
      }).then((res) => {
        //上传图片后顺带获取图片地址
        this.head_img = res.data.data.url;
        //获取到的数据去调用封装的提交请求
        const data = { head_img: this.head_img };
        this.editPrifile(data);
      });
    },

    //昵称点击确定后执行的函数---------
    setNickname() {
      const data = { nickname: this.nickname };
      // 将获取到的参数传入封装的请求函数中
      this.editPrifile(data);
      this.nickname = "";
    },

    //密码点击确认---------------------
    setPassword() {
      const data = { password: this.password };
      // 将获取到的参数传入封装的请求函数中
      this.editPrifile(data);
      this.password = "";
    },

    setGender(res) {
      console.log(res);
      const data = { gender: res.gender };
      this.editPrifile(data);
      this.gendershow = false;
    },

    //封装点击后确定后的请求发送
    editPrifile(data) {
      this.$axios({
        method: "post",
        url: `/user_update/${localStorage.getItem("userId")}`,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data,
      }).then((res) => {
        this.load();
      });
    },
  },
};
</script>






<style lang="less" scoped>
.body {
  min-height: 100vh;
  background-color: #f2f2f2;
}
.header {
  .header_img {
    width: 100%;
    height: 70 /360 * 100vw;
    margin-top: 30 /360 * 100vw;
    margin-bottom: 40 /360 * 100vw;
    text-align: center;
    .img {
      width: 70/360 * 100vw;
      height: 70/360 * 100vw;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>