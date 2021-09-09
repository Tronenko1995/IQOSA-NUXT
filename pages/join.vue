<template>
    <main>
        <Request :type="'join'" :data="data"/>
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
					hid: 'og:title',
					name: 'og:title',
					property: 'og:title',
					content: this.data.seo_title,
				},
				{
					hid: 'og:description',
					name: 'og:description',
					property: 'og:description',
					content: this.data.meta_description,
				},
				{
					hid: 'og:url',
					name: 'og:url',
					property: 'og:url',
					content: this.fullUrl
				},
				{
					hid: 'og:image',
					name: 'og:image',
					property: 'og:image',
					content: this.getImg(this.dataFooter.og_image),
				},
				{
					hid: 'og:image:width',
					name: 'og:image:width',
					property: 'og:image:width',
					content: '1080',
				},
				{
					hid: 'og:image:height',
					name: 'og:image:height',
					property: 'og:image:height',
					content: '1080',
				},
				{
					hid: 'twitter:card',
					name: 'twitter:card',
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
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/request/getJoinPageContent', `/join?lang=${i18n.locale}`)
		} catch(e) {
			redirect(`/404`);
			// throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/request/dataJoin'] },
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