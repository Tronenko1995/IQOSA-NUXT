<template>
    <header class="header" :class="[{'header--main': headerType === 'main'},{'header--transparent': headerType === 'transparent' || view === 'list'}]" v-scroll="handleScroll">
        <div class="header__wrap">
            <a v-if="headerType === 'main'" href="/" class="header__logo">
              <img :src="getImg(data.logo)" alt="" class="header__img">
            </a>
            <a v-else @click.prevent="goTo('/')" href="/" class="header__logo">
              <img :src="getImg(data.logo)" alt="" class="header__img">
            </a>
            <div class="menu-button" @click="openMenu()">
                <div class="menu-button__list">
                    <div class="menu-button__item" :class="{'menu-button__item--x' : menuStatus}"></div>
                    <div class="menu-button__item" :class="{'menu-button__item--x' : menuStatus}"></div>
                </div>
            </div>
            <nav class="nav header-nav">
                <ul class="nav__list">
                    <li class="nav__item" v-for="(item, i) in data.navigation" :key="i"  @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a @click.prevent="goTo(item.link)" :href="item.link" class="nav__link">{{ item.name }}</a>
                        <a @click.prevent="goTo(item.link)" :href="item.link" class="nav__link nav__link--cursive">{{ item.name }}</a>
                    </li>
                    <!-- <li class="nav__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a @click.prevent="goTo('about-us')" href="/about-us" class="nav__link">About</a>
                        <a @click.prevent="goTo('about-us')" href="/about-us" class="nav__link nav__link--cursive">About</a>
                    </li>
                    <li class="nav__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a @click.prevent="goTo('career')" href="/career" class="nav__link">Career</a>
                        <a @click.prevent="goTo('career')" href="/career" class="nav__link nav__link--cursive">Career</a>
                    </li>
                    <li class="nav__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a @click.prevent="goTo('news')" href="/media" class="nav__link">Media</a>
                        <a @click.prevent="goTo('news')" href="/media" class="nav__link nav__link--cursive">Media</a>
                    </li>
                    <li class="nav__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a @click.prevent="goTo('contact')" href="/contact" class="nav__link">Contacts</a>
                        <a @click.prevent="goTo('contact')" href="/contact" class="nav__link nav__link--cursive">Contacts</a>
                    </li> -->
                </ul>
            </nav>
            <div class="lang">
                <ul class="lang__list">
                    <li class="lang__item" :class="{'lang__item--selected': $i18n.locale === 'ua' }" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a :href="switchLocalePath('ua')" class="lang__link">UA</a>
                        <a :href="switchLocalePath('ua')" class="lang__link lang__link--cursive">UA</a>
                    </li>
                    <li class="lang__item" :class="{'lang__item--selected': $i18n.locale === 'ru' }" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a :href="switchLocalePath('ru')" class="lang__link">RU</a>
                        <a :href="switchLocalePath('ru')" class="lang__link lang__link--cursive">RU</a>
                    </li>
                    <li class="lang__item " :class="{'lang__item--selected': $i18n.locale === 'en' }" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                        <a :href="switchLocalePath('en')" @click.prevent="changeLocale('en')" class="lang__link">EN</a>
                        <a :href="switchLocalePath('en')" @click.prevent="changeLocale('en')" class="lang__link lang__link--cursive">EN</a>
                    </li>
                </ul>
            </div>
            <div class="request" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                <a @click.prevent="goTo('/forms/sayhi')" :href="localePath('/forms/sayhi')" class="request__link">{{ data.btn_text }}</a>
                <a @click.prevent="goTo('/forms/sayhi')" :href="localePath('/forms/sayhi')" class="request__link request__link--cursive">{{ data.btn_text }}</a>
            </div>
        </div>
    </header>
</template>

<script>
import gsap from "gsap"
import { mapMutations } from 'vuex'
export default {
    props: {
        menuStatus: {
            type: Boolean,
            required: true
        },
        data: {
            type: Object,
            required: true
        },
        headerType: String,
        view: String,
    },
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    mounted() {
        gsap.to('.nav__item', {
            translateY: 0,
            delay: 1,
            duration: 0.25,
        })
        gsap.to('.lang__item', {
            translateY: 0,
            delay: 1,
            duration: 0.25,
        })
        gsap.to('.header__logo', {
            opacity: 1,
            delay: 1,
            duration: 0.25,
        })
        gsap.to('.request', {
            opacity: 1,
            delay: 1,
            duration: 0.25,
        })
        gsap.to('.menu-button', {
            opacity: 1,
            delay: 1,
            duration: 0.25,
        })
    },
    methods: {
        ...mapMutations({
          setMenuStatus: 'menu/setStatus',
          setPlug: 'plug/setVisible',
          setAnimate: 'plug/setAnimate',
        }),
        goTo(page) {
          if (this.$route.path !== page) {
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(page))
                this.menuStatus ? this.setMenuStatus(false) : ''
            }, 1000);
          }
        },
        showCursive(e) {
            // console.dir(e)
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
            // console.dir(e)
            if (e.target.tagName === 'LI' || e.target.classList.contains('request')) {
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
        openMenu() {
            this.menuStatus ? this.setMenuStatus(false) : this.setMenuStatus(true)
        },
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
        changeLocale(lang) {
            this.$router.push(this.switchLocalePath(lang))

            let setEnglishLang = () => {
                window.location.href = this.switchLocalePath('en')
            }

            setTimeout(setEnglishLang, 100)
        },
        handleScroll(evt, el) {
            if (this.headerType === 'main' || this.headerType === 'contacts') {
                if (window.scrollY >= 50) {
                    el.style ='background: rgb(27, 27, 27);'
                } else if (window.scrollY < 50) {
                    el.style = 'background: none;'
                }
            }
        },
    },
}
</script>

<style lang="scss">
.header {
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 4;
    position: fixed;
    top: 0;
    transition: all .5s;
    background: #1b1b1b;
    &__wrap {
        width: 100%;
        padding: 30px 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__img {
        width: 85px;
        height: 27px;
        object-fit: cover;
    }
    &__logo {
        display: flex;
        opacity: 0;
    }
    &--main {
        background: none;
        .nav {
            display: block;
        }
        .menu-button {
            display: none;
        }
        .request {
            display: none;
        }
        .lang {
            display: block;
        }
    }
    &--transparent {
        background: transparent;
    }
}
.nav {
    display: none;
    width: 470px;
    &__list {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
    }
    &__item {
        display: block;
        transform: translate(0px, 100%);
    }
    &__link {
        display: block;
        font-family: Roman,Arial;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 120%;
        padding-right: 2px;
        padding-left: 2px;
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
        }
    }
}
.lang {
    display: none;
    // width: 120px;
    &__list {
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        &:hover {
            .lang__item {
                opacity: 1;
            }
        }
    }
    &__item {
        display: block;
        transform: translate(0px, 100%);
        opacity: 0;
        transition: opacity .5s ease;
        margin-left: 16px;
        &--selected {
            opacity: 1;
            pointer-events: none;
            order: 1;
        }
    }
    &__link {
        display: block;
        font-family: Roman,Arial;
        font-weight: 400;
        color: #fff;
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
        }
    }
}
.menu-button {
    height: 40px;
    width: 40px;
    position: absolute;
    left: 50%;
    transform: translate(-50%) rotate(0deg);
    transition: transform .5s;
    cursor: pointer;
    opacity: 0;
    &__list {
        display: flex;
        flex-direction: column;
        width: 40px;
        // height: 7px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        // height: 0;
    }
    &__item {
        height: 1px;
        width: 100%;
        background: #fff;
        &:first-child {
            margin-bottom: 5px;
            transition: .5s;
        }
        &--x {
            position: absolute;
            &:first-child {
                margin-bottom: 0;
                transform: rotate(45deg);
                transition: .5s;
            }
            &:last-child {
                transform: rotate(-45deg);
                transition: .5s;
            }
        }
    }
}
.header {
    &.open {
        .menu-button {
            &__list {
                height: 0;
            }
            &:hover {
                transform: translate(-50%) rotate(180deg);
                transition: .5s;
            }
        }
    }
}
.request {
    display: flex;
    white-space: nowrap;
    opacity: 0;
    position: relative;
    display: block;
    transform: translateY(0);
    overflow: hidden;
    &__link {
        font-size: 16px;
        font-family: Roman,Arial;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
        line-height: 120%;
        display: block;
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
            font-weight: 300;
            top: 100%
        }
    }
}

@media (min-width: 1930px) {
    .header {
        &__wrap {
            max-width: 1920px;
        }
    }
}
@media (max-width: 1024px) {
    .header {
        &-nav {
            display: none;
        }
        &--main {
            .nav {
                display: none;
            }
            .menu-button {
                display: block;
            }
            .request {
                display: block;
            }
            .lang {
                display: none;
            }
        }
    }
    .menu-button {
        display: block;
    }
    .request {
        display: flex;
        flex-direction: column;
        &__link {
            font-size: 13px;
        }
    }
    .lang {
        display: none;
    }
}
@media (max-width: 820px) {
    .header {
        &__wrap {
            padding: 21px 16px;
        }
        &__img {
            width: 65px;
            height: 21px;
        }
    }
    .request {
        white-space: normal;
        width: 30%;
        text-align: center;
    }
}
</style>
