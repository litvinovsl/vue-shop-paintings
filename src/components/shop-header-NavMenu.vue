<template>
    <ul class="header-links">
        <li class="header-link"><a class="header-link-text" href="#">Каталог</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Доставка</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Оплата</a></li>
        <li class="header-link"><a class="header-link-text" href="#">Контакты</a></li>
        <li class="header-link"><a class="header-link-text" href="#">О компании</a></li>
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
}

.header-link{
    transition: opacity .3s ease-in-out;
}

.header-link:hover{
    opacity: .6;
}

.header-link-text {
    text-decoration: none;
    color: #343030;
    font-size: 14px;
    line-height: 150%;
}
</style>