<template>
    <main>
        <Request :type="'brief'"/>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import Request from '@/components/request/Request.vue'
export default {
    layout: 'standart',
    components: {
		Request,
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] }
	},
}
</script>