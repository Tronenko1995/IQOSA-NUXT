<template>
  <div>
    <HeaderWrap :headerType="'transparent'" />
    <PlugWrap />
    <Nuxt />
  </div>
</template>

<script>
import HeaderWrap from '@/components/system/HeaderWrap.vue'
import PlugWrap from '@/components/system/PlugWrap.vue'
export default {
  components: { HeaderWrap, PlugWrap }
}
</script>