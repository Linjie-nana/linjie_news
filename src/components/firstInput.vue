<template>
  <div class="inputWrapper">
    <input
      :type="type"
      v-model="num"
      :class="{
                success: isValid,
                error: !isValid
            }"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: ["type", "placeholder"],
  data() {
    return {
      num: "",
      isValid: "",
    };
  },
  watch: {
    num: function (val) {
      if (val == "admin") {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
  },
};
</script>


<style lang="less">
.inputWrapper {
  padding-bottom: 16/360 * 100vw;
  input {
    width: 100%;
    height: 48/360 * 100vw;
    line-height: 48/360 * 100vw;
    font-size: 18/360 * 100vw;
    border: none;
    outline: none;
    border-bottom: 1px solid #333;
    transition: all 0.3s;
  }
}
.success {
  border-bottom: 3px solid #2887c7 !important;
}
</style>