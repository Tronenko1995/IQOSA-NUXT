<template>
  <div class="icosahedron-new__container" ref="icosahedron"></div>
</template>

<script>
import Sketch from "~/plugins/icosahedron";
export default {
  name: "IcosahedronNew",
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
.icosahedron-new__container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
}
</style>
