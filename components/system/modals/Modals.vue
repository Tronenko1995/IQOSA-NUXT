<template>
    <transition v-if="modal.show" :name="modal.animate" appear>
        <Modal :type="modal.type" />
    </transition>
</template>

<script>
import Modal from '@/components/system/modals/Modal.vue' 
export default {
    components: { Modal },
    props: {
        modal: {
            type: Object,
            required: true
        }
    },
    beforeMount() {
        document.body.style = 'overflow: hidden'
    },
    beforeDestroy() {
        document.body.style = ''
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter {
        transform: translateY(-100vh);
        opacity: 0;
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
            opacity: 0;
            transform: translateY(-100vh);
        }
    }
    .show-enter {
        opacity: 0;
        &-active {
            transition: all 1s;
        }
        &-to {
        }
    }

    .show-leave {
        &-active {
            transition: all 1s;
        }
        &-to {
            opacity: 0;
        }
    }
</style>