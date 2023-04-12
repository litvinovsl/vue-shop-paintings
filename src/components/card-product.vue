<template>
  <div class="card">
    <img class="card__img" src="../images/painting-63186_12801.png" alt="#">
    <h3 class="card__title">«Рождение Венеры» Сандро Боттичелли</h3>
    <div class="card__price-conteiner">
      <div class="">
        <p class="card__price card__old-price">2 000 000 $</p>
        <p class="card__price card__new-price">1 000 000 $</p>
      </div>
      <button class="card__add">Купить</button>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'card-product',
  components: {}
}
</script>
  
<style>
.card {
  border: 1px solid #E1E1E1;
  width: 280px;
  height: 328px;
}

.card__title {
  margin-left: 24px;
  margin-bottom: 22px;
  width: 220px;
  font-size: 18px;
  line-height: 150%;
  color: #343030;
}

.card__price-conteiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 48px);
  height: 48px;
  margin: 0 auto;
}

.card__price {
  margin: 0;
}

.card__add {
  width: 118px;
  background-color: #382E2B;
  color: #F4F6F9;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
}
</style>