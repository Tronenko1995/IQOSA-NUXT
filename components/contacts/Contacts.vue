<template>
    <main class="contacts-page">
        <IcosahedronContacts />
        <section class="contacts">
            <div class="contacts__info">
                <div class="contacts__row">
                    <div class="contacts__location">
                        <div class="contacts__location-text">
                            <span> {{ data.country }}, </span>
                        </div>
                        <div class="contacts__location-text contacts__location-text--light">
                            <span>{{ data.address }}</span>
                        </div>
                    </div>
                    <h1 class="contacts__title">{{ data.latitude }}</h1>
                </div>
                <div class="contacts__row">
                    <p class="contacts__description">{{ data.longitude }}</p>
                    <div
                        class="make-request job__request"
                        @mouseover="findElement($event)"
                        @mouseleave="animateTextHide($event)"
                        >
                        <a :href="data.map_link" target="_blank" class="make-request__link">
                            <span class="make-request__text">{{ data.map_link_text }}</span>
                            <span class="make-request__change">
                            <span class="make-request__span make-request__span--first"
                                >{{ data.map_link_text_animated }}</span
                            >
                            <span class="make-request__span">{{ data.map_link_text_animated }}</span>
                            </span>
                        </a>
                        <span class="make-request__line"></span>
                    </div>
            </div>

            </div>
        </section>
    </main>
</template>

<script>
import IcosahedronContacts from '@/components/IcosahedronContacts.vue'
import { mapMutations } from 'vuex'
export default {
    layout: 'contacts',
    components: {
        IcosahedronContacts,
    },
	props: {
		data: {
			type: Object,
			required: true
		}
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
                title = document.querySelector('.contacts__title'),
                description = document.querySelector('.contacts__description'),
                line = document.querySelector('.make-request__line'),
                link = document.querySelector('.make-request__link'),
                item = document.querySelectorAll('.contacts__location-text span'),
                delay = 1


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

                for (let i = 0; i < item.length; i++) {
                    this.$ScrollTrigger.create(
                        {
                            trigger: item,
                            start: "top bottom",
                        },
                        tl = this.$gsap.timeline()
                    );
                    this.$gsap.to(item[i], {delay: delay, translateY: 0, duration: 1})

                    delay = delay + 0.25
                }

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
    }
}
</script>

<style lang="scss">
.contacts-page {
    overflow: hidden;
    width: 100%;
}
.contacts {
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
        margin-left: 131px;
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
    }
    &__location {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        &-text {
            overflow: hidden;
            span {
                display: block;
                transform: translateY(100%);
                font-family: 'LightItalic', Arial;
                font-style: italic;
                font-weight: 300;
                font-size: 22px;
                line-height: 100%;
                align-items: center;
                letter-spacing: 0.05em;
                text-transform: uppercase;
                font-feature-settings: 'pnum' on, 'lnum' on;
                color: #FFFFFF;
            }
            &--light {
                margin-top: 4px;
                span {
                    font-family: 'Light', Arial;
                    font-style: normal;
                }
            }
        }

    }
}
@media (max-width: 1440px) {
    .contacts {
        &__title,
        &__description {
            font-size: 148px;
        }
        &__title {
            margin-left: 135px;
        }
        &__description {
            margin-right: 79px;
        }
        .make-request {
            width: 204px;
        }
    }
}
@media (max-width: 1280px) {
    .contacts {
        &__title,
        &__description {
            font-size: 116px;
        }
        &__title {
            margin-left: 131px;
        }
        &__description {
            margin-right: 48px;
        }
        &__location {
            &-text {
                span {
                    font-size: 19px;
                }
            }
        }
    }
}
@media (max-width: 1024px) {
    .contacts {
        &__title,
        &__description {
            font-size: 95px;
        }
        &__description {
            margin-right: 40px;
        }
        &__title {
            margin-left: 116px;
        }
        .make-request {
            width: 193px;
        }
        &__location {
            &-text {
                span {
                    font-size: 17px;
                }
            }
        }
    }
}
@media (max-width: 768px) {
    .contacts {
        &__info {
            width: 100%;
            padding: 0 65px;
        }
        &__title,
        &__description {
            font-size: 88px;
        }
        &__title {
            margin-left: auto;
        }
        &__description {
            margin-right: 0;
        }
        &__row {
            position: relative;
        }
        &__location {
            align-self: flex-start;
            position: absolute;
            bottom: 100%;
            margin-bottom: 32px;
            &-text {
                span {
                    font-size: 16px;
                }
            }
        }
        .make-request {
            position: absolute;
            top: 100%;
            right: 0;
            margin-top: 32px;
        }
    }
}
@media (max-width: 715px) {
    // .contacts {
    //     &__row {
    //         flex-direction: column;
    //         align-items: flex-start;
    //     }
    //     &__title {
    //         padding-left: 221px;
    //     }
    //     &__description {
    //         margin-right: 0px;
    //     }
    //     .make-request {
    //         margin-top: 24px;
    //         width: 184px;
    //     }
    // }
}
@media (max-width: 660px) {
    .contacts {
        &__title,
        &__description {
            font-size: 56px;
        }
        // &__title {
        //     padding-left: 144px;
        // }
    }
}
@media (max-width: 500px) {
    .contacts {
        &__info {
            // width: 100%;
            // display: flex;
            // flex-direction: column;
            padding: 0 16px;
        }
        &__title {
            align-self: flex-end;
            padding-left: 0;
        }
    }
}
@media (max-width: 414px) {
    .contacts {
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
        &__location {
            &-text {
                span {
                    font-size: 15px;
                }
            }
            margin-bottom: 24px;
        }
        .make-request {
            margin-top: 24px;
            right: unset;
            left: 0;
        }
    }
}
</style>