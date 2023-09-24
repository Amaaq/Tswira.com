<template>
    <Transition>
        <nav class="absolute h-screen w-screen top-0 left-0 z-10 bg-lime-700 py-6
         md:static md:h-auto md:w-auto md:z-0 md:bg-transparent md:p-0 md:mr-auto md:self-stretch">
            <HeaderCompNavCloseIcon @click="$emit('toggleMenuDisplay')" 
            class="cursor-pointer float-right mr-6 mb-10 p-1 box-content border-2 rounded-md border-lime-100 md:hidden"/>
            <ul class="clear-right flex flex-col items-stretch justify-center text-center text-lime-100
            border-t-2 border-lime-100 md:flex-row md:border-none md:text-left md:gap-5 md:text-lime-800 
             md:font-extrabold md:items-end md:h-full">
                <RouterLink @click="$emit('toggleMenuDisplay')" :to="'/'" 
                class="p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                 md:p-3 md:hover:border-lime-800  md:border-transparent  md:hover:text-lime-800">Home</RouterLink>
                <RouterLink :to="'/categories'" 
                class="p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                 md:p-3 md:hover:border-lime-800  md:border-transparent md:hover:text-lime-800">Categories</RouterLink>
                <RouterLink :to="'/products'" 
                class="p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                 md:p-3 md:hover:border-lime-800  md:border-transparent md:hover:text-lime-800">Products</RouterLink>
                <RouterLink :to="'/about'" 
                class="p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                 md:p-3 md:hover:border-lime-800  md:border-transparent md:hover:text-lime-800">About</RouterLink>
                <RouterLink :to="'/contact'" 
                class="p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                 md:p-3 md:hover:border-lime-800  md:border-transparent md:hover:text-lime-800">Contact</RouterLink>
            </ul>
        </nav>
    </Transition>
</template>

<script setup>
import HeaderCompNavCloseIcon from '@/components/HeaderCompNavCloseIcon.vue'
defineEmits(['toggleMenuDisplay'])
</script>
<style scoped>
    .v-enter-from, .v-leave-to {
        width: 0;
    }
    .v-enter-to, .v-leave-from {
        width: 100vw;
    }
    .v-enter-active,.v-leave-active {
        transition: all 0.3s ease-in-out;
    }

</style>
