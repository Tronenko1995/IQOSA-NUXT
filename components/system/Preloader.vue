<template>
    <div class="preloader">
        <ul class="preloader__list">
            <li class="preloader__item">
                <div class="preloader__change">
                    <span class="preloader__text">{{data[0]}}</span>
                    <img class="preloader__svg" :src="require('~/assets/svg/icosahedron.svg')">
                    <span class="preloader__text">{{data[1]}}</span>
                </div>
            </li>
            <!-- <li class="preloader__item"> -->
                <!-- <div class="preloader__change"> -->
                    <!-- <span class="preloader__text">platonic solids - denotes the element of water.</span> -->
                <!-- </div> -->
            <!-- </li> -->
        </ul>
    </div>
</template>

<script>
import gsap from "gsap"
import { mapMutations } from 'vuex'
export default {
    mounted() {
        this.showText()
    },
	computed: {
		data() { return this.$store.getters['lang/parts/dataPreloader'] }
	},
    methods: {
        ...mapMutations({
          setPreloader: 'preloader/setPreloader',
        }),
        showText() {
            const animateItem = document.querySelectorAll('.preloader__change')
            let delay = 1

            for (let i = 0; i < animateItem.length; i++) {
                gsap.to(animateItem[i], {
                    delay: delay,
                    translateY: 0,
                    duration: 0.5
                })

                delay = delay + 0.25
            }
            setTimeout(() => this.hideText(), 1000);
        },
        hideText() {
            const animateItem = document.querySelectorAll('.preloader__change')
            let delay = 1

            for (let i = 0; i < animateItem.length; i++) {
                gsap.to(animateItem[i], {
                    delay: delay,
                    translateY: -100 + '%',
                    duration: 0.5
                })

                delay = delay + 0.25
            }
            setTimeout(() => {
                this.setPreloader(false)
            }, 2000);
        }
    }
}
</script>

<style lang="scss">
.preloader {
    &__list {
        max-width: 740px;
    }
    &__item {
        font-size: 22px;
        line-height: 120%;
        text-transform: uppercase;
        font-family: 'Light', Arial;
        font-weight: 300;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        overflow: hidden;
    }
    &__text {
        vertical-align: middle;
    }
    &__svg {
        vertical-align: middle;
        width: 179px;
        height: 31px;
    }
    &__change {
        transform: translateY(100%);
    }
}
@media (max-width: 1280px) {
    .preloader {
        &__item {
            font-size: 19px;
        }
        &__svg {
            width: 159px;
            height: 18px;
        }
    }
}
@media (max-width: 1024px) {
    .preloader {
        &__item {
            font-size: 16px;
        }
        &__svg {
            width: 138px;
            height: 16px;
        }
    }
}
@media (max-width: 768px) {
    .preloader {
        padding: 0 15px;
        &__svg {
            width: 138px;
            height: 16px;
        }
    }
}
@media (max-width: 414px) {
    .preloader {
        &__item {
            font-size: 14px;
            padding-left: 16px;
            padding-right: 16px;
        }
        &__svg {
            width: 131px;
            height: 16px;
        }
    }
}
</style>
