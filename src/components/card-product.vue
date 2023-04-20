<template>
  <div :class="product_data.availability ? 'card' : 'card card_overlay'">
    <img class="card__img" :src="require('../images/' + product_data.image)" alt='#'>
    <h3 class="card__title" @click="prewProduct">{{ product_data.name }}</h3>
    <div v-if="product_data.availability" class="card__price-conteiner">
      <div class="card__price-all">
        <p v-show="product_data.oldprice" class="card__price card__old-price">{{ product_data.oldprice }} $</p>
        <p class="card__price card__new-price">{{ product_data.newprice }} $</p>
      </div>
      <button v-if="isBtnActive" class="card__add" @click="addProduct">Купить</button>
      <button v-else class="card__add card__add_added" @click="prewProduct">
        <img src="../images/add.svg">
        <p class="card__btn-text">В корзине</p>
      </button>
    </div>
    <p v-else class="card_no-price">Продана на аукционе</p>
  </div>
  <CardWindow v-if="isPopupVisible" @closePopup="closePopup">
    <h2 class="popup__img-name">{{ product_data.name }}</h2>
    <div class="popup__img-conteiner">
      <div class="popup__img-carousel" :style="{'margin-left': '-' + (100 * carrentSlideIndex) + '%'}">
        <CardItem v-for="item in carusel_data" :key="item.id" :img_data="item" />
      </div>
    </div>
    <button class="cd" @click="predSlide" type="button">pred</button>
    <button class="cd" @click="nextSlide" type="button">next</button>



    <p class="popup__img-description">{{ product_data.description }}</p>
  </CardWindow>
</template>
  
<script>
import CardWindow from './card-window.vue'
import CardItem from './card-window-img-item.vue'

export default {
  name: 'card-product',
  props: {
    product_data: {
      type: Object,
      default() { return {} },
    },
    carusel_data: {
      type: Array,
      default: () => []
    },
    intervalSlider:{
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isBtnActive: true,
      isPopupVisible: false,
      carrentSlideIndex: 0
    }
  },
  components: {
    CardWindow,
    CardItem

  },
  methods: {
    closePopup() {
      this.isPopupVisible = false;
    },
    prewProduct() {
      this.isPopupVisible = true;
      this.$emit('sendProduct', this.product_data);
    },
    predSlide(){
      if (this.carrentSlideIndex > 0){
        this.carrentSlideIndex--
      console.log(this.carrentSlideIndex)

      }
    },
    nextSlide(){
      if (this.carrentSlideIndex >= this.carusel_data.length - 1){
        this.carrentSlideIndex = 0
      } else {
        this.carrentSlideIndex++
      console.log(this.carrentSlideIndex)
      }
    }
  },
  mounted(){
    if(this.intervalSlider > 0) {
      let vm = this;
      setInterval(function(){
        vm.nextSlide()
      }, vm.intervalSlider)
    }
  }
}

// console.log(product_data);

</script>
  
<style>
.card {
  border: 1px solid #E1E1E1;
  width: 278px;
  height: 326px;
  position: relative;
  z-index: 0;
}

.card_overlay {
  opacity: .5;
}

.card__title {
  margin-left: 24px;
  margin-bottom: 22px;
  width: 220px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #343030;
  transition: opacity .3s ease-in-out;
  cursor: pointer;
}

.card__title:hover {
  color: #1b1818;
  border-bottom: 1px solid #000;
}


.card__price-conteiner {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100% - 48px);
  height: 48px;
  margin: 0 auto;
}

.card_no-price {
  font-size: 16px;
  line-height: 24px;
  margin-left: 24px;
  width: calc(100% - 48px);
}

.card__price {
  margin: 0;
  font-family: 'Merriweather';
}

.card__price-all {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card__old-price {
  color: #A0A0A0;
  font-size: 14px;
  line-height: 21px;
  text-decoration: line-through;
  font-weight: 300;
}

.card__new-price {
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

.card__add_added {
  display: flex;
  flex-direction: row;
  background-color: #5B3A32;
  align-items: center;
  /* justify-content: space-between; */
  padding-left: 11px;
  gap: 7.2px
}

.card__btn-text {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
}
</style>