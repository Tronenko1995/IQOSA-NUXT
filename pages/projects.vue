<template>
<div>
    <HeaderWrap :view="view"/>
    <main class="projects-page">
      <ProjectsGrid v-if="view === 'grid'" :view="view"/>
      <ProjectsList v-if="view === 'list'" :view="view"/>
    </main>
    <Footer v-if="view === 'grid'" />
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import ProjectsList from '@/components/projects/ProjectsList.vue'
import ProjectsGrid from '@/components/projects/ProjectsGrid.vue'
import Footer from '@/components/system/Footer.vue'
export default {
  components: {
    ProjectsList, ProjectsGrid, Footer
  },
  layout: 'projects',
  beforeMount() {
    window.addEventListener('resize', this.onWindowResize);
  },
  mounted() {
    this.testSize()
  },
  computed: {
    view() { return this.$store.getters['projects/view'] }
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
