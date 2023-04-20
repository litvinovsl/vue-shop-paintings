<template>
    <div className="card-window-img-item">
        <img class="c" :src="require('../images/' + img_data.img)">
    </div>
</template>

<script>
export default {
    name: "card-window-img-item",
    props: {
        img_data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>
.c{
    width: 500px;
    height: 400px;
}

@media screen and (max-width: 505px) {
    .c{
    max-height: 320px;
    max-width: 400px;
    }

}
@media screen and (max-width: 405px) {
    .c{
    max-height: 230px;
    max-width: 320px;
    }

}
</style>