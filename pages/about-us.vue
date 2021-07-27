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
	head() {
		return {
		title: this.data.seo_title,
		meta: [
			{
			hid: "description",
			name: "description",
			content: this.data.meta_description
			},
			// {
			//   hid: "keywords",
			//   name: "keywords",
			//   content: this.mainPage.meta_keywords
			// }
		],
		};
	},
    layout: 'projects',
	async asyncData({ store, i18n }) {
		// if (!store.getters['lang/about/data']) {
		// try {
		// 	await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
			// redsirect(`404`);
		// 	throw new Error(e);
		// }
		try {
			await store.dispatch('lang/about/getAboutPageContent', `/about?lang=${i18n.locale}`)
		} catch(e) {
			// redirect(`404`);
		throw new Error(e);
		}
		// }
	},
    beforeMount() {
		this.testLang()
    },
	methods: {
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
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