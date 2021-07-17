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
  components: {
    ProjectsList, ProjectsGrid
  },
  layout: 'projects',
	async asyncData({ store }) {
		if (!store.getters['lang/projects/data']) {
			try {
          await store.dispatch('lang/projects/getProjectsPageContent', '/projects_page')
			} catch(e) {
				// redirect(`404`);
        throw new Error(e);
			}
		}
		if (!store.getters['lang/projects/list']) {
			try {
          await store.dispatch('lang/projects/getProjects', '/projects')
			} catch(e) {
        // redirect(`404`);
        throw new Error(e);
			}
		}
	},
  beforeMount() {
    window.addEventListener('resize', this.onWindowResize);
  },
  mounted() {
    this.testSize()
  },
  computed: {
    view() { return this.$store.getters['projects/view'] },
		data() { return this.$store.getters['lang/projects/data'] },
		list() { return this.$store.getters['lang/projects/list'] },
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
      if (window.innerWidth <= 768 && (this.view === 'list' || !this.view)) {
        this.setView('grid')
      } else if (window.innerWidth > 768 && !this.view) {
        this.setView('list')
      }
    },
  }
}
</script>
