<template>
    <main class="error-page">
        <IcosahedronCrystal />
        <section class="error">
            <div class="error__info">
                <h1 class="error__title">OOOOOPS</h1>
                <div class="error__row">
                    <p class="error__description">404 error</p>
                    <div
                        class="make-request job__request"
                        @mouseover="findElement($event)"
                        @mouseleave="animateTextHide($event)"
                        >
                        <nuxt-link :to="localePath('/')" class="make-request__link">
                            <span class="make-request__text">back to</span>
                            <span class="make-request__change">
                            <span class="make-request__span make-request__span--first"
                                >main</span
                            >
                            <span class="make-request__span">main</span>
                            </span>
                        </nuxt-link>
                        <span class="make-request__line"></span>
                    </div>
            </div>

            </div>
        </section>
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'Error',
    layout: 'error',
    beforeMount() {
        this.testPage()
    },
    mounted() {
        if (this.preloader) {
        setTimeout(() => {
            this.setPlug(false)
            this.animate()
        }, this.duration.preloader);
        } else {
        setTimeout(() => {
            this.setPlug(false)
            this.animate()
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
        animate() {
            let tl,
                title = document.querySelector('.error__title'),
                description = document.querySelector('.error__description'),
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
                        trigger: description,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(description, {translateX: 0, opacity: 1, duration: 1})

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
		testPage() {
			document.body.dataset.iqosahedron = 'error'
		}
    }
}
</script>

<style lang="scss">
.error-page {
    overflow: hidden;
    width: 100%;
}
.error {
    width: 100%;
    height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    &__title {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        padding-left: 200px;
        transform: translateX(300px);
        opacity: 0.5;
    }
    &__description {
        font-family: 'ThinItalic', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        margin-right: 56px;
        letter-spacing: 0.05em;
        transform: translateX(-300px);
        opacity: 0.5;
    }
    &__row {
        display: flex;
        align-items: center;
        padding-right: 190px;
    }
}
@media (max-width: 1440px) {
    .error {
        &__title,
        &__description {
            font-size: 148px;
        }
        &__title {
            padding-left: 160px;
        }
        &__row {
            padding-right: 0;
        }
    }
}
@media (max-width: 1280px) {
    .error {
        &__title,
        &__description {
            font-size: 116px;
        }
        &__description {
            margin-right: 48px;
        }
    }
}
@media (max-width: 1024px) {
    .error {
        &__title,
        &__description {
            font-size: 95px;
        }
        &__description {
            margin-right: 40px;
        }
        &__title {
            padding-left: 164px;
        }
        .make-request {
            width: 193px;
        }
    }
}
@media (max-width: 768px) {
    .error {
        &__title,
        &__description {
            font-size: 88px;
        }
        &__description {
            margin-right: 27px;
        }
    }
}
@media (max-width: 715px) {
    .error {
        &__row {
            flex-direction: column;
            align-items: flex-start;
        }
        &__title {
            padding-left: 221px;
        }
        &__description {
            margin-right: 0px;
        }
        .make-request {
            margin-top: 24px;
            width: 184px;
        }
    }
}
@media (max-width: 660px) {
    .error {
        &__title,
        &__description {
            font-size: 56px;
        }
        &__title {
            padding-left: 144px;
        }
    }
}
@media (max-width: 500px) {
    .error {
        &__info {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 16px;
        }
        &__title {
            align-self: flex-end;
            padding-left: 0;
        }
    }
}
@media (max-width: 414px) {
    .error {
        &__title,
        &__description {
            font-size: 56px;
        }
        &__description {
            margin-right: 0px;
        }
        &__row {
            flex-direction: column;
        }
    }
}
</style>