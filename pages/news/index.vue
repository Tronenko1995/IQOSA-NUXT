<template>
    <main>
        <News :data="data" :list="list"/>
    </main>
</template>

<script>
import News from '@/components/news/News.vue'
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
                property: 'og:title',
                content: this.data.seo_title,
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: this.data.meta_description,
            },
            {
                hid: 'og:url',
                property: 'og:url',
                content: this.fullUrl
            },
		],
		};
	},
    layout: 'standart',
    components: {
		News,
    },
	async asyncData({ store, i18n, redirect }) {
		// try {
		// 	await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
		// } catch(e) {
		// 	// redirect(`404`);
		// 	throw new Error(e);
		// }
		try {
			await store.dispatch('lang/articles/getArticlesPageContent', `/blog?lang=${i18n.locale}`)
		} catch(e) {
			redirect(`/404`);
			// throw new Error(e);
		}
        try {
            await store.dispatch('lang/articles/getArticles', '/articles')
        } catch(e) {
            redirect(`/404`);
            // throw new Error(e);
        }
	},
	mounted() {
		this.copyFunction()
	},
	computed: {
		data() { return this.$store.getters['lang/articles/data'] },
		list() { return this.$store.getters['lang/articles/list'] },
	},
	methods: {
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
	}
}
</script>