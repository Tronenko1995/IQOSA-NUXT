<template>
    <main class="about-page">
        <HeaderWrap :headerType="'transparent'"/>
        <About :data="data"/>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import About from '@/components/about/About.vue'
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
		}
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    layout: 'projects',
	async asyncData({ store, i18n, route, env }) {
		try {
			await store.dispatch('lang/about/getAboutPageContent', `/about?lang=${i18n.locale}`)
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
    components: {
		About,
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] },
		data() { return this.$store.getters['lang/about/data'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] }
	},
}
</script>

<style lang="scss">
.about-page {
	overflow: hidden;
}
</style>