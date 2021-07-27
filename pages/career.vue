<template>
    <main>
        <Career :data="data" :list="list" />
    </main>
</template>

<script>
import Career from '@/components/career/Career.vue'
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
		Career,
    },
	async asyncData({ store, i18n }) {
		// if (!store.getters['lang/career/data']) {
		// try {
		// 	await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
			// redsirect(`404`);
			// throw new Error(e);
		// }
		try {
			await store.dispatch('lang/career/getCareerPageContent', `/career?lang=${i18n.locale}`)
		} catch(e) {
			throw new Error(e);
		}
	// }
	// if (!store.getters['lang/career/list']) {
		try {
			await store.dispatch('lang/career/getVacancy', '/vacancies')
		} catch(e) {
			// redirect(`404`);
			throw new Error(e);
		}
	// }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/career/data'] },
		list() { return this.$store.getters['lang/career/list'] },
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