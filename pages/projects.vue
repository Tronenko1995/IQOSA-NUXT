<template>
  <div>
	  <HeaderWrap :view="view"/>
	  <main class="projects-page">
		<ProjectsGrid v-if="view === 'grid'" :view="view" :data="data" :list="list"/>
		<ProjectsList v-if="view === 'list'" :view="view" :data="data" :list="list"/>
	  </main>
	  <Footer v-if="view === 'grid'" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue'
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
  components: {
	ProjectsList, ProjectsGrid
  },
  layout: 'projects',
	async asyncData({ store, i18n, route, env, redirect }) {
	try {
		await store.dispatch('lang/projects/getProjectsPageContent', `/projects_page?lang=${i18n.locale}`)
	} catch(e) {
	  redirect('/404');
	  // throw new Error(e);
	}
	try {
		await store.dispatch('lang/projects/getProjects', `/projects?lang=${i18n.locale}`)
	} catch(e) {
	  redirect(`/404`);
	  throw new Error(e);
	}
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
	beforeMount() {
		window.addEventListener('resize', this.onWindowResize);
		// this.testLang()
	},
	mounted() {
		this.testSize()
		this.copyFunction()
	},
	computed: {
		view() { return this.$store.getters['projects/view'] },
		data() { return this.$store.getters['lang/projects/data'] },
		list() { return this.$store.getters['lang/projects/list'] },
		dataFooter() { return this.$store.getters['lang/parts/dataFooter'] },
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.onWindowResize);
	},
	methods: {
	...mapMutations({
		setView: 'projects/setView'
	}),
	onWindowResize() {
	  // clearTimeout(this.resizeTimer);
	  // this.resizeTimer = setTimeout(() => {
		this.testSize()
	  // }, 100);
	},
	testSize() {
	  // console.log(window.innerWidth)
	  if (window.innerWidth <= 1280 && (this.view === 'list' || !this.view)) {
		this.setView('grid')
	  } else if (window.innerWidth > 1281 && !this.view) {
		this.setView('list')
	  }
	},
	// testLang() {
	// 	const html = document.getElementsByTagName('html')
	// 	let lang
	// 	this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
	// 	html[0].setAttribute('lang', lang)
	// },
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
  }
}
</script>
