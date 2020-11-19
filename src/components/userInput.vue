<template>
  <div class="inputWrapper">
    <input
      @blur="doit"
      :type="type"
      v-model="value"
      :class="{
                success: isValid,
                error: !isValid
            }"
      :placeholder="placeholder"
      :err_msg="err_msg"
    />
  </div>
</template>
   
<script>
/**
 * @type 文本框类型
 * @err_msg 失败提示
 * @yes_msg 成功提示
 * @rule  正则规则
 */

export default {
  props: ["type", "placeholder", "rule", "err_msg", "yes_msg"],
  data() {
    return {
      value: "",
      isValid: "true",
    };
  },
  watch: {
    value: function (val) {
      if (this.rule.test(val)) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
  },
  methods: {
    doit() {
      if (!this.isValid) {
        // this.$toast.fail(this.err_msg);
        // 参数模式
        this.$toast.fail({
          message: this.err_msg,
          // position: "bottom",
        });
      }
      //父级提交value
      this.$emit("push_num", this.value, this.isValid);
    },
  },
};
</script>


<style lang="less" scoped>
.inputWrapper {
  padding-bottom: 16/360 * 100vw;
  input {
    box-sizing: border-box;
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    background: #fff;
    // border-bottom: 1px solid #333;
    padding-left: 10 /360 * 100vw;
    transition: all 0.3s;
    border-radius: 24/360 * 100vw;
    box-shadow: 7 /360 * 100vw 11 /360 * 100vw 13 /360 * 100vw 0px #ebe4e6;
  }
}

.error {
  // box-shadow: 0px 0px 13px 0px #fe81b6 !important;
  box-shadow: 7 /360 * 100vw 11 /360 * 100vw 13 /360 * 100vw 0px #f1c4d1 !important;
}
</style>