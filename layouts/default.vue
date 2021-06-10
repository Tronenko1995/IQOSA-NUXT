<template>
  <div>
    <HeaderWrap />
    <Plug />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import HeaderWrap from '@/components/system/HeaderWrap.vue'
import Footer from '@/components/system/Footer.vue'
export default {
  components: { HeaderWrap, Footer }
}
</script>