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
                    <div class="project__image project__image--uno">
                        <img :src="require('~/assets/img/project/4.jpg')" alt="">
                    </div>
                    <div class="project__image project__image--dos">
                        <img :src="require('~/assets/img/project/5.jpg')" alt="">
                    </div>
                </div>
                <div class="project__title project__title--text">
                    Apartment<br><span>in Kiev</span>
                </div>
                <div class="project__images">
                    <div class="project__image project__image--tres">
                        <img :src="require('~/assets/img/project/6.jpg')" alt="">
                    </div>
                    <div class="project__image project__image--quatro">
                        <img :src="require('~/assets/img/project/7.jpg')" alt="">
                    </div>
                </div>
                <div class="project__image project__image--standart">
                    <img :src="require('~/assets/img/project/2.jpg')" alt="">
                </div>
                <div class="project__image project__image--standart">
                    <img :src="require('~/assets/img/project/3.jpg')" alt="">
                </div>
            </div>
            <hr class="project__line">
            <div class="project__wrap">
                <div class="project__info">
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
						    <nuxt-link to="/say-hi" class="animate-line__link">LET'S TALK  ABOUT YOUR PROJECT</nuxt-link>
						    <span class="animate-line__line"></span>
					    </div>
                    </div>
                </div>
                <nuxt-link to="/project/iq-98-kd"  class="project__next">
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
import Modals from '@/components/system/modals/Modals.vue'
import { mapMutations } from 'vuex'
export default {
  layout: 'projects',
  components: { Modals },
  mounted() {
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
            type: 'team'
        })
    },
  }
}
</script>

<style lang="scss">
.project {
    margin-top: 230px;
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
        height: 950px;
        img {
            width: 100%;
            height: 100%;
        }
        &--standart {
            margin: 0 auto 40px auto;
        }
        &--uno {
            margin: 148px auto 0 auto; 
            width: 645px;
            height: 762px;
        }
        &--dos {
            margin: 534px auto 0 auto;
            width: 781px;
            height: 1057px;
        }
        &--tres {
            margin: -113px auto 0 auto;
            width: 288px;
            height: 340px;
        }
        &--quatro {
            margin: 250px auto 300px auto; 
            width: 665px;
            height: 785px;
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
        margin-top: 48px;
        background: #FFFFFF;
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
                margin-right: 30%;
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
</style>