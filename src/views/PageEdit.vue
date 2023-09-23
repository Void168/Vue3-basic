<template>
  <div>edit {{ route.params.index }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps(["index"]);
</script>
