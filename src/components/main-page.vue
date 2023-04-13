<template>
  <div class="main-page">
    <h2 class="main-page__h">Картины эпохи Возрождения</h2>
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
.main-page {
  padding: 45px 352px 320px;
}

.main-page__h {
  font-size: 24px;
  line-height: 150%;
  font-weight: 700;
  color: #343030;
  margin: 0 0 39px;

}
</style>