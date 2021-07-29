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
					property: 'og:title',
					content: this.data.seo_title,
				},
				{
					property: 'og:description',
					content: this.data.meta_description,
				},
				{
					property: 'og:url',
					content: this.fullUrl
				},
				{
					property: 'og:image',
					content: this.getImg(this.dataFooter.og_image),
				},
				{
					property: 'og:image:width',
					content: '1080',
				},
				{
					property: 'og:image:height',
					content: '1080',
				},
				{
					property: 'twitter:card',
					content: 'summary_large_image',
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
	async asyncData({ store, i18n, route, env }) {
    try {
        await store.dispatch('lang/projects/getProjectsPageContent', `/projects_page?lang=${i18n.locale}`)
    } catch(e) {
      // redirect(`404`);
      throw new Error(e);
    }
    try {
        await store.dispatch('lang/projects/getProjects', '/projects')
    } catch(e) {
      // redirect(`404`);
      throw new Error(e);
    }
		let fullUrl = `${env.frontUrl}${route.path}`
		return { fullUrl }
	},
  beforeMount() {
    window.addEventListener('resize', this.onWindowResize);
		this.testLang()
  },
  mounted() {
    this.testSize()
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
		testLang() {
			const html = document.getElementsByTagName('html')
			let lang
			this.$i18n.locale === 'ua' ? lang = 'uk' : lang = this.$i18n.locale
			html[0].setAttribute('lang', lang)
		},
    getImg(img) {
        return `${this.baseUrl}${img}`
    },
  }
}
</script>
