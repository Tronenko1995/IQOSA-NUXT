<template>
	<section class="projects">
		<div class="projects__info">
			<IqosaCursor />
			<div class="featured">
				<div class="featured__block">
					<p class="featured__text">{{ data.projects_title }}</p>
					<div class="featured__item">
						<a @click.prevent="goPage('/projects')" href="/projects"  class="featured__link">{{ data.projects_title_animated }}</a>
						<!-- <nuxt-link :to="localePath('/projects')" class="featured__link">{{ data.projects_title_animated }}</nuxt-link> -->
						<span class="featured__line"></span>
					</div>
				</div>
				<p class="projects__count">
					<span ref="currentSlide">1</span>/<span ref="totalSlides">1</span>
				</p>
			</div>
			<div class="projects__name projects-name" ref="pa">
				<swiper ref="projectName" :options="projectNameSetting" class="projects-name__title">
					<swiper-slide v-for="item in data.projects" :key="item.link">
						<a @click="goPage(`/project/${item.link}`)" :href="localePath(`/project/${item.link}`)" class="projects-name__item" :data-href="item.link">
						<!-- <nuxt-link :to="localePath(`/project/${item.link}`)" class="projects-name__item"> -->
						<span>{{ item.type }}</span>-{{ item.number }}
						<!-- </nuxt-link> -->
						</a>
					</swiper-slide>
				</swiper>
					<a id="projectLink" @click.prevent="go($event)" :href="`/${$i18n.locale}/project/${data.projects[0].link}`"  class="projects__link arrow-link" @mouseover="findElement($event)" @mouseleave="animateTextHide($event)" :data-link="data.projects[0].link">
					<!-- <nuxt-link :to="localePath('/')" class="projects__link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)"> -->
					<!-- <nuxt-link :to="localePath('/')" class="projects__link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)"> -->
						<span class="arrow-link__change">
							<span class="arrow-link__span arrow-link__span--first">{{ data.projects_current_text_animated }}</span>
							<span class="arrow-link__span arrow-link__span--last">{{ data.projects_current_text_animated }}</span>
						</span>
						<span class="arrow-link__text">{{ data.projects_current_text }}</span>
						<span class="arrow-link__circle">
							<svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
						</span>
					</a>
			</div>
			<swiper ref="projectAddress" :options="projectAddressSetting" class="projects__address  projects-address">
				<swiper-slide class="projects-address__item" v-for="item in data.projects" :key="item.link">
					{{ item.release_date }},  <span class="projects-address__span">{{ item.city }}</span>,  {{ item.country }},  {{ item.area }}М2
				</swiper-slide>
			</swiper>
		</div>
		<div class="projects-photos-wrap">
			<div class="black-friend" ref="blackFriend"></div>
			<swiper ref="projectPhotos" :options="projectPhotosSetting" class="projects__photos projects-photos" data-cursor="drag">
				<swiper-slide class="projects-photos__item" :data-link="item.link" v-for="item in data.projects" :key="item.link">
					<!-- <div class="projects-photos__slide"> -->
					<a @click.prevent="goPage(`/project/${item.link}`)" :href="`/project/${item.link}`"  class="projects-photos__slide">
					<!-- <nuxt-link :to="localePath(`/project/${item.link}`)" class="projects-photos__slide"> -->
						<img class="projects-photos__img" :src='`${baseUrl}${item.main_picture}`' alt="">
					</a>
					<!-- </div> -->
				</swiper-slide>
			</swiper>
		</div>

	</section>
</template>

<script>
import { mapMutations } from 'vuex'
import gsap from "gsap"
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
				baseUrl: process.env.baseUrl,
				// projectLink: '',
				projectNameSetting: {
					speed: 500,
					loop: true,
					direction: 'vertical',
					slidesPerView: 1,
					dragSize: 22,
					controller: {
							control: []
					}
				},
				projectAddressSetting: {
					speed: 700,
					loop: true,
					direction: 'vertical',
					dragSize: 22,
					slidesPerView: 1,
					controller: {
							control: []
					}
				},
				projectPhotosSetting: {
						speed: 700,
						loop: true,
						touchStartPreventDefault: false,
						watchSlidesProgress: true,
						slidesPerView: 1,
						autoplay: {
								delay: 3000,
						},
						pagination: {
								el: '.swiper-pagination',
								type: 'fraction',
						},
						controller: {
								control: []
						},
						on: {
							progress: function (swiper) {
								let interleaveOffset = 0.5;

								for (var i = 0; i < swiper.slides.length; i++) {
									var slideProgress = swiper.slides[i].progress;
									var innerOffset = swiper.width * interleaveOffset;
									var innerTranslate = slideProgress * innerOffset;

									if (!swiper.slides[i].classList.contains("swiper-slide-active")) {
										swiper.slides[i].querySelector(
												".projects-photos__slide"
										).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
									} else {
										swiper.slides[i].querySelector(
												".projects-photos__slide"
										).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
									}
								}
							},
							touchStart: function (swiper) {
								for (var i = 0; i < swiper.slides.length; i++) {
									swiper.slides[i].style.transition = "";
								}
							},
							setTransition: function (swiper, speed) {
								for (var i = 0; i < swiper.slides.length; i++) {
									swiper.slides[i].style.transition = speed + "ms";
									swiper.slides[i].querySelector(".projects-photos__slide").style.transition = speed + "ms";
								}
							},
					}
			},
		}
	},
	computed: {
		projectAddress() { return this.$refs.projectAddress.$swiper },
		projectPhotos() { return this.$refs.projectPhotos.$swiper },
		projectName() { return this.$refs.projectName.$swiper },
	},
	mounted() {
		console.log(this.data.projects[0].link)
		// console.log(this.data[0].link)
    let active_el
    let project_slider = document.querySelector('.projects__photos');
    let project_list_slider_link = document.querySelector("#projectLink");

		this.animate()
		// this.projectLink = this.data.projects[0].link
		this.projectPhotos.controller.control = this.projectAddress
		this.projectAddress.controller.control = this.projectName
		this.$refs.totalSlides.textContent = this.projectPhotos.slides.length - 2
		this.projectPhotos.on('slideChange', (e) => {
			this.$refs.currentSlide.textContent = this.projectPhotos.realIndex + 1;
			// console.log(this.projectPhotos.realIndex) this.projectPhotos.activeIndex
			// this.projectLink = this.projectPhotos.$el[0].children[0].children[this.projectPhotos.activeIndex].dataset.link
			active_el = e.$el[0].querySelector(`[data-swiper-slide-index="${e.realIndex}"]`);
			if (active_el) {
				console.log(active_el)
				project_list_slider_link.setAttribute("href", `/${this.$i18n.locale}/project/${active_el.dataset.link}`);
				console.log(`/${this.$i18n.locale}/project/${active_el.dataset.link}`)
        		project_list_slider_link.setAttribute("data-link", active_el.dataset.link);
				console.log(active_el.dataset.link)

			}
			// console.dir(e)
			// console.dir(this.$refs.projectName)
			// console.log(this.$refs.projectName.querySelector(`[data-swiper-slide-index="${this.projectPhotos.realIndex}"]`))
			// this.projectLink = this.container.querySelector(`[data-swiper-slide-index="${this.projectPhotos.realIndex}"] a`).dataset.href
			
			// console.log(document.querySelector(`[data-swiper-slide-index="${this.projectPhotos.realIndex}"] a`).dataset.href)
			// console.log(this.projectLink)

		})
	},
	methods: {
		...mapMutations({
			setAnimate: 'plug/setAnimate',
			setPlug: 'plug/setVisible',
		}),
		animate() {
			// let tl,
        	// 	bf = this.$refs.blackFriend,
        	// 	// pa = this.$refs.pa
        	// 	pa = document.querySelector('.team')

            // this.$ScrollTrigger.create(
            //     {
            //         trigger: pa,
            //         start: "top bottom",
            //     },
            //     tl = this.$gsap.timeline()
            // );
            // this.$gsap.to(bf, {
			// 		height: 0 + '%',
			// 		duration: 1,
			// 	})
		},
		findElement(e) {
			if (e.target.classList.contains('arrow-link__text') || e.target.classList.contains('arrow-link') || e.target.classList.contains('arrow-link__circle')) {
				const el = e.target.parentElement.querySelector('.arrow-link__change')
				this.animateTextShow(el)
			} else if (e.target.classList.contains('arrow-link__span--first')) {
				this.animateTextShow(e.target.parentElement)
			}
		},
		animateTextShow(el) {
			gsap.to(el.children[0], {
				translateY: -100 + "%",
				duration: .5
			})
			gsap.to(el.children[1], {
				translateY: -100 + "%",
				duration: .5
			})
		},
		animateTextHide(e) {
			if (e.target.classList.contains('arrow-link')) {
				const el = e.target.querySelector('.arrow-link__change')
				gsap.to(el.children[0], {
					translateY: 0 + "%",
					duration: .5
				})
				gsap.to(el.children[1], {
					translateY: 0 + "%",
					duration: .5
				})
			}
		},
        goPage(page) {
			console.log('page222', page)
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(page))
            }, 1000);
        },
		go(e) {
			console.log(e.target)
			if (e.target.classList.contains('arrow-link__change') || e.target.classList.contains('arrow-link__text') || e.target.classList.contains('arrow-link__circle')) {
				let link = e.target.parentElement.dataset.link
				this.goPage(`/project/${link}`)
				console.log('go', link)
				console.log('gopage', `/project/${link}`)
			} else if (e.target.classList.contains('arrow-link')) {
				let link = e.target.dataset.link
				this.goPage(`/project/${link}`)
			} else if (e.target.classList.contains('arrow-link__span') || e.target.tagName == 'svg') {
				let link = e.target.parentElement.parentElement.dataset.link
				this.goPage(`/project/${link}`)
			} else if (e.target.tagName == 'path') {
				let link = e.target.parentElement.parentElement.parentElement.dataset.link
				this.goPage(`/project/${link}`)
			}

		},
	}
}
</script>

<style lang="scss">
.projects {
		margin-top: 120px;
		margin-bottom: 188px;
		display: flex;
		&__info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 40%;
				padding-left: 72px;
		}
		&__photos {
				width: 60%;
				height: 56vh;
		}
		&__count {
				padding-right: 16px;
				font-family: 'Roman', Arial;
				font-weight: normal;
				font-size: 15px;
				line-height: 120%;
				font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
				color: #FFFFFF;
				display: none;
		}
}
.projects-address {
	overflow: hidden;
	height: 17px;
	pointer-events: none;
	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		transition-property: transform;
		flex-direction: column;
	}
	&__item {
	flex-shrink: 0;
	width: 100%;
	height: 100%;
	position: relative;
	transition-property: transform;

	font-family: 'Light', Arial;
	font-weight: 300;
	font-size: 14px;
	line-height: 120%;
	text-transform: uppercase;
	font-feature-settings: 'pnum' on, 'lnum' on;
	color: #FFFFFF;
	}
	&__span {
		font-family: 'LightItalic', Arial;
	}
}
.projects-photos {
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow: hidden;
	list-style: none;
	padding: 0;
	z-index: 1;
	width: 100%;
	height: 100%;
	padding-top: 1px;
	overflow-y: hidden;
	cursor: none;
	.swiper-wrapper {
		position: relative;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		transition-property: transform;
		box-sizing: content-box;
		transition-timing-function: cubic-bezier(.79,.36,.34,.99)!important;
	}
	&__item {
		flex-shrink: 0;
		width: 100%;
		height: 100%;
		position: relative;
		transition-property: transform;
		overflow: hidden;
	}
	&__slide {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		transition-timing-function: cubic-bezier(.79,.36,.34,.99)!important;
		cursor: none;
	}
	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		transition-timing-function: ease-in;
	}
}

.featured {
	display: flex;
	justify-content: space-between;
	&__block {
		display: flex;
	}
	&__text {
		font-size: 22px;
		letter-spacing: 0.05em;
		font-weight: 300;
		line-height: 100%;
		color: #fff;
		text-transform: uppercase;
		font-family: 'LightItalic', Arial;
		font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
	}
	&__item {
		margin-left: 8px;
		position: relative;
		&:hover {
			.featured__line {
				animation: 'under-line' 1s;
			}
		}
	}
	&__link {
		color: #fff;
		font-size: 22px;
		line-height: 100%;
		text-transform: uppercase;
		font-family: 'Roman', Arial;
		font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
	}
	&__line {
		position: absolute;
		height: 1px;
		background: #fff;
		display: block;
		transition: .3s ease;
		bottom: 0;
		width: 100%;
	}
}
.projects-photos-wrap {
	width: 60%;
	height: 80vh;
	position: relative;
}
.black-friend {
    position: absolute;
    z-index: 20;
    top: 0;
    left: -1px;
    height: 100%;
    width: calc(100% + 1px);
    background-color: #1b1b1b;
}
@media (max-width: 1440px) {
	.projects {
		&__info {
			padding-left: 64px;
		}
	}
}
@media (max-width: 1280px) {
	.projects {
		&__info {
			padding-left: 56px;
		}
	}
	.featured {
		&__text {
			font-size: 19px;
		}
	}
}
@media (max-width: 1024px) {
	.featured {
		&__text {
				font-size: 17px;
		}
		&__link {
				font-size: 17px;
		}
	}
	.projects-address {
		&__item {
				font-size: 12px;
		}
	}
}
@media (max-width: 1000px) {
	.projects {
		&__info {
			width: 50%;
		}
	}
	.projects-photos {
		width: 50%;
	}
}
@media (max-width: 768px) {
		.projects {
			&__info {
				padding-left: 48px;
			}
		}
		.featured {
			&__text {
				font-size: 16px;
			}
			&__link {
				font-size: 16px;
			}
		}
}
@media (max-width: 700px) {
.projects-photos-wrap {
	width: 100%;
	height: 330px;
	position: relative;
}
	.projects-photos {
		width: 100%;
		height: 330px;
		margin-top: 33px;
		margin-bottom: 88px;
	}
	.featured {
		margin-bottom: 370px;
		&__block {
			align-items: center;
		}
	}
	.projects {
		margin-top: 0px;
		height: 600px;
		margin-bottom: 88px;
		&__count {
			display: block;
		}
		&__info {
			position: absolute;
			width: 100%;
			padding-left: 16px;
		}
		&__link {
			margin-bottom: 56px;
		}
	}
}
@media (max-width: 414px) {
	.featured {
		&__text {
			font-size: 15px;
		}
		&__link {
			font-size: 15px;
		}
	}
	.projects-address {
		&__item {
			font-size: 13px;
		}
	}
}
</style>
