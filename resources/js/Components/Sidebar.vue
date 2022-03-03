<template>
    <div
        class="md:w-32 w-16 bg-white shadow-gray-700 dark:bg-gray-800 dark:text-white shadow-lg hover:overflow-hidden overflow-y-auto"
    >
        <div
            v-for="item in routeslist"
            :key="item.name"
            class="flex-col text-center justify-center hover:text-green-600 md:p-4 p-2 dark:hover:bg-gray-700 hover:bg-gray-100 transform duration-300 hover:scale-105 cursor-pointer hover:border-green-600"
        >
            <Link :href="item.route" class="list-none">
                <i :class="item.icon"></i>
                <!-- <p>{{ $t("message") }}</p> -->
                <h1 class="mt-2">{{ $t(item.name) }}</h1>
            </Link>
        </div>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },

    props: {
        routeslist: {
            type: Array,
            required: true,
            default: () => [
                {
                    name: "menu.dashboard",
                    route: "/contactus",
                    icon: "fas fa-chart-line",
                },
                {
                    name: "menu.sales",
                    route: "/contactus",
                    icon: "fas fa-money-bill",
                },
            ],
        },
    },
};
</script>

<style></style>
