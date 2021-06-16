<template>
  <div class="switch">

    <div class="switch__eye eye">
      <div ref="eye" class="eye__pupil"></div>
      <img class="eye__img" :src="require('~/assets/svg/eye.svg')" width="38" height="15" alt="" />
    </div>

    <ul class="switch__list">
      <li class="switch__item" :class="{'switch__item--selected': view === 'grid'}">
        <button class="switch__link" @click="setView('grid')">Grid</button>
        <span class="switch__line"></span>
      </li>
      <li class="switch__item">
        <p class="switch__link">,</p>
      </li>
      <li class="switch__item" :class="{'switch__item--selected': view === 'list'}">
        <button class="switch__link" @click="setView('list')">List</button>
        <span class="switch__line"></span>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    view: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eye: null,
    }
  },
  mounted() {
		this.eye = this.$refs.eye
		window.addEventListener("mousemove", this.onMouseMove, {passive: true})

  },
  methods: {
    ...mapMutations({
        setView: 'projects/setView'
    }),
    onMouseMove() {
			let rect = this.eye.getBoundingClientRect()

			let offset = {
				top: rect.top + window.scrollY,
				left: rect.left + window.scrollX,
			}
			let x = offset.left + this.eye.offsetWidth / 2
			let y = offset.top + this.eye.offsetHeight / 2
			let rad = Math.atan2(event.pageX - x, event.pageY - y)
			let rot = rad * (180 / Math.PI) * -1 + 180

			this.eye.style.cssText = `
      -webkit-transform: rotate(${rot}deg);
      -moz-transform: rotate(${rot}deg);
      -ms-transform: rotate(${rot}deg);
      transform: rotate(${rot}deg);`
		},
  },
	beforeDestroy() {
		window.removeEventListener("mousemove", this.onMouseMove, {passive: true})
	},
}
</script>
