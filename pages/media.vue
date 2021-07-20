<template>
    <main>
        <Media :data="data" />
    </main>
</template>

<script>
import Media from '@/components/media/Media.vue'
export default {
    layout: 'standart',
    components: {
		Media,
    },
	async asyncData({ store, i18n }) {
		// if (!store.getters['lang/career/data']) {
		try {
			await store.dispatch('lang/media/getMediaPageContent', `/media?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
	// }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/media/data'] },
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