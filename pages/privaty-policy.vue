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
	async asyncData({ store, i18n, route, env }) {
		try {
			await store.dispatch('lang/privaty-policy/getPrivatyPolicyPageContent', `/privacy_policy?lang=${i18n.locale}`)
		} catch(e) {
			// redirect(`404`);
			throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    components: {
		PrivatyPolicy,
    },
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/privaty-policy/data'] },
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