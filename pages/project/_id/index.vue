<template>
    <main class="project-page">
        <section class="project">
            <div class="project__wrap">
                <div class="project__address">
                    <span>KYIV</span>,  Ukraine
                </div>
                <div class="project__title">
                    <span>IQ</span>-08-SL
                </div>
                <div class="project__image">
                    <img :src="require('~/assets/img/project/1.jpg')" alt="">
                </div>
            </div>
            <hr class="project__line">
            <div class="project__wrap">
                <div class="project__info">
                    <div class="project__info-left">
                        <span>Release date</span>
                        <span>2019</span>
                    </div>
                    <div class="project__info-middle">
                        <span>TEAM</span>
                        <ul class="animate-text animate-text--team">
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <button @click.prevent="openModal()" class="animate-text__button">BABANIN BOGDAN</button>
                                <button @click.prevent="openModal()" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">BABANIN BOGDAN</button>
                            </li>
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <button @click.prevent="openModal()" class="animate-text__button">RYAZHKO NIKITA</button>
                                <button @click.prevent="openModal()" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">RYAZHKO NIKITA</button>
                            </li>
                        </ul>
                    </div>
                    <div class="project__info-right">
                        <span>SQ.M.</span>
                        <span>560M2</span>
                    </div>
                </div>
                <div class="project__image project__image--standart">
                    <img :src="require('~/assets/img/project/2.jpg')" alt="">
                </div>
                <div class="project__image project__image--standart">
                    <img :src="require('~/assets/img/project/3.jpg')" alt="">
                </div>
                <div class="project__images">
                    <div class="project__image project__image--uno project__image--parallax">
                        <img :src="require('~/assets/img/project/4.jpg')" alt="">
                    </div>
                    <div class="project__image project__image--dos project__image--parallax">
                        <img :src="require('~/assets/img/project/5.jpg')" alt="">
                    </div>
                </div>
                <div class="project__title project__title--text">
                    Apartment<br><span>in Kiev</span>
                </div>
                <div class="project__images">
                    <div class="project__image project__image--tres project__image--parallax">
                        <img :src="require('~/assets/img/project/6.jpg')" alt="">
                    </div>
                    <div class="project__image project__image--quatro project__image--parallax">
                        <img :src="require('~/assets/img/project/7.jpg')" alt="">
                    </div>
                </div>
                <div class="project__image project__image--margin">
                    <img :src="require('~/assets/img/project/2.jpg')" alt="">
                </div>
                <div class="project__image project__image--margin">
                    <img :src="require('~/assets/img/project/3.jpg')" alt="">
                </div>
            </div>
            <hr class="project__line project__line--share">
            <div class="project__wrap">
                <div class="project__info project__info--share">
                    <div class="project__info-left project__info-left--share">
                        <span>Share</span>
                        <ul class="animate-text animate-text--share">
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">Facebook</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">Facebook</a>
                            </li>
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">Twitter</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">Twitter</a>
                            </li>
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">LinkedIn</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div class="project__info-middle project__info-middle--share">
                        <span>LIKE THIS CASE?</span>
                        <div class="animate-line animate-line--share">
						    <nuxt-link :to="localePath('/say-hi')" class="animate-line__link">LET'S TALK  ABOUT YOUR PROJECT</nuxt-link>
						    <span class="animate-line__line"></span>
					    </div>
                    </div>
                </div>
                <nuxt-link :to="localePath('/project/iq-98-kd')"  class="project__next">
                    <div class="project__title project__title--next">
                        <ul class="animate-text animate-text--next">
                            <li class="animate-text__item">
                                <a href="#" class="animate-text__button animate-text__button--cursive  animate-text__button--next">NEXT</a>
                                <a href="#" class="animate-text__button animate-text__button--next animate-text__button--absolute">IQ-98-KD</a>
                            </li>
                        </ul>
                    </div>
                    <div class="project__image project__image--next">
                        <img :src="require('~/assets/img/project/8.jpg')" alt="">
                    </div>
                </nuxt-link>
            </div>
        </section>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { mapMutations } from 'vuex'
export default {
  layout: 'project',
    data() {
        return {
            imgParallax: null
        }
    },
    created() {
        // this.$gsap.registerPlugin(this.$ScrollTrigger)
        // gsap.registerPlugin(ScrollTrigger);
    },
    mounted() {
        this.$gsap.registerPlugin(this.$ScrollTrigger);
        this.imgParallax = document.querySelectorAll('.project__image--parallax')
        this.testSize()
        if (this.preloader) {
        setTimeout(() => {
            this.setPlug(false)
        }, this.duration.preloader);
        } else {
        setTimeout(() => {
            this.setPlug(false)
        }, this.duration.page);
        }
    },
  computed: {
    preloader() { return this.$store.getters['preloader/preloader'] },
    duration() { return this.$store.getters['plug/duration'] },
	modal() { return this.$store.getters['modal/modal'] },
  },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
            setModal: 'modal/setModal',
            setTeam: 'team/setTeam',
        }),
        testSize() {
            console.log(this.imgParallax)
            if (window.innerWidth > 480) {
                this.$nextTick( () => {
                    this.imgParallax.forEach((img) => {
                        let hero_scroll = this.$gsap.timeline({
                            scrollTrigger: {
                                trigger: img,
                                start: "top bottom",
                                end: "bottom top",
                                // markers:true,
                                scrub: 1.7,
                            },
                        })
                        .to(img, {
                            translateY: 0,
                            duration: 1
                        })
                    })
                })
            }
        },
        
        showCursive(e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                this.$gsap.to(e.target.parentElement.children[0], {
                    translateY: -100 + "%",
                    duration: .5
                })
                this.$gsap.to(e.target.parentElement.children[1], {
                    translateY: -100 + "%",
                    duration: .5
                })
            }
        },
        hideCursive(e) {
            if (e.target.tagName === 'LI') {
                this.$gsap.to(e.target.children[0], {
                    translateY: 0 + "%",
                    duration: .5
                })
                this.$gsap.to(e.target.children[1], {
                    translateY: 0 + "%",
                    duration: .5
                })
            }
        },
        openModal() {
            this.setTeam({
                name: 'Fil Vladimir',
                position: 'Designer-Visualizer',
                img: 'https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy.jpg',
                quote: 'IQOSA is ambition, striving for individuality in design. We always wanted to create something unique and that no one has pointed us what to do.'
            })
            this.setModal({
                show: true,
                type: 'team',
                animate: 'fade'
            })
        },
    }
}
</script>

<style lang="scss">
.project {
    margin-top: 279px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        padding: 0 72px;
    }
    &__address {
        font-family:'Light', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        span {
            font-family: 'LightItalic', Arial;
        }
    }
    &__title {
        margin-top: 48px;
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
        span {
            font-family: 'Roman', Arial;
        }
        &--text {
            margin-top: 111px;
        }
        &--next {
            position: absolute;
            margin-top: 0px;
            left: 50%;
            transform: translateX(-50%);
            top: -75px;
            z-index: 1;
            width: 100%;
        }
    }
    &__image {
        margin: 72px auto 0 auto;
        width: 100%;
        // height: 950px;
        height: auto;
        img {
            width: 100%;
            height: 100%;
        }
        &--standart {
            margin: 0 auto 40px auto;
        }
        &--margin {
            margin: 0 auto 213px auto;
        }
        &--uno {
            margin: 148px 0 0 0; 
            width: 645px;
            // width: 516px;
            // height: 610px;
            height: 762px;
            transform: translateY(260px);
            margin-bottom: 260px;
        }
        &--dos {
            margin: 494px 0 0 0;
            width: 781px;
            height: 1057px;
            transform: translateY(200px);
            margin-bottom: 200px;
            // width: 625px;
            // height: 846px;
        }
        &--tres {
            margin: -113px 0 0 0;
            width: 288px;
            height: 340px;
            transform: translateY(200px);
            margin-bottom: 200px;
        }
        &--quatro {
            margin: 250px 0 300px 0; 
            width: 665px;
            height: 785px;
            transform: translateY(120px);
            margin-bottom: 120px;
        }
        &--next {
            width: 852px;
            height: 530px;
            overflow: hidden;
            margin: 0 auto;
        }
    }
    &__images {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    &__line {
        width: 100%;
        height: 1px;
        opacity: .3;
        margin-top: 72px;
        background: #FFFFFF;
        &--share {
            margin-top: 3px;
        }
    }
    &__info {
        margin-top: 24px;
        margin-bottom: 188px;
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        display: flex;
        &--share {
            margin-bottom: 0px;
        }
        &-left {
            &--share {
                display: flex;
            }
        }
        &-middle {
            display: flex;
            margin-left: auto;
            span {
                display: inline-block;
            }
            &--share {
                display: flex;
                flex-direction: column;
                margin-right: 529px;
                span {
                    &:last-child {
                        margin-left: 0;
                    }
                }
            }
        }
        &-right {
            margin-left: 367px;
            span {
                &:last-child {
                    margin-left: 70px;
                }
            }
        }
    }
    &__next {
        position: relative;
        margin: 357px auto 0 auto;
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
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        background: none;
        cursor: pointer;
        text-align: left;
        &--cursive {
            font-family: 'LightItalic', Arial;
        }
        &--absolute {
            position: absolute;
            bottom: -100%;
        }
        &--next {
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            text-align: center;
            width: 100%;
            transition: .4s;
        }
    }
}
.animate-line {
    display: flex;
    position: relative;
    &--share {
        margin-top: 4px;
    }
    &:hover {
        .animate-line__line {
            animation: 'under-line' 1s;
        }
    }
	&__link {
		color: #fff;
	}
	&__line {
		position: absolute;
		height: 1px;
		background: #fff;
		display: block;
		transition: .3s ease;
		bottom: 0;
		width: 100%;
	}
}

@media (max-width: 1643px) {
    .project {
            &__image {
            &--uno {
                width: 516px;
                height: 610px;
            }
            &--dos {
                width: 625px;
                height: 846px;
            }
            // &--tres {

            // }
            // &--quatro {

            // }
        }
    }
}
@media (max-width: 1440px) {
    .project {
        margin-top: 241px;
        &__wrap {
            padding: 0 64px;
        }
        &__title {
            font-size: 148px;
            &--next {
                font-size: 140px;
                top: -63px;
            }
        }
        &__info {
            margin-bottom: 156px;
            &--share {
                margin-bottom: 0px;
            }
            &-right {
                margin-left: 191px;
            }
            &-middle {
                &--share {
                    margin-right: 353px;
                }
            }
        }
        &__image {
            &--margin {
                margin: 0 auto 181px auto;
            }
            &--uno {
                margin: 116px 0 260px 0;
                width: 476px;
                height: 562px;
            }
            &--dos {
                margin: 371px 0 200px 0;
                width: 576px;
                height: 780px;
            }
            &--tres {
                margin: -113px 0 200px 0;
                width: 213px;
                height: 251px;
            }
            &--quatro {
                margin: 160px 0 120px 0;
                // margin: 160px 0 275px 0;
                width: 491px;
                height: 579px;
            }
            &--next {
                width: 639px;
                height: 398px;
            }
        }
        &__next {
            margin: 326px auto 0 auto;
        }
    }
}
@media (max-width: 1280px) {
    .project {
        margin-top: 223px;
        &__wrap {
            padding: 0 56px;
        }
        &__title {
            font-size: 116px;
            &--next {
                font-size: 116px;
                top: -63px;
            }
        }
        &__info {
            margin-bottom: 148px;
            &--share {
                margin-bottom: 0px;
            }
            &-right {
                margin-left: 120px;
            }
            &-middle {
                &--share {
                    margin-right: 245px;
                }
            }
        }
        &__image {
            &--margin {
                margin: 0 auto 173px auto;
            }
            &--uno {
                margin: 108px 0 0 0;
                // width: 424px;
                // height: 501px;
                width: 382px;
                height: 451px;
                transform: translateY(0);
            }
            &--dos {
                margin: 335px 0 0 0;
                // width: 513px;
                // height: 695px;
                width: 462px;
                height: 626px;
                transform: translateY(0);
            }
            &--tres {
                margin: -86px 0 0 0;
                width: 189px;
                height: 223px;
                transform: translateY(0);
            }
            &--quatro {
                margin: 159px 0 232px 0;
                width: 437px;
                height: 516px;
                transform: translateY(0);
            }
            &--next {
                width: 568px;
                height: 357px;
            }
        }
        &__next {
            margin: 272px auto 0 auto;
        }
    }
}
@media (max-width: 1024px) {
    .project {
        margin-top: 206px;
        &__wrap {
            padding: 0 56px;
        }
        &__address {
            font-size: 14px;
        }
        &__title {
            // font-size: 108px;
            font-size: 90px;
            &--next {
                font-size: 90px;
                top: -42px;
            }
        }
        &__info {
            font-size: 12px;
            margin-bottom: 132px;
            &--share {
                margin-bottom: 0px;
            }
            &-right {
                margin-left: 100px;
            }
            &-middle {
                &--share {
                    margin-right: 204px;
                }
            }
        }
        &__image {
            margin: 64px auto 0 auto;
            &--standart {
                margin: 0 auto 32px auto;
            }
            &--margin {
                margin: 0 auto 156px auto;
            }
            &--uno {
                margin: 100px 0 0 0;
                width: 331px;
                height: 391px;
            }
            &--dos {
                margin: 278px 0 0 0;
                width: 401px;
                height: 542px;
            }
            &--tres {
                margin: -70px 0 0 0;
                width: 148px;
                height: 175px;
            }
            &--quatro {
                margin: 107px 0 192px 0;
                width: 342px;
                height: 403px;
            }
            &--next {
                width: 444px;
                height: 280px;
            }
        }
        &__next {
            margin: 229px auto 0 auto;
        }
        &__line {
            margin-top: 64px;
            &--share {
                margin-top: 0px;
            }
        }
    }
}

@media (max-width: 890px) {
    .project {
        &__image {
            &--uno {
                width: 267px;
                height: 316px;
            }
            &--dos {
                width: 324px;
                height: 438px;
            }
        }
        &__info {
            &-middle {
                &--share {
                    margin-right: 100px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .project {
        margin-top: 190px;
        &__wrap {
            padding: 0 48px;
        }
        &__title {
            margin-top: 40px;
            font-size: 88px;
            // font-size: 50px;
            &--next {
                // font-size: 88px;
                font-size: 50px;
                top: -7px;
            }
        }
        &__info {
            margin-bottom: 132px;
            &--share {
                margin-bottom: 0px;
            }
            &-right {
                margin-left: 24px;
            }
            &-middle {
                &--share {
                    margin-right: 204px;
                }
            }
        }
        &__image {
            margin: 56px auto 0 auto;
            &--standart {
                margin: 0 auto 32px auto;
            }
            &--margin {
                margin: 0 auto 154px auto;
            }
            &--uno {
                margin: 100px 0 0 0;
                width: 244px;
                height: 288px;
            }
            &--dos {
                margin: 232px 0 0 0;
                width: 295px;
                height: 399px;
            }
            &--tres {
                margin: -70px 0 0 0;
                width: 109px;
                height: 129px;
            }
            &--quatro {
                margin: 107px 0 124px 0;
                width: 252px;
                height: 297px;
            }
            &--next {
                width: 324px;
                height: 206px;
            }
        }
        &__next {
            margin: 222px auto 0 auto;
        }
        &__line {
            margin-top: 56px;
            &--share {
                margin-top: 0px;
            }
        }
    }
}

@media (max-width: 670px) {
    .project {
        &__images {
            flex-direction: column;
        }
        &__image {
            &--uno {
                width: 255px;
                height: 302px;
            }
            &--dos {
                margin: 16px 0 0 0;
                width: 100%;
                height: auto;
            }
            &--tres {
                margin: 88px 0 0 0;
                width: 100%;
                height: auto;
            }
            &--quatro {
                margin: 16px 0 88px auto;
                width: 255px;
                height: 301px;
            }
        }
        &__title {
            &--text {
                margin-top: 88px;
            }
        }
    }
}

@media (max-width: 620px) {
    .project {
        &__title {
            font-size: 50px;
        }
        &__wrap {
            padding: 0 16px;
        }
        &__info {
            font-size: 13px;
            margin-bottom: 88px;
            display: flex;
            flex-direction: column;
            align-items: center;
            &--share {
                margin-bottom: 0px;
            }
            &-left {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &-right {
                margin-left: 0px;
                margin-top: 56px;
                display: flex;
                flex-direction: column;
                align-items: center;
                span {
                    &:last-child {
                        margin-left: 0px;
                        margin-top: 8px;
                    }
                }
            }
            &-middle {
                margin-top: 56px;
                align-items: center;
                flex-direction: column;
                margin-left: 0;
                &--share {
                    margin-right: 0px;
                }
            }
        }
    }
    .animate-text {
        &--team {
            margin-left: 0px;
            margin-top: 8px;
        }
        &--share {
            margin-left: 0px;
            margin-top: 8px;
        }
        &__button {
            text-align: center;
        }
    }
}
@media (max-width: 414px) {
    .project {
        margin-top: 145px;
        &__address {
            font-size: 13px;
        }
        &__title {
            margin-top: 35px;
            font-size: 56px;
            &--text {
                margin-top: 88px;
            }
            &--next {
                margin-top: 0px;
                top: -22px;
                font-size: 49px;
            }
        }
        &__image {
            margin: 48px auto 0 auto;
            &--standart {
                margin: 0 auto 16px auto;
            }
            &--uno {
                margin: 72px 0 0 0;
            }
            &--dos {
                margin: 16px 0 0 0;
            }
            &--tres {
                margin: 88px 0 0 0;
            }
            &--quatro {
                margin: 16px 0 88px auto;
            }
            &--margin {
                margin: 0 auto 108px auto;
            }
            &--next {
                width: 225px;
                height: 144px;
                margin: 0 auto;
            }
        }
        &__line {
            margin-top: 48px;
        }
        &__next {
            margin: 143px auto 0 auto;
        }
    }
}
</style>