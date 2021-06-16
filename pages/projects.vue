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
  mounted() {
    this.setPlug(false)
  },
  computed: {
    view() { return this.$store.getters['projects/view'] }
  },
  methods: {
    ...mapMutations({
        setPlug: 'plug/setPlug'
    }),
  }
}
</script>
