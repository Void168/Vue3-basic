<template>
  <div class="container">
    <h4>Pages</h4>
    <div class="text-end">
      <router-link to="/pages/create" class="btn btn-primary btn-sm"
        >New Page</router-link
      >
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Link Text</th>
          <th>Is Published</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(page, index) in $pages.getAllPages()"
          :key="index"
          @click="gotoPage(index)"
        >
          <td>{{ page.pageTitle }}</td>
          <td>{{ page.link.text }}</td>
          <td>{{ page.published ? "yes" : "no" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, reactive, inject } from "vue";
import { useRouter } from "vue-router";

// const counter = ref(0);
const data = reactive({ counter: 0 });
const $pages = inject("$pages");
const router = useRouter();

function click() {
  // counter.value++
  data.counter++;
}

function gotoPage(index) {
  router.push({ path: `pages/${index}/edit` });
}

// export default {
//   data() {
//     return {
//       counter: 0,
//     };
//   },
//   methods: {
//     click() {
//       this.counter++;
//     },
//   },
// };
</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>
