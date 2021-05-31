<template>
	<main class="index">
        <IcosahedronMain />
		<div class="main">
			<div class="main__wrap">
				<div class="main__row main__row--first">
					<div class="motto">
						<ul class="motto__list">
							<li class="motto__item motto__item--uno">
								<span>The water is perfect.</span>
							</li>
							<li class="motto__item motto__item--dos">
								<span>It's changeable, adaptive, creates</span>
							</li>
							<li class="motto__item motto__item--tres">
								<span>new forms and destroys old ones.</span>
							</li>
							<li class="motto__item motto__item--quatro">
								<span>IQOSA's like water...</span>
							</li>
						</ul>
					</div>
					<p class="main__title main__title--first">Creates</p>
				</div>
				<div class="main__row">
					<p class="main__title main__title--second main__title--italic">A perfect</p>
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
				<div class="main__row main__row--last">
					<p class="main__title main__title--last">Design</p>
				</div>
			</div>
		</div>

	</main>
</template>

<script>
// import { gsap } from "gsap/dist/gsap";
// import { SplitText } from "gsap/dist/SplitText";
import IcosahedronMain from '@/components/IcosahedronMain.vue'
export default {
    components: {
        IcosahedronMain
    },
	mounted() {
		this.animate()
		// gsap.registerPlugin(SplitText);
	},
	methods: {
		animate() {

		this.$gsap.registerPlugin(this.$SplitText);
		
		// let split = new SplitText('.motto__item', {type: "lines"})

			this.$gsap.to('.main__title', { 
				delay: 0.5,
				translateX: 0,
				opacity: 1,
				duration: 0.5
			})
			// gsap.to(split, {
            //     opacity: 0.5,
            //     duration: 1,
            // })
			this.$gsap.to('.motto__item--uno span', { 
				translateY: 0,
				delay: 1,
                duration: 0.25,
			})
			this.$gsap.to('.motto__item--dos span', { 
				translateY: 0,
				delay: 1.25,
                duration: 0.25,
			})
			this.$gsap.to('.motto__item--tres span', { 
				translateY: 0,
				delay: 1.50,
                duration: 0.25,
			})
			this.$gsap.to('.motto__item--quatro span', { 
				translateY: 0,
				delay: 1.75,
                duration: 0.25,
			})
			this.$gsap.to('.make-request__line', { 
				translateX: 0,
				delay: 2,
				duration: 0.5
			})
			this.$gsap.to('.make-request__link', { 
				translateY: 0,
				delay: 2.75,
				duration: 0.25
			})
			this.$gsap.to('.nav__item', { 
				translateY: 0,
				delay: 1,
                duration: 0.25,
			})
			this.$gsap.to('.lang__item', { 
				translateY: 0,
				delay: 1,
                duration: 0.25,
			})
			this.$gsap.to('.header__logo', { 
				opacity: 1,
				delay: 1,
                duration: 0.25,
			})
			this.$gsap.to('.icosahedron-main', { 
				opacity: 1,
				delay: 3,
			})
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
.index {
    overflow: hidden;
	position: fixed;
	width: 100%;
}
.main {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	padding: 35px 0 0;
	&__wrap {
		width: 100%;
		max-width: 1326px;
	}
	&__row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		&--last {
			justify-content: flex-end;
		}
	}
	&__title {
		font-size: 180px;
		line-height: 90%;
		text-transform: uppercase;
		font-weight: 400;
		font-family: Roman, Arial;
		color: #fff;
		font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
		opacity: 0;
		&--italic {
			letter-spacing: .05em;
			font-weight: 300;
			font-family: ThinItalic, Arial;
		}
		&--first {
			transform: translateX(300px);
		}
		&--second,
		&--last {
			transform: translateX(-300px);
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
		font-size: 16px;
		line-height: 140%;
		margin-bottom: 2px;
		transform: translate(0px, 100%);
		text-transform: uppercase;
		&:hover + {
			.make-request__line {
				animation: 'under-line' 1s;
				transition: .3s ease;
			}
		}
	}
	&__line {
		transform: translate(-105%, 0px);
		position: absolute;
		height: 1px;
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
		overflow: hidden;
		font-size: 22px;
		font-family: Light, Arial;
		font-weight: 300;
		line-height: 120%;
		color: #fff;
		text-transform: uppercase;
		font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
		span {
			transform: translateY(100%);
    		display: block;
		}
	}
}

@media (max-width: 1440px) {
	.main {
		&__wrap {
			max-width: 1223px;
		}
		&__title {
			font-size: 172px;
		}
	}
}
@media (max-width: 1280px) {
	.main {
		&__wrap {
			max-width: 980px;
		}
		&__title {
			font-size: 120px;
		}
	}
	.motto {
		&__item {
			font-size: 19px;
		}
	}
}
@media (max-width: 1024px) {
	.main {
		&__wrap {
			max-width: 729px;
		}
		&__title {
			font-size: 84px;
		}
	}
	.motto {
		&__item {
			font-size: 16px;
		}
	}
}
@media (max-width: 768px) {
	.main {
		&__wrap {
			max-width: 650px;
		}
		&__title {
			font-size: 70px;
		}
	}
	.motto {
		&__item {
			font-size: 15px;
		}
	}
}
@media (max-width: 669px) {
	.main {
		position: relative;
		&__wrap {
			max-width: unset;
			padding: 0 20px;
		}
		&__title {
			font-size: 69px;
		}
		&__row {
			&--first {
				justify-content: flex-end;
			}
		}
	}
	.motto {
		position: absolute;
    	top: 100px;
		left: 21px;
		&__item {
			font-size: 15px;
		}
	}
	.make-request {
		position: absolute;
		top: 70%;
	}
}
@media (max-width: 414px) {
	.main {
		&__wrap {
			padding: 0 15px;
		}
		&__title {
			font-size: 56px;
		}
	}
	.motto {
		position: absolute;
    	top: 100px;
		left: 21px;
		&__item {
			font-size: 15px;
		}
	}
}
</style>