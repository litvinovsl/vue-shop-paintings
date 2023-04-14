<template>
    <form class="search-form">
        <input class="search-form__input" v-model="searchCard" type="text" placeholder="Поиск по названию картины">
        <button class="search-form__button" type="button">Найти </button>
    </form>
</template>

<script>
export default {
    name: 'header-search',
    data(){
        return{
            searchCard: ''
        }
    },
    computed: {
        // filteredCard(){
        //     return this.products.filter(product => {
        //         return product.indexOf(this.searchCard) !== -1
        //     })
        // }
    }
}
</script>

<style>
.search-form {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.search-form__input {
    width: 294px;
    height: 48px;
    border: 1px solid #E1E1E1;
    background-color: #F6F3F3;

}

.search-form__input::-webkit-input-placeholder {
    padding-left: 20px;
    font-size: 14px;
    line-height: 150%;
    color: #9F9F9F;
}

.search-form__button {
    width: 122px;
    height: 52px;
    border: 0;
    padding: 0;
    background-color: #403432;
    color: #FFF;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
}

@media screen and (max-width: 1240px) {
    .search-form__input{
      max-width: 214px;
    }
}
</style>