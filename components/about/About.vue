<template>
    <div>
        <section class="about" data-cursor="play" @click="openModal('about')">
            <IqosaCursor />
            <video class="about__video" autoplay="" muted="" loop="" playsinline="" poster="">
                <source src="https://iqosa.com/wp-content/uploads/2021/06/prw_1.mp4" type="video/mp4">
            </video>
            <Motto class="motto--about" :motto-list="mottoList" :motto-list-extra="mottoListExtra"/>
        </section>
        <section class="scroll-text">
            <p class="scroll-text__text">CREATED IN FREEDOM FOR LIFE CREATED IN FREEDOM FOR LIFE CREATED IN FREEDOM FOR LIFE CREATED IN FREEDOM FOR LIFE</p>
            <p class="scroll-text__text">I FEEL IQOSA PRIVATE CREATIVE ADAPTIVE SAFE I FEEL IQOSA PRIVATE CREATIVE ADAPTIVE SAFE I FEEL IQOSA PRIVATE CREATIVE ADAPTIVE SAFE I FEEL IQOSA PRIVATE CREATIVE ADAPTIVE SAFE</p>
        </section>
			<Team v-if="desktop" />
			<TeamMobi v-if="!desktop" />
        <section class="scroll-text">
            <p class="scroll-text__text">CREATES A PERFECT CREATES A PERFECT CREATES A PERFECT CREATES A PERFECT CREATES A PERFECT CREATES A PERFECT CREATES A PERFECT</p>
            <p class="scroll-text__text">INTERIOR AND ARCHITECTURE DESIGN INTERIOR AND ARCHITECTURE DESIGN INTERIOR AND ARCHITECTURE DESIGN INTERIOR AND ARCHITECTURE DESIGN</p>
        </section>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Team from '@/components/main/Team.vue'
import TeamMobi from '@/components/main/TeamMobi.vue'
export default {
    components: {
		Team,
		TeamMobi,
    },
    data() {
        return {
            mottoList: [
                'WE ARE A DESIGN STUDIO',
                'CONNECTING BRANDS TO HUMANS THROUGH',
            ],
            mottoListExtra: [
                'DESIGN AND TECHNOLOGY',
            ],
			desktop: null,
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
			console.log('change')
            window.innerWidth > 1024 ? this.desktop = true : this.desktop = false
        },
        onWindowResize() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.testSize()
            }, 250);
        },
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
    margin: 240px 0 209px 0;
    &__text {
        font-family: 'ThinItalic', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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