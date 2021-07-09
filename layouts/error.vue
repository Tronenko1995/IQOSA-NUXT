<template>
  <div class="error-layouts">
    <HeaderWrap />
    <PlugWrap />
    <Error />
  </div>
</template>


<script>
import Error from '@/components/system/Error.vue'
export default {
    name: 'ErrorPage',
    layout: 'error',
    components: {
		Error,
    },
}
</script>

<style lang="scss">
.error-layouts {
    overflow: hidden;
}
</style>