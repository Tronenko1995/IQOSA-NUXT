<template>
    <main>
        <PrivatyPolicy />
    </main>
</template>

<script>
import PrivatyPolicy from '@/components/privatyPolicy/PrivatyPolicy.vue'
export default {
    layout: 'standart',
    components: {
		PrivatyPolicy,
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
		}	
	},
}
</script>