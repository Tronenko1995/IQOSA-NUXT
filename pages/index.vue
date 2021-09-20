<template>
	<main class="index">
		<!-- <div class="scroll-container" ref="scrollContainer"> -->
			<!-- <IcosahedronMain /> -->
			<IcosahedronCrystal />
			<Main :data="data" />
			<Projects :data="data"/>
			<Team :data="data" v-if="desktop" />
			<TeamMobi :data="data" v-if="!desktop" />
			<Modals v-if="modal.show" :modal="modal"/>
		<!-- </div> -->
	</main>
</template>

<script>
import Main from '@/components/main/Main.vue'
import Projects from '@/components/main/Projects.vue'
import Team from '@/components/main/Team.vue'
import TeamMobi from '@/components/main/TeamMobi.vue'
export default {
	head() {
		return {
		title: this.data.seo_title,
			meta: [
				{
					hid: "description",
					name: "description",
					content: this.data.meta_description
				},
				{
					hid: 'og:title',
					name: 'og:title',
					property: 'og:title',
					content: this.data.seo_title,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					property: 'og:description',
					content: this.data.meta_description,
				},
				{
					hid: 'og:url',
					name: 'og:url',
					property: 'og:url',
					content: this.fullUrl
				},
				{
					hid: 'og:image',
					name: 'og:image',
					property: 'og:image',
					content: this.getImg(this.dataFooter.og_image),
				},
				{
					hid: 'og:image:width',
					name: 'og:image:width',
					property: 'og:image:width',
					content: '1080',
				},
				{
					hid: 'og:image:height',
					name: 'og:image:height',
					property: 'og:image:height',
					content: '1080',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
					property: 'twitter:card',
					content: 'summary_large_image',
				},
			],
		};
	},
	layout: 'main',
	components: {
		Main,
		Projects,
		Team,
		TeamMobi,
    },
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/main/getMainPageContent', `/main?lang=${i18n.locale}`)
		} catch(e) {
			redirect(`/404`);
			// throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    beforeMount() {
		window.addEventListener('resize', this.onWindowResize);
		this.testLang()
		this.testPage()
    },
	mounted() {
		this.testSize()
		this.copyFunction()
	},
    beforeDestroy() {
		window.removeEventListener('resize', this.onWindowResize);
        // window.removeEventListener('scroll', this.handleScroll);
    },
	data() {
		return {
            baseUrl: process.env.baseUrl,
			scroll : {
				speed: 0.07,
				position: 0,
				y: 0
			},
			desktop: null,
			lastWidth: null,
			resizeTimer: null
		}

	},
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/main/data'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] },
	},
	methods: {
		testSize() {
			// console.log('change')
            window.innerWidth > 1280 ? this.desktop = true : this.desktop = false
        },
        onWindowResize() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.testSize()
            }, 250);
        },
        handleScroll() {
			// console.log(this.scroll.y)
			// console.log(-this.scroll.y)
			// this.scroll.position = window.scrollY
			// this.scroll.y += (this.scroll.position - this.scroll.y) * this.scroll.speed

			// if (Math.abs(this.scroll.position - this.scroll.y) < 0.05) {
				// this.scroll.y = this.scroll.position;
    		// }

			// gsap.set('.scroll-container', {
            	// y: -this.scroll.y,
				// force3D: true
       		// });
        },
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
		},
		testPage() {
			document.body.dataset.iqosahedron = 'home'
		},
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
		copyFunction() {
			document.oncopy = function () {
				let bodyElement = document.body
				let selection = getSelection()
				let href = document.location.href
				let copyright = "<br><br>Источник: <a href='"+ href +"'>" + href + "</a><br>©  IQOSA  "
				let text = selection + copyright
				let divElement = document.createElement('div')
				divElement.style.position = 'absolute'
				divElement.style.left = '-99999px'
				divElement.innerHTML = text
				bodyElement.appendChild(divElement)
				selection.selectAllChildren(divElement)
				setTimeout(function() { 
					bodyElement.removeChild(divElement)
				}, 0)
			}
		},
	}
}
</script>

<style lang="scss">
.index {
	// position: fixed;
    overflow: hidden;
	width: 100%;
}
// .scroll-container {
// 	position: absolute;
//     width: 100%;
// }
</style>
