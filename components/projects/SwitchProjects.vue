<template>
  <div class="switch">

    <div class="switch__eye eye">
      <div ref="eye" class="eye__pupil"></div>
      <img class="eye__img" :src="require('~/assets/svg/eye.svg')" width="38" height="15" alt="" />
    </div>

    <ul class="switch__list">
      <li class="switch__item" :class="{'switch__item--selected': view === 'grid'}">
        <button class="switch__link" @click="changeView('grid')">{{ data.projects_block_text }}</button>
        <span class="switch__line"></span>
      </li>
      <li class="switch__item">
        <p class="switch__link">,</p>
      </li>
      <li class="switch__item" :class="{'switch__item--selected': view === 'list'}">
        <button class="switch__link" @click="changeView('list')">{{ data.projects_list_text }}</button>
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
    },
    data: {
      type: Object,
      // required: true
    },
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
        setView: 'projects/setView',
        setPlug: 'plug/setVisible',
        setAnimate: 'plug/setAnimate',
    }),
    changeView(view) {
      setTimeout(() => {
        this.setView(view)
      }, 1000);
      this.setPlug(true)
      this.setAnimate('page')
    },
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

<style lang="scss">
.switch {
  display: flex;
  z-index: 2;
  &.switch-project-list {
    position: absolute;
    bottom: 54px;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px;
  }
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
    // font-feature-settings: "pnum"on, "lnum"on, "zero"on, "hist"on, "ss12"on, "kern"off;
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

@media (max-width: 1440px) {
  .switch {
    &.switch-project-list {
      bottom: 44px;
    }
  }
}

@media (max-width: 1280px) {
  .switch {
    &.switch-project-list {
      bottom: 36px;
    }
  }
}
@media (max-width: 1024px) {
  .switch {
    &.switch-project-list {
      bottom: 36px;
    }
  }
}
@media (max-width: 768px) {
  .switch {
    display: none;
  }
}
</style>
