<template>
    <transition
    v-if="plug"
    name="fade" 
    appear>
        <div class="plug">
            <Preloader />
        </div>
    </transition>
</template>

<script>
import Preloader from '@/components/system/Preloader.vue'
import { mapState } from 'vuex'
export default {
    components: {
        Preloader
    },
    computed: {
        ...mapState({
            plug: (state) => state.plug.plug
        })
    },
}
</script>

<style lang="scss" scoped>
    .plug {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background: #1b1b1b;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .fade-enter {
        transform: translateY(100vh);
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