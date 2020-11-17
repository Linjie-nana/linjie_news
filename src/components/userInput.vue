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
        console.log(this.err_msg);
      }
    },
  },
  methods: {
    doit() {
      if (!this.isValid) {
        alert(this.err_msg);
      }
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