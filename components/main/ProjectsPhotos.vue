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
          on: {
              // slideChange: function () {
              //     const slider_count = document.querySelector("#main-project_slider-count");
              //     if (slider_count) {
              //         slider_count.textContent = this.realIndex + 1;
              //     }
              //     let active_el = this.$el[0].querySelector(`[data-swiper-slide-index="${this.realIndex}"]`);
              //     if (active_el) {
              //         project_slider_link.setAttribute("href", active_el.dataset.sliderUrl);
              //         main_slider_img.setAttribute("href", active_el.dataset.sliderUrl);
              //         main_slider_name.setAttribute("href", active_el.dataset.sliderUrl);
              //     }
              // },
              progress: function () {
                  var swiper = this;
                  let interleaveOffset = 0.5;

                  for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;

                    if (!swiper.slides[i].classList.contains("swiper-slide-active")) {
                      swiper.slides[i].querySelector(
                        ".projects-photos__item"
                      ).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
                    } else {
                      swiper.slides[i].querySelector(
                        ".projects-photos__item"
                      ).style.transform = `translate3d(${innerTranslate}px, 0, 0)`;
                    }
                  }
                },
              //   touchStart: function () {
              //     var swiper = this;
              //     for (var i = 0; i < swiper.slides.length; i++) {
              //       swiper.slides[i].style.transition = "";
              //     }
              //   },
              //   setTransition: function (speed) {
              //     var swiper = this;
              //     for (var i = 0; i < swiper.slides.length; i++) {
              //       swiper.slides[i].style.transition = speed + "ms";
              //       swiper.slides[i].querySelector(".slide-inner").style.transition =
              //         speed + "ms";
              //     }
              //   }
            }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log(this.swiper)
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