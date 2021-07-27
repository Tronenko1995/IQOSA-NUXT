<template>
    <main>
        <Request :type="'workWithYou'" :data="data"/>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import Request from '@/components/request/Request.vue'
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
    components: {
		Request,
    },
	async asyncData({ store, i18n }) {
		// try {
			// await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
			// redsirect(`404`);
			// throw new Error(e);
		// }
		try {
			await store.dispatch('lang/request/getDataWorkWithYouPageContent', `/work_with_you?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/request/dataWorkWithYou'] },
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