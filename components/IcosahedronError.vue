<template>
  <div class="icosahedron-error" ref="icosahedron"></div>
</template>

<script>
import gsap from "gsap"
import Sketch from "~/plugins/icosahedron";
export default {
  name: "IcosahedronError",
  data: function () {
    return {
      icosahedron: null,
    };
  },
  mounted() {
    this.icosahedron = new Sketch({
      dom: this.$refs.icosahedron
    });
    setTimeout(() => this.animate(), 2000);
  },
  methods: {
    animate() {
      gsap.to(this.$refs.icosahedron, { 
				opacity: 1,
				delay: 2,
	  })
    }
  }
};
</script>

<style lang="scss">
.icosahedron-error {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
</style>
