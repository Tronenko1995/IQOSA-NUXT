<template>
    <div>
        <section class="media">
            <div class="media__title">
                <h1 class="media__title-text" :class="{'active' : view === 'news'}">
                    <a @click.prevent="goTo('news')" href="/news" class="media__title-link">News /</a>
                </h1>
                <p class="media__title-text media__title-text--bold" :class="{'active' : view === 'media'}">
                    <a @click.prevent="goTo('media')" href="/media" class="media__title-link">Media</a>
                </p>
            </div>
            <h2 class="media__description">
                <p class="media__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor i</p>
            </h2>
        </section>
        <section class="news">
            <ul class="news__list">
                <li class="news__item">
                    <div class="news__block">
                        <img class="news__image" :src="require('~/assets/img/news/1.jpg')" alt="" width="644" height="720">
                    </div>
                    <a @click.prevent="go('/one-article')" href="/one-article" class="news__link">
                        <div class="news__info">
                            <div class="news__info-top"><span>17 AUGUST</span> 2020</div>
                            <div class="news__info-middle">Dutch Invertuals designs Tiny Offices from corrugated aluminium plates</div>
                            <div class="news__info-bottom"><span>SHOW</span>&nbsp; MORE <span class="arrow-link__circle arrow-link__circle--news"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-link__svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"></path><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"></path></svg></span></div>
                        </div>
                    </a>
                </li>
                <li class="news__item">
                    <div class="news__block">
                        <img class="news__image" :src="require('~/assets/img/news/1.jpg')" alt="" width="644" height="720">
                    </div>
                    <a @click.prevent="go('/one-article')" href="/one-article" class="news__link">
                        <div class="news__info">
                            <div class="news__info-top"><span>17 AUGUST</span> 2020</div>
                            <div class="news__info-middle">Dutch Invertuals designs Tiny Offices from corrugated aluminium plates</div>
                            <div class="news__info-bottom"><span>SHOW</span>&nbsp; MORE <span class="arrow-link__circle arrow-link__circle--news"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-link__svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"></path><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"></path></svg></span></div>
                        </div>
                    </a>
                </li>
                <li class="news__item">
                    <div class="news__block">
                        <img class="news__image" :src="require('~/assets/img/news/1.jpg')" alt="" width="644" height="720">
                    </div>
                    <a @click.prevent="go('/one-article')" href="/one-article" class="news__link">
                        <div class="news__info">
                            <div class="news__info-top"><span>17 AUGUST</span> 2020</div>
                            <div class="news__info-middle">Dutch Invertuals designs Tiny Offices from corrugated aluminium plates</div>
                            <div class="news__info-bottom"><span>SHOW</span>&nbsp; MORE <span class="arrow-link__circle arrow-link__circle--news"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-link__svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"></path><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"></path></svg></span></div>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
        }
    },
    created() {
        this.setView('news')
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
        go(link) {
            if (this.$route.path !== link) {
                this.setAnimate('up')
                this.setPlug(true)
                setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(link))
                }, 1000);
            }
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
                opacity: 1;
                transform: translateY(100%);
                &--bold {
                    font-family: 'Roman', Arial;
                }
                &.active {
                    opacity: 0.15;
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
    .news {
        margin-top: 164px;
        margin-bottom: 188px;
        &__list {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__item {
            display: flex;
            margin-bottom: 16px;
            position: relative;
            cursor: pointer;
            &:last-child {
                margin-bottom: 0px;
            }
            &:hover {
                .news__link {
                    opacity: 1;
                }
            }
        }
        &__block {
            display: flex;
            width: 644px;
            height: 720px;
        }
        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &__info {
            display: flex;
            flex-direction: column;
            align-items: center;
            &-top,
            &-bottom {
                text-align: center;
                font-family: 'Light';
                font-style: normal;
                font-weight: 300;
                font-size: 14px;
                line-height: 120%;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #FFFFFF;
                span {
                    font-family: 'LightItalic';
                    font-style: italic;
                }
            }
            &-middle {
                margin-top: 32px;
                width: 513px;
                font-family: 'Roman';
                font-style: normal;
                font-weight: normal;
                font-size: 35px;
                line-height: 110%;
                text-align: center;
                text-transform: uppercase;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #FFFFFF;
            }
            &-bottom {
                display: flex;
                align-items: center;
                margin-top: 72px;
            }
        }
        &__link {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            transition: .5s;
            background: rgba(0, 0, 0, 0.6);
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
        .news {
            margin-top: 156px;
            margin-bottom: 156px;
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
        .news {
            margin-top: 148px;
            margin-bottom: 148px;
            &__block {
                width: 530px;
                height: 596px;
            }
            &__info {
                &-top,
                &-bottom {
                    font-size: 12px;
                }
                &-middle {
                    font-size: 30px;
                    width: 450px;
                }
                &-bottom {
                    margin-top: 64px;
                }
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
        .news {
            margin-top: 132px;
            margin-bottom: 132px;
            &__link {
                opacity: 1;
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
    }
    @media (max-width: 650px) {
        .media {
            &__title {
                flex-direction: column;
            }
        }
    }
    @media (max-width: 550px) {
        .news {
            &__block {
                width: 343px;
                height: 434px;
            }
            &__info {
                &-top,
                &-bottom {
                    font-size: 13px;
                }
                &-middle {
                    margin-top: 24px;
                    font-size: 22px;
                    width: 311px;
                }
                &-bottom {
                    margin-top: 40px;
                }
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
        .news {
            margin-top: 88px;
            margin-bottom: 88px;
        }
    }
</style>