<template>
    <div class="h-screen">
        <form action="" class=" w-4/5 p-10 bg-lime-500 bg-opacity-70  max-w-lg flex flex-col items-center rounded-lg">
            <div class="w-full">
                <label for="email" class="block font-bold mb-4 text-xl md:text-2xl text-lime-700">Email Address :</label>
                <input type="email" name="email" id="email" autocomplete="email"
                 class="block w-full p-4 rounded-xl mb-4  border-2 border-lime-800 text-lime-800 font-extrabold outline-lime-600">
            </div>
            <div class="w-full">
                <label for="password" class="block font-bold mb-4 text-xl md:text-2xl text-lime-700">Password :</label>
                <input type="password" name="password" id="password" 
                 class="block w-full p-4 rounded-xl mb-4 border-2 border-lime-800 text-lime-800 font-extrabold outline-lime-600">
            </div>
            <button class="block w-full font-bold  p-4 mb-4 rounded-xl bg-yellow-50  hover:bg-lime-500 text-lime-800 ">Log In</button>
            <button class="block w-full font-bold  p-4 mb-4 rounded-xl bg-yellow-50  hover:bg-lime-500 text-lime-800">Log in with Google +</button>
            <button></button>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>