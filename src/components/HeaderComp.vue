<template>
    <header class="px-5 h-16 flex items-center justify-between bg-lime-300 border-b-2 border-lime-600">
        <HeaderCompHam @click="toggleMenuDisplay" class="cursor-pointer md:hidden"/>
        <HeaderCompLogo class="md:mr-4 lg:mr-12"/>
        <HeaderCompNav @toggleMenuDisplay="toggleMenuDisplay" v-show="menuDisplayed" :menuDisplayed="menuDisplayed"/>
        <HeaderCompLogin/>
    </header>
</template>

<script setup>
import HeaderCompHam from '@/components/HeaderCompHam.vue';
import HeaderCompLogo from '@/components/HeaderCompLogo.vue';
import HeaderCompLogin from '@/components/HeaderCompLogin.vue';
import HeaderCompNav from '@/components/HeaderCompNav.vue';

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

</script>
