<template>
	<section class="projects">
		<div class="projects__info">
			<IqosaCursor />
			<div class="featured">
				<div class="featured__block">
					<p class="featured__text">Featured</p>
					<div class="featured__item">
						<nuxt-link to="/" class="featured__link">Projects</nuxt-link>
						<span class="featured__line"></span>
					</div>
				</div>
				<p class="projects__count">
					<span ref="currentSlide">1</span>/<span ref="totalSlides">1</span>
				</p>
			</div>
			<div class="projects__name projects-name">
				<swiper ref="projectName" :options="projectNameSetting" class="projects-name__title">
					<swiper-slide class="projects-name__item">
						<span>IQ</span>-08-SL
					</swiper-slide>
					<swiper-slide class="projects-name__item">
						<span>AA</span>-99-SL
					</swiper-slide>
					<swiper-slide class="projects-name__item">
						<span>XL</span>-92-SL
					</swiper-slide>
				</swiper>
					<nuxt-link to="/" class="projects__link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
						<span class="arrow-link__change">
							<span class="arrow-link__span arrow-link__span--first">Explore</span>
							<span class="arrow-link__span arrow-link__span--last">Explore</span>
						</span>
						<span class="arrow-link__text">THE project</span>
						<span class="arrow-link__circle">
							<svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
						</span>
					</nuxt-link>
			</div>
			<swiper ref="projectAddress" :options="projectAddressSetting" class="projects__address  projects-address">
				<swiper-slide class="projects-address__item">
					2019,  <span class="projects-address__span">KYIV</span>,  Ukraine,  560M2
				</swiper-slide>
				<swiper-slide class="projects-address__item">
					2020,  <span class="projects-address__span">Moskow</span>,  Russia,  560M2
				</swiper-slide>
				<swiper-slide class="projects-address__item">
					2021,  <span class="projects-address__span">Rome</span>,  Italy,  560M2
				</swiper-slide>
			</swiper>
		</div>
		<swiper ref="projectPhotos" :options="projectPhotosSetting" class="projects__photos projects-photos" data-cursor="drag">
			<swiper-slide class="projects-photos__item">
				<div class="projects-photos__slide">
					<img class="projects-photos__img" :src="require('~/assets/img/projects/1.jpg')" alt="">
				</div>
			</swiper-slide>
			<swiper-slide class="projects-photos__item">
				<div class="projects-photos__slide">
					<img class="projects-photos__img" :src="require('~/assets/img/projects/2.jpg')" alt="">
				</div>
			</swiper-slide>
			<swiper-slide class="projects-photos__item">
				<div class="projects-photos__slide">
					<img class="projects-photos__img" :src="require('~/assets/img/projects/3.jpg')" alt="">
				</div>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script>
import gsap from "gsap"
export default {
	data() {
		return {
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
			this.projectPhotos.controller.control = this.projectAddress
			this.projectAddress.controller.control = this.projectName
			this.$refs.totalSlides.textContent = this.projectPhotos.slides.length - 2
			this.projectPhotos.on('slideChange', () => {
				this.$refs.currentSlide.textContent = this.projectPhotos.realIndex + 1;
			})
	},
	methods: {
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
	width: 60%;
	height: 80vh;
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
	.projects-photos {
		width: 100%;
		height: 330px;
		margin-top: 33px;
		margin-bottom: 88px;
	}
	.featured {
		margin-bottom: 370px;
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
