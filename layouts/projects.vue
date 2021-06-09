<template>
  <div>
    <HeaderWrap :headerType="'transparent'" />
    <Nuxt />
  </div>
</template>

<script>
import HeaderWrap from '@/components/system/HeaderWrap.vue'
export default {
  components: { HeaderWrap }
}
</script>