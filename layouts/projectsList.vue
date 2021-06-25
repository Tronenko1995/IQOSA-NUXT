<template>
  <div>
    <HeaderWrap :headerType="'transparent'" />
    <PlugWrap />
    <Nuxt />
  </div>
</template>

<script>
import PlugWrap from '@/components/system/PlugWrap.vue'
export default {
  components: { PlugWrap }
}
</script>
