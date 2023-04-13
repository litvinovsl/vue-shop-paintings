<template>
    <div class="footer">
        <div class="footer__box">
            <HeaderNavMenu />
            <ContactDetails />
        </div>
    </div>
</template>

<script>
import HeaderNavMenu from './shop-header-NavMenu.vue';
import ContactDetails from './contact-details.vue';
export default {
    name: 'shop-header',
    components: {
        HeaderNavMenu,
        ContactDetails
    }
}
</script>

<style>
.footer {
    height: 97px;
    background-color: #ECEAEA;
}

.footer__box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1120px;
    height: 100%;
    align-items: center;
}

@media screen and (max-width: 920px) {
    .footer__box{
      flex-direction: column;
    }
}
</style>