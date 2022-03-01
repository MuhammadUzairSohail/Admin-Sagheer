<template>
    <div class="md:w-32 w-16 bg-white shadow-lg border-2 overflow-y-auto">
        <div
            v-for="item in 10"
            :key="item"
            class="flex-col justify-center md:p-4 p-2 border-b-2 hover:bg-gray-100 transform duration-300 hover:scale-105 cursor-pointer hover:border-green-600"
        >
            <img
                src="https://picsum.photos/50/50"
                class="rounded-full md:w-20 md:h-20 w-8 h-8 border-2 border-white"
                alt=""
                srcset=""
            />
            <h1 class="mt-2">Dashboard</h1>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
