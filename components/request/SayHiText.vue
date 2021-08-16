<template>
  <div class="say-hi">
    <div class="say-hi__container">
      <div class="slider__container">
        <swiper
          ref="requestName"
          :options="requestNameSetting"
          class="projects-name__title"
          @slideChange="slideChange"
        >
          <swiper-slide v-for="(form, index) in data" :key="index">
            <p
              class="say-hi__text say-hi__text--first"
              :data-link="getLink(index)"
            >
              {{ form.title_big_thin }}
            </p>
          </swiper-slide>
        </swiper>
      </div>
      <p class="say-hi__text say-hi__text--first say-hi__text--mobile">
        {{ data[0].title_big_thin }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      requestNameSetting: {
        init: false,
        loop: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loopedSlides: 3,
        loopAdditionalSlides: 3,
        speed: 700,
        slideToClickedSlide: true,
        dragSize: 15,
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 32,
        breakpoints: {
          600: {
            spaceBetween: 55
          },
          770: {
            spaceBetween: 65
          },
          1025: {
            spaceBetween: 75
          },
          1281: {
            spaceBetween: 85
          }
        }
      },
      slide_index: 0
    };
  },
  methods: {
    getLink(index) {
      return index > 0
        ? this.data[index - 1].next_page_link
        : this.data[this.data.length - 1].next_page_link;
    },
    ...mapMutations({
      setAnimate: "plug/setAnimate",
      setPlug: "plug/setVisible"
    }),
    slideChange(sw) {
      console.log(sw);
      this.$nextTick(() => {
        const swiper = this.$refs.requestName.$el;

        let slide = swiper.querySelector(`.swiper-slide-active .say-hi__text`);
        if (slide) {
          this.$router.push(this.localePath(`/forms${slide.dataset.link}`));
        }
      });
    },
    setInitialSlide() {}
    // goPage(page) {
    //   this.setAnimate("up");
    //   this.setPlug(true);
    //   setTimeout(() => {
    //     this.setAnimate("dissolve");
    //     this.$router.push(this.localePath("/forms" + page));
    //   }, 1000);
    // }
  },
  computed: {
    requestSlider() {
      return this.$refs.requestName.$swiper;
    }
  },
  mounted() {
    setTimeout(() => {
      this.requestSlider.init();
    }, 1000);
  }
};
</script>

<style lang="scss">
.say-hi {
  .swiper-slide {
    width: fit-content;
    display: flex;
    justify-content: center;
  }
  .swiper-slide-active,
  .swiper-slide-duplicate-active {
    .say-hi__text {
      opacity: 1;
    }
  }
  .swiper-slide:not(.swiper-slide-active),
  .swiper-slide-duplicate:not(.swiper-slide-active) {
    .say-hi__text {
      cursor: pointer;
    }
  }
  .swiper-wrapper {
    transition-timing-function: ease;
  }
}
</style>

<style lang="scss" scoped>
.say-hi {
  width: 100%;
  overflow: hidden;
  &__container,
  .slider__container {
    display: flex;
    overflow: hidden;
    position: relative;
    justify-content: center;
    width: 100%;
  }
  .slider__container {
    @media (max-width: 414px) {
      display: none;
    }
  }
  &__text {
    font-family: "ThinItalic", Arial;
    font-style: italic;
    font-weight: 300;
    // font-size: 164px;
    font-size: 78px;
    line-height: 110%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: "pnum" on, "lnum" on, "kern" off;
    color: #ffffff;
    opacity: 0.15;
    white-space: nowrap;
    transition: opacity 0.5s ease;
    // margin-right: 72px;
    &--first {
      // width: 25%;
      display: flex;
      justify-content: flex-end;
    }
    &--active {
      opacity: 1;
      padding-left: 69px;
      padding-right: 69px;
    }
    &--last {
      // width: 25%;
    }
  }
}

.say-hi__text--mobile {
  display: none;
}

.say-hi__text--mobile {
  @media (max-width: 414px) {
    display: block;
  }
}

// @media (max-width: 1440px) {
//     .say-hi {
//         &__text {
//             font-size: 148px;
//         }
//         &__container {
//             margin-left: -746px;
//         }
//     }
// }
// @media (max-width: 1280px) {
//     .say-hi {
//         &__text {
//             font-size: 116px;
//             margin-right: 56px;
//         }
//         &__container {
//             margin-left: -484px;
//         }
//     }
// }
// @media (max-width: 1024px) {
//     .say-hi {
//         &__text {
//             font-size: 108px;
//             margin-right: 48px;
//         }
//         &__container {
//             margin-left: -547px;
//         }
//     }
// }
@media (max-width: 768px) {
  .say-hi {
    &__text {
      // font-size: 88px;
      font-size: 56px;
      // margin-right: 40px;
    }
    // &__container {
    //     margin-left: -467px;
    // }
  }
}
@media (max-width: 660px) {
  .say-hi {
    &__form {
      // font-size: 88px;
      width: 100%;
      // margin-right: 40px;
    }
    // &__container {
    //     margin-left: -467px;
    // }
  }
}
@media (max-width: 500px) {
  .say-hi {
    &__text {
      font-size: 56px;
      // display: none;
      opacity: 1;
      margin-right: 0px;
      &--active {
        display: block;
      }
    }
    &__container {
      // margin: 0 auto;
    }
  }
}

@media (max-width: 414px) {
  .say-hi {
    &__text {
      font-size: 36px;
    }
  }
}
</style>
