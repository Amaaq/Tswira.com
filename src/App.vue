<template>
  <HeaderComp />
  <RouterView class=" flex items-center justify-center"/>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue';
import {RouterView} from 'vue-router'
 </script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
#app {
  overflow-x: hidden;
  /* background-color: #d9f99d; */
  /* background-color: rgb(248, 235, 230); */
  background-image: url('../assets/bg-image1.jpg');
  background-size:cover;
  background-repeat: no-repeat;
  min-height: 100vh;
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
  color: #3f6212;
}
@media (min-width:850px){
  * {
    font-size: 16px;
  }
}

</style>
