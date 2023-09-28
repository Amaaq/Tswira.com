<template>
    <div class="flex gap-3 items-center font-semibold">
        <RouterLink to="/login" class=" hover:underline text-lime-800 ">Log in</RouterLink>
        <button class="px-3 py-1  rounded-xl bg-lime-900
         hover:bg-lime-800 text-lime-100 ">Sign Up</button>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>
