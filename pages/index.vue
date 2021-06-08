<template>
	<main class="index">
		<!-- <div class="scroll-container" ref="scrollContainer"> -->
			<!-- <IcosahedronMain /> -->
			<IcosahedronCrystal />
			<Main />
			<Projects/>
			<Team v-if="desktop" />
			<TeamMobi v-if="!desktop" />
			<Modals v-if="modal.show" :modal="modal"/>
		<!-- </div> -->
	</main>
</template>

<script>
import Main from '@/components/main/Main.vue'
import Projects from '@/components/main/Projects.vue'
import Team from '@/components/main/Team.vue'
import TeamMobi from '@/components/main/TeamMobi.vue'
import Modals from '@/components/system/modals/Modals.vue'
export default {
    components: {
		Main,
		Projects,
		Team,
		TeamMobi,
		Modals
    },
    beforeMount() {
		window.addEventListener('resize', this.onWindowResize);
        // window.addEventListener('scroll', this.handleScroll);
    },
	mounted() {
		this.testSize()
	},
    beforeDestroy() {
		window.addEventListener('resize', this.onWindowResize);
        // window.removeEventListener('scroll', this.handleScroll);
    },
	data() {
		return {
			scroll : {
				speed: 0.07,
				position: 0,
				y: 0
			},
			desktop: null
		}

	},
	computed: {
		modal() { return this.$store.getters['modal/modal'] }
	},
	methods: {
		testSize() {
            window.innerWidth > 1024 ? this.desktop = true : this.desktop = false
        },
        onWindowResize() {
			this.testSize()
        },
        handleScroll() {
			// console.log(this.scroll.y)
			// console.log(-this.scroll.y)
			// this.scroll.position = window.scrollY
			// this.scroll.y += (this.scroll.position - this.scroll.y) * this.scroll.speed

			// if (Math.abs(this.scroll.position - this.scroll.y) < 0.05) {
				// this.scroll.y = this.scroll.position;
    		// }

			// this.$gsap.set('.scroll-container', {
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
