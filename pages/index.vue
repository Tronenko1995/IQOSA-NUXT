<template>
	<main>
		<div class="main">
			<div class="main__wrap">
				<div class="main__row">
					<div class="motto">
						<ul class="motto__list">
							<li class="motto__item">The water is perfect.</li>
							<li class="motto__item">It's changeable, adaptive, creates</li>
							<li class="motto__item">new forms and destroys old ones.</li>
							<li class="motto__item">IQOSA's like water...</li>
						</ul>
					</div>
					<p class="main__title">Creates</p>
				</div>
				<div class="main__row">
					<p class="main__title main__title--italic">A perfect</p>
					<div class="make-request" @mouseover="animateTextShow($event)" @mouseleave="animateTextHide($event)">
						<nuxt-link to="/sayhi" class="make-request__link">
							<span class="make-request__text">Make request</span>
							<span class="make-request__change">
								<span class="make-request__span make-request__span--first">now</span>
								<span class="make-request__span">now</span>
							</span>
						</nuxt-link>
						<span class="make-request__line"></span>
					</div>
				</div>
			</div>
		</div>

	</main>
</template>

<script>
export default {
	mounted() {
		this.animate()
	},
	methods: {
	animate() {

		},
		animateTextShow(e) {
			if (e.target.classList.contains('make-request__text')) {
				this.$gsap.to(e.target.nextElementSibling.children[0], { 
					translateY: -100 + "%",
					duration: .5
				})
				this.$gsap.to(e.target.nextElementSibling.children[1], { 
					translateY: -100 + "%",
					duration: .5
				})
			} else if (e.target.classList.contains('make-request__link')) {
				this.$gsap.to(e.target.children[1].children[0], { 
					translateY: -100 + "%",
					duration: .5
				})
				this.$gsap.to(e.target.children[1].children[1], { 
					translateY: -100 + "%",
					duration: .5
				})
			} else if (e.target.classList.contains('make-request__span--first')) {
				this.$gsap.to(e.target, { 
					translateY: -100 + "%",
					duration: .5
				})
				this.$gsap.to(e.target.nextElementSibling, { 
					translateY: -100 + "%",
					duration: .5
				})
			}
		},
		animateTextHide(e) {
			if (e.target.classList.contains('make-request')) {
				this.$gsap.to(e.target.children[0].children[1].children[0], { 
					translateY: 0 + "%",
					duration: .5
				})
				this.$gsap.to(e.target.children[0].children[1].children[1], { 
					translateY: 0 + "%",
					duration: .5
				})
			}
		}
	}
}
</script>

<style lang="scss">
.main {
	display: flex;
	justify-content: center;
	width: 100%;
	&__wrap {
		height: 100vh;
		padding: 35px 0 0;
		width: 100%;
		max-width: 1300px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__title {
		font-size: 172px;
		text-transform: uppercase;
		font-weight: 400;
		font-family: Roman, Arial;
		color: #fff;
		&--italic {
			letter-spacing: .05em;
			font-weight: 300;
			font-family: ThinItalic, Arial;
		}
	}
}
.make-request {
	width: 214px;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	cursor: pointer;
	position: relative;
	&__change {
		display: block;
		overflow: hidden;
			span {
				display: block;
					&:last-child {
						position: absolute;
					}
			}
	}
	&__link {
		display: flex;
		justify-content: space-between;
		font-family: Light, Arial;
		font-weight: 300;
		color: #fff;
		font-size: 17px;
		line-height: 140%;
		margin-bottom: 2px;
		// transform: translate(0px, 100%);
		text-transform: uppercase;
		&:hover + {
			.make-request__line {
				animation: 'under-line' 1s;
				transition: .3s ease;
			}
		}
	}
	&__line {
		position: absolute;
		height: 1px;
		width: 0;
		background: #fff;
		display: block;
		transition: .3s ease;
		bottom: 0;
		width: 100%;
	}
}
.motto {
	&__list {

	}
	&__item {
		font-size: 20px;
		font-family: Light, Arial;
		font-weight: 300;
		line-height: 140%;
		color: #fff;
		text-transform: uppercase;
	}
}
</style>