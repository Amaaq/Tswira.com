<template>
    <Transition>
        <nav @mouseleave="hovered = false" class="absolute h-screen w-screen top-0 left-0 z-10 bg-lime-700 py-6
         md:relative md:h-auto md:w-auto md:z-0 md:bg-transparent md:p-0 md:mr-auto md:self-stretch">
            <HeaderCompNavBackIcon v-if="menu.nav!=''" @click="ShowMobileSubList('')"
             class="cursor-pointer float-left ml-6 mb-10 p-1 box-content border-2 rounded-md border-lime-100 md:hidden hover:bg-lime-300"/>
            <HeaderCompNavCloseIcon @click="$emit('toggleMenuDisplay')" class="cursor-pointer float-right mr-6 mb-10 p-1
             box-content border-2 rounded-md border-lime-100 md:hidden hover:bg-lime-300" />
            <Transition :name="group">
            <ul  v-if="mount" class=" clear-right flex flex-col items-stretch justify-center text-center text-lime-100
            border-t-2 border-lime-100 md:flex-row md:border-none md:text-left md:gap-5 md:text-lime-800 
             md:font-extrabold md:items-end md:h-full ">
                 <RouterLink v-for="(link,index) in menu.links" @click="$emit('toggleMenuDisplay')"  @mouseover="ShowDesktopSubList(link)" :key="index" :to="`/${menu.nav}${link}`" 
                  class="relative p-5 border-b-2 border-lime-100 uppercase font-semibold tracking-widest cursor-pointer hover:text-lime-300
                  md:p-3 md:hover:border-lime-600  md:border-transparent  md:hover:text-lime-800">
                     {{link}}
                     <HeaderCompNavPlusIcon v-show="link=='categories' || link=='products'" @click.stop="ShowMobileSubList(link)"
                     class=" h-16 absolute right-0 top-0 bottom-0 bg-lime-400 md:hidden"/>
                    </RouterLink>
                </ul>
            </Transition>
            <HeaderCompNavHover v-if="hovered" @hoveredToFalse="hovered=false" :links="links" :nav="nav"
             class="hidden fixed md:flex flex-col items-center justify-start flex-wrap h-44 top-16 left-0 w-screen z-30 bg-lime-600 border-b-2 border-lime-700" />
        </nav>
    </Transition>
</template>

<script setup>
import HeaderCompNavCloseIcon from '@/components/HeaderCompNavCloseIcon.vue'
import HeaderCompNavBackIcon from '@/components/HeaderCompNavBackIcon.vue'
import HeaderCompNavPlusIcon from '@/components/HeaderCompNavPlusIcon.vue'
import HeaderCompNavHover from './HeaderCompNavHover.vue';
import { reactive,ref, onMounted } from 'vue';

defineEmits(['toggleMenuDisplay'])

onMounted(()=>{
    window.addEventListener('resize',()=>{
     if(window.innerWidth > 600) {
        menu.nav = navigation[0].nav
        menu.links = navigation[0].links
        hovered.value = false
     }
})
})

const hovered = ref(false)
const links = ref('')
const nav = ref('')
let ShowDesktopSubList = (link)=>{
    if(link=='categories'){
        hovered.value = true
        nav.value = navigation[1].nav
        links.value = navigation[1].links
    }else if(link == 'products'){
        hovered.value = true
        nav.value = navigation[2].nav
        links.value = navigation[2].links
    }else {
        hovered.value=false
    }
}
const navigation = [{
        nav: '',
        links:['home','categories','products','about','contact']
    },
    {
        nav: 'categories/',
        links:['abstrait','architecture','constellations','nourriture','paysage','nature','objets','portrait','sauvage']
    },
    {
        nav: 'products/',
        links:['framed','canvas','downloads']
    }
]
let menu = reactive({
    nav: '',
    links: ['home','categories','products','about','contact']
})
let group=ref('group')
let mount=ref(true)
let ShowMobileSubList= (link)=>{
    group.value = group.value == 'group' ? 'group2' : 'group'
    mount.value = false
    if(link=='categories'){
        menu.nav = navigation[1].nav
        menu.links = navigation[1].links
    }else if(link=='products') {
        menu.nav = navigation[2].nav
        menu.links = navigation[2].links
    }else {
        menu.nav = navigation[0].nav
        menu.links = navigation[0].links
    }
    setTimeout(()=>{
        mount.value= true
        
    },300)
    
}
</script>
<style scoped>
    .v-enter-from, .v-leave-to {
        width: 0;
    }
    .v-enter-to, .v-leave-from {
        width: 100vw;
    }
    .v-enter-active,.v-leave-active {
        transition: all 0.2s ease-in-out;
    }
    .group-enter-from, .group2-leave-to {
        transform: translateX(-100%);
    }
    .group-leave-to,.group2-enter-from {
        transform: translateX(100%);
    }
    .group-enter-active,.group-leave-active, .group2-enter-active,.group2-leave-active {
        transition: all 0.2s ease-in-out;

    }
</style>
