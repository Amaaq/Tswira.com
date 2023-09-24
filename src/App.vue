<template>
  <HeaderComp />
  <div></div>
</template>

<script setup>
import HeaderComp from './components/HeaderComp.vue';


</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 12px;
}
@media (min-width:780px){
  * {
    font-size: 16px;
  }
}

</style>
