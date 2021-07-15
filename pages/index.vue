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
	layout: 'main',
	components: {
		Main,
		Projects,
		Team,
		TeamMobi,
    },
	async asyncData({ $axios, redirect, store }) {
		if (!store.getters['lang/main/data']) {
			try {
				const mainPage = await $axios.$get('/main')
				// console.log(mainPage)
				store.commit('lang/main/setData', mainPage.content)
				// console.log(store)
				// console.log(store.commit())
			} catch(e) {
				console.error(e)
				// redirect(`404`);
			}
		}
	},
	// async asyncData({ $axios }) {
		// try {
			// const getPreloader = await $axios.$get(`https://backiqosa.staj.fun/api/parts`)
			// return { getPreloader }
			// console.log(getPreloader)
		// } catch (e) {
			// console.log(e)
			// throw(e)
		// }


    //   await store.dispatch("about/getAboutAction", {
        // apiUrl: `${i18n.locale}/about`,
    //   });
    // } catch (e) {
    //   throw new Error(e);
    // }
		// const ip = await $axios.$get('/parts')
		// console.log('ip', ip)
		// return { ip }
	// },
    beforeMount() {
		window.addEventListener('resize', this.onWindowResize);
        // window.addEventListener('scroll', this.handleScroll);
    },
	mounted() {
		this.testSize()
	},
    beforeDestroy() {
		window.removeEventListener('resize', this.onWindowResize);
        // window.removeEventListener('scroll', this.handleScroll);
    },
	data() {
		return {
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
		data() { return this.$store.getters['lang/main/data'] }
	},
	methods: {
		testSize() {
			console.log('change')
            window.innerWidth > 1024 ? this.desktop = true : this.desktop = false
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
        }
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
