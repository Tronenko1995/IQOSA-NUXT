<template>

	<section class="projects-list">
		<div class="projects-list__shadow"></div>

		<div class="projects-list__title">
			<p class="projects-list__title-text">Featured</p>
			<p class="projects-list__title-text projects-list__title-text--roman">cases</p>
		</div>

		<div class="switch">

			<div class="switch__eye eye">
				<div ref="eye" class="eye__pupil"></div>
				<img class="eye__img" :src="require('~/assets/svg/eye.svg')" width="38" height="15" alt="" />
			</div>

			<ul class="switch__list">
				<li class="switch__item switch__item--selected">
					<button class="switch__link">Grid</button>
					<span class="switch__line"></span>
				</li>
				<li class="switch__item">
					<p class="switch__link">,</p>
				</li>
				<li class="switch__item">
					<button class="switch__link">List</button>
					<span class="switch__line"></span>
				</li>
			</ul>

		</div>

		<div v-swiper:projectsSlider="projectsSetting" ref="projects" class="projects-slider">
			<nuxt-link ref="linkItem" class="projects-slider__link projects-slider__link--head" :to="link.url"></nuxt-link>
			<div class="swiper-wrapper">
				<div class="swiper-slide projects-slider__item" data-url="/project/iq-98-kd/">
          <nuxt-link class="projects-slider__link" to="/project/iq-98-kd/"></nuxt-link>
            <p class="projects-slider__title">
              <span>IQ</span>-98-KD
            </p>
            <p class="projects-slider__description">
              2021,<span>Odessa</span>, Ukraine, 203,6M2
            </p>
				</div>
				<div class="swiper-slide projects-slider__item" data-url="/project/iq-87-or/">
          <nuxt-link class="projects-slider__link" to="/project/iq-87-or/"></nuxt-link>
            <p class="projects-slider__title">
              <span>IQ</span>-87-OR
            </p>
            <p class="projects-slider__description">
              2021,<span>Kyiv</span>, Ukraine, 119M2
            </p>
				</div>
				<div class="swiper-slide projects-slider__item" data-url="/project/iq-86-sl/">
          <nuxt-link class="projects-slider__link" to="/project/iq-86-sl/"></nuxt-link>
            <p class="projects-slider__title">
              <span>IQ</span>-86-SL
            </p>
            <p class="projects-slider__description">
              2021,<span>Kyiv</span>, Ukraine, 101M2
            </p>
				</div>
			</div>
		</div>

	</section>

</template>

<script>
export default {
	data() {
		return {
			eye: null,
      link: {
        item: null,
        url: '/project/iq-98-kd/'
      },
			projectsSetting: {
				speed: 750,
				loop: true,
				direction: "vertical",
				slidesPerView: "auto",
				touchStartPreventDefault: false,
				longSwipesMs: 1000,
				mousewheel: { invert: false },
			}
		}
	},
	mounted() {
		this.eye = this.$refs.eye
		this.projectLink = this.$refs.projectsLink
		window.addEventListener("mousemove", this.onMouseMove, {passive: true})
    console.log(this.projectsSlider)
    this.projectsSlider.on('slideChange', () => {
      this.projectsSlider.allowSlideNext = false
      this.projectsSlider.allowSlidePrev = false

        setTimeout(() => {
          this.projectsSlider.allowSlideNext = true
          this.projectsSlider.allowSlidePrev = true
        }, 2000)

        // let active_el = this.projectsSlider.$el[0].querySelector(`[data-swiper-slide-index="${this.projectsSlider.realIndex}"]`);
        // if (active_el) {
          // this.link.url = active_el.dataset.url;
        // }
      })
	},
	methods: {
		onMouseMove() {
			let rect = this.eye.getBoundingClientRect();

			let offset = {
				top: rect.top + window.scrollY,
				left: rect.left + window.scrollX,
			};
			let x = offset.left + this.eye.offsetWidth / 2;
			let y = offset.top + this.eye.offsetHeight / 2;
			let rad = Math.atan2(event.pageX - x, event.pageY - y);
			let rot = rad * (180 / Math.PI) * -1 + 180;

			this.eye.style.cssText = `
							-webkit-transform: rotate(${rot}deg);
							-moz-transform: rotate(${rot}deg);
							-ms-transform: rotate(${rot}deg);
							transform: rotate(${rot}deg);
					`;
		},
	},
	beforeDestroy() {
		window.removeEventListener("mousemove", this.onMouseMove, {passive: true})
	},
};

</script>

<style lang="scss">
.projects-list {
  height: 100vh;
  width: 100%;
  position: relative;
  &__shadow {
    height: 100vh;
    width: 100%;
    opacity: 0.5;
  }
  &__title {
    position: absolute;
    left: 72px;
    bottom: 72px;
    // z-index: 2;
    &-text {
      font-family: "ThinItalic", Arial;
      font-style: italic;
      font-weight: 300;
      font-size: 62px;
      line-height: 100%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-feature-settings: "pnum"on, "lnum"on, "kern"off;
      color: #ffffff;
      &--roman {
        font-family: "Roman", Arial;
        font-style: normal;
        font-weight: normal;
      }
    }
  }
}

.switch {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  &__list {
    display: flex;
    margin-left: 9px;
  }
  &__item {
    position: relative;
    overflow: hidden;
    &--selected {
      .switch__line {
        transform: translateX(0);
      }
      &:hover {
        .switch__line {
          animation: "under-line"1s;
        }
      }
    }
    &:last-child {
      margin-left: 4px;
    }
    &:hover {
      .switch__line {
        transform: translateX(0);
      }
    }
  }

  &__link {
    font-family: "Light", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    text-transform: uppercase;
    font-feature-settings: "pnum"on, "lnum"on, "zero"on, "hist"on, "ss12"on, "kern"off;
    color: #ffffff;
    background: unset;
    cursor: pointer;
  }

  &__line {
    position: absolute;
    height: 1px;
    width: 100%;
    background: #fff;
    transform: translateX(-100%);
    display: block;
    transition: 0.3s ease;
    bottom: 0;
  }
}

.eye {
  width: 38px;
  height: 15px;
  // object-fit: cover;
  &__pupil {
    position: relative;
    display: inline-block;
    border-radius: 50%;
    right: -15px;
    height: 11px;
    width: 9px;
    &::after {
      content: "";
      position: absolute;
      bottom: 5px;
      right: 1px;
      width: 7px;
      height: 7px;
      background: #fff;
      border-radius: 50%;
    }
  }
  &__img {
    // object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
}

.projects-slider {
  height: 100vh;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  &__title {
    margin: 149px 0 98px;
    opacity: .5;
    font-family: 'ThinItalic', Arial;
    font-style: italic;
    font-weight: 300;
    font-size: 50px;
    line-height: 120%;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
    color: #FFFFFF;
    span {
      font-family: 'Roman', Arial;
      font-style: normal;
      font-weight: normal;
      line-height: 110%;
    }
  }
  &__description {
    font-family: 'Light', Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #FFFFFF;
    margin: 0 0 19px;
    opacity: .5;
    span {
      font-family: 'LightItalic', Arial;
    }
  }
  &__link {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    &--head {
      height: 100vh;
    }
  }
  &__item {
    &.swiper-slide-active {
      .projects-slider {
        &__title {
          opacity: 1;
        }
        &__description {
          opacity: 1;
        }
      }
    }
  }
  .swiper {
    &-wrapper {
      position: absolute;
      right: 64px;
      width: calc(33% - 64px);
      z-index: 10;
      flex-direction: column;
    }
    &-slide {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid hsla(0,0%,100%,.3);
      height: fit-content !important;
      z-index: 10;
    }
  }
}
</style>
