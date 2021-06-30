<template>
    <section class="team-mobi">
        <div class="team__title team-mobi__title">
            <p class="team__title-text team-mobi__title-text">We form the quality of life</p>
            <p class="team__title-text team-mobi__title-text">By the quality of implementation</p>
            <nuxt-link to="/" class="team-mobi__link team__link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
                <span class="arrow-link__change">
                    <span class="arrow-link__span arrow-link__span--first">Discover</span>
                    <span class="arrow-link__span arrow-link__span--last">Discover</span>
                </span>
                <span class="arrow-link__text">More</span>
                <span class="arrow-link__circle">
                    <svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                </span>
            </nuxt-link>
        </div>
        <swiper ref="teamSlider" :options="teamSliderSetting" class="team-slider">
            <swiper-slide class="team-slider__item">
                <img class="team-slider__img" @click="openModal($event)" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy-1.jpg" data-src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy.jpg" alt="">
                <div class="team-slider__text" data-quote="IQOSA is ambition, striving for individuality in design. We always wanted to create something unique and that no one has pointed us what to do.">
                    <p class="team-slider__surname">Fil</p>
                    <p class="team-slider__name">Vladimir</p>
                    <p class="team-slider__position">Designer-Visualizer</p>
                </div>
            </swiper-slide>
            <swiper-slide class="team-slider__item">
                <img class="team-slider__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy-1.jpg" alt="">
                <div class="team-slider__text">
                    <p class="team-slider__surname">Fil</p>
                    <p class="team-slider__name">Vladimir</p>
                    <p class="team-slider__position">Designer-Visualizer</p>
                </div>
            </swiper-slide>
            <swiper-slide class="team-slider__item">
                <img class="team-slider__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy-1.jpg" alt="">
                <div class="team-slider__text">
                    <p class="team-slider__surname">Fil</p>
                    <p class="team-slider__name">Vladimir</p>
                    <p class="team-slider__position">Designer-Visualizer</p>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            teamSliderSetting: {
                speed: 500,
                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,
            },
        }
    },
    methods: {
        ...mapMutations({
            setModal: 'modal/setModal',
            setTeam: 'team/setTeam',
        }),
        openModal(e) {
            this.setTeam({
                name: `${e.target.parentElement.querySelector('.team-slider__surname').textContent} ${e.target.parentElement.querySelector('.team-slider__name').textContent}`,
                position: e.target.parentElement.querySelector('.team-slider__position').textContent,
                img: e.target.dataset.src,
                quote: e.target.parentElement.querySelector('.team-slider__text').dataset.quote
            })
            this.setModal({
                show: true,
                type: 'team',
                animate: 'fade'
            })
        }
    }
}
</script>

<style lang="scss">
.team-mobi {
    margin-top: 88px;
    &__title {
        padding-left: 120px;
        padding-right: 120px;
        &-text {
            font-size: 42px;
            white-space: normal;
            &:nth-child(2) {
                margin-left: auto;
            }
        }
    }
    &__link {
        margin-bottom: 88px;
    }
}
.team-slider {
    display: block;
    margin-bottom: 88px;
    .swiper-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        transition-property: transform;
        box-sizing: content-box;
    }
    &__item {
        width: fit-content !important;
        margin-right: 4px;
        margin-left: 4px;
        flex-shrink: 0;
        height: 100%;
        position: relative;
        transition-property: transform;
    }
    &__img {
        object-fit: cover;
        object-position: top;
        width: 429px !important;
        height: 569px !important;
    }
    &__text {
        width: fit-content;
        height: 20%;
        position: relative;
        margin-right: auto;
        margin-left: auto;
        margin-top: -24px;
    }
    &__name {
        font-size: 42px;
        font-family: 'ThinItalic', Arial;
        font-weight: 300;
        margin-left: 50px;
        margin-bottom: 35px;
        text-transform: uppercase;
        line-height: 140%;
        color: #fff;
    }
    &__surname {
        font-size: 42px;
        font-family: 'Roman', Arial;
        margin-bottom: -6px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 140%;
        color: #fff;
    }
    &__position {
        color: #fff;
        font-size: 12px;
        margin-left: auto;
        margin-right: auto;
        font-family: 'Light', Arial;
        font-weight: 300;
        text-transform: uppercase;
    }
}
@media (max-width: 1024px) {
    .team-mobi__title {
        width: 100%;
        text-align: center;
        margin: auto;
    }
}
@media (max-width: 768px) {
    .team-mobi__title {
        &-text {
            font-size: 36px;
        }
    }
}
@media (max-width: 480px) {
    .team-slider {
        padding-right: 15px;
        padding-left: 15px;
    }
    .team-mobi__title {
        padding-left: 16px;
        padding-right: 16px;
        &-text {
            margin-right: unset;
            font-size: 32px;
        }
    }
    .team-slider {
        &__item {
            width: calc(100% - 7px)!important;
        }
        &__img {
            width: 100% !important;
            height: 459px !important;
        }
    }
}
</style>