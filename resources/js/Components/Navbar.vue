<template>
    <div
        class="min-w-full z-50 flex justify-between sticky top-0 md:px-6 items-center transform duration-500 bg-white dark:bg-gray-800 dark:text-white shadow-md"
    >
        <div class="flex justify-center md:pl-4 pl-2">
            <img
                src="https://picsum.photos/51/51"
                class="rounded-full w-10 h-10 my-2"
                alt=""
                srcset=""
            />
        </div>

        <div class="relative right-0 md:hidden flex left-0">
            <i
                class="fas fa-bars pr-6"
                @click="mobileMenuOpen = !mobileMenuOpen"
            ></i>
            <div
                :class="{
                    hidden: !mobileMenuOpen,
                    block: mobileMenuOpen,
                }"
                class="absolute right-0 top-0 mt-8 bg-white dark:bg-gray-800 p-4 flex-col"
            >
                <ul class="gap-8">
                    <li
                        @click="switchToDarkMode"
                        class="rounded-full hover:shadow-lg mt-3 cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
                    >
                        <i class="fas fa-adjust"></i>
                    </li>
                    <li
                        @click="switchLanguage"
                        class="rounded-full hover:shadow-lg mt-3 cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
                    >
                        <i class="fas fa-globe"></i>
                    </li>

                    <li
                        class="rounded-full hover:shadow-lg mt-3 cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
                    >
                        <i class="fas fa-bell"></i>
                    </li>

                    <li
                        class="rounded-full hover:shadow-lg mt-3 cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
                    >
                        <img
                            src="https://picsum.photos/51/51"
                            class="rounded-full border-2 border-white"
                            alt=""
                            srcset=""
                        />
                    </li>
                </ul>
            </div>
        </div>

        <ul class="md:flex hidden gap-8">
            <li
                @click="switchToDarkMode"
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
            >
                <i class="fas fa-adjust"></i>
            </li>
            <li
                @click="switchLanguage"
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
            >
                <i class="fas fa-globe"></i>
            </li>

            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
            >
                <i class="fas fa-bell"></i>
            </li>

            <li
                class="rounded-full hover:shadow-lg cursor-pointer border-2 border-gray-300 p-2 w-8 h-8 justify-center items-center flex hover:shadow-gray-400"
            >
                <img
                    src="https://picsum.photos/51/51"
                    class="rounded-full border-2 border-white"
                    alt=""
                    srcset=""
                />
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

    data() {
        return {
            darkMode: false,
            language: "en",
            mobileMenuOpen: false,
        };
    },

    mounted() {
        if (localStorage.getItem("darkMode") == "true") {
            this.darkMode = true;
            document.getElementsByTagName("body")[0].classList.add("dark");
        }

        if (localStorage.getItem("language") == "ur") {
            import("@/i18n").then((i18n) => {
                i18n.default.setLocale("ur");
            });
        } else {
            import("@/i18n").then((i18n) => {
                i18n.default.setLocale("en");
            });
        }
    },

    methods: {
        switchToDarkMode() {
            if (this.darkMode) {
                document
                    .getElementsByTagName("body")[0]
                    .classList.toggle("dark");
                this.darkMode = false;
                localStorage.setItem("darkMode", false);
            } else {
                document
                    .getElementsByTagName("body")[0]
                    .classList.toggle("dark");
                this.darkMode = true;
                localStorage.setItem("darkMode", true);
            }

            this.mobileMenuOpen = false;
        },

        switchLanguage() {
            import("@/i18n").then((i18n) => {
                console.log(i18n);
                if (i18n.default.getLocale() == "en") {
                    i18n.default.setLocale("ur");
                    localStorage.setItem("language", "ur");
                } else {
                    i18n.default.setLocale("en");
                    localStorage.setItem("language", "en");
                }
            });

            this.mobileMenuOpen = false;
        },
    },
};
</script>

<style lang="scss" scoped></style>
