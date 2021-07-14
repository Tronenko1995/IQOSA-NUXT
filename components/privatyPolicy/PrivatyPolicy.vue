<template>
	<main class="private-policy-page">
		<section class="privaty-policy">
			<div class="privaty-policy__info">
				<div class="privaty-policy__title privaty-policy__title--uno">privaty</div>
				<div class="privaty-policy__row">
					<Motto class="motto motto--privaty" :motto-list="mottoList"/>
					<div class="privaty-policy__title privaty-policy__title--dos">policy</div>
				</div>
			</div>

        <ul class="privaty-policy__list">
            <li class="job" ref="job" v-for="item in privaty" :key="item.id">
                <hr class="job__line">
                <div class="job__info">
                    <h2 class="job__title">{{ item.title }}</h2>
                    <div class="job__text" v-html="item.text"></div>
                </div>
                <hr class="job__line job__line--last" v-if="item.id === privaty.length">
            </li>
        </ul>
		</section>
	</main>
</template>

<style lang="scss">
.privaty-policy {
	width: 978px;
}
</style>

<script>
import { mapMutations } from 'vuex'
export default {
	data() {
		return {
			mottoList: [
				'Lorem ipsum dolor sit amet,',
				'consectetur adipiscing elit,',
				'eiusmod ut labore ',
	  		],
            privaty: [
                {
                    id: 1,
                    title: 'Personal information is data that can be used to identify or contact a single person',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                },
                {
                    id: 2,
                    title: 'What personal information we collect',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.',
                },
                {
                    id: 3,
                    title: 'cookie policy',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                },
            ]
		}
  	},
	mounted() {
        this.$gsap.registerPlugin(this.$ScrollTrigger);
		if (this.preloader) {
			setTimeout(() => {
				this.setPlug(false)
				this.animate()
			}, this.duration.preloader);
		} else {
			setTimeout(() => {
				this.setPlug(false)
				this.animate()
			}, this.duration.page);
		}
	},
	computed: {
		preloader() { return this.$store.getters['preloader/preloader'] },
		duration() { return this.$store.getters['plug/duration'] }
	},
  	methods: {
		...mapMutations({
			setPlug: 'plug/setVisible',
		}),
    	animate() {
      		const mottoItem = document.querySelectorAll('.motto__item span'),
				title1 = document.querySelector('.privaty-policy__title--uno'),
				title2 = document.querySelector('.privaty-policy__title--dos')
      		let delay = 1,
			  	tl

			this.$ScrollTrigger.create(
				{
					trigger: title1,
					start: "top bottom",
				},
				tl = this.$gsap.timeline()
			);
			this.$gsap.to(title1, {translateX: 0, opacity: 1, duration: 1})

			this.$ScrollTrigger.create(
				{
					trigger: title2,
					start: "top bottom",
				},
				tl = this.$gsap.timeline()
			);
			this.$gsap.to(title2, {translateX: 0, opacity: 1, duration: 1})

			Array.from(mottoItem).forEach((item)=> {

			this.$ScrollTrigger.create(
				{
					trigger: item,
					start: "top bottom",
				},
				tl = this.$gsap.timeline()
			);

			this.$gsap.to(item, {
				delay: delay,
				translateY: 0,
				duration: 0.5
          	})
			
			delay = delay + 0.25

			})
		}
  	}
}
</script>

<style lang="scss">
.privaty-policy {
	margin-top: 367px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 164px;
	display: flex;
	flex-direction: column;
	width: 978px;
	&__title {
		display: flex;
		font-family: 'Roman', Arial;
		font-style: normal;
		font-weight: normal;
		font-size: 148px;
		line-height: 90%;
		text-transform: uppercase;
		font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
		color: #FFFFFF;
		transform: translateX(-300px);
		opacity: 0.5;
		&--dos {
			font-family: 'ThinItalic', Arial;
			font-style: italic;
			font-weight: 300;
			letter-spacing: 0.05em;
			align-self: flex-end;
			justify-self: flex-end;
			transform: translateX(300px);
			opacity: 0.5;
		}
	}
	&__row {
		display: flex;
		justify-content: space-between;
	}
	&__list {
		counter-reset: privaty;
		margin-top: 164px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
}

.motto {
	&--privaty {
		margin-top: 15px;
	}
}

.job {
    width: 978px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
    padding-bottom: 96px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
	&:last-child {
		padding-bottom: 0px;
	}
	&::after {
		position: absolute;
		top: 20px;
		left: 0;
		counter-increment: privaty;
		content: counter(privaty, decimal-leading-zero);
		font-family: 'Light', Arial;
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 100%;
		text-transform: uppercase;
		font-feature-settings: 'pnum' on, 'lnum' on, 'zero' on, 'hist' on, 'ss12' on, 'kern' off;
		color: #FFFFFF;
		display: block;
	}
    &__line {
        height: 1px;
        width: 100%;
        background: #fff;
		opacity: 0.3;
        &--last {
            display: none;
        }
    }
    &__info {
		width: 755px;
        margin-top: 16px;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        overflow: hidden;
    }
	&__text {
		font-family: 'Light';
		font-style: normal;
		font-weight: 300;
		font-size: 22px;
		line-height: 140%;
		font-feature-settings: 'pnum' on, 'lnum' on;
		color: #FFFFFF;
		margin-top: 16px;
	}
}


@media (max-width: 1440px) {
	.privaty-policy {
		margin-top: 305px;
		margin-bottom: 156px;
		&__list {
			margin-top: 156px;
		}
	}
}

@media (max-width: 1280px) {
	.privaty-policy {
		margin-top: 311px;
		margin-bottom: 148px;
		&__title {
			font-size: 116px;
		}
		&__list {
			margin-top: 148px;
		}
		&__info {
			width: 785px;
			margin: 0 auto;
		}
	}
	.motto {
		&--privaty {
			margin-top: 10px;
		}
	}
	.job {
		&__title {
			font-size: 46px;
		}
		&__text {
			font-size: 16px;
		}
	}
}

@media (max-width: 1024px) {
	.privaty-policy {
		margin-top: 297px;
		margin-bottom: 132px;
		&__title {
			font-size: 108px;
		}
		&__list {
			margin-top: 132px;
		}
		&__info {
			width: 686px;
		}
	}
	.job {
		&__title {
			font-size: 42px;
		}
		&__info {
    		width: calc(100% - 200px);
		}
		width: 912px;
	}
}

@media (max-width: 978px) {
	.privaty-policy {
		width: 100%;
		padding: 0 56px;
	}
	.job {
		width: 100%;
	}
}

@media (max-width: 768px) {
	.privaty-policy {
		margin-top: 242px;
		margin-bottom: 132px;
		padding: 0 48px;
		&__title {
			font-size: 88px;
		}
		&__info {
			width: 592px;
		}
	}
	.job {
		padding-bottom: 88px;
		&__title {
			font-size: 36px;
		}
		&__text {
			font-size: 16px;
		}
		&__info {
			width: calc(100% - 100px);
		}
	}
}
@media (max-width: 688px) {
	.privaty-policy {
		&__info {
			width: 100%;
		}
	}
}
@media (max-width: 650px) {
	.privaty-policy {
		&__info {
			width: 100%;
		}
		&__row {
			position: relative;
    		justify-content: flex-end;
		}
	}
	.motto {
		&--privaty {
			position: absolute;
			top: 100%;
			left: 0;
		}
	}
}
@media (max-width: 500px) {
	.privaty-policy {
		padding: 0 16px;
		&__title {
			font-size: 56px;
		}
		&__list {
			margin-top: 200px;
		}
	}
	.job {
		padding-bottom: 56px;
		&::after {
			display: none;
		}
		&__info {
			width: 100%;
		}
		&__title {
			font-size: 32px;
		}
		&__line {
			&--last {
				display: block;
				margin-top: 56px;
			}
		}
	}
	.motto {
		width: 100%;
		text-align: center;
		&--privaty {
			position: absolute;
			top: 100%;
			left: 50%;
			transform: translateX(-50%);
			margin-top: 64px;
		}
	}
}
@media (max-width: 414px) {
	.privaty-policy {
		margin-top: 187px;
		margin-bottom: 88px;
	}
}
</style>