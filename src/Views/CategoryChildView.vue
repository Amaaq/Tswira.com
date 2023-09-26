<template>
    <h2>
        CAtegory Child
        {{ route.path.split('/')[2] }}
    </h2>
</template>

<script setup>
    import {useRoute} from 'vue-router'
    const route = useRoute()

</script>
