<template>
  <div class>
    <headers title="收藏页" />
    <indexPostItem
      v-for="artic in postList"
      :postData="artic"
      :key="artic.id"
      @click.native="link(artic.id)"
    />
  </div>
</template>

<script>
import headers from "@/components/header";
import indexPostItem from "../../components/indexPostItem";
export default {
  data() {
    return {
      postList: [],
    };
  },
  components: {
    headers,
    indexPostItem,
  },
  created() {
    this.$axios({
      url: "/user_star",
    }).then((res) => {
      this.postList = res.data.data;
    });
  },
  methods: {
    link(id) {
      sessionStorage.setItem("id", id);
      this.$router.push("/articleDetails");
    },
  },
};
</script>

<style>
</style>