<template>
  <HeaderComp />
  <RouterView class="h-full flex items-center justify-center"/>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue';
import {RouterView} from 'vue-router'
 </script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
  overflow-x: hidden;
  background-color: #d9f99d;
  min-height: 100vh;
}
#app {
  min-height: 80vh;
}
h1 {
  min-height: inherit;
  font-weight: bolder;
  font-size: large;
}
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 12px;
}
@media (min-width:850px){
  * {
    font-size: 16px;
  }
}

</style>
