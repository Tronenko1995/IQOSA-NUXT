<template>
    <main>
        <HeaderWrap :headerType="'transparent'"/>
        <About :data="data"/>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import About from '@/components/about/About.vue'
export default {
    layout: 'projects',
	async asyncData({ store }) {
		if (!store.getters['lang/about/data']) {
			try {
          await store.dispatch('lang/about/getAboutPageContent', '/about')
			} catch(e) {
				// redirect(`404`);
        throw new Error(e);
			}
		}
	},
    components: {
		About,
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/about/data'] },
	},
}
</script>

<style lang="scss">
</style>