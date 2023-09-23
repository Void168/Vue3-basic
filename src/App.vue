<template>
  <div>
    <nav-bar :pages="pages"></nav-bar>
    <router-view></router-view>
    <!-- <page-viewer
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <create-page @page-created="pageCreated"></create-page> -->
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar.vue";

export default {
  components: {
    "nav-bar": Navbar,
  },
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>

<style scoped></style>
