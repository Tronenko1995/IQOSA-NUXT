<template>
	<main class="index">
		<!-- <div class="scroll-container" ref="scrollContainer"> -->
			<!-- <IcosahedronMain /> -->
			<IcosahedronNew />
			<Main />
			<Projects />
		<!-- </div> -->
	</main>
</template>

<script>
import IcosahedronMain from '@/components/IcosahedronMain.vue'
import Main from '@/components/main/Main.vue'
import Projects from '@/components/main/Projects.vue'
export default {
    components: {
        IcosahedronMain,
		Main,
		Projects
    },
    beforeMount() {
        // window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        // window.removeEventListener('scroll', this.handleScroll);
    },
	data() {
		return {
			scroll : {
				speed: 0.07,
				position: 0,
				y: 0
			}
		}

	},
	methods: {
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
