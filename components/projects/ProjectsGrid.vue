<template>
  <section class="projects-grid">
    <IqosaCursor />
    <SwitchProjects :view="view" />
  </section>
</template>

<style lang="scss">
.projects-grid {
  margin: 290px 0 90px 0;
  display: flex;
  justify-content: center;
    &__wrap {
      width: 970px;
    }
}
</style>

<script>
export default {
  props: {
    view: {
      type: String,
      required: true
    }
  },
}
</script>
