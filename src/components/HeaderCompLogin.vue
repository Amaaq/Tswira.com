<template>
    <div class="flex gap-3 items-center font-semibold">
        <RouterLink to="/login" class=" hover:underline text-lime-800 ">Log in</RouterLink>
        <button class="px-3 py-1  rounded-xl border-lime-800 border-2
         hover:bg-lime-800 text-lime-800 hover:text-lime-100">Sign Up</button>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
