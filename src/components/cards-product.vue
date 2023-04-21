<template>
    <section v-if="this.$router.currentRoute._value.path === '/'" @click="test" className="elements">
        <Card  v-for="product in allProducts" :key="product.id" :product_data="product" :carusel_data="product.slider" :intervalSlider="10000" />
        <!-- <Card v-else  /> -->
    </section>
    <section v-else  className="elements">
        <Card  v-for="product in allCardOnCart" :key="product.id" :product_data="product" :carusel_data="product.slider" :intervalSlider="10000" />

    </section>
</template>

<script>
import Card from './card-product.vue'
import { mapGetters } from 'vuex'

export default {
    name: "cards-product",
    components: {
        Card,
    },
    data() {
        return{
            // isMainPage: false,
        }
    },
    computed: mapGetters([['allProducts'], ['allCardOnCart']])
    ,
    // computed: mapGetters(['allCardOnCart']),

    methods: {
        isMainPage(){

            // console.log('ddd')
            // console.log(this.$router.currentRoute._value.path === '/')
            return this.$router.currentRoute._value.path === '/'
        },
        test(){
            console.log('CardOnCart', this.allCardOnCart)
            console.log('Products', this.allProducts)

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
    margin: 0 auto;
}

@media screen and (max-width: 1240px) {
    .elements {
        grid-template-columns: repeat(3, 278px);
        grid-gap: 45px 29px;
        margin-bottom: 10px;
        margin: 0 auto;
    }
}

@media screen and (max-width: 920px) {
    .elements {
        grid-template-columns: repeat(2, 278px);
    }
}

@media screen and (max-width: 600px) {
    .elements {
        grid-template-columns: repeat(1, 278px);
        align-self: center;
        justify-self: center;
    }
}
</style>