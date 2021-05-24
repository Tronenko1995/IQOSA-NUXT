<template>
    <div class="menu">
        <nav class="menu__nav">
            <ul class="menu__list">
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <nuxt-link to="/projects" class="menu__link">Projects</nuxt-link>
                    <nuxt-link to="/projects" class="menu__link menu__link--cursive">Projects</nuxt-link>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <nuxt-link to="/about-plug-2" class="menu__link">About</nuxt-link>
                    <nuxt-link to="/about-plug-2" class="menu__link menu__link--cursive">About</nuxt-link>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <nuxt-link to="/career" class="menu__link">Career</nuxt-link>
                    <nuxt-link to="/career" class="menu__link menu__link--cursive">Career</nuxt-link>
                </li>
            </ul>
            <ul class="menu__list">
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <nuxt-link to="/news" class="menu__link">Media</nuxt-link>
                    <nuxt-link to="/news" class="menu__link menu__link--cursive">Media</nuxt-link>
                </li>
                <span class="menu__line"></span>
                <li class="menu__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <nuxt-link to="/contacts" class="menu__link">Contacts</nuxt-link>
                    <nuxt-link to="/contacts" class="menu__link menu__link--cursive">Contacts</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="social">
            <ul class="social__list">
                <li class="social__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a href="https://www.facebook.com/IQOSA/" class="social__link">Facebook,</a>
                    <a href="https://www.facebook.com/IQOSA/" class="social__link social__link--cursive">Facebook,</a>
                </li>
                <li class="social__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a href="https://www.pinterest.com/iqosa/_created/" class="social__link">Pinterest,</a>
                    <a href="https://www.pinterest.com/iqosa/_created/" class="social__link social__link--cursive">Pinterest,</a>
                </li>
                <li class="social__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                    <a href="https://www.instagram.com/iqosa/" class="social__link">Instagram</a>
                    <a href="https://www.instagram.com/iqosa/" class="social__link social__link--cursive">Instagram</a>
                </li>
            </ul>
        </div>
        <div class="language">
            <ul class="language__list">
                <li class="language__item language__item--selected">
                   <nuxt-link to="/" class="language__link">English,</nuxt-link>
                   <span class="language__line"></span>
                </li>
                <li class="language__item">
                   <nuxt-link to="/" class="language__link">Русский,</nuxt-link>
                   <span class="language__line"></span>
                </li>
                <li class="language__item">
                   <nuxt-link to="/" class="language__link">Українська</nuxt-link>
                   <span class="language__line"></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        showCursive(e) {
            if (e.target.tagName === 'A') {
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
    }    
}
</script>

<style lang="scss">
.menu {
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
        font-size: 42px;
        transform: translate(0px, 100%);
        &--cursive {
            font-family: ThinItalic, Arial;
            position: absolute;
        }
    }
}
.social {
    position: absolute;
    left: 64px;
    bottom: 40px;
    &__list {
        display: flex;
    }
    &__item {
        display: flex;
        transform: translateY(0);
        margin-left: 10px;
        padding-left: 2px;
        padding-right: 2px;
        overflow: hidden;
    }
    &__link {
        font-family: Light,Arial;
        font-weight: 300;
        color: #fff;
        font-size: 16px;
        line-height: 140%;
        transform: translate(0px, 100%);
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
            bottom: -100%;
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
</style>