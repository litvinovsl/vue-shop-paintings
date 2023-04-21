<template>
  <div :class="product_data.availability ? 'card' : 'card card_overlay'">
    <img class="card__img" :src="require('../images/' + product_data.image)" alt='#'>
    <h3 class="card__title" @click="prewProduct">{{ product_data.name }}</h3>
    <div v-if="product_data.availability" class="card__price-conteiner">
      <div class="card__price-all">
        <p v-show="product_data.oldprice" class="card__price card__old-price">{{ product_data.oldprice }} $</p>
        <p class="card__price card__new-price">{{ product_data.newprice }} $</p>
      </div>
      <button v-if="isBtnActive" class="card__add" @click="[addProduct(), getCardData]">Купить</button>
      <button v-else class="card__add card__add_added" @click="addProduct">
        <img src="../images/add.svg">
        <p class="card__btn-text">В корзине</p>
      </button>
    </div>
    <p v-else class="card_no-price">Продана на аукционе</p>
  </div>
  <CardWindow v-if="isPopupVisible" @closePopup="closePopup">
    <h2 class="popup__img-name">{{ product_data.name }}</h2>
    <div class="popup__img-conteiner">
      <div class="popup__img-carousel" :style="{ 'margin-left': '-' + (100 * carrentSlideIndex) + '%' }">
        <CardItem v-for="item in carusel_data" :key="item.id" :img_data="item" />
      </div>
      <button class="popup__button popup__button_pred" @click="predSlide" type="button"><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiElEQVR4nO2aSWsUURDHf8GYjChqJmbBkx4lon4Jl7jG3OJyU+LFhejV5ayeAgE/hxJDAipx342KS0w8uRxEvRkVlZHCf0OhM5Punl5G8Q8Nmbx6r+p11avtNfzHv4si0AOcAoaB58BH4Kse+/uZxoxmG9BCnaAA7AbGgB9AKeLzHRgFdgHNeWxgHnAYeOuE+gJcBI5KMyv0xufqadH/bOwYcElzgvlvgAG9nEywCXjpBLgD7AEWxVhrMbAXuOvWmwa6SRH2ps44hveAdQmuvwF44NYfSkM7nRLcGHwC9gNzkmbCrzUPAjNO2x1JLb5c6i7J66wkfawCJsVzSjLUhDa34G1gCdmhBbgq3i9lFbFQcOZ0HZhP9pgP3HRmFuvMnHHmZMEuL7Q6qzAHENnFBgc7izMR5szMSCbzbqGDXRAnzDvVCw65wx/KxI64OJGGi42LRmBCstmmqqJZqYIRr6X+sFGyvZ1NK7uch4iDTqUbN0gHDc6T7qhGOCYiy53ibOKp5t8X0zTQLx4jlQiKSqu/xEgAO9wmntUSvEIGSqtvvlWSc7sEuUA0tAOPNdeKqaWkj3Hx21Ju8LQGrZ6IooknGWnC44R4nqQMhjW4lfB5WNaa+N16zlIGLzRoVVwUc8pSEwG63Av8Ax80WAyhiUc5aSLAEvF/Rxl81WATldHgNpHmc4XZA3fQJ4i9kYcZbORyLRuJY1qTOZlWWzXT+mcO+7AGrQMY1f1mrZneau43CIjWPPurA2KPBq1bGAXtOWhmXPw2V0rGgqTROoD1mjQWXdK4sBLRqISxNmYtabxVcmlhn3icr0a0U0RWHBFzMxNq4aSBBtU6JmPfbIHmtQjXU3/YLNlehbmGGHBVXr01Hx5KtgNhJhRcr9cayvWCAecZQ18KdWvSjJpjeWMN8FkyRb7KGHJvwNqWeaFNTTmTZTDOAgW1hUryQnk0sRcAtyTDrVruGduUmAXXCvY7KxSBa+I9ncSFz3KnWjOz1WRzJqbE07LyZUkt3OHMbEa9V3OHSaNR3umzMyfL5RJFwTmAIA3pTjBi21WGrz4H07573+DUHnTt+2N+xVBU7hSkHSWZUpK3xbNq55BLZ0rKSC29Pq6+U5fcdpOeVl0a9Ypm3PUJgrTjQF5fQDSrKz6iEiBqk+GbKtO+vDZQDovUi7Wq7Zzqkvfuo5r3SvPPimZLtXriP/jL8RMhpXAUmuIBHwAAAABJRU5ErkJggg=="></button>
      <button class="popup__button popup__button_next" @click="nextSlide" type="button"><img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADg0lEQVR4nO2ay08UQRDGfyiyazAiC7hwk6PBqP+ECgqK3FC8afAiEvTq46yeSEj4OzBIIFFDosYngk+eJ5WDEW8uEDRrOn6TdHAfM8POA8KXTHhUdXf1VHV19dcD29i6SAHtwF1gGJgGfgKreszvnyUzOmeAamKCJHABGAP+AFmPz29gFOgCElFMYDdwDVi0jFoBHgE35JmDeuO79FTrf0Z2E3isNk77b0CfXk4oOAUsWAa8Ai4CVT762gdcAl5b/c0DLQQI86YGrQHfAMdL2H8z8NbqfyAI79TLcDPAL+AKsLPUg/Cvz6tAxvJ2ulSdN8rdWWWdQwSPw8CMxpyTDRtCndXhS6CW8FANPNHYC4oKX0ha4fQMqCR8VALPrTDztWYGrXAym11UqLGiwiQAzynWWdhhrAk3ayYjm0x2c73ZOfuEyU5xQa+1+F2F2HVrnwgixfpFOTAp28ykCiKhUsEoHyN+OCnbFot5pcvKEEFhAnjnM52WWZn0XCHFMSmZ2ikoTGmMTz4n0632I/kUUiqrV3wWgG5Rr5TuTCbtY6NcBdby2XlWnT8keOwHPmg8cwBr8Nh+XG3bcgnvSWjOE2HA9sxHj565rXZ3cgmHJTxNeLA9Yybl1jNO9AzlEs5KaE5xYcL2zHtNrhiarLD8D0sSRlFXrfdMfRH9Wul+zyVclbCiSB53dtcgn0kXG7fDE/iayA5taLGeyFKEoZX2GFp1hUJryyz2YQkNAxiVJxpctusolH6dDdGQZ5t6Q2yX0LCFYXpiIyVKa75izCkaDQMY16IxZRWNe/MpjWoAQ2PGtYy/rPYPCimdl5LhYoPCC1Gjfg9WE7Kxs9hG81WKJ4gfWmXbFzfXEH1Snogh+TAl23rcNEhaXK8hlOOCPtk04+VSqEWNMiLHosZRYFk2eb7KGLDegKEto0KdSDljS7+fDpKihbIikqMgsfcoy2X1M7GRtzFtXSuYv8NCCniqsedLceHTaLnWhNkRwlkTcxrTVOUHStVx2gqzjLhXkw5LjXJlp2UrnNyU9Z7XzMC6U1ypbl/LdJUxZfXfH/Tde7Pldoe17/b5FUNKtZN9fJ4t8W1xUe/0WuVMVhWpKa9viXdqUtqu0FOjS6MO6YxbPIFTdvRE9QVEQqz4iI4AXkmGNZ1MO6OaQC5UiYs1p7b7OnP8sD6q+aHSfUg6bYXOE9tgk+Mvs7BwO2/6kC8AAAAASUVORK5CYII="></button>
    </div>
    <p class="popup__img-description">{{ product_data.description }}</p>
  </CardWindow>
</template>
  
<script>
import CardWindow from './card-window.vue'
import CardItem from './card-window-img-item.vue'
// import { mapGetters } from 'vuex'


export default {
  name: 'card-product',
  // computed: mapGetters(['addCardOnCart']),
  props: {
    product_data: {
      type: Object,
      default() { return {} },
    },
    carusel_data: {
      type: Array,
      default: () => []
    },
    intervalSlider: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isBtnActive: true,
      isPopupVisible: false,
      carrentSlideIndex: 0,
      addDataOnCart: []
    }
  },
  components: {
    CardWindow,
    CardItem
  },
  computed: {
    getCardData() {
      console.log("добавил")
      // this.addDataOnCart = this.product_data
      return this.$store.commit('getCardData', this.addDataOnCart)
    }
  },
  methods: {
    closePopup() {
      this.isPopupVisible = false;
      this.carrentSlideIndex = 0
    },
    addProduct() {
      console.log("добавил2")
      this.isBtnActive = !this.isBtnActive;
      this.addDataOnCart = this.product_data
    },
    prewProduct() {
      this.isPopupVisible = true;
      this.$emit('sendProduct', this.product_data);
    },
    predSlide() {
      if (this.carrentSlideIndex <= 0) {
        this.carrentSlideIndex = this.carusel_data.length - 1
      } else {
        this.carrentSlideIndex--
      }
    },
    nextSlide() {
      if (this.carrentSlideIndex >= this.carusel_data.length - 1) {
        this.carrentSlideIndex = 0
      } else {
        this.carrentSlideIndex++
      }
    }
  },
  mounted() {
    if (this.intervalSlider > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide()
      }, vm.intervalSlider)
    }
  }
}
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
  cursor: pointer;
  transition: font-size ease-in-out .3s;
}

.card__add:hover {
  font-size: 15px;
}

.card__add_added {
  display: flex;
  flex-direction: row;
  background-color: #5B3A32;
  align-items: center;
  padding-left: 11px;
  gap: 7.2px
}

.card__btn-text {
  margin: 0;
  font-size: 14px;
  line-height: 21px;
}
</style>