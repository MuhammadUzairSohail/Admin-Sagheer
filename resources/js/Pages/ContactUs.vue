<template>
    <Layout >
        <h1>Test Contact us</h1>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";
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
