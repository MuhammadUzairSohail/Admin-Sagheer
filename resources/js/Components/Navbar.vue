<template>
    <div
        class="min-w-full z-50  flex justify-between sticky top-0 md:px-6 items-center p-3 bg-white dark:bg-gray-800 dark:text-white shadow-md"
    >
        <div class="flex justify-center pl-1">
            <img
                src="https://picsum.photos/51/51"
                class="rounded-full border-2 dark:border-2 dark:border-gray-600 border-white"
                alt=""
                srcset=""
            />
        </div>

        <ul class="flex gap-8">
        

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
           
        };
    },

    mounted() {

        if(localStorage.getItem('darkMode') == 'true') {
            this.darkMode = true;
                document.getElementsByTagName("body")[0].classList.add("dark");
                
        }

    },

    methods: {
        switchToDarkMode() {
            if(this.darkMode){
                document.getElementsByTagName("body")[0].classList.toggle("dark");
                this.darkMode = false;
                localStorage.setItem("darkMode", false);
            }else{
                document.getElementsByTagName("body")[0].classList.toggle("dark");
                this.darkMode = true;
                localStorage.setItem("darkMode", true);
            }

        },

        switchLanguage() {
            //import i18n and get the current language
            import("@/i18n").then((i18n) => {
            console.log(i18n);
            i18n.default.setLocale('ur');

                // const currentLanguage = i18n.default.locale;
                // //get the next language
                // const nextLanguage =
                //     currentLanguage === "en" ? "fr" : "en";
                // //set the next language
                // i18n.default.locale = nextLanguage;
                // //set the next language in localStorage
                // localStorage.setItem("language", nextLanguage);
            });

        }
    },
};

</script>

<style lang="scss" scoped></style>
