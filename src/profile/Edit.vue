<template>
  <div class="contain_edit">
     <auth-user-t userTitle="编辑资料"/>
     <div class="user_img">
       <van-uploader :after-read="afterRead">
          <img :src="head_img" alt="" class="avatar"/>
       </van-uploader>
      </div>
     <Auth-mine minecard="昵称" :card="nickname"/>
     <Auth-mine minecard="密码" card="*****"/>
     <Auth-mine minecard="性别" :card="gender"/>
  </div>
</template>

<script>
import AuthMine from "../components/AuthMine";
import AuthUserT from "../components/AuthUserT";
export default {
  data(){
      return {
        id:'',
        token:'',
        nickname:'',
        head_img:'',
        gender:'',
        fileList: '',
      }
  },
  components: {
      AuthMine,
      AuthUserT
  },
  created(){
   //   把id从本地取出来
    this.id = localStorage.getItem("id");
    //   把token从本地取出来
    this.token = localStorage.getItem("token");
    // 设置token请求头，验证token
    this.$axios({
      url: " http://157.122.54.189:9083/user/" + this.id,
      method: "get",
      headers: { Authorization: this.token },
    }).then((res) => {
      if (res.data.message === "获取成功") {
        // console.log(res);
        this.nickname = res.data.data.nickname;
        // 拼接图片地址
        this.head_img = ' http://157.122.54.189:9083' + res.data.data.head_img;
        if(res.data.data.gender === 0){
            this.gender = '男'
        }else{
            this.gender = '女'
        }
        
      }
    });
    
  },
  methods: {
    // 上传图片功能
     afterRead(file) {
        // console.log(file);
        let formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
　　     formData.append('file', file.file);
        // 此时可以自行将文件上传至服务器
        this.$axios({
          url: " http://157.122.54.189:9083/upload",
          method: "post",
          headers: { Authorization: this.token },
          data: formData
        
        }).then(res => {
           this.head_img = ' http://157.122.54.189:9083' + res.data.data.url;
        });
    },
  },
}
</script>

<style lang="less" scoped>
.contain_edit{
    padding: 20 /360*100vw 20 /360*100vw 0;
    min-height: 100vh;
    background: url('../assets/timg.jpeg') no-repeat;
   
}

.user_img {
  width: 100%;
  height: 70 /360 * 100vw;
  margin-top: 30 /360 * 100vw;
  margin-bottom: 40 /360*100vw;
  text-align: center;
  .avatar {
    width: 70/360*100vw;
    height: 70/360*100vw;
    object-fit: cover;
    border-radius: 50%;
  }
}
.userpic{
   background-color: #fff;
}
</style>