<template>
    <div>
        <section class="media">
            <div class="media__title">
                <p class="media__title-text" :class="{'active' : view === 'news'}">
                    <a @click.prevent="goTo('news')" href="/news" class="media__title-link">{{ data.media_link_text }} /</a>
                </p>
                <h1 class="media__title-text media__title-text--bold" :class="{'active' : view === 'media'}">
                    <a @click.prevent="goTo('media')" href="/media" class="media__title-link">{{ data.media_title }}</a>
                </h1>
            </div>
            <h2 class="media__description">
                <p class="media__description-text" v-for="(item, i) in data.media_text" :key="i">{{item}}</p>
            </h2>
        </section>
        <section class="media-grid">
            <ul class="media-grid__list">
                <li v-for="(item, i) in data.media_images" class="media-grid__item" ref="media" :key="i" @mouseover.self="hoverImg($event, getImg(item.hover_picture))" @mouseleave.self="defaultImg($event, getImg(item.picture))">
                    <div class="media-grid__image">
                        <img :src="getImg(item.picture)" alt="">
                    </div>
                    <hr class="media-grid__line media-grid__line--horizontal">
                    <hr class="media-grid__line media-grid__line--vertical">
                </li>
                <template v-if="data.media_images.length > 3">
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length % 3 === 1">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length % 3 === 1">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length % 3 === 2">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                </template>
                <template v-else-if="data.media_images.length < 3">
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length === 1">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length === 1">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                    <li class="media-grid__item media-grid__item--disabled" v-if="data.media_images.length === 2">
                        <div class="media-grid__image"></div>
                        <hr class="media-grid__line media-grid__line--horizontal">
                        <hr class="media-grid__line media-grid__line--vertical">
                    </li>
                </template>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
    created() {
        this.setView('media')
    },
    mounted() {
        console.log(this.view)
        if (this.preloader) {
            setTimeout(() => {
                this.setPlug(false)
                this.animate()
            }, this.duration.preloader);
        } else {
            setTimeout(() => {
                this.setPlug(false)
                this.animate()
            }, this.duration.page);
        }
    },
    computed: {
        preloader() { return this.$store.getters['preloader/preloader'] },
        duration() { return this.$store.getters['plug/duration'] },
        view() { return this.$store.getters['media/view'] },
    },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
            setView: 'media/setView',
            setAnimate: 'plug/setAnimate',
        }),
        animate() {
            let tl,
                title = document.querySelectorAll('.media__title-text'),
                description = document.querySelector('.media__description-text')

                Array.from(title).forEach((item) => {

                this.$ScrollTrigger.create(
                    {
                        trigger: item,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );

                tl.to(item, {translateY: 0, duration: 1})
                })

                this.$ScrollTrigger.create(
                    {
                        trigger: description,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(description, {translateY: 0, duration: 1})
        },
        goTo(page) {
          if (this.$route.name !== page) {
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
              this.setAnimate('dissolve')
              this.$router.push(this.localePath(page))
            }, 1000);
          }
        },
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
        // hoverImg(i) {
        //     this.$refs.media[i].querySelector('img').src = this.media[i-1].hover
        // },
        // standartImg(i) {
        //     this.$refs.media[i].querySelector('img').src = this.media[i-1].img
        // },
        hoverImg(e, img) {
            e.target.children[0].children[0].setAttribute('src', img)
        },
        defaultImg(e, img) {
            e.target.children[0].children[0].setAttribute('src', img)
        },
    }
}
</script>

<style lang="scss">
    .media {
        margin-top: 367px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &__title {
            display: flex;
            overflow: hidden;
            &-text {
                font-family: 'ThinItalic', Arial;
                font-style: italic;
                font-weight: 300;
                font-size: 164px;
                line-height: 90%;
                text-align: center;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
                color: #FFFFFF;
                opacity: 0.15;
                transform: translateY(100%);
                &--bold {
                    font-family: 'Roman', Arial;
                }
                &.active {
                    opacity: 1;
                    .media__title-link {
                        cursor: default;
                        pointer-events: none;
                    }
                }
            }
            &-link {
                color: #fff;
            }
        }
        &__description {
            margin-top: 88px;
            font-family: 'Light', Arial;
            font-style: normal;
            font-weight: 300;
            font-size: 22px;
            line-height: 120%;
            text-transform: uppercase;
            font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
            color: #FFFFFF;
            width: 516px;
            text-align: center;
            overflow: hidden;
            &-text {
                transform: translateY(100%);
            }
        }
    }
    .media-grid {
        margin-top: 165px;
        &__list {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
        &__item {
            height: 466px;
            position: relative;
            justify-content: center;
            align-items: center;
            display: flex;
            &:hover {
                cursor: pointer;
                background: #0F6CB6;
            }
            &--disabled {
                &:hover {
                    cursor: default;
                    background: unset;
                }
            }
        }
        &__line {
            position: absolute;
            top:0;
            left: 0;
            &--horizontal {
                height: 1px;
                width: 100%;
                background: #fff;
                opacity: 0.09;
            }
            &--vertical {
                height: 100%;
                width: 1px;
                background: #fff;
                opacity: 0.09;
            }
        }
        &__image {
            width: 175px;
            height: 130px;
            // height: 90.81px;
            img,
            svg {
                width: 100%;
                height: 100%;
            }
        }
    }
    @media (max-width: 1440px) {
        .media {
            margin-top: 305px;
            &__title {
                &-text {
                    font-size: 148px;
                }
            }
        }
        .media-grid {
            margin-top: 157px;
            &__item {
                height: 349px;
            }
            &__image {
                width: 131px;
                height: 97px;
            }
        }
    }
    @media (max-width: 1280px) {
        .media {
            margin-top: 311px;
            &__title {
                &-text {
                    font-size: 116px;
                }
            }
            &__description {
                &-text {
                    font-size: 19px;
                }
            }
        }
        .media-grid {
            margin-top: 149px;
            &__item {
                height: 310px;
            }
            &__image {
                width: 116px;
                height: 86px;
            }
        }
    }
    @media (max-width: 1024px) {
        .media {
            margin-top: 297px;
            &__title {
                &-text {
                    font-size: 108px;
                }
            }
            &__description {
                width: 363px;
                &-text {
                    font-size: 17px;
                }
            }
        }
        .media-grid {
            margin-top: 132px;
            &__item {
                height: 248px;
            }
            &__image {
                width: 93px;
                height: 68px;
            }
        }
    }
    @media (max-width: 768px) {
        .media {
            margin-top: 242px;
            &__title {
                &-text {
                    font-size: 88px;
                }
            }
            &__description {
                width: 324px;
                &-text {
                    font-size: 16px;
                }
            }
        }
        .media-grid {
            &__list {
                grid-template-columns: 1fr 1fr;
            }
            &__item {
                height: 280px;
            }
            &__image {
                width: 104px;
                height: 76px;
            }
        }
    }
    @media (max-width: 650px) {
        .media {
            &__title {
                flex-direction: column;
            }
        }
    }
    @media (max-width: 414px) {
        .media {
            margin-top: 187px;
            &__title {
                &-text {
                    font-size: 56px;
                }
            }
            &__description {
                width: calc(100% - 32px);
                &-text {
                    font-size: 15px;
                }
            }
        }
        .media-grid {
            &__list {
                grid-template-columns: 1fr;
            }
            &__item {
                height: 273px;
            }
            &__image {
                width: 103px;
                height: 75px;
            }
        }
    }
</style>