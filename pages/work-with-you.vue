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
				{
					property: 'og:title',
					content: this.data.seo_title,
				},
				{
					property: 'og:description',
					content: this.data.meta_description,
				},
				{
					property: 'og:url',
					content: this.fullUrl
				},
				{
					property: 'og:image',
					content: this.getImg(this.dataFooter.og_image),
				},
				{
					property: 'og:image:width',
					content: '1080',
				},
				{
					property: 'og:image:height',
					content: '1080',
				},
				{
					property: 'twitter:card',
					content: 'summary_large_image',
				},
			],
		};
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    layout: 'standart',
    components: {
		Request,
    },
	async asyncData({ store, i18n, route, env }) {
		try {
			await store.dispatch('lang/request/getDataWorkWithYouPageContent', `/work_with_you?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/request/dataWorkWithYou'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] },
	},
	methods: {
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
		},
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
	},
}
</script>