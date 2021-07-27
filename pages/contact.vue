<template>
    <main>
        <Contacts :data="data" />
    </main>
</template>

<script>
import Contacts from '@/components/contacts/Contacts.vue'
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
    layout: 'contacts',
    components: {
		Contacts,
    },
	async asyncData({ store, i18n }) {
		// if (!store.getters['lang/contacts/data']) {
		// try {
		// 	await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
			// redsirect(`404`);
			// throw new Error(e);
		// }
		try {
			await store.dispatch('lang/contacts/getContactsPageContent', `/contacts?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
		// }
	},
    beforeMount() {
		this.testLang()
        this.testPage()
    },
	computed: {
		data() { return this.$store.getters['lang/contacts/data'] }
	},
	methods: {
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
		},
		testPage() {
			document.body.dataset.iqosahedron = 'contacts'
		}
	},
}
</script>