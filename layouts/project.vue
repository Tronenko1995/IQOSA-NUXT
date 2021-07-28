<template>
  <div>
    <HeaderWrap />
    <PlugWrap />
    <Nuxt />
    <VerticalMode />
    <CacheBlock />
  </div>
</template>

<script>
export default {
  async fetch() {
      try {
        await this.$store.dispatch('lang/parts/getPartsContent', `/parts?lang=${this.$i18n.locale}`)
		} catch(e) {
			// this.redsirect(`404`);
			throw new Error(e);
		}
  },
}
</script>