<template>
  <div class="card">
    <img class="card__img" :src="require('../images/' + product_data.image)" alt='#'>
    <h3 class="card__title">{{product_data.name}}</h3>
    <div class="card__price-conteiner">
      <div class="">
        <p class="card__price card__old-price">{{product_data.oldprice}} $</p>
        <p class="card__price card__new-price">{{product_data.newprice}} $</p>
      </div>
      <button class="card__add">Купить</button>
    </div>
  </div>
</template>
  
<script>


export default {
  name: 'card-product',
  props: {
    product_data:{
      type: Object,
      default() {return {}},
    }
  },
  data(){
    return{}
  },
  components: {}
}

// console.log(product_data);

</script>
  
<style>
.card {
  border: 1px solid #E1E1E1;
  width: 278px;
  height: 326px;
}

.card__title {
  margin-left: 24px;
  margin-bottom: 22px;
  width: 220px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
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
  font-family: 'Merriweather';
}

.card__old-price{
  color: #A0A0A0;
  font-size: 14px;
  line-height: 21px;
  text-decoration: line-through;
  font-weight: 300;
}
.card__new-price{
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
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