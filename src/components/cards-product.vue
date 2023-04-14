<template>
    <section className="elements">
        <Card 
        v-for="product in products" 
        :key="product.id" 
        :product_data="product" 
        @sendIdProduct = "showIdCardOnClick"
        />
    </section>
</template>

<script>
import Card from './card-product.vue'
export default {
    name: "cards-product",
    components: {
        Card
    },
    data() {
    return {
      products: [
        {
          image: "venera.png",
          name: "«Рождение Венеры» Сандро Боттичелли",
          oldprice: "3 000 000",
          newprice: "2 000 000",
          availability: true,
          id: 1
        },
        {
          image: "vechere.png",
          name: "«Тайная вечеря»  Леонардо да Винчи",
          newprice: "3 500 000",
          availability: true,
          id: 2
        },
        {
          image: "adam.png",
          name: "«Сотворение Адама» Микеланджело",
          oldprice: "800 000",
          newprice: "700 000",
          availability: true,
          id: 3
        },
        {
          image: "urok.png",
          name: "«Урок анатомии»  Рембрандт",
          oldprice: "30 000 000",
          newprice: "28 000 000",
          availability: false,
          id: 4
        },
      ]
    }
  },
  methods: {
    showIdCardOnClick(data){
        console.log(data)
    }
  }
}
</script>

<style>
.elements {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 58px 32px;
  color: black;
  align-content: center;
  /* justify-content: center; */
  margin: 0 auto;
}

@media screen and (max-width: 1240px) {
    .elements{
        /* margin-top: 80px; */
        /* grid-template-columns: repeat(auto-fill, minmax(278px,278px)); */
        grid-template-columns: repeat(3, 278px);
        grid-gap: 45px 29px;
        margin-bottom: 10px;
        margin: 0 auto;
    }
}

@media screen and (max-width: 920px) {
    .elements{
        grid-template-columns: repeat(2, 278px);
    }
}

@media screen and (max-width: 600px) {
    .elements{
        grid-template-columns: repeat(1, 278px);
        align-self: center;
        justify-self: center;
    }
}
</style>