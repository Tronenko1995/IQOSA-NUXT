<template>
  <div class="join__container">
    <JoinForm :data="data" />
  </div>
</template>

<script>
import JoinForm from "@/components/request/JoinForm.vue";

export default {
  components: {
    JoinForm
  },
  computed: {
    data() {
      return this.$store.getters["lang/request/dataJoin"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
