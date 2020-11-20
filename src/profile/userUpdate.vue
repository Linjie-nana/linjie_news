<template>
  <div class="body">
    <div class="header">
      <headers title="修改信息" />
      <div class="header_img">
        <!-- <img :src="'http://157.122.54.189:9083'+ head_img" /> -->
        <van-uploader :after-read="afterRead">
          <img :src="'http://157.122.54.189:9083'+ head_img" alt class="img" />
        </van-uploader>
      </div>
    </div>
    <item item_left="昵称" :item_right="nickname" @click.native="nick" />
    <item item_left="密码" item_right="******" @click.native="pwd" />
    <item item_left="性别" :item_right="gender" @click.native="gen" />

    <van-dialog v-model="nickshow" title="修改昵称" show-cancel-button :beforeClose="beforeClose">
      <van-field v-model="nickname" label="用户名" :placeholder="nickname" />
    </van-dialog>
    <van-dialog v-model="pwdshow" title="修改密码" show-cancel-button :beforeClose="beforeClose">
      <van-field v-model="password" label="密码" :placeholder="nickname" />
    </van-dialog>
    <van-dialog v-model="gendershow" title="修改性别" show-cancel-button :beforeClose="beforeClose">
      <van-field v-model="gender" label="用户名" :placeholder="nickname" />
    </van-dialog>
  </div>
</template>






<script>
import item from "../components/item";
import headers from "../components/header";
import { Dialog } from "vant";

export default {
  components: {
    item,
    headers,
  },
  data() {
    return {
      gender: "男",
      //修改后的值
      nickname: "",
      head_img: "",
      password: "",
      sex: 1,

      //vant组件调用
      nickshow: false,
      pwdshow: false,
      gendershow: false,
    };
  },
  mounted() {
    this.$axios({
      url: `http://157.122.54.189:9083/user/${localStorage.getItem("userId")}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      console.log(res);
      if (res.data.statusCode == 401) {
        window.location.href = "#/login";
      } else {
        this.nickname = res.data.data.nickname;
        this.head_img = res.data.data.head_img;
        this.password = res.data.data.password;
        if (res.data.data.gender != 1) {
          this.gender = "女";
          this.sex = 0;
        }
      }
    });
  },

  methods: {
    // 上传图片功能
    afterRead(file) {
      console.log(file);
      let formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
      formData.append("file", file.file);
      // 此时可以自行将文件上传至服务器
      this.$axios({
        url: " http://157.122.54.189:9083/upload",
        method: "post",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        data: formData,
      }).then((res) => {
        this.head_img = res.data.data.url;
      });
    },

    //弹出层
    nick() {
      this.nickshow = !this.nickshow;
    },
    pwd() {
      this.pwdshow = !this.pwdshow;
    },
    gen() {
      this.gendershow = !this.gendershow;
    },

    beforeClose(action, done) {
      if (action === "confirm") {
        if (this.gender == "男") {
          this.sex = 1;
        } else {
          this.sex = 2;
        }
        this.$axios({
          url: ` http://157.122.54.189:9083/user_update/${localStorage.getItem(
            "userId"
          )}`,
          method: "post",
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          data: {
            nickname: this.nickname,
            password: this.password,
            head_img: this.head_img,
            gender: this.sex,
          },
        }).then((res) => {
          done();
        });
      } else if (action === "cancel") {
        done();
      }
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