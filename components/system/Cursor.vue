<template>
	<div ref="cursor" class="cursor"></div>
</template>

<script>
export default {
	data() {
		return {
			mouse: {
				x: 0,
				y: 0
			},
			current: {
				x: 0,
				y: 0
			},
			last: {
				x: 0,
				y: 0
			},
			ease: 0.15,
			fx: {
				diff: 0,
				acc: 0,
				velo: 0,
				scale: 0
			},
			deg: 0,
			cursor: null,
	  cursorDrag: null,
	  cursorEye: null,
	  cursorLink: null,
		}
	},
	beforeMount() {
		if (window.innerWidth > 1280) {
			window.addEventListener("mousemove", this.mousePos, false);
		}
	},
	mounted() {
		if (window.innerWidth > 1280) {
			this.cursor = this.$refs.cursor
	  		this.projectsPage = document.querySelector(".projects-page")
			this.cursorDrag = document.querySelectorAll("[data-cursor='drag']")
			this.cursorEye = document.querySelectorAll("[data-cursor='eye']")
			this.cursorLink = document.querySelectorAll("[data-cursor='link']")
			this.cursorPlay = document.querySelectorAll("[data-cursor='play']")
			this.raf()
			if (this.cursorDrag.length) {
				this.cursorDrag.forEach(item => {
					item.addEventListener("mouseenter", this.mouseEnterDrag)
					item.addEventListener("mouseleave", this.mouseLeaveDrag)
				})
			}
			if (this.cursorEye.length) {
				this.cursorEye.forEach(item => {
					item.addEventListener("mouseenter", this.mouseEnterEye)
					item.addEventListener("mouseleave", this.mouseLeaveEye)
				})
			}
			if (this.cursorLink.length) {
				this.cursorLink.forEach(item => {
					item.addEventListener("mouseenter", this.mouseEnterLink)
					item.addEventListener("mouseleave", this.mouseLeaveLink)
				})
			}
			if (this.cursorPlay.length) {
				this.cursorPlay.forEach(item => {
					item.addEventListener("mouseenter", this.mouseEnterPlay)
					item.addEventListener("mouseleave", this.mouseLeavePlay)
				})
			}
		}
	},
	beforeDestroy() {
		if (window.innerWidth > 1280) {
			window.removeEventListener("mousemove", this.mousePos, false);

			if (this.cursorDrag.length) {
				this.cursorDrag.forEach(item => {
					item.removeEventListener("mouseenter", this.mouseEnterDrag)
					item.removeEventListener("mouseleave", this.mouseLeaveDrag)
				})
			}
			if (this.cursorEye.length) {
				this.cursorEye.forEach(item => {
					item.removeEventListener("mouseenter", this.mouseEnterEye)
					item.removeEventListener("mouseleave", this.mouseLeaveEye)
				})
			}
			if (this.cursorLink.length) {
				this.cursorLink.forEach(item => {
					item.removeEventListener("mouseenter", this.mouseEnterLink)
					item.removeEventListener("mouseleave", this.mouseLeaveLink)
				})
			}
			if (this.cursorPlay.length) {
				this.cursorPlay.forEach(item => {
					item.removeEventListener("mouseenter", this.mouseEnterPlay)
					item.removeEventListener("mouseleave", this.mouseLeavePlay)
				})
			}
		}
	},
	methods: {
		lerp(a, b, n) {
			return (1 - n) * a + n * b
		},
		raf() {
			this.rAF = requestAnimationFrame(this.run)
		},
		run() {
			this.last.x = this.lerp(
				this.last.x,
				this.current.x,
				this.ease
			)
			this.last.y = this.lerp(
				this.last.y,
				this.current.y,
				this.ease
			)
			this.deg += 0.8

			this.fx.diff = this.current.x - this.last.x
			this.fx.acc = this.fx.diff / window.innerWidth
			this.fx.velo = +this.fx.acc
			this.fx.scale = 1 - Math.abs(this.fx.velo * 5)

			if (this.cursor) {
				if (this.cursor.classList.contains('is-explore-active') || this.cursor.classList.contains('is-error-active')) {
					this.deg = 0
				}
				this.cursor.style.transform = `translate3d(${this.last.x}px, ${this.last.y}px, 0) scale(${this.fx.scale})`
			}

			this.raf()
		},
		mousePos(e) {
			this.mouse.x = e.clientX
			this.mouse.y = e.clientY

			this.current.x = e.clientX
			this.current.y = e.clientY
		},
		mouseEnterDrag() {
			this.cursor.classList.add("cursor--drag")
		},
		mouseLeaveDrag() {
			this.cursor.classList.remove("cursor--drag")
		},
		mouseEnterEye() {
			this.cursor.classList.add("cursor--eye")
		},
		mouseLeaveEye() {
			this.cursor.classList.remove("cursor--eye")
		},
		mouseEnterLink() {
			this.cursor.classList.add("cursor--link")
		},
		mouseLeaveLink() {
			this.cursor.classList.remove("cursor--link")
		},
		mouseEnterPlay() {
			this.cursor.classList.add("cursor--play")
		},
		mouseLeavePlay() {
			this.cursor.classList.remove("cursor--play")
		},
	}
}
</script>

<style lang="scss">
.cursor {
	border-radius: 50%;
	position: fixed;
	left: -20px;
	top: -20px;
	pointer-events: none;
	z-index: 3000;
	width: 20px;
	height: 20px;
	margin-left: 10px;
	margin-top: 10px;
	opacity: 0;
	transition: border-radius .3s ease,width .3s ease,height .3s ease,margin .3s ease,opacity .5s ease .2s,background-color .5s ease .2s;
	div {
			width: 10px;
			height: 10px;
			transition: transform .5s ease,opacity .5s ease .2s;
		}
	&::after {
		opacity: 0;
		content: "";
		position: absolute;
		width: 40px;
		height: 40px;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		z-index: 101;
		transition: opacity .5s ease .2s;
	}
	&--eye,
	&--drag,
	&--link,
	&--play {
			background-color: white;
			border-radius: 50%;
			width: 127px;
			height: 127px;
			margin-left: -40px;
			margin-top: -40px;
			transition: border-radius 0.3s ease, width 0.3s ease, height 0.3s ease,
			margin 0.3s ease;
			opacity: 1;

			&::after {
				content: '';
				opacity: 1;
			}
	}
	&--eye {
		&::after {
			background: url('~@/assets/svg/eye-cursor.svg') no-repeat center;
		}
	}
	&--drag {
		&::after {
			background: url('~@/assets/svg/drag-cursor.svg') no-repeat center;
		}
	}
	&--link {
		&::after {
			background: url('~@/assets/svg/link-cursor.svg') no-repeat center;
		}
	}
	&--play {
		&::after {
			background: url('~@/assets/svg/play-cursor.svg') no-repeat center;
		}
	}
}
.projects-page {
	.cursor {
		&--drag {
			&::after {
				transform: translate(-50%,-50%) rotate(-60deg);
			}
		}
	}
}
@media (max-width: 1280px) {
	.cursor {
		display: none;
	}
}
</style>
