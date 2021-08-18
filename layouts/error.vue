<template>
  <div class="error-layouts">
    <HeaderWrap />
    <PlugWrap />
    <Nuxt />
    <VerticalMode />
    <CacheBlock />
  </div>
</template>


<script>
// import Error from '@/components/system/Error.vue'
export default {
    // async fetch() {
        // try {
            // await this.$store.dispatch('lang/parts/getPartsContent', `/parts?lang=${this.$i18n.locale}`)
		// } catch(e) {
			// this.redsirect(`404`);
			// throw new Error(e);
        // this.$router.push(this.localePath('/404'))
		// }
    // },
    // name: 'ErrorPage',
    // layout: 'error',
    // components: {
		// Error,
    // },
}
</script>

<style lang="scss">
.error-layouts {
    overflow: hidden;
}
</style>