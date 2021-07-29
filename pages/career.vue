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
		Career,
    },
	async asyncData({ store, i18n, route, env }) {
		try {
			await store.dispatch('lang/career/getCareerPageContent', `/career?lang=${i18n.locale}`)
		} catch(e) {
			throw new Error(e);
		}
		try {
			await store.dispatch('lang/career/getVacancy', '/vacancies')
		} catch(e) {
			// redirect(`404`);
			throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/career/data'] },
		list() { return this.$store.getters['lang/career/list'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] }
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