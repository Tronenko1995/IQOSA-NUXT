<template>
  <div>
  <HeaderWrap :headerType="'main'" />
    <PlugWrap />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderWrap from '@/components/system/HeaderWrap.vue'
import PlugWrap from '@/components/system/PlugWrap.vue'
import Footer from '@/components/system/Footer.vue'
export default {
  components: { HeaderWrap, Footer, PlugWrap }
}
</script>