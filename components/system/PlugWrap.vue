<template>
    <Plug v-if="plug"/>
</template>


<script>
export default {
  computed: {
    plug() { return this.$store.getters['plug/visible'] }
  },
}
</script>
