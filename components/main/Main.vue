<template>
	<section class="main">
		<div class="main__wrap">
			<div class="main__row main__row--first">
				<Motto class="motto--main" :motto-list="data.hero_text"/>
				<p class="main__title main__title--first" :class="[
					{'main__title--ru': $i18n.locale === 'ru'},
					{'main__title--ua': $i18n.locale === 'ua'},
				]">{{ data.hero_title[0] }}</p>
			</div>
			<div class="main__row main__row--middle">
				<p class="main__title main__title--second main__title--italic" :class="[
					{'main__title--ru': $i18n.locale === 'ru'},
					{'main__title--ua': $i18n.locale === 'ua'},
				]">{{ data.hero_title[1] }}</p>
				<div
					class="make-request make-request--main" :class="[
					{'make-request--main-ru': $i18n.locale === 'ru'},
					{'make-request--main-ua': $i18n.locale === 'ua'},
				]"
					@mouseover="findElement($event)"
					@mouseleave="animateTextHide($event)"
				>
					<nuxt-link :to="localePath('/forms/sayhi')" class="make-request__link">
						<span class="make-request__text">{{ data.hero_link_text }}</span>
						<span class="make-request__change">
							<span class="make-request__span make-request__span--first"
								>{{ data.hero_link_text_animated }}</span
							>
							<span class="make-request__span">{{ data.hero_link_text_animated }}</span>
						</span>
					</nuxt-link>
					<span class="make-request__line"></span>
				</div>
			</div>
			<div class="main__row main__row--last">
				<p class="main__title main__title--last" :class="[
					{'main__title--ru': $i18n.locale === 'ru'},
					{'main__title--ua': $i18n.locale === 'ua'},
				]">{{ data.hero_title[2] }}</p>
			</div>
		</div>
	</section>
</template>

<script>
// import gsap from "gsap"
import { mapMutations } from 'vuex'
// import { gsap } from "gsap/dist/gsap";
// import { SplitText } from "gsap/dist/SplitText";
export default {
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
		// gsap.registerPlugin(SplitText);
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
			const mottoItem = document.querySelectorAll('.motto__item span')
			let delay = 1

			this.$gsap.to(".main__title", {
				delay: 0.5,
				translateX: 0,
				opacity: 1,
				duration: 0.5,
			});

			for (let i = 0; i < mottoItem.length; i++) {
					this.$gsap.to(mottoItem[i], {
							delay: delay,
							translateY: 0,
							duration: 0.5
					})

					delay = delay + 0.25
			}

			this.$gsap.to(".make-request__line", {
				translateX: 0,
				delay: 2,
				duration: 0.5,
			});
			this.$gsap.to(".make-request__link", {
				translateY: 0,
				delay: 2.75,
				duration: 0.25,
			});

			let bf = document.querySelector('.black-friend')

			this.$gsap.to(bf, 1.2, {
				scrollTrigger: {
                    trigger: bf,
                    start: "top bottom-=200px",
				},
				height: 0 + '%',
				// duration: 0.3,
			});


            // this.$ScrollTrigger.create(
            //     {
            //         trigger: bf,
            //         start: "top bottom-=200px",
            //     },
            //     tl = this.$gsap.timeline()
            // );
            // this.$gsap.to(bf, {
			// 		height: 0 + '%',
			// 		duration: 1,
			// 	})
		},
		findElement(e) {
			if (
				e.target.classList.contains("make-request__text") ||
				e.target.classList.contains("make-request__link")
			) {
				const el = e.target.parentElement.querySelector(
					".make-request__change"
				);
				this.animateTextShow(el);
			} else if (e.target.classList.contains("make-request__span--first")) {
				this.animateTextShow(e.target.parentElement);
			}
		},
		animateTextShow(el) {
			this.$gsap.to(el.children[0], {
				translateY: -100 + "%",
				duration: 0.5,
			});
			this.$gsap.to(el.children[1], {
				translateY: -100 + "%",
				duration: 0.5,
			});
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
	},
};
</script>

<style lang="scss">
.motto--main .motto__item {
  font-size: 20px;
  line-height: 140%;

  @media (max-width: 768px) {
    .motto--main .motto__item {
      font-size: 20px;
    }
  }

  @media (max-width: 414px) {
    .motto--main .motto__item {
      font-size: 13px;
    }
  }
}


</style>

<style lang="scss">
.main {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 106px 0 0;
	margin-bottom: 190px;
	&__wrap {
		width: 100%;
		max-width: 1326px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&--last {
			justify-content: flex-end;
		}
	}
	&__title {
   		font-size: 172px;
    	line-height: 115%;
		text-transform: uppercase;
		font-weight: 400;
		font-family: Roman, Arial;
		color: #fff;
		// font-feature-settings: "pnum" on, "lnum" on, "kern" off;
		opacity: 0;
		&--ru,
		&--ua {
			font-size: 116px;
		}
		&--italic {
			letter-spacing: 0.05em;
			font-weight: 300;
			font-family: ThinItalic, Arial;
		}
		&--first {
			transform: translateX(300px);
		}
		&--second,
		&--last {
			transform: translateX(-300px);
		}
	}
}

@media (max-width: 1440px) {
	.main {
		&__wrap {
			max-width: 1223px;
		}
		&__title {
			font-size: 172px;
			&--ru,
			&--ua {
				font-size: 116px;
			}
		}
	}
}
@media (max-width: 1280px) {
	.main {
		&__wrap {
			max-width: 980px;
		}
		&__title {
			font-size: 120px;
			&--ru,
			&--ua {
				font-size: 92px;
			}
		}
	}
}
@media (max-width: 1024px) {
	.main {
		&__wrap {
			max-width: 729px;
		}
		&__title {
			font-size: 84px;
			&--ru,
			&--ua {
				font-size: 58px;
			}
		}
	}
}
@media (max-width: 768px) {
	.main {
		position: relative;
		&__wrap {
			// max-width: 650px;
			max-width: 100%;
      padding-right: 105px;
      padding-left: 105px;
		}
		&__title {
			// font-size: 70px;
			font-size: 84px;
		}
    &__row {
			&--first {
				display: block;
			}
      &--middle {
				display: block;
      }
		}
    .make-request__link {
      font-size: 17px;
    }
	}
}
@media (max-width: 700px) {
	.main {
		margin-bottom: 0px;
			font-size: 56px;
		&__title {
			font-size: 70px;
			&--ru,
			&--ua {
				font-size: 42px;
			}
		}
	}
}
@media (max-width: 669px) {
	.main {
		// position: relative;
		&__wrap {
			max-width: unset;
			padding: 0 20px;
		}
		&__title {
			// font-size: 69px;
		}
		&__row {
			&--first {
        display: flex;
				justify-content: flex-end;
			}
		}
	}
}
@media (max-width: 414px) {
	.main {
		&__wrap {
			padding: 0 15px;
		}
		&__title {
			font-size: 56px;
			&--ru,
			&--ua {
				font-size: 42px;
			}
		}
    .make-request__link {
      font-size: 14px;
    }
	}
}
</style>
