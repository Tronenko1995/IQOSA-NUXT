<template>
    <main>
        <News :data="data" :list="list"/>
    </main>
</template>

<script>
import News from '@/components/news/News.vue'
export default {
    layout: 'standart',
    components: {
		News,
    },
	async asyncData({ store, i18n }) {
		try {
			await store.dispatch('lang/news/getNewsPageContent', `/blog?lang=${i18n.locale}`)
		} catch(e) {
			// redsirect(`404`);
			throw new Error(e);
		}
        try {
            await store.dispatch('lang/news/getArticles', '/articles')
        } catch(e) {
            // redirect(`404`);
            throw new Error(e);
        }
	},
	computed: {
		data() { return this.$store.getters['lang/news/data'] },
		list() { return this.$store.getters['lang/news/list'] },
	},
}
</script>