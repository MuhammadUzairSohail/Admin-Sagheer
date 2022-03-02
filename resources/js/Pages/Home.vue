<template>
    <Layout >
        <h1>{{language.main.message}}</h1>
    </Layout>
</template>

<script>
import Layout from "@/Layouts/Layout.vue";

export default {
    components: {
        Layout,
    },

    data() {
        return {
            language: require(`../locales/en.json`),
            lang: 'en',
        };
    },

    created() {
        this.lang = localStorage.getItem('language');
        if(this.lang == null) {
            this.lang = 'en';
        }
        var Index = require(`../locales/`+this.lang+`.json`);
        this.language = Index;
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
