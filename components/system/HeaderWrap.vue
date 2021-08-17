<template>
    <div v-if="data">
        <Header  :data="data" :headerType="headerType" :view="view" :menuStatus="menuStatus" :class="[{'hideInScroll': hideInScroll}, {'open': menuStatus}]"/>
        <transition
        v-if="menuStatus"
        name="fade"
        appear
        v-on:before-enter="beforeEnter"
        >
            <Menu :data="data" />
        </transition>
    </div>
</template>

<script>
import gsap from "gsap"
import { mapMutations } from 'vuex'
import Header from '@/components/system/Header.vue'
import Menu from '@/components/system/Menu.vue'
export default {
    props: {
        headerType: String,
        view: String,
    },
    components: {
        Header,
        Menu
    },
    created() {
        this.setMenuStatus(false)
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
	computed: {
		data() { return this.$store.getters['lang/parts/dataHeader'] },
        menuStatus() { return this.$store.getters['menu/status'] },
    },
    data() {
        return {
            lastScroll: 0,
            scrollPosition: 0,
            hideInScroll: false
        }
    },
    methods: {
        ...mapMutations({
            setMenuStatus: 'menu/setStatus',
        }),
        beforeEnter(el, done) {
            const menuLink = el.querySelectorAll('.menu__link'),
                  socialLink = el.querySelectorAll('.social__link'),
                  languageLink = el.querySelectorAll('.language__link'),
                  menuLine = el.querySelectorAll('.menu__line'),
                  languageLine = el.querySelectorAll('.language__line'),
                  icosahedron = el.querySelector('.menu__icosahedron')

            const showLink = ((el) => {
                el.forEach(item => {
                    gsap.timeline().to(item, {
                            translateY: 0 + "%",
                            duration: 0.5,
                            delay: 1,
                    }, 0)
                });
            })
            const showMenuLine = ((el) => {
                el.forEach(item => {
                    gsap.timeline().to(item, {
                        translateX: 0 + "%",
                        opacity: 1,
                        duration: 0.5,
                        delay: 1.2,
                    }, 0)
                });
            })
            const showLanguageLine = ((el) => {
                el.forEach(item => {
                    gsap.timeline().to(item, {
                        translateX: 0 + "%",
                        duration: 0.6,
                        delay: 1.1,
                    }, 0)
                });
            })
            gsap.timeline().to(icosahedron, {
                opacity: 1,
                delay: 2,
                complete: done
            }, 0)

            showLink(menuLink)
            showLink(socialLink)
            showLink(languageLink)
            showMenuLine(menuLine)
            showLanguageLine(languageLine)
        },
        handleScroll() {
            // console.log(window.scrollY)
            this.scrollPosition = window.scrollY

            if (this.lastScroll > this.scrollPosition) {
                this.hideInScroll = false
            } else if (this.lastScroll < this.scrollPosition && this.lastScroll >= 0) {
                this.hideInScroll = true
            }
            this.lastScroll = this.scrollPosition
        }
    }
}
</script>

<style lang="scss" scoped>
    .open {
        background: none;
    }
    .hideInScroll {
        transform: translateY(-100%);
    }
    .fade-enter {
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
        }
    }
</style>
