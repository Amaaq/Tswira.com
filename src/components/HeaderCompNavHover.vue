<template>
    <ul>
        <RouterLink @click="$emit('hoveredToFalse')" v-for="(link,index) in props.links" :key="index" :to="`/${props.nav}${link}`"
         class="block p-4 uppercase font-semibold tracking-widest cursor-pointer text-lime-50 hover:underline underline-offset-8">
            {{link}}
        </RouterLink>
    </ul>
</template>

<script setup>
defineEmits(['hoveredToFalse'])
const props = defineProps({
    links : {
        type: Array
    },
    nav: {
        type: String
    }
})
</script>

