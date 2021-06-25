<template>
	<swiper ref="projectAddress" :options="swiperOptions" class="projects__address  projects-address">
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
 
<script>
	export default {
		props: {
			adressSliderCb: {
				type: Function,
				default: () => {}
			}
		},
		data() {
			return {
				swiperOptions: {
					speed: 700,
					loop: true,
					direction: 'vertical',
					dragSize: 22,
					slidesPerView: 1,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.projectAddress.$swiper
			}
		},
		mounted() {
			this.adressSliderCb(this.swiper)
		}
	}
</script> 

<style lang="scss">
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
</style>