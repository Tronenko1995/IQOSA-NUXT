<template>
	<swiper ref="projectPhotos" :options="swiperOptions" class="projects__photos projects-photos">
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
</template>
 
<script>
	export default {
		props: {
			photoSliderCb: {
				type: Function,
				default: () => {}
			},
			adressSlider: {
				type: Object,
				required: true
			},
		},
		data() {
			return {
				swiperOptions: {
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
							control: [
								this.adressSlider,
							]
						},
					// Some Swiper option/callback...
					on: {
							// slideChange: function () {
							//     const slider_count = document.querySelector("#main-project_slider-count");
							//     if (slider_count) {
							//         slider_count.textContent = this.realIndex + 1;
							//     }
							//     let active_el = this.$el[0].querySelector(`[data-swiper-slide-index="${this.realIndex}"]`);
							//     if (active_el) {
							//         project_slider_link.setAttribute("href", active_el.dataset.sliderUrl);
							//         main_slider_img.setAttribute("href", active_el.dataset.sliderUrl);
							//         main_slider_name.setAttribute("href", active_el.dataset.sliderUrl);
							//     }
							// },
							progress: function () {
									var swiper = this;
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
								touchStart: function () {
									var swiper = this;
									for (var i = 0; i < swiper.slides.length; i++) {
										swiper.slides[i].style.transition = "";
									}
								},
								setTransition: function (swiper, speed) {
									var swiper = this;
									for (var i = 0; i < swiper.slides.length; i++) {
										swiper.slides[i].style.transition = speed + "ms";
										swiper.slides[i].querySelector(".projects-photos__slide").style.transition =
											speed + "ms";
									}
								}
						}
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.projectPhotos.$swiper
			}
		},
		mounted() {
			this.photoSliderCb(this.swiper)
		}
	}
</script> 

<style lang="scss">
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
</style>