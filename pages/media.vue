<template>
	<div>
		<main>
			<!-- <Media :data="data"/> -->
			<MediaPlug />
		</main>
    	<!-- <Footer /> -->
	</div>
</template>

<script>
// import Media from '@/components/media/Media.vue'
import MediaPlug from '@/components/media/MediaPlug.vue'
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
    layout: 'project',
    components: {
		// Media,
		MediaPlug,
    },
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/media/getMediaPageContent', `/media?lang=${i18n.locale}`)
		} catch(e) {
			redirect(`404`);
			// throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    beforeMount() {
		this.testLang()
    },
	computed: {
		data() { return this.$store.getters['lang/media/data'] },
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