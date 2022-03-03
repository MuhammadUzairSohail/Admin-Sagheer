<template>
    <Layout>
        <p>{{ $t("message") }}</p>
        <p>{{ $store.state.sidebarDesktop }}</p>
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
