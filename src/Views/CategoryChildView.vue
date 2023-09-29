<template>
    <Transition name="category">
        <h2>
            CAtegory Child
            {{ route.path.split('/')[2] }}
        </h2>
</Transition>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    const route = useRoute()

</script>
<style>
.category-enter-from,.category-leave-to{
  transform: translateX(100%);
}
.category-enter-active,.category-leave-active{
  transition: all ease 0.3s;
}
</style>
