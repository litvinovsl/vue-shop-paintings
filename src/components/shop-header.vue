<template>
    <div class="header">
        <div class="header__box">
            <HeaderNavMenu />
            <Search />
        </div>
    </div>
</template>

<script>
import HeaderNavMenu from './shop-header-NavMenu.vue';
import Search from './header-search.vue';
export default {
    name: 'shop-header',
    components: {
        HeaderNavMenu,
        Search
    }
}
</script>

<style>
.header {
    height: 97px;
    border-bottom: 1px solid #E1E1E1;
}

.header__box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    /* padding: 0 352px; */
    max-width: 1120px;
    height: 100%;
    align-items: center;
}
</style>