<template>
    <main class="error-page">
        <HeaderWrap />
        <IcosahedronCrystal />
        <section class="error">
            <div class="error__info">
                <h1 class="error__title">{{ data.title_big_bold }}</h1>
                <div class="error__row">
                    <p class="error__description">{{ data.title_big_thin }}</p>
                    <div
                        class="make-request job__request"
                        @mouseover="findElement($event)"
                        @mouseleave="animateTextHide($event)"
                        >
                        <nuxt-link :to="localePath('/')" class="make-request__link">
                            <span class="make-request__text">{{ data.link_text }}</span>
                            <span class="make-request__change">
                            <span class="make-request__span make-request__span--first"
                                >{{ data.link_text_animated }}</span
                            >
                            <span class="make-request__span">{{ data.link_text_animated }}</span>
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
	head() {
		return {
		title: this.data.seo_title,
		meta: [
			{
			hid: "description",
			name: "description",
			content: this.data.meta_description
			},
			// {
			//   hid: "keywords",
			//   name: "keywords",
			//   content: this.mainPage.meta_keywords
			// }
		],
		};
	},
    name: 'Error',
    layout: 'error',
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/error/getErrorPageContent', `/404?lang=${i18n.locale}`)
		} catch(e) {
			// redirect('/404');
			throw new Error(e);
			// error({ statusCode: 404, message: 'Post not found' })
		}
		try {
			await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		} catch(e) {
			// redirect('/404');
			throw new Error(e);
			// error({ statusCode: 404, message: 'Post not found' })
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
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
        this.copyFunction()
    },
    computed: {
        preloader() { return this.$store.getters['preloader/preloader'] },
        duration() { return this.$store.getters['plug/duration'] },
		data() { return this.$store.getters['lang/error/data'] }
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
		},
		copyFunction() {
			document.oncopy = function () {
				let bodyElement = document.body
				let selection = getSelection()
				let href = document.location.href
				let copyright = "<br><br>Источник: <a href='"+ href +"'>" + href + "</a><br>©  IQOSA  "
				let text = selection + copyright
				let divElement = document.createElement('div')
				divElement.style.position = 'absolute'
				divElement.style.left = '-99999px'
				divElement.innerHTML = text
				bodyElement.appendChild(divElement)
				selection.selectAllChildren(divElement)
				setTimeout(function() { 
					bodyElement.removeChild(divElement)
				}, 0)
			}
		},
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
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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
