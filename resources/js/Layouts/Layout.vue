<template>
    <Navbar />
    <div class="flex h-screen max-h-screen min-h-screen">
        <Sidebar />
        <div
            class="bg-gray-50 p-6 w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import Sidebar from "@/Components/Sidebar.vue";
import Navbar from "@/Components/Navbar.vue";
export default {
    components: {
        Sidebar,
        Navbar,
    },
};
</script>

<style lang="scss" scoped></style>
