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
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/privaty-policy/getPrivatyPolicyPageContent', `/privacy_policy?lang=${i18n.locale}`)
		} catch(e) {
			redirect('/404');
			// throw new Error(e);
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