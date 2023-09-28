<template>
    <div id="form">
        <form action="" class=" w-4/5 p-10 bg-lime-200 bg-opacity-50 max-w-lg flex flex-col items-center rounded-lg">
            <div class="w-full">
                <label for="email" class="block font-bold mb-4 text-2xl">Email Address :</label>
                <input type="email" name="email" id="email" 
                 class="block w-full p-4 rounded-md mb-4 border-2 border-lime-800 text-lime-800 font-extrabold outline-lime-500">
            </div>
            <div class="w-full">
                <label for="password" class="block font-bold mb-4 text-2xl">Password :</label>
                <input type="password" name="password" id="password" 
                 class="block w-full p-4 rounded-md mb-4 border-2 border-lime-800 text-lime-800 font-extrabold outline-lime-500">
            </div>
            <button class="block w-full font-bold  p-4 mb-4 rounded-xl bg-lime-900  hover:bg-lime-500 text-lime-100">Log In</button>
            <button class="block w-full font-bold  p-4 mb-4 rounded-xl bg-lime-900  hover:bg-lime-500 text-lime-100">Log in with Google +</button>
            <button></button>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
#form {
    height: 90vh;
}
</style>