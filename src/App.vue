<template>
  <HeaderComp />
  <Transition name="view">
    <RouterView/>
  </Transition>
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
  background-color:#f7fee7;
  min-height: 97vh;
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
.view-enter-from,.view-leave-to{
  transform: translateX(100%);
}
.view-enter-active,.view-leave-active{
  transition: all ease 0.3s;
}
@media (min-width:850px){
  * {
    font-size: 16px;
  }
}

</style>
