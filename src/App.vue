<template>
  <div>
    <nav-bar :pages="pages" :active-page="activePage"></nav-bar>
    <router-view></router-view>
    <!-- <page-viewer
      v-if="pages.length > 0"
      :page="pages[activePage]"
    ></page-viewer>

    <create-page @page-created="pageCreated"></create-page> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    "nav-bar": Navbar,
    "page-viewer": PageViewer,
    "create-page": CreatePage,
  },
  created() {
    this.getPages();

    this.$bus.$on("navbarLinkActived", (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>

<style scoped></style>
