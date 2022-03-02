<template>
  <Layout>
    <p>{{ $t("message") }}</p>
  </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";
import { useI18n } from "vue3-i18n";

export default {
  components: {
    Layout,
  },


};
</script>


<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
</style>
