<template>
    <ul class="header-links">
        <li class="header-link" @click="$router.push('/')"><a class="header-link-text" href="#">Каталог</a></li>
        <li class="header-link" @click="$router.push('delivery')"><a class="header-link-text" href="#">Доставка</a></li>
        <li class="header-link" @click="$router.push('cart')"><a class="header-link-text" href="#">Корзина</a></li>
        <li class="header-link" @click="$router.push('contacts')"><a class="header-link-text" href="#">Контакты</a></li>
        <li class="header-link" @click="$router.push('about')"><a class="header-link-text" href="#">О компании</a></li>
    </ul>
</template>

<script>
export default {
    name: 'shop-header-NavMenu'
}
</script>

<style>
.header-links {
    list-style: none;
    display: flex;
    flex-direction: row;
    gap: 48px;
    padding: 0;
}

.header-link {
    transition: opacity .3s ease-in-out;
}

.header-link:hover {
    opacity: .6;
}

.header-link-text {
    text-decoration: none;
    color: #343030;
    font-size: 14px;
    line-height: 150%;
}

@media screen and (max-width: 600px) {
    .header-links {
        gap: 10px;
    }

    .header-link {
        border: 1px solid #343030;
        border-color: rgba(34, 30, 30, .1);
        padding: 5px;
    }
}

@media screen and (max-width: 460px) {
    .header-links{
        width: 100%;
        justify-content: space-between;
        height: 100%;
        margin: 0;
        align-items: center;
        /* gap: 1; */
    }
    .header-link-text {
        font-size: 11px;
        line-height: 150%;
    }
}
</style>