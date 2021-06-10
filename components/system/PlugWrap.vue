<template>
    <Plug v-if="plug"/>
</template>


<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState({
            plug: (state) => state.plug.plug,
        })
    },
}
</script>