<template>
    <div ref="cursor" class="cursor">
    </div>
</template>

<script>
export default {
    beforeMount() {
        if (window.innerWidth > 1280) {
            window.addEventListener("mousemove", this.mousePos, { passive: true });
        }
    },
    mounted() {
        if (window.innerWidth > 1280) {
            this.cursor = this.$refs.cursor
            this.raf()
            this.addListeners()
        }
    },
    beforeDestroy() {
        if (window.innerWidth > 1280) {
            window.addEventListener("mousemove", this.mousePos, { passive: true });
        }
    },
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
            cursor: null
        }
    },
    computed: {
    },
    methods: {
        lerp(a, b, n) {
            return (1 - n) * a + n * b; 
        },
        raf() {
            this.rAF = requestAnimationFrame(this.run);
        },
        run() {
		    this.last.x = this.lerp(
                this.last.x,
                this.current.x,
                this.ease
            );
		    this.last.y = this.lerp(
                this.last.y,
                this.current.y,
                this.ease
		    );
            this.deg += 0.8;

            this.fx.diff = this.current.x - this.last.x;
            this.fx.acc = this.fx.diff / window.innerWidth;
            this.fx.velo = +this.fx.acc;
            this.fx.scale = 1 - Math.abs(this.fx.velo * 5);

            if (this.cursor) {
                if (this.cursor.classList.contains('is-explore-active') || this.cursor.classList.contains('is-error-active')) {
                    this.deg = 0;
                }

			    this.cursor.style.transform = `translate3d(${this.last.x}px, ${this.last.y}px, 0) scale(${this.fx.scale})`;
		    }

		    this.raf();
        },
        mousePos(e) {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            this.current.x = e.clientX;
            this.current.y = e.clientY;
        },
        addListeners() {
            const dragCircle = document.querySelectorAll("[data-drag-circle]");

            for (const item of dragCircle) {
                item.addEventListener("mouseenter", () => {
                    this.cursor.classList.add("is-drag-active");
                });
                item.addEventListener("mouseleave", () => {
                    this.cursor.classList.remove("is-drag-active");
                });
		    }
        }
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
    &:after {
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
    &.is-drag-active {
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
      background: url('~@/assets/svg/drag-cursor.svg') no-repeat center, url('~@/assets/svg/drag-cursor.svg') no-repeat center;
    }
  }
}
@media (max-width: 1280px) {
    .cursor {
        display: none;
    }
}
</style>