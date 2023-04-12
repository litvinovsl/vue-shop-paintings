<template>
  <div class="app" id="App">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';
import Main from './components/main-page.vue';
import Footer from './components/footer-shop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
html{
  background-color:#F6F3F3;
  height: 100%;
}
</style>
