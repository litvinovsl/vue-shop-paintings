<template>
  <div class="app" id="App">
    <Header />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
html{
  background-color:#F6F3F3;
  height: 100%;
}
</style>
