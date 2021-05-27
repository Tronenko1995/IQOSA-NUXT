<template>
    <div>
        <Header :menuStatus="menuStatus"/>
        <transition
        v-if="menuStatus"
        name="fade" 
        appear
        v-on:before-enter="beforeEnter"
        >
            <Menu />
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/system/Header.vue' 
import Menu from '@/components/system/Menu.vue' 
export default {
    components: {
        Header,
        Menu
    },
    computed: {
        ...mapState({
            menuStatus: (state) => state.menu.status
        })
    },
    methods: {
        beforeEnter(el, done) {
            const menuLink = el.querySelectorAll('.menu__link'),
                  socialLink = el.querySelectorAll('.social__link'),
                  languageLink = el.querySelectorAll('.language__link'),
                  menuLine = el.querySelectorAll('.menu__line'),
                  languageLine = el.querySelectorAll('.language__line')

            const showLink = ((el) => {
                el.forEach(item => {
                    this.$gsap.timeline().to(item, { 
                            translateY: 0 + "%",
                            duration: 0.5,
                            delay: 1,
                    }, 0)
                });
            })
            const showMenuLine = ((el) => {
                el.forEach(item => {
                    this.$gsap.timeline().to(item, { 
                        translateX: 0 + "%",
                        opacity: 1,
                        duration: 0.5,
                        delay: 1.2,
                    }, 0)
                });
            })
            const showLanguageLine = ((el) => {
                el.forEach(item => {
                    this.$gsap.timeline().to(item, {
                        translateX: 0 + "%",
                        duration: 0.6,
                        delay: 1.1,
                        complete: done
                    }, 0)
                });
            })

            showLink(menuLink)
            showLink(socialLink)
            showLink(languageLink)
            showMenuLine(menuLine)
            showLanguageLine(languageLine)
        },
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter {
        opacity: 0;
        transform: translateY(-100vh);
        &-active {
            transition: all 1s;
        }
        &-to {
        }
    }

    .fade-leave {
        &-active {
            transition: all 1s;
        }
        &-to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
</style>