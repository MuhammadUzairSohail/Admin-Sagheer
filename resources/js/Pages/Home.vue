<template>
    <Layout>
        <p>{{ $t("message") }}</p>
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
