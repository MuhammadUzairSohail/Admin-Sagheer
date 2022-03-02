<template>
    <div class="md:w-32 w-16 bg-white shadow-gray-700 dark:bg-gray-800 dark:text-white shadow-lg hover:overflow-hidden  overflow-y-auto">
        <div
            v-for="item in 10"
            :key="item"
            class="flex-col text-center justify-center hover:text-green-600  md:p-4 p-2  dark:hover:bg-gray-700 hover:bg-gray-100 transform duration-300 hover:scale-105 cursor-pointer hover:border-green-600"
        >
            <Link href="/contactus" class="list-none ">
                <i class="fas fa-chart-line"></i>
                <h1 class="mt-2">Dashboard</h1>
            </Link>
        </div>
    </div>
</template>

<script>
import {Link} from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },
};
</script>

<style></style>
