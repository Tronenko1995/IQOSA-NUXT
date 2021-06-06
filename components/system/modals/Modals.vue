<template>
    <transition v-if="modal" name="fade" appear>
        <Modal />
    </transition>
</template>

<script>
import Modal from '@/components/system/modals/Modal.vue' 
export default {
    components: { Modal }
}
</script>

<style lang="scss" scoped>
    .fade-enter {
        transform: translateY(-100vh);
        &-active {
            transition: all 1s;
        }
        &-to {
        }
    }

    .fade-leave {
        &-active {
            transition: all 1s;
        }
        &-to {
            transform: translateY(-100vh);
        }
    }
</style>