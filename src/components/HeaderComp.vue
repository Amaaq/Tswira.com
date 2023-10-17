<template>
    <header class="absolute z-10 top-0 w-full px-5 md:px-10 h-16 flex items-stretch justify-between bg-opacity-70 bg-lime-100 border-b-2 border-lime-700">
        <HeaderCompHam @click="toggleMenuDisplay" class="cursor-pointer md:hidden flex items-center"/>
        <HeaderCompLogo class="md:mr-4 lg:mr-12 flex items-center" />
        <HeaderCompNav @toggleMenuDisplay="toggleMenuDisplay" v-show="menuDisplayed" :menuDisplayed="menuDisplayed"/>
        <HeaderCompUser v-if="user"/>
        <HeaderCompLogin v-else/>
    </header>
</template>

<script setup>
import HeaderCompHam from '@/components/HeaderCompHam.vue';
import HeaderCompLogo from '@/components/HeaderCompLogo.vue';
import HeaderCompLogin from '@/components/HeaderCompLogin.vue';
import HeaderCompNav from '@/components/HeaderCompNav.vue';
import HeaderCompUser from '@/components/HeaderCompUser.vue';

import { ref,onMounted } from 'vue';
let menuDisplayed = ref(window.innerWidth>600)
let toggleMenuDisplay = ()=>{
    if(window.innerWidth<600){
        menuDisplayed.value= !menuDisplayed.value;
    }
}
onMounted(()=>{

            window.addEventListener('resize',()=>{
                menuDisplayed.value = window.innerWidth > 600
            })
      })

let user = ref(true)
</script>
