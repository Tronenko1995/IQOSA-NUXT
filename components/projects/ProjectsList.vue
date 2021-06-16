<template>

	<section class="projects-list">
    <IqosaCursor />
		<div class="projects-list__shadow"></div>
    <div ref="shaderObj" class="projects-list__shader">
      <div :data-img="require('~/assets/img/projects/shader/1.jpg')" class="multi-textures__area"></div>
      <div :data-img="require('~/assets/img/projects/shader/2.jpg')" class="multi-textures__area"></div>
      <div :data-img="require('~/assets/img/projects/shader/3.jpg')" class="multi-textures__area"></div>
      <div :data-img="require('~/assets/img/projects/shader/4.jpg')" class="multi-textures__area"></div>

      <!-- <div data-img="https://iqosa.com/wp-content/uploads/2021/03/1.7.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/02/13-4.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/02/05-2.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/02/09.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/02/09-1.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/1.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/1-1.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/1-3.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/1-4.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/3-3.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2021/01/render_2-3-e1611310593828.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/1-8.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/1-6.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/3-4.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/1-1-1.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/1-3.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/14-2.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/13.jpg" class="multi-textures__area"></div>
      <div data-img="https://iqosa.com/wp-content/uploads/2020/12/3-1.jpg" class="multi-textures__area"></div> -->
    </div>

		<div class="projects-list__title">
			<p class="projects-list__title-text">Featured</p>
			<p class="projects-list__title-text projects-list__title-text--roman">cases</p>
		</div>

    <SwitchProjects :view="view" />

		<div v-swiper:projectsSlider="projectsSetting" ref="projects" class="projects-slider" data-cursor="eye">
			<nuxt-link ref="linkItem" class="projects-slider__link projects-slider__link--head" :to="link.url"></nuxt-link>
			<div class="swiper-wrapper" data-cursor="drag">
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
				<div class="swiper-slide projects-slider__item" data-url="/project/iq-94-or/">
          <nuxt-link class="projects-slider__link" to="/project/iq-94-or/"></nuxt-link>
            <p class="projects-slider__title">
              <span>IQ</span>-94-OR
            </p>
            <p class="projects-slider__description">
              2021,<span>Kyiv</span>, Ukraine, 181M2
            </p>
				</div>
			</div>
		</div>

	</section>

</template>

<script>
import * as THREE from "three"
import fragment from "~/static/projectsSlider/shader/fragment.glsl"
import vertex from "~/static/projectsSlider/shader/vertex.glsl"
export default {
  props: {
    view: {
      type: String,
      required: true
    }
  },
	data() {
		return {
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
			},
      shader: {
        item: null,
        images: [],
        active: 0,
        animation: null,
        flag: false,
        index: null
      },
      texture: {
        active: null,
        next: null,
      },
      mat: null,
      renderer: null
		}
	},
	mounted() {
    this.shader.item = this.$refs.shaderObj

    this.initShader()

		this.projectLink = this.$refs.projectsLink
    console.log(this.projectsSlider)
    this.projectsSlider.on('slideChange', () => {
      this.projectsSlider.allowSlideNext = false
      this.projectsSlider.allowSlidePrev = false

        setTimeout(() => {
          this.projectsSlider.allowSlideNext = true
          this.projectsSlider.allowSlidePrev = true
        }, 2000)

        this.changeImg(this.projectsSlider.realIndex)

        // let active_el = this.projectsSlider.$el[0].querySelector(`[data-swiper-slide-index="${this.projectsSlider.realIndex}"]`);
        // if (active_el) {
          // this.link.url = active_el.dataset.url
        // }
      })
	},
	methods: {
    initShader() {
      let scene = new THREE.Scene()
      let camera = new THREE.OrthographicCamera(
        this.shader.item.offsetWidth / -2,
        this.shader.item.offsetWidth / 2,
        this.shader.item.offsetHeight / 2,
        this.shader.item.offsetHeight / -2,
        1,
        1000
      )
      camera.position.z = 1

      this.renderer = new THREE.WebGLRenderer({
        antialias: false
      })

      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setClearColor(0xffffff, 0.0)
      this.shader.item.append(this.renderer.domElement)

      let loader = new THREE.TextureLoader()
      loader.crossOrigin = ''

      this.shader.item.querySelectorAll('.multi-textures__area').forEach(item => {
        this.shader.images.push(loader.load(item.dataset.img))
      })

      this.texture.active = this.shader.images[0]
      this.texture.next = this.shader.images[1]

      let disp = loader.load(require('~/assets/img/projects/shader/disp.png'))
      disp.wrapS = disp.wrapT = THREE.RepeatWrapping

      this.texture.active.magFilter = this.texture.next.magFilter = THREE.LinearFilter
      this.texture.active.minFilter = this.texture.next.minFilter = THREE.LinearFilter

      this.texture.active.anisotropy = this.renderer.getMaxAnisotropy()
      this.texture.next.anisotropy = this.renderer.getMaxAnisotropy()

      this.mat = new THREE.ShaderMaterial({
        uniforms: {
            effectFactor: {type: "f", value: 0.2},
            dispFactor: {type: "f", value: 0.0},
            texture1: {type: "t", value: this.texture.active},
            texture2: {type: "t", value: this.texture.next},
            disp: {type: "t", value: disp}
        },

        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        opacity: 1.0
    })

    let geometry = new THREE.PlaneBufferGeometry(
      this.shader.item.offsetWidth,
      this.shader.item.offsetHeight,
      1
    )

    let mesh = new THREE.Mesh(geometry, this.mat)
    scene.add(mesh)

    setTimeout(() => {
        this.renderer.setSize(this.texture.active.image.naturalWidth, this.texture.active.image.naturalHeight)
    }, 1000)

    let animate = () => {
      requestAnimationFrame(animate)
      this.renderer.render(scene, camera)
    }
    animate()

    window.addEventListener("resize", this.onWindowResize)
    },
    changeImg(index) {
      this.shader.index = index

      if (this.shader.active != index) {
          this.shader.active = index
          this.texture.next = this.shader.images[this.shader.active]
          this.mat.uniforms.disp = {type: "t", value: this.shader.images[this.shader.active]}
          this.texture.active.magFilter = this.texture.next.magFilter = THREE.LinearFilter
          this.texture.active.minFilter = this.texture.next.minFilter = THREE.LinearFilter

          this.mat.uniforms.dispFactor.value = 0.0
          this.mat.uniforms.texture1.value = this.texture.active
          this.mat.uniforms.texture2.value = this.texture.next

          if (this.shader.flag) {
              this.shader.animation.paused(0)
          }
          this.shader.flag = true
          this.shader.animation = this.$gsap.to(this.mat.uniforms.dispFactor, {
              duration: 0.75,
              value: 1,
              onComplete: this.getActiveTexture()
          })
      }
    },
    getActiveTexture() {
      this.texture.active =  this.shader.images[this.shader.active]
      this.shader.flag = false
    },
    onWindowResize() {
      this.renderer.setSize(this.texture.active.image.naturalWidth, this.texture.active.image.naturalHeight)
    },
    passView() {
      console.log(e)
      // this$emit('view')
    }
	},
	beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize)
	},
}

</script>

<style lang="scss">
.projects-list {
  overflow: hidden;
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
  &__shader {
    width: 100vw;
    height: 100vh;
    opacity: .5;
  }
}

.switch {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 2;
  padding: 20px;
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
          animation: "under-line" 1s;
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
  position: relative;
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
    cursor: none;
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
.projects-list canvas{
  min-width: 100% !important;
  min-height: 100% !important;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
