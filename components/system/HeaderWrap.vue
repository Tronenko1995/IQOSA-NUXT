<template>
    <div>
        <Header :menuStatus="menuStatus"/>
        <transition name="fade" v-if="menuStatus" appear>
            <Menu />
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/system/Header.vue' 
import Menu from '@/components/system/Menu.vue' 
export default {
    components: {
        Header,
        Menu
    },
    computed: {
        ...mapState({
            menuStatus: (state) => state.menu.status
        })
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
    .fade-enter {
        opacity: 0;
        transform: translateY(-100vh);
        &-active {
            transition: all 0.5s;
        }
        &-to {
        }
    }

    .fade-leave {
        &-active {
            transition: all 0.5s;
        }
        &-to {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
</style>