<template>
  <div class="body">
    <headers title="我的跟帖"></headers>
  </div>
</template>

<script>
import headers from "@/components/header";
export default {
  components: {
    headers,
  },
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    this.$axios({
      url: `/user_comments`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      this.data = res.data.data;
      console.log(this.data);
    });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>