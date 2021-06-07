<template>
    <div class="modal">
        <TeamModal v-if="type === 'team'" @close="closeModal()"/>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import TeamModal from '@/components/system/modals/Team.vue'
export default {
    props: {
        type: {
            type: String,
            required: true 
        }
    },
    components: {
        TeamModal
    },
    methods: {
        ...mapMutations({
            setModal: 'modal/setModal',
        }),
        closeModal() {
            this.setModal({
                show: false,
                type: null
            })
        }
    }
}
</script>

<style lang="scss">
.modal {
    overflow: hidden;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1b1b1b;
    z-index: 3;
}
</style>