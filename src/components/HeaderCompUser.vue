<template>
    <div class="flex gap-3 items-center font-semibold">
        <HeaderCompUserFav @click="toggleMenuDisplay('fav')"/>
        <HeaderCompUserCart @click="toggleMenuDisplay('cart')"/>
        <HeaderCompUserAvatar @click="toggleMenuDisplay('avatar')"/>
        <Transition>
            <div @click="true" v-if="rightMenuDisplayed"
            class="absolute top-full right-0 p-5 bg-lime-700 text-lime-50 w-[30vw] min-h-[20vh]
            flex flex-col items-center justify-start">
                <HeaderCompUserAvatarMenu v-if="menuContent == 'avatar'" />
                <HeaderCompUserCartMenu v-else-if="menuContent == 'cart'"/>
                <HeaderCompUserFavMenu v-else-if="menuContent == 'fav'"/>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import HeaderCompUserAvatar from './HeaderCompUserAvatar.vue';
import HeaderCompUserCart from './HeaderCompUserCart.vue';
import HeaderCompUserFav from './HeaderCompUserFav.vue';
import HeaderCompUserAvatarMenu from './HeaderCompUserAvatarMenu.vue';
import HeaderCompUserFavMenu from './HeaderCompUserFavMenu.vue';
import HeaderCompUserCartMenu from './HeaderCompUserCartMenu.vue';
import {ref} from 'vue'
const rightMenuDisplayed = ref(false)
const menuContent = ref(null)
function toggleMenuDisplay(str){
    rightMenuDisplayed.value = false
    if(menuContent.value == str || str==''){
        menuContent.value = null
    }else {
        setTimeout(()=>{
            rightMenuDisplayed.value = true
            menuContent.value = str
        },100)
    }
}
</script>
<style scoped>
.v-enter-from,.v-leave-to{
  transform: translateX(100%);
}
.v-enter-active,.v-leave-active{
  transition: all ease 0.1s;
}
</style>
