<template>
  <div class="work-with-you__container">
    <WorkWithYouForm :data="data" />
  </div>
</template>

<script>
import WorkWithYouForm from "@/components/request/WorkWithYouForm.vue";

export default {
  components: {
    WorkWithYouForm
  },
  computed: {
    data() {
      return this.$store.getters["lang/request/dataWorkWithYou"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
