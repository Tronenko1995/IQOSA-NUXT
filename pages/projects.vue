<template>
    <main class="projects-page">
      <ProjectsGrid v-if="view === 'grid'" :view="view"/>
      <ProjectsList v-if="view === 'list'" :view="view"/>
    </main>
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
  beforeMount() {
    window.addEventListener('resize', this.onWindowResize());
  },
  computed: {
    view() { return this.$store.getters['projects/view'] }
  },
  mounted() {
    this.testSize()
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onWindowResize());
  },
  methods: {
    ...mapMutations({
        setView: 'projects/setView'
    }),
    onWindowResize() {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.testSize()
      }, 250);
    },
    testSize() {
        if (window.innerWidth >= 769) {
          console.log(this.view)
          this.view !== 'list' && this.view !== 'grid'
          this.setView('list')
      } else if (window.innerWidth <= 768) {
          this.view !== 'grid'
          this.setView('grid')
      }
    },
  }
}
</script>
