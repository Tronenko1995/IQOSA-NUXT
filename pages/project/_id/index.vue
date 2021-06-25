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
                        <span>DMITRY BABANIN, NIKITA<br> RYAZHKO, ALEKSANDRA<br> MAKLYAKOVA, LERA<br> DAVYDOVA, VLAD MATSIURA,<br> MARINA MOLODETS</span>
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
        </section>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'projects',
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
    duration() { return this.$store.getters['plug/duration'] }
  },
  methods: {
    ...mapMutations({
        setPlug: 'plug/setVisible',
    }),
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
        width: 1776px;
        display: flex;
        flex-direction: column;
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
    }
    &__image {
        margin: 72px auto 0 auto;
        width: 1776px;
        height: 950px;
        img {
            width: 100%;
            height: 100%;
        }
        &--standart {
            margin: 0 auto 40px auto;
        }
        &--uno {
            margin: 188px auto 0 auto; 
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
            margin: 250px auto 0 auto; 
            width: 665px;
            height: 785px;
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
            span {
                &:last-child {
                    margin-left: 70px;
                }
                
            }
        }
        &-middle {
            display: flex;
            margin-left: auto;
            span {
            display: inline-block;
                &:last-child {
                    margin-left: 70px;
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
}
</style>