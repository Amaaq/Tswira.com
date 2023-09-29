<template>
    <h1>
        PRODUCTS PAGE
        <Transition>
            <RouterView/>
        </Transition>
    </h1>
</template>

<script setup>
import {RouterView} from 'vue-router'
</script>

<style scoped>
.view-enter-from,.view-leave-to{
  transform: translateX(100%);
}
.view-enter-active,.view-leave-active{
  transition: all ease 0.3s;
}
</style>