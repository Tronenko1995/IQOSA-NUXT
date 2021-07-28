 <template>
    <div class="next-wrap">
        <nuxt-link :to="localePath('/join')"  class="next">
            <div class="next__title">
                <ul class="animate-text animate-text--next">
                    <li class="animate-text__item">
                        <a href="#" class="animate-text__button animate-text__button--cursive  animate-text__button--next">{{ data.bottom_block_text }}</a>
                        <a href="#" class="animate-text__button animate-text__button--next animate-text__button--absolute">{{ data.bottom_block_hover_text }}</a>
                    </li>
                </ul>
            </div>
            <div class="next__image">
                <img :src="getImg(data.bottom_block_picture)" alt="">
            </div>
        </nuxt-link>
    </div>

</template>

<script>
    export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    methods: {
        getImg(img) {
            return `${this.baseUrl}${img}`
        }
    }
}
</script>

<style lang="scss">
.next {
    &-wrap {
    margin: 357px auto 0 auto;
        width: 100%;
    max-width: 100%;
    }

    width: fit-content;
    margin: 0 auto;
    // display: block;
    position: relative;


    display: flex;
    flex-direction: column;

    // margin-top: 357px;
    &__title {
    
        // margin-top: 48px;
        font-family: 'ThinItalic', Arial;
        // font-style: italic;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        // position: absolute;
        // left: 50%;
        // transform: translateX(-50%);
        // top: -122px;
        z-index: 1;
        width: 100%;
        span {
            font-family: 'Roman', Arial;
        }

    position: absolute;
    margin-top: 0px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    z-index: 1;
    /* min-width: 710px; */
    padding: 0;
    min-width: 1100px;
    }
    &__image {
        width: 640px;
        height: 720px;
        overflow: hidden;
        margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-height: 400px;
    }
    img {
        transform: scale(1.1);
        transition: .5s;
    }
    &:hover {
        img {
            transform: scale(1);
        }
        .animate-text__button {
            &:first-child {
                transform: translateY(-100%);
            }
            &:last-child {
                transform: translateY(-100%);
            }
        }
    }
}
.animate-text {
    &--team {
        margin-left: 70px;
    }
    &--share {
        margin-left: 120px;
    }
    &__item {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: translateY(0);
        position: relative;
        margin-bottom: 4px;
        &:last-child {
            margin-bottom: 0px;
        }
    }
    &__button {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        background: none;
        cursor: pointer;
        text-align: left;
        &--cursive {
            font-family: 'ThinItalic', Arial;
        }
        &--absolute {
            position: absolute;
            bottom: -100%;
        }
        &--next {
            font-size: 100px;
            letter-spacing: .05em;
            line-height: 115%;
            font-family: 'ThinItalic', Arial;
            // line-height: inherit;
            // font-weight: inherit;
            text-align: center;
            width: 100%;
            transition: .4s;
        }
    }
}
@media (max-width: 1440px) {
    .next {
        &-wrap {
            margin: 326px auto 0 auto;
        }
        &__title {
            font-size: 140px;
            top: -111px;
        }
        &__image {
            width: 639px;
            height: 398px;
        }
    }
}
@media (max-width: 1280px) {
    .animate-text {
        &__button {
            &--next {
                font-size: 100px;
            }
        }
    }
    .next {
        &-wrap {
            margin: 272px auto 0 auto;
        }
        &__title {
            font-size: 116px;
            top: -101px;
        }
        &__image {
            width: 568px;
            height: 357px;
        }
    }
}
@media (max-width: 1100px) {
    .next {
        width: 100%;
        &__title {
            min-width: 100%;
        }
    }
}
@media (max-width: 1024px) {
    .animate-text {
        &__button {
            &--next {
                font-size: 74px;
            }
        }
    }
    .next {
        &-wrap {
            margin: 229px auto 0 auto;
        }
        &__title {
            font-size: 90px;
            top: -90px;
        }
        &__image {
            width: 444px;
            height: 280px;
        }
    }
}
@media (max-width: 768px) {
    .next {
        &-wrap {
            margin: 222px auto 0 auto;
        }
        &__title {
            font-size: 50px;
            top: -70px;
        }
        &__image {
            width: 324px;
            height: 206px;
        }
    }
}
@media (max-width: 414px) {
    .animate-text {
        &__button {
            &--next {
                font-size: 56px;
            }
        }
    }
    .next {
        &-wrap {
            margin: 143px auto 0 auto;
        }
        &__title {
            font-size: 49px;
            top: -70px;
        }
        &__image {
            width: 225px;
            height: 144px;
        }
    }
}
</style>