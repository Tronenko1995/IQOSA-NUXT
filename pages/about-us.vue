<template>
    <main>
        <HeaderWrap :headerType="'transparent'"/>
        <About />
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
import About from '@/components/about/About.vue'
import Modals from '@/components/system/modals/Modals.vue'
export default {
    layout: 'projects',
    components: {
		About,
		Modals,
    },
	computed: {
		modal() { return this.$store.getters['modal/modal'] }
	},
}
</script>

<style lang="scss">
</style>