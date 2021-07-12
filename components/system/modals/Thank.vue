<template>
    <div class="thank-modal">
        <p class="thank-modal__title">thanks for</p>
        <div class="thank-modal__row">
            <p class="thank-modal__subtitle">your request</p>
                    <div
                        class="make-request thank-modal__request"
                        @mouseover="findElement($event)"
                        @mouseleave="animateTextHide($event)"
                        >
                        <a @click.prevent="goTo('index')" href="/" class="make-request__link">
                            <span class="make-request__text">back to</span>
                            <span class="make-request__change">
                            <span class="make-request__span make-request__span--first"
                                >main</span
                            >
                            <span class="make-request__span">main</span>
                            </span>
                        </a>
                        <span class="make-request__line"></span>
                    </div>

        </div>
        <div class="close-modal" @click="$emit('close', 'show')"></div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    mounted() {
        this.animate()
    },
    methods: {
        ...mapMutations({
          setAnimate: 'plug/setAnimate',
          setPlug: 'plug/setVisible',
        }),
        animate() {
            let tl,
                title = document.querySelector('.thank-modal__title'),
                subtitle = document.querySelector('.thank-modal__subtitle'),
                line = document.querySelector('.make-request__line'),
                link = document.querySelector('.make-request__link')

            this.$ScrollTrigger.create(
                {
                    trigger: title,
                    start: "top bottom",
                },
                tl = this.$gsap.timeline()
            );
            this.$gsap.to(title, {translateX: 0, opacity: 1, duration: 1})

            this.$ScrollTrigger.create(
                {
                    trigger: subtitle,
                    start: "top bottom",
                },
                tl = this.$gsap.timeline()
            );
            this.$gsap.to(subtitle, {translateX: 0, opacity: 1, duration: 1})

            this.$ScrollTrigger.create(
                {
                    trigger: line,
                    start: "top bottom",
                },
                tl = this.$gsap.timeline()
            );
            this.$gsap.to(line, {translateX: 0, opacity: 1, duration: 0.5})

            this.$ScrollTrigger.create(
                {
                    trigger: link,
                    start: "top bottom",
                },
                tl = this.$gsap.timeline()
            );
            this.$gsap.to(link, {translateY: 0, opacity: 1, duration: 0.25})
        },
        findElement(e) {
			if (e.target.classList.contains("make-request__text") || e.target.classList.contains("make-request__link")) {
                const el = e.target.parentElement.querySelector(".make-request__change");
                this.animateTextShow(el);
            } else if (e.target.classList.contains("make-request__span--first")) {
                this.animateTextShow(e.target.parentElement);
            }
		},
        animateTextShow(el) {
            this.$gsap.to(el.children[0], { 
                translateY: -100 + "%",
                duration: .5
            })
            this.$gsap.to(el.children[1], { 
                translateY: -100 + "%",
                duration: .5
            })
        },
		animateTextHide(e) {
			if (e.target.classList.contains("make-request")) {
                this.$gsap.to(e.target.children[0].children[1].children[0], {
                translateY: 0 + "%",
                duration: 0.5,
                });
                this.$gsap.to(e.target.children[0].children[1].children[1], {
                translateY: 0 + "%",
                duration: 0.5,
                });
            }
		},
        goTo(page) {
          if (this.$route.name !== page) {
            this.$emit('close', 'show')
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
              this.setAnimate('dissolve')
              this.$router.push({ name: page })
              this.menuStatus ? this.setMenuStatus(false) : ''
            }, 1000);
          }
        },
    }
}
</script>

<style lang="scss">
.thank-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: #1B1B1B;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &__row {
        display: flex;
        align-items: center;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        transform: translateX(300px);
        opacity: 0.5;
    }
    &__subtitle {
        font-family: 'ThinItalic', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        margin-right: 56px;
        transform: translateX(-300px);
        opacity: 0.5;
    }
}

@media (max-width: 1280px) {
    .thank-modal {
        &__title {
            font-size: 46px;
        }
        &__subtitle {
            font-size: 46px;
            margin-right: 48px;
        }
    }
}

@media (max-width: 1024px) {
    .thank-modal {
        &__title {
            font-size: 42px;
        }
        &__subtitle {
            font-size: 42px;
            margin-right: 40px;
        }
        &__request {
            width: 193px;
        }
    }
}

@media (max-width: 768px) {
    .thank-modal {
        &__title {
            font-size: 36px;
        }
        &__subtitle {
            font-size: 36px;
            margin-right: 32px;
        }
    }
}

@media (max-width: 500px) {
    .thank-modal {
        &__title {
            font-size: 32px;
        }
        &__subtitle {
            font-size: 32px;
            margin-right: 0;
        }
        &__row {
            flex-direction: column;
        }
        &__request {
            margin-top: 24px;
            width: 184px;
        }
    }
}
</style>