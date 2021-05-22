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
        &--cursive {
            font-family: ThinItalic, Arial;
            position: absolute;
        }
    }
}
</style>