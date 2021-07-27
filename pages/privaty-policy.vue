<template>
    <main>
        <PrivatyPolicy :data="data" />
    </main>
</template>

<script>
import PrivatyPolicy from '@/components/privatyPolicy/PrivatyPolicy.vue'
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
    layout: 'standart',
	async asyncData({ store, i18n }) {
		// try {
			// await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
			// redirect(`404`);
			// throw new Error(e);
		// }
		try {
			await store.dispatch('lang/privaty-policy/getPrivatyPolicyPageContent', `/privacy_policy?lang=${i18n.locale}`)
		} catch(e) {
			// redirect(`404`);
			throw new Error(e);
		}
	},
    components: {
		PrivatyPolicy,
    },
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/privaty-policy/data'] },
	},
	methods: {
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
		}	
	},
	
}
</script>