<template>
    <div class="projects">
        <div class="projects__info">
            <div class="featured">
                <p class="featured__text">Featured</p>
                <div class="featured__item">
                   <nuxt-link to="/" class="featured__link">Projects</nuxt-link>
                   <span class="featured__line"></span>
                </div>
            </div>
            <div class="projects__name projects-name">
                <ProjectsName />
                <nuxt-link to="/" class="projects__link projects-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
                    <span class="projects-link__change">
                        <span class="projects-link__span projects-link__span--first">Explore</span>
                        <span class="projects-link__span">Explore</span>
                    </span>
                    <span class="projects-link__text">THE project</span>
                    <span class="projects-link__circle">
                        <svg class="projects-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                    </span>
                    </nuxt-link>
            </div>
            <template>
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
            </template>
        </div>
        <template>
            <swiper ref="projectPhotos" :options="projectPhotosSetting" class="projects__photos projects-photos">
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
    </div>
</template>

<script>
// import ProjectsPhotos from '@/components/main/ProjectsPhotos.vue'
import ProjectsName from '@/components/main/ProjectsName.vue'
// import ProjectAddress from '@/components/main/ProjectsAddress.vue'
export default {
    components: { ProjectsName },
    data() {
        return {
            projectAddressSetting: {
                speed: 700,
                loop: true,
                direction: 'vertical',
                dragSize: 22,
                slidesPerView: 1,
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
                    control: [
                        this.projectAddress,
                    ]
                },
                on: {
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
            },
            // photoSlider: null,
            // nameSlider: null,
            // adressSlider: null
        }
    },
    computed: {
        projectAddress() {
            return this.$refs.projectAddress.$swiper
        },
        projectPhotos() {
            return this.$refs.projectPhotos.$swiper
        }
    },
    methods: {

        // photoSliderCb(swiper) {
        //     this.photoSlider = swiper
        // },
        // nameSliderCb(swiper) {
        //     this.nameSlider = swiper
        // },
        // adressSliderCb(swiper) {
        //     this.adressSlider = swiper
        // },
		findElement(e) {
			if (e.target.classList.contains('projects-link__text') || e.target.classList.contains('projects-link') || e.target.classList.contains('projects-link__circle')) {
                const el = e.target.parentElement.querySelector('.projects-link__change')
				this.animateTextShow(el)
			} else if (e.target.classList.contains('projects-link__span--first')) {
                this.animateTextShow(e.target.parentElement)
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
			if (e.target.classList.contains('projects-link')) {
                const el = e.target.querySelector('.projects-link__change')
				this.$gsap.to(el.children[0], { 
					translateY: 0 + "%",
					duration: .5
				})
				this.$gsap.to(el.children[1], { 
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
}
.projects-link {
    display: flex;
    width: fit-content;
    align-items: center;
    margin-top: 24px;
	&__change {
		display: block;
		overflow: hidden;
        position: relative;
		.projects-link__span {
			display: block;
			&:last-child {
				position: absolute;
			}
		}
	}
    &__span {
        font-family: 'LightItalic', Arial;
        font-weight: 300;
        color: #fff;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }
    &__text {
        font-family: 'Light', Arial;
        font-weight: 300;
        color: #fff;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        margin-left: 8px;
    }
    &__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        background-color: transparent;
        border: 1px solid hsla(0,0%,100%,.1);
        border-radius: 50%;
        transition: background-color .5s;
        margin-left: 24px;
    }
    &__svg {
        stroke: #fff;
        transition: stroke .5s;
    }
    &:hover {
        .projects-link__svg {
            stroke: #000;
        }
        .projects-link__circle {
            background-color: #fff;
        }
    }
}
.projects-address {
	overflow: hidden;
	height: 17px;
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
</style>