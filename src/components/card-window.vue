<template>
    <section class="popup popup_opened">
        <div class="popup__open-place">
            <button type="button" @click="closePopup" class="popup__button-close">
                <img class="popup__button-close-img" src="../images/Close.svg" alt="Закрыть" />
            </button>
            <slot></slot>
        </div>
        <div className="popup__overlay" @click="closePopup"></div>
    </section>
</template>

<script>

export default {
  name: 'card-window',
  data(){
    return{
    }
  },
  methods: {
    closePopup(){
        this.$emit('closePopup')
    }
  }
}
</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition-property: opacity, height;
    transition-duration: .3s, 0s;
    transition-delay: 0s, .3s;
    visibility: hidden;
}

.popup__open-place {
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;
    z-index: 3;
    background-color: rgba(0, 0, 0, .7);
}

.popup_opened {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s, 0s;
    height: 100%;
    z-index: 3;
}

.popup__button-close {
    cursor: pointer;
    overflow: visible;
    align-self: flex-end;
    position: absolute;
    top: -40px;
    right: -40px;
    width: 32px;
    height: 32px;
    border: none;
    background-color: rgba(0, 125, 215, 0);
}

.popup__image {
    max-height: 70vh;
    max-width: 70vw;
    margin: 0 auto;
    align-self: center;
}

.popup__img-name {
    margin-bottom: 22px;
    max-width: 60vw;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #fbfbfb;
    margin-left: 15px;
}

.popup__img-description {
    font-size: 11px;
    line-height: 15px;
    max-width: 58vw;
    color: #FFFFFF;
    margin-left: 15px;

}

@media screen and (max-width: 600px) {
    .popup__button-close {
        width: 20px;
        height: 20px;
        right: 0px;
        top: -36px;
    }
}

.popup__button-close-img {
    width: 32px;
    height: 32px;
    margin: -3px 0px 0px -8px;
    transition: opacity .3s ease-in-out;
}

.popup__button-close-img:hover {
    opacity: .6;
}

@media screen and (max-width: 600px) {
    .popup__button-close-img {
        width: 20px;
        height: 20px;
    }
}

.popup__img-conteiner{
    max-height: 400px;
    max-width: 500px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}

.popup__img-carousel{
    display: flex;
    transition: all ease .2s;
}

.popup__button{
    position: absolute;
    top: 0;
    height: 100%;
    width: 100px;
    background-color:transparent;
    border: none;
    transition: background-color .5s ease-in-out;
}

.popup__button:hover {
    background-color: rgba(0, 0, 0, .2);
}

.popup__button_next{
    right: 0;
}
.popup__button_pred{
    left: 0;
}
.popup__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
}</style>