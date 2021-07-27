<template>
    <div class="menu">
        <div>
            <IcosahedronCrystal :has_image="false" :color="0x333333" />
        </div>
        <nav class="menu__nav">
            <ul class="menu__list">
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a @click.prevent="goTo(data.navigation[0].link)" :href="data.navigation[0].link" class="menu__link">{{ data.navigation[0].name }}</a>
                    <a @click.prevent="goTo(data.navigation[0].link)" :href="data.navigation[0].link" class="menu__link menu__link--cursive">{{ data.navigation[0].name }}</a>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a @click.prevent="goTo(data.navigation[1].link)"  :href="data.navigation[1].link" class="menu__link">{{ data.navigation[1].name }}</a>
                    <a @click.prevent="goTo(data.navigation[1].link)"  :href="data.navigation[1].link" class="menu__link menu__link--cursive">{{ data.navigation[1].name }}</a>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a @click.prevent="goTo(data.navigation[2].link)" :href="data.navigation[2].link" class="menu__link">{{ data.navigation[2].name }}</a>
                    <a @click.prevent="goTo(data.navigation[2].link)" :href="data.navigation[2].link" class="menu__link menu__link--cursive">{{ data.navigation[2].name }}</a>
                </li>
            </ul>
            <ul class="menu__list">
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a @click.prevent="goTo(data.navigation[3].link)" :href="data.navigation[3].link" class="menu__link">{{ data.navigation[3].name }}</a>
                    <a @click.prevent="goTo(data.navigation[3].link)" :href="data.navigation[3].link" class="menu__link menu__link--cursive">{{ data.navigation[3].name }}</a>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a @click.prevent="goTo(data.navigation[4].link)" :href="data.navigation[4].link" class="menu__link">{{ data.navigation[4].name }}</a>
                    <a @click.prevent="goTo(data.navigation[4].link)" :href="data.navigation[4].link" class="menu__link menu__link--cursive">{{ data.navigation[4].name }}</a>
                </li>
            </ul>
        </nav>
        <Social :social="data.social_links" @showCursive="showCursive($event)" @hideCursive="hideCursive($event)"/>
        <div class="language">
            <ul class="language__list">
                <li class="language__item" :class="{'language__item--selected': $i18n.locale === 'en' }">
                    <a :href="switchLocalePath('en')" @click.prevent="changeLocale('en')" class="language__link">English,</a>
                   <!-- <nuxt-link :to="switchLocalePath('en')" class="language__link">English,</nuxt-link> -->
                   <span class="language__line"></span>
                </li>
                <li class="language__item" :class="{'language__item--selected': $i18n.locale === 'ru' }">
                    <a :href="switchLocalePath('ru')" class="language__link">Русский,</a>
                   <!-- <nuxt-link :to="switchLocalePath('ru')" class="language__link">Русский,</nuxt-link> -->
                   <span class="language__line"></span>
                </li>
                <li class="language__item" :class="{'language__item--selected': $i18n.locale === 'ua' }">
                   <a :href="switchLocalePath('ua')" class="language__link">Українська</a>
                   <!-- <nuxt-link :to="switchLocalePath('ua')" class="language__link">Українська</nuxt-link> -->
                   <span class="language__line"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import gsap from "gsap"
import IcosahedronCrystal from '@/components/IcosahedronCrystal.vue'
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    components: {
        IcosahedronCrystal
    },
    beforeMount() {
        document.body.style = 'overflow: hidden'
    },
	computed: {
		// data() { return this.$store.getters['lang/parts/dataHeader'] }
	},
    methods : {
        ...mapMutations({
          setMenuStatus: 'menu/setStatus',
          setAnimate: 'plug/setAnimate',
          setPlug: 'plug/setVisible',
        }),
        showCursive(e) {
            if (e.target.tagName === 'A') {
                gsap.to(e.target.parentElement.children[0], {
                    translateY: -100 + "%",
                    duration: .5
                })
                gsap.to(e.target.parentElement.children[1], {
                    translateY: -100 + "%",
                    duration: .5
                })
            }
        },
        hideCursive(e) {
            if (e.target.tagName === 'LI') {
                gsap.to(e.target.children[0], {
                    translateY: 0 + "%",
                    duration: .5
                })
                gsap.to(e.target.children[1], {
                    translateY: 0 + "%",
                    duration: .5
                })
            }
        },
        goTo(page) {
          if (this.$route.path != page && this.$route.path != `/${this.$i18n.locale}${page}`) {
              console.log('this.$route.path', this.$route.path)
              console.log(`/${this.$i18n.locale}${page}`)
            console.log('-')
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
                this.setMenuStatus(false)
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(page))
            }, 1000);
          } else {
              this.setMenuStatus(false)
          }
        },
        changeLocale(lang) {
            this.$router.push(this.switchLocalePath(lang))
            
            let setEnglishLang = () => {
                window.location.href = this.switchLocalePath('en')
            }

            setTimeout(setEnglishLang, 100)
        },
    },
    beforeDestroy() {
        document.body.style = ''
    },
}
</script>

<style lang="scss">
.menu__nav {
  position: relative;
  z-index: 5;
}
.menu {
    z-index: 3;
    background: #1b1b1b;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__nav {}
    &__list {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        &:last-child {
            margin-top: 40px;
        }
    }
    &__item {
        display: block;
        transform: translateY(0);
        padding-left: 7px;
        padding-right: 7px;
    }
    &__line {
        opacity: 0;
        display: block;
        margin-right: 24px;
        margin-left: 24px;
        width: 56px;
        height: 1px;
        background: #c4c4c4;
    }
    &__link {
        display: block;
        text-align: center;
        text-transform: uppercase;
        color: #fff;
        font-family: Light, Arial;
        font-weight: 300;
        font-size: 50px;
        // font-size: 42px;
        transform: translate(0px, 100%);
        &--cursive {
            font-family: ThinItalic, Arial;
            position: absolute;
        }
    }
}

.language {
    position: absolute;
    bottom: 40px;
    right: 64px;
    &__list {
        display: flex;
    }
    &__item {
        display: flex;
        margin-left: 10px;
        overflow: hidden;
        cursor: pointer;
        padding-left: 2px;
        padding-right: 2px;
        position: relative;
        &--selected {
            .language {
                &__link {
                    // pointer-events: none;
                }
                &__line {
                    transform: translate(-105%, 0px);
                    width: 100%;
                }
            }
            &:hover {
                .language__line {
                    animation: 'under-line' 1s;
                    transition: .3s ease;
                }
            }
        }
        &:hover {
            .language__line {
                transition: .3s ease;
                width: 100%;
            }
        }
    }
    &__link {
        font-family: Light, Arial;
        font-weight: 300;
        color: #fff;
        font-size: 16px;
        line-height: 140%;
        margin-bottom: 2px;
        transform: translate(0px, 100%);
    }
    &__line {
        position: absolute;
        height: 1px;
        width: 0;
        background: #fff;
        transform: translateX(0%);
        display: block;
        transition: .3s ease;
        bottom: 0;
    }
}
@media (max-width: 1280px) {
    .menu {
        &__link {
            font-size: 46px;
        }
    }
}
@media (max-width: 1024px) {
    .menu {
        &__link {
            font-size: 42px;
        }
    }
}
@media (max-width: 820px) {
    .request {
        justify-content: center;
    }
}
@media (max-width: 768px) {
    .menu {
        &__link {
            font-size: 36px;
        }
    }
}
@media(max-width: 690px) {
    .menu {
        flex-direction: column;
        padding-top: 63px;
        padding-bottom: 80px;
        &__nav {
            margin-top: auto;
        }
        &__list {
            flex-direction: column;
            &:last-child {
                margin-top: 0;
            }
        }
        &__line {
            display: none;
        }
        &__item {
            margin-bottom: 20px;
            overflow: hidden;
            position: relative;
        }
    }
    .language {
        position: relative;
        bottom: unset;
        right: unset;
        left: unset;
    }
}
@media (max-width: 680px) {
    .menu {
        &__link {
            font-size: 32px;
        }
    }
}
</style>
