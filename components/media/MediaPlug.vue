<template>
    <div class="media-plug">
        <div class="media-plug__header">
            <div class="media-plug__header-wrap">
                <p class="media-plug__header-title">{{ $t('plugText1') }}</p>
            </div>
            <div class="media-plug__header-wrap">
                <p class="media-plug__header-text">{{ $t('plugText2') }}</p>
            </div>
        </div>
        <div class="media-plug__image">
            <div class="media-plug__black-friend"></div>
            <img class="media-plug__img" :src="require('~/assets/img/media/plug.png')" alt="">
        </div>
        <ul class="media-plug__social">
            <li class="media-plug__social-item">
                <a class="media-plug__social-link" href="https://www.facebook.com/IQOSA/" target="_blank">Facebook</a>
                <span class="media-plug__social-line"></span>
            </li>
            <li class="media-plug__social-item">
                <a class="media-plug__social-link" href="https://www.pinterest.com/iqosa/_created/" target="_blank">Pinterest</a>
                <span class="media-plug__social-line"></span>
            </li>
            <li class="media-plug__social-item">
                <a class="media-plug__social-link" href="https://www.instagram.com/iqosa/" target="_blank">Instagram</a>
                <span class="media-plug__social-line"></span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    mounted() {
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
    },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
            setAnimate: 'plug/setAnimate',
        }),
        animate() {
            this.$gsap.to(".media-plug__header-title", {
				translateY: 0,
				duration: 1,
			});
            this.$gsap.to(".media-plug__header-text", {
				translateY: 0,
				duration: 1,
			});
            this.$gsap.to(".media-plug__social-line", {
				translateX: 0,
				duration: 1,
			});
        }
    }
}
</script>

<style lang="scss">
.media-plug {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    padding: 280px 0 64px;
    &__header {
        &-wrap {
            overflow: hidden;
        }
        &-title {
            padding-left: 8px;
            padding-right: 8px;
            transform: translateY(100%);
            letter-spacing: .05em;
            font-family: 'ThinItalic',Arial;
            font-weight: 300;
            font-size: 88px;
            text-transform: uppercase;
            line-height: 115%;
            color: #fff;
            text-align: center;
        }
        &-text {
            padding-left: 8px;
            padding-right: 8px;
            transform: translateY(100%);
            font-family: 'Roman', Arial;
            font-weight: 400;
            font-size: 88px;
            text-transform: uppercase;
            line-height: 115%;
            color: #fff;
            text-align: center;
        }
    }
    &__image {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 772px;
        height: 604px;
        z-index: -1;
    }
    &__black-friend {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: .75;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: -3px;
        object-position: center;
    }
    &__social {
        display: flex;
        flex-direction: row;
        margin-top: auto;
        &-item {
            margin-right: 32px;
            position: relative;
            overflow: hidden;
            &:last-child {
                margin-right: 0px;
            }
            &:hover {
                .media-plug__social-line {
                    animation: 'under-line' 1s;
                    transition: .3s ease;
                }
            }
        }
        &-link {
            text-transform: uppercase;
            font-family: 'Light', Arial;
            font-weight: 300;
            font-size: 16px;
            color: #fff;
        }
        &-line {
            position: absolute;
            height: 1px;
            width: 0;
            background: #fff;
            transform: translate(-105%, 0px);
            width: 100%;
            display: block;
            transition: .3s ease;
            bottom: 0;
        }
    }
}
@media (max-width: 1440px) {
    .media-plug {
        padding-top: 241px;
        &__image {
            width: 644px;
            height: 465px;
        }
    }
}
@media (max-width: 1280px) {
    .media-plug {
        padding: 220px 0 48px;
        &__image {
            width: 530px;
            height: 358px;
        }
    }
}
@media (max-width: 1024px) {
    .media-plug {
        padding: 227px 0 46px;
        &__header {
            &-title,
            &-text {
                font-size: 86px;
            }
        }
        &__image {
            height: 430px;
        }
    }
}
@media (max-width: 768px) {
    .media-plug {
        padding: 191px 0 140px;
        &__header {
            &-title,
            &-text {
                font-size: 62px;
            }
        }
        &__image {
            height: 596px;
            bottom: 132px;
        }
    }
}
@media (max-width: 700px) {
    .media-plug {
        &__social {
            &-link {
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 414px) {
    .media-plug {
        padding: 138px 0 115px;
        &__header {
            &-title,
            &-text {
                font-size: 42px;
            }
        }
        &__image {
            height: 385px;
            width: 343px;
            bottom: -35px;
        }
    }
}
</style>