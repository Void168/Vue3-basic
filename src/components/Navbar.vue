<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']"
  >
    <div class="container-fuild d-flex mx-4 w-100">
      <a class="navbar-brand" href="#">My Vue</a>
      <div
        class="collapse navbar-collapse d-flex justify-between"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <navbar-link
            v-for="(page, index) in publishedPages"
            class="nav-item"
            :key="index"
            :page="page"
            :index="index"
          >
          </navbar-link>
          <li>
            <router-link
              to="/pages"
              class="nav-link"
              aria-current="page"
              active-class="active"
              >Pages</router-link
            >
          </li>
        </ul>
        <form class="d-flex">
          <button class="btn btn-primary" @click.prevent="changeTheme()">
            Toggle
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  components: {
    NavbarLink,
  },
  inject: ["$pages", "$bus"],
  created() {
    this.getThemeSetting();

    this.pages = this.$pages.getAllPages();

    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllPages()];
    });

    this.$bus.$on("page-created", () => {
      this.pages = [...this.$pages.getAllPages()];
    });

    this.$bus.$on("page-deleted", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  data() {
    return {
      theme: "light",
      data: [],
    };
  },
  methods: {
    changeTheme() {
      let theme = "light";

      if (this.theme == "light") {
        theme = "dark";
      }

      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");

      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
