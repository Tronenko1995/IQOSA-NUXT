<template>
    <main>
        <Contacts :data="data" />
    </main>
</template>

<script>
import Contacts from '@/components/contacts/Contacts.vue'
export default {
    layout: 'standart',
    components: {
		Contacts,
    },
	async asyncData({ store }) {
		if (!store.getters['lang/contacts/data']) {
			try {
				await store.dispatch('lang/contacts/getContactsPageContent', '/contacts')
			} catch(e) {
				// redsirect(`404`);
				throw new Error(e);
			}
		}
	},
	computed: {
		data() { return this.$store.getters['lang/contacts/data'] }
	},
}
</script>