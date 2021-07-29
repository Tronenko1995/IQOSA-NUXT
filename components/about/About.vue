<template>
    <div>
        <section class="about" data-cursor="play" @click="openModal('about')">
            <IqosaCursor />
            <video class="about__video" autoplay="" muted="" loop="" playsinline="" poster="">
                <source :src="getImg(data.preview_video)" type="video/mp4">
            </video>
            <Motto class="motto--about" :motto-list="data.hero_left_text" :motto-list-extra="data.hero_right_text"/>
        </section>
        <section class="scroll-text">
            <div ref="text1" class="scroll-text__text" v-html="data.first_animated_text"></div>
            <div ref="text2" class="scroll-text__text" v-html="data.second_animated_text"></div>
        </section>
			<Team :data="data" v-if="desktop" />
			<TeamMobi :data="data" v-if="!desktop" />
        <section class="scroll-text">
            <div ref="text3" class="scroll-text__text" v-html="data.third_animated_text"></div>
            <div ref="text4" class="scroll-text__text" v-html="data.fourth_animated_text"></div>
        </section>
        <no-ssr>
            <AboutSlider :list="data.slider_pictures" :data="data.slider_text" />
        </no-ssr>
        <Next :data="data"/>
        <!-- <div>
            <nuxt-link to="/"  class="project__next">
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
        </div> -->
    </div>

</template>

<script>
import { mapMutations } from 'vuex'
import Team from '@/components/main/Team.vue'
import TeamMobi from '@/components/main/TeamMobi.vue'
import AboutSlider from '@/components/about/AboutSlider.vue'
import Next from '@/components/Next.vue'
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
    components: {
		Team,
		TeamMobi,
        AboutSlider,
        Next
    },
    data() {
        return {
            baseUrl: process.env.baseUrl,
            // mottoList: [
            //     'WE ARE A DESIGN STUDIO',
            //     'CONNECTING BRANDS TO HUMANS THROUGH',
            // ],
            // mottoListExtra: [
            //     'DESIGN AND TECHNOLOGY',
            // ],
			desktop: null,
            text1: null,
            text2: null,
            text3: null,
            text4: null,
        }
    },
    beforeMount() {
		window.addEventListener('resize', this.onWindowResize);
        // window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
		window.removeEventListener('resize', this.onWindowResize);
        // window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        this.text1 = this.$refs.text1
        this.text2 = this.$refs.text2
        this.text3 = this.$refs.text3
        this.text4 = this.$refs.text4
        this.initParallaxText()
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
    setTimeout(() => this.animate(), 2500);
    },
    computed: {
        preloader() { return this.$store.getters['preloader/preloader'] },
        duration() { return this.$store.getters['plug/duration'] }
    },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
            setModal: 'modal/setModal',
        }),
        initParallaxText() {

            const e = {
                lerp: (e, t, n) => (1 - n) * e + n * t
            };
            let dataScroll = {
                current: 0,
                last: 0,
                ease: .05
            }
            window.addEventListener('scroll', e => {
                dataScroll.current = scrollY
            })
            const newHeight = 2 * innerHeight,
                  a = .5,
                  scatter = 200
            let parallaxText = [{
                el: this.text1,
                min: this.text1.getBoundingClientRect().top - window.innerHeight - scatter,
                max: this.text1.getBoundingClientRect().top + 2 * window.innerHeight + scatter,
                reverse: false
            },{
                el: this.text2,
                min: this.text2.getBoundingClientRect().top - window.innerHeight - scatter,
                max: this.text2.getBoundingClientRect().top + 2 * window.innerHeight + scatter,
                reverse: true
            },{
                el: this.text3,
                min: this.text3.getBoundingClientRect().top - window.innerHeight - scatter,
                max: this.text3.getBoundingClientRect().top + 2 * window.innerHeight + scatter,
                reverse: false
            },{
                el: this.text4,
                min: this.text4.getBoundingClientRect().top - window.innerHeight - scatter,
                max: this.text4.getBoundingClientRect().top + 2 * window.innerHeight + scatter,
                reverse: true
            }]
            !function animate() {
                for (const item of parallaxText)
                    if (dataScroll.current > item.min && dataScroll.current < item.max) {
                        dataScroll.last = e.lerp(dataScroll.last, dataScroll.current, dataScroll.ease);
                        let num = item.reverse ? -dataScroll.last * a : dataScroll.last * a - newHeight;
                        item.el.style.transform = `translateX(${num}px)`
                    }
                requestAnimationFrame(animate)
            }()
        },
        openModal(type) {
            this.setModal({
                show: true,
                animate: 'show',
                type
            })
        },
        animate() {
            const mottoItem = document.querySelectorAll('.motto__item span')
            let delay = 1

            for (let i = 0; i < mottoItem.length; i++) {
                this.$gsap.to(mottoItem[i], {
                    delay: delay,
                    translateY: 0,
                    duration: 0.5
                })

                delay = delay + 0.25
            }
        },
		testSize() {
			// console.log('change')
            window.innerWidth > 1280 ? this.desktop = true : this.desktop = false
        },
        onWindowResize() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.testSize()
            }, 250);
        },
        getImg(img) {
            return `${this.baseUrl}${img}`
        }
    }
}
</script>

<style lang="scss">
.about {
    height: 100vh;
    position: relative;
    overflow: hidden;
    cursor: none;
    &__video {
        width: auto;
        position: relative;
        left: 50%;
        transform: translateX(-50%) scale(1.1);
        height: 100vh;
    }
    &__list {
        &__item {
            span {
                transform: translateY(100%);
                display: block;
            }
        }
    }
}
.scroll-text {
    width: 100%;
    overflow: hidden;
    position: relative;
    margin: 200px 0;
    &__text {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        // font-size: 164px;
        font-size: 100px;
        line-height: 115%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        margin-bottom: 32px;
        white-space: nowrap;
        &:last-child {
            margin-bottom: 0px;
        }
    }
}
@media (max-width: 1440px) {
    .scroll-text {
        margin: 200px 0 170px 0;
        &__text {
            font-size: 148px;
        }
    }
}
@media (max-width: 1280px) {
    .scroll-text {
        margin: 200px 0 179px 0;
        &__text {
            font-size: 116px;
        }
    }
}
@media (max-width: 1024px) {
    .scroll-text {
        margin: 180px 0 160px 0;
        &__text {
            font-size: 108px;
        }
    }
}
@media (max-width: 768px) {
    .scroll-text {
        margin: 156px 0 140px 0;
        &__text {
            font-size: 88px;
        }
    }
}
@media (max-width: 414px) {
    .scroll-text {
        margin: 124px 0 114px 0;
        &__text {
            font-size: 56px;
        }
    }
}
</style>