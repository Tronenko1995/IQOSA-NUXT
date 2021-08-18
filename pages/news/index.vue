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
			// {
			//   hid: "keywords",
			//   name: "keywords",
			//   content: this.mainPage.meta_keywords
			// }
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
	computed: {
		data() { return this.$store.getters['lang/articles/data'] },
		list() { return this.$store.getters['lang/articles/list'] },
	},
}
</script>