<template>
    <div class="main-page">
        Main
        <Cards />
    </div>
  </template>
  
  <script>
  
  import Cards from './cards-product.vue';
  
  export default {
    name: 'main-page',
    components: {
      Cards,
    }
  }
  </script>
  
  <style>
  </style>