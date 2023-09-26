<template>
    <h1>
        CAtegory Child
        {{ route.fullPath }}
    </h1>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    const route = useRoute()

</script>
