<template>
  <div class="footer">
    <!-- 未激活 -->
    <div class="disable" v-if="!isActive">
      <input type="text" placeholder="写跟帖" @focus="showTextarea" :value="content" />
      <div class="commentWrapper">
        <span class="iconfont iconpinglun-"></span>
        <div class="number">250</div>
      </div>
      <span class="iconfont iconshoucang"></span>
      <span class="iconfont iconfenxiang"></span>
    </div>

    <!-- 已激活状态 -->
    <div class="enable" v-if="isActive">
      <textarea rows="3" @blur="hideTextarea" ref="textarea" v-model="content"></textarea>
      <div class="btnSubmit" @click="sendComment">发送</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      isActive: "",
    };
  },
  methods: {
    showTextarea() {
      this.isActive = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    sendComment() {
      this.$axios({
        method: "post",
        url: "/post_comment/" + sessionStorage.getItem("id"),
        data: {
          content: this.content,
          // parent_id: 1807,
        },
      }).then((res) => {
        console.log(res.data);
      });
    },
    hideTextarea() {
      setTimeout(() => {
        this.isActive = false;
      }, 100);
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f2f2f2;
  .iconfont {
    font-size: 24/360 * 100vw;
  }
  .disable {
    display: flex;
    justify-content: space-around;
    padding: 10/360 * 100vw 0;
    input {
      background: #d7d7d7;
      font-size: 14/360 * 100vw;
      line-height: 30/360 * 100vw;
      border-radius: 16/360 * 100vw;
      border: none;
      outline: none;
      padding: 0 16/360 * 100vw;
      width: 176/360 * 100vw;
      box-sizing: border-box;
    }
    .commentWrapper {
      position: relative;
      .number {
        position: absolute;
        top: -5px;
        left: 4px;
        background: red;
        color: #fff;
        font-size: 12/360 * 100vw;
        line-height: 16/360 * 100vw;
        border-radius: 10/360 * 100vw;
        padding: 0 6/360 * 100vw;
      }
    }
  }
  .enable {
    padding: 10/360 * 100vw;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    textarea {
      width: 260/360 * 100vw;
      background: #d7d7d7;
      border: none;
      outline: none;
      border-radius: 8/360 * 100vw;
      padding: 8/360 * 100vw;
      box-sizing: border-box;
      font-size: 16/360 * 100vw;
      resize: none;
    }
    .btnSubmit {
      background: red;
      color: #fff;
      font-size: 14/360 * 100vw;
      line-height: 26/360 * 100vw;
      border-radius: 14/360 * 100vw;
      padding: 0 14/360 * 100vw;
    }
  }
}
</style>