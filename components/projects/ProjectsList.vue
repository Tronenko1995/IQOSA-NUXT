<template>

	<section class="projects-list">
    <IqosaCursor />
		<div class="projects-list__shadow"></div>
    <div ref="shaderObj" class="projects-list__shader">
      <div v-for="(item, i) in list" :key="i" :data-img="getImg(item.main_picture)" class="multi-textures__area"></div>
    </div>

		<h1 class="projects-list__title">
			<span v-if="data.projects_title" class="projects-list__title-text">{{ data.projects_title.thin_text }}</span>
			<span v-if="data.projects_title" class="projects-list__title-text projects-list__title-text--roman">{{ data.projects_title.bold_text }}</span>
		</h1>

    <SwitchProjects class="switch-project-list" :view="view" :data="data"/>

		<div v-swiper:projectsSlider="projectsSetting" ref="projects" class="projects-slider" data-cursor="eye">
			<!-- <nuxt-link class="projects-slider__link projects-slider__link--head" :to="localePath(projectLink)"></nuxt-link> -->


      <a id="projectLink" @click.prevent="go($event)" class="projects-slider__link projects-slider__link--head" :href="localePath(`/project/${list[0].link}`)" :data-link="list[0].link"></a>
			<div class="swiper-wrapper" data-cursor="drag">
				<div v-for="(item, i) in list" :key="i" class="swiper-slide projects-slider__item" :data-link="item.link">
          <!-- <a href=""></a> -->
          <a class="projects-slider__link" @click.prevent="goPage(`/project/${item.link}`)" :href="localePath(`/project/${item.link}`)"></a>
            <p class="projects-slider__title">
              <span>{{ item.type }}</span>-{{ item.number }}
            </p>
            <p class="projects-slider__description">
              {{ item.release_date }}, <span>{{ item.city }}</span>, {{ item.country }}, {{ item.area }}M2
            </p>
				</div>
			</div>
		</div>

	</section>

</template>

<script>
import gsap from "gsap"
import { mapMutations } from 'vuex'
import * as THREE from "three"
import fragment from "~/static/projectsSlider/shader/fragment.glsl"
import vertex from "~/static/projectsSlider/shader/vertex.glsl"
export default {
  props: {
    view: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      // required: true
    },
    list: {
      type: Array,
      // required: true
    }
  },
	data() {
		return {
      baseUrl: process.env.baseUrl,
			projectsSetting: {
				speed: 750,
				loop: true,
				direction: "vertical",
				slidesPerView: "auto",
        observer: true,
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
  beforeMount() {

  },
	mounted() {
    let active_el
    let project_slider = document.querySelector('.projects-slider');
    let project_list_slider_link = project_slider.querySelector("#projectLink");

    let margTop = window.innerHeight/2 - project_slider.querySelector(".swiper-slide").clientHeight/2
    // console.log(margTop)
    // this.projectsSetting.slidesOffsetBefore = margTop
    this.projectsSlider.params.slidesOffsetBefore = margTop

    // this.projectsSlider.init()
    this.projectsSlider.update()
    // console.log(this.projectsSlider)
    // console.log(this.projectsSetting)

    // let margTop = window.innerHeight/2 - project_slider.querySelector(".swiper-slide").clientHeight/2;

    if (this.preloader) {
      setTimeout(() => {
          this.setPlug(false)
      }, 3500);
    } else {
      setTimeout(() => {
          this.setPlug(false)
      }, 1000);
    }
        // this.$refs.linkItem.setAttribute("href", `/project/${active_el.dataset.link}`);
		// this.projectLink = `/${this.$i18n.locale}/project/${this.list[0].link}`
		// this.projectDataLink = this.list[0].link

    this.shader.item = this.$refs.shaderObj

    this.initShader()
		// this.projectLink = this.$refs.projectsLink
    // console.log(this.projectsSlider)

    // setTimeout(() => {

    // }, 500)

    // this.projectsSlider.extendDefaults({slidesOffsetBefore: margTop})
    this.projectsSlider.on('slideChange', (e) => {
      this.projectsSlider.allowSlideNext = false
      this.projectsSlider.allowSlidePrev = false


      // console.log(active_el)
      // this.projectLink = e.$el[0].children[1].children[e.activeIndex].dataset.link
      // console.log(this.projectsSlider)
      // console.dir(this.projectsSlider)

          active_el = e.$el[0].querySelector(`[data-swiper-slide-index="${e.realIndex}"]`);
          if (active_el) {
        // project_list_slider_link.setAttribute("href", active_el.dataset.sliderUrl);
        // console.log('this.projectLink', this.projectLink)
        // console.log('active_el.dataset.link', active_el.dataset.link)
        // this.projectLink = active_el.dataset.link
        project_list_slider_link.setAttribute("href", `/${this.$i18n.locale}/project/${active_el.dataset.link}`);
        project_list_slider_link.setAttribute("data-link", active_el.dataset.link);
          }

        setTimeout(() => {
          this.projectsSlider.allowSlideNext = true
          this.projectsSlider.allowSlidePrev = true
        // console.log('this.projectLink', this.projectLink)
        }, 2000)

        this.changeImg(this.projectsSlider.realIndex)

        // let active_el = this.projectsSlider.$el[0].querySelector(`[data-swiper-slide-index="${this.projectsSlider.realIndex}"]`);
        // if (active_el) {
          // this.link.url = active_el.dataset.url
        // }
      })
	},


  computed: {
    preloader() { return this.$store.getters['preloader/preloader'] },
    duration() { return this.$store.getters['plug/duration'] }
  },
	methods: {
    ...mapMutations({
			setAnimate: 'plug/setAnimate',
      setPlug: 'plug/setVisible',
    }),
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
        // this.renderer.setSize(this.texture.active.image.naturalWidth, this.texture.active.image.naturalHeight)
        this.setRendererSize();
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
          this.shader.animation = gsap.to(this.mat.uniforms.dispFactor, {
              duration: 0.75,
              value: 1,
              onComplete: this.getActiveTexture()
          })
      }
      // this.renderer.setSize(this.texture.active.image.naturalWidth, this.texture.active.image.naturalHeight)
      this.setRendererSize();
    },
    setRendererSize() {
      const {naturalWidth, naturalHeight} = this.texture.active.image;
      this.renderer.setSize(naturalWidth, naturalHeight)
      this.renderer.domElement.style.transform = `translate(-50%, -50%) scale(${window.innerWidth/naturalWidth})`
    },
    getActiveTexture() {
      this.texture.active =  this.shader.images[this.shader.active]
      this.shader.flag = false
    },
    onWindowResize() {
      this.setRendererSize();
      // this.renderer.setSize(this.texture.active.image.naturalWidth, this.texture.active.image.naturalHeight)
    },
    passView() {
      // console.log(e)
      // this$emit('view')
    },
    getImg(img) {
      return `${this.baseUrl}${img}`
    },
    go(e) {
      let link = e.target.dataset.link
      this.goPage(`/project/${link}`)
    },
    goPage(fullLink) {
      this.setAnimate('up')
      this.setPlug(true)
      setTimeout(() => {
          this.setAnimate('dissolve')
          this.$router.push(this.localePath(fullLink))
      }, 1000);
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
    display: flex;
    flex-direction: column;
    // z-index: 2;
    &-text {
      font-family: "ThinItalic", Arial;
      // font-style: italic;
      font-weight: 300;
      font-size: 62px;
      line-height: 100%;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      // font-feature-settings: "pnum"on, "lnum"on, "kern"off;
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
    // margin: 149px 0 98px;
    margin: 98px 0 44px;
    opacity: .5;
    font-family: 'ThinItalic', Arial;
    // font-style: italic;
    font-weight: 300;
    font-size: 50px;
    line-height: 120%;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
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
    // font-feature-settings: 'pnum' on, 'lnum' on;
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
      @media (min-height: 800px) {
        top: -80px;
      }
      @media (min-height: 1000px) {
        top: -0;
      }
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
  // min-width: 100% !important;
  // min-height: 100% !important;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

@media (max-width: 1440px) {
  .projects-list {
    &__title {
      left: 64px;
      bottom: 64px;
    }
  }
  .projects-slider {
    &__title {
      margin: 98px 0 44px;
    }
  }
  .switch {
    .switch-project-list {
      bottom: 44px;
    }
  }
}

@media (max-width: 1280px) {
  .projects-list {
    &__title {
      left: 56px;
      bottom: 56px;
      &-text {
        font-size: 52px;
      }
    }
  }
  .projects-slider {
    &__title {
      margin: 89px 0 46px;
      font-size: 46px;
    }
  }
  .switch {
    .switch-project-list {
      bottom: 36px;
    }
  }
}
@media (max-width: 1024px) {
  .projects-list {
    &__title {
      left: 56px;
      bottom: 56px;
      &-text {
        font-size: 52px;
      }
    }
  }
  .projects-slider {
    &__title {
      margin: 96px 0 58px;
      font-size: 42px;
    }
    &__description {
      font-size: 12px;
    }
  }
  .switch {
    .switch-project-list {
      bottom: 36px;
    }
  }
}
</style>
