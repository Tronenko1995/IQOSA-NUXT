<template>
	<swiper ref="projectName" :options="swiperOptions" class="projects-name__title">
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
</template>
 
<script>
	export default {
		data() {
			return {
				swiperOptions: {
					speed: 500,
					loop: true,
					direction: 'vertical',
					slidesPerView: 1,
					dragSize: 22,
				}
			}
		},
		computed: {
			swiper() {
				return this.$refs.projectName.$swiper
			}
		},
	}
</script> 

<style lang="scss">
.projects-name {
	&__title {
    position: relative;
    margin-bottom: 24px;
    height: 72px;
    overflow: hidden;
	}
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

        font-family: 'ThinItalic', Arial;
        font-weight: 300;
        font-size: 62px;
        line-height: 100%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        span {
            font-family: 'Roman', Arial;
            font-weight: normal;
            letter-spacing: unset;
        }
    }
    &__link {

    }
}
</style>