<template>
    <main>
        <Media />
    </main>
</template>

<script>
import Media from '@/components/media/Media.vue'
export default {
    layout: 'standart',
    components: {
		Media,
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