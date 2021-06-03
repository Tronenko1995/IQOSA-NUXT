<template>
  <div class="icosahedron-crystal" ref="icosahedron"></div>
</template>

<script>
import Sketch from "~/plugins/icosahedron";
export default {
  name: "IcosahedronCrystal",
  data: function () {
    return {
      icosahedron: null,
    };
  },
  mounted() {
    this.icosahedron = new Sketch({
      dom: this.$refs.icosahedron
    });
  },
};
</script>

<style lang="scss" scoped>
.icosahedron-crystal {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
}
</style>
