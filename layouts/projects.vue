<template>
  <div>
    <HeaderWrap :headerType="'transparent'" />
    <Plug />
    <Nuxt />
  </div>
</template>

<script>
import HeaderWrap from '@/components/system/HeaderWrap.vue'
export default {
  components: { HeaderWrap }
}
</script>