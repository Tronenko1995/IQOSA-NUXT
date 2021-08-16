<template>
  <div class="sayhi__container">
    <SayHiForm :data="data" />
  </div>
</template>

<script>
import SayHiForm from "@/components/request/SayHiForm.vue";

export default {
  components: {
    SayHiForm
  },
  computed: {
    data() {
      return this.$store.getters["lang/request/dataSayHi"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
