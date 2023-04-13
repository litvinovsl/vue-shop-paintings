<template>
    <div class="contacts">
        <div class="contact">
            <img class="contact__icon" src="../images/Phone.svg">
            <p class="contact__info">+7 (812) 555-55-55</p>
        </div>
        <div class="contact">
            <img class="contact__icon" src="../images/adress.svg">
            <p class="contact__info">г. Санкт-Петербург, ул. Ефимова, 3</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'contact-details'
}
</script>

<style>
.contacts {
    display: flex;
    flex-direction: row;
    gap: 54px;
}

.contact {
    display: flex;
    flex-direction: row;
    gap: 9px;
}

.contact__icon {
    width: 14px;
    height: 14px;
    align-self: center;
}

.contact__info {
    margin: 0;
    font-size: 14px;
    line-height: 150%;
}

@media screen and (max-width: 920px) {
    .contacts {
        margin-bottom: 15px;
    }
}

@media screen and (max-width: 520px) {
    .contact__info {
        font-size: 10px;
        line-height: 150%;
    }
    .contacts{
        gap: 30px;
    }
}
</style>