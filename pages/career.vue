<template>
    <main>
        <Career :data="data" :list="list" />
    </main>
</template>

<script>
import Career from '@/components/career/Career.vue'
export default {
    layout: 'standart',
    components: {
		Career,
    },
	async asyncData({ store }) {
		if (!store.getters['lang/career/data']) {
			try {
				await store.dispatch('lang/career/getCareerPageContent', '/career')
			} catch(e) {
				throw new Error(e);
			}
		}
		if (!store.getters['lang/career/list']) {
			try {
          		await store.dispatch('lang/career/getVacancy', '/vacancies')
			} catch(e) {
        		// redirect(`404`);
        		throw new Error(e);
			}
		}
	},
	
	computed: {
		data() { return this.$store.getters['lang/career/data'] },
		list() { return this.$store.getters['lang/career/list'] },
	},
}
</script>