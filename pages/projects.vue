<template>
    <main>
        <ProjectsList />
    </main>
</template>

<script>
import { mapMutations } from 'vuex'
import ProjectsList from '@/components/projects/ProjectsList.vue'
export default {
    components: {
        ProjectsList
    },
	layout: 'projects',
    mounted() {
        this.setPlug(false)
    },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setPlug'
        }),
    }
}
</script>