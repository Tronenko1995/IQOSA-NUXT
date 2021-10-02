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

			],
		};
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    layout: 'contacts',
    components: {
		Contacts,
    },
	async asyncData({ store, i18n, route, env, redirect }) {
		try {
			await store.dispatch('lang/contacts/getContactsPageContent', `/contacts?lang=${i18n.locale}`)
		} catch(e) {
			redirect(`/404`);
			// throw new Error(e);
		}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
    beforeMount() {
		// this.testLang()
        this.testPage()
    },
	mounted() {
		this.copyFunction()
	},
	computed: {
		data() { return this.$store.getters['lang/contacts/data'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] }
	},
	methods: {
		// testLang() {
		// 	const html = document.getElementsByTagName('html')
		// 	let lang
		// 	this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
		// 	html[0].setAttribute('lang', lang)
		// },
		testPage() {
			document.body.dataset.iqosahedron = 'contacts'
		},
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
		copyFunction() {
			document.oncopy = function () {
				let bodyElement = document.body
				let selection = getSelection()
				let href = document.location.href
				let copyright = "<br><br>Источник: <a href='"+ href +"'>" + href + "</a><br>©  IQOSA  "
				let text = selection + copyright
				let divElement = document.createElement('div')
				divElement.style.position = 'absolute'
				divElement.style.left = '-99999px'
				divElement.innerHTML = text
				bodyElement.appendChild(divElement)
				selection.selectAllChildren(divElement)
				setTimeout(function() { 
					bodyElement.removeChild(divElement)
				}, 0)
			}
		},
	},
}
</script>