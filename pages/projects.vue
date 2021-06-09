<template>
    <main>
        <ProjectsList />
    </main>
</template>

<script>
import ProjectsList from '@/components/projects/ProjectsList.vue'
export default {
    components: {
        ProjectsList
    },
	layout: 'projects',
}
</script>