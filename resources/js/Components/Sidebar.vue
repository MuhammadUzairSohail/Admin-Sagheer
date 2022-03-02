<template>
    <div class="md:w-32 w-16 bg-white dark:bg-gray-800 dark:text-white shadow-lg hover:overflow-hidden  overflow-y-auto">
        <div
            v-for="item in 10"
            :key="item"
            class="flex-col text-center justify-center hover:text-green-600 md:p-4 p-2 border-b-2 dark:border-b-0 dark:hover:bg-gray-700 hover:bg-gray-200 transform duration-300 hover:scale-105 cursor-pointer hover:border-green-600"
        >
            <li class="list-none hover:text-green-600">
                <i class="fas fa-chart-line"></i>
                <h1 class="mt-2">Dashboard</h1>
            </li>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
