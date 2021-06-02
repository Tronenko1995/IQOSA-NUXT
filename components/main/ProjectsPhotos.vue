<template>
    <div class="projects__photos projects-photos">
        <swiper ref="mySwiper" :options="swiperOptions" class="projects-photos__list">
            <swiper-slide class="projects-photos__item">
                <img class="projects-photos__img" :src="require('~/assets/img/projects/1.jpg')" alt="">
            </swiper-slide>
            <swiper-slide class="projects-photos__item">
                <img class="projects-photos__img" :src="require('~/assets/img/projects/2.jpg')" alt="">
            </swiper-slide>
            <swiper-slide class="projects-photos__item">
                <img class="projects-photos__img" :src="require('~/assets/img/projects/3.jpg')" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
        //   pagination: {
            // el: '.swiper-pagination'
        //   },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
    }
  }
</script> 

<style lang="scss">
.projects-photos {
    overflow: hidden;
    &__list {
        display: flex;
    }
    &__item {

    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>