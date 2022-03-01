<template>
    <div
        class="min-w-full flex justify-between sticky top-0 md:px-6 items-center p-3 bg-white shadow-md"
    >
        <div class="flex justify-center pl-1">
            <img
                src="https://picsum.photos/51/51"
                class="rounded-full border-2 border-white"
                alt=""
                srcset=""
            />
        </div>

        <ul class="flex gap-8">
            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-green-600 p-2 w-8 h-8 justify-center items-center flex hover:shadow-green-200"
            >
                <i class="fas fa-chart-line"></i>
            </li>

            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-green-600 p-2 w-8 h-8 justify-center items-center flex hover:shadow-green-200"
            >
                <i class="fas fa-chart-line"></i>
            </li>
            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-green-600 p-2 w-8 h-8 justify-center items-center flex hover:shadow-green-200"
            >
                <i class="fas fa-chart-line"></i>
            </li>
            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-green-600 p-2 w-8 h-8 justify-center items-center flex hover:shadow-green-200"
            >
                <i class="fas fa-chart-line"></i>
            </li>
        </ul>
    </div>
</template>

<script>
//import font awesome
import FontAwesomeIcon from "@fortawesome/fontawesome-free";
export default {
    components: {
        FontAwesomeIcon,
    },
};
</script>

<style lang="scss" scoped></style>
