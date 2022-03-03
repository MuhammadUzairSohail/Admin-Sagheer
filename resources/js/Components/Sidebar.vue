<template>
    <div
        class="md:w-32 w-16 bg-white border-r-2 border-gray-300 dark:border-gray-600 border-b-2 dark:bg-gray-800 dark:text-white hover:overflow-hidden overflow-y-auto"
    >
        <div
            v-for="item in routeslist"
            :key="item.name"
            class="flex-col text-center border-gray-200 dark:border-gray-700 border-b-2 justify-center hover:text-green-600 md:p-4 p-2 dark:hover:bg-gray-700 hover:bg-gray-100 transform duration-700 hover:scale-105 cursor-pointer hover:border-green-600"
        >
            <Link :href="item.route" class="list-none">
                <i :class="item.icon"></i>
                <h1 class="mt-2 md:flex hidden justify-center">
                    {{ $t(item.name) }}
                </h1>
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
