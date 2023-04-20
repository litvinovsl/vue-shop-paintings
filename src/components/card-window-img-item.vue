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
</style>