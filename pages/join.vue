<template>
    <main>
        <Request :type="'join'" :data="data"/>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import Request from '@/components/request/Request.vue'
export default {
    layout: 'standart',
    components: {
		Request,
    },
	async asyncData({ store, i18n }) {
		// if (!store.getters['lang/main/data']) {
		try {
			await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
		try {
			await store.dispatch('lang/request/getJoinPageContent', `/join?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
		// try {
			// await store.dispatch('lang/main/getMainPageContent', `/main?lang=${i18n.locale}`)
		// } catch(e) {
			// redsirect(`404`);
			// throw new Error(e);
		// }
		// }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/request/dataJoin'] },
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