<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      :class="activeClasses"
      active-class="active"
      aria-current="page"
      :href="page.link.url"
      :title="`This link goes to the ${page.link.text} page`"
      >{{ page.link.text }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index"],
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
