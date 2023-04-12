<template>
  <div class="app" id="App">
    <Header />
    <Main />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';
import Main from './components/main-page.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
html{
  background-color:#F6F3F3;
  height: 100%;
}
</style>
