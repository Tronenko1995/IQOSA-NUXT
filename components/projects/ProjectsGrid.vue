<template>
  <section class="projects-grid">
    <div class="projects-grid__wrap">
      <IqosaCursor />
      <SwitchProjects class="switch-project-grid" :view="view" :data="data"/>
      <h1 class="projects-grid__title">{{ data.projects_title.thin_text }} <span>{{ data.projects_title.bold_text }}</span></h1>
      <div class="projects-grid__description">
        <p v-for="(item, i) in data.projects_subtitle" :key="i">{{ item }}</p>
      </div>
      <ul class="projects-interior">
        <li class="projects-interior__item"
          ref="card" data-cursor="link"
          v-for="(item, i) in list" :key="i"
          @click="setChosen(i)"
          :class="{'projects-interior__item__is-visible': i == chosed_project_index, 'projects-interior__item__is-hidden': chosed_project_index != null}"
        >
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="getImg(item.main_picture)" alt="">
          </div>
          <!-- <nuxt-link :to="localePath(`/project/${item.link}`)" class="projects-interior__link projects-interior-link"> -->
          <!-- <nuxt-link to="" class="projects-interior__link projects-interior-link"> -->
          <a @click.prevent="openProject(`/project/${item.link}`)" class="projects-interior__link projects-interior-link" :href="localePath(`/project/${item.link}`)">
            <span class="projects-interior-link__head">
              <span class="projects-interior-link__address projects-interior-link__address--italic">{{ item.city }},</span>
              <span class="projects-interior-link__address">{{ item.country }}</span>
            </span>
            <span class="projects-interior-link__middle">
              <span class="projects-name">
                <span class="projects-name__item">
                  <span>{{ item.type }}</span>-{{ item.number }}
                </span>
              </span>
            </span>
            <span class="projects-interior-link__bottom">
              <span class="projects-interior-link__bottom-left">
                <span>{{ data.date_label }}</span>
                <span>{{ item.release_date }}</span>
              </span>
              <span class="projects-interior-link__bottom-right">
                <span>{{ data.area_label }}</span>
                <span>{{ item.area }}{{ data.area_unit }}</span>
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
import { log } from 'three';
import { mapMutations } from 'vuex'
export default {
  props: {
    view: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
	data() {
		return {
      baseUrl: process.env.baseUrl,
      chosed_project_index: null,
    }
  },
  mounted() {
    if (this.preloader) {
      setTimeout(() => {
          this.setPlug(false)
      }, this.duration.preloader);
    } else {
      setTimeout(() => {
          this.setPlug(false)
      }, this.duration.page);
    }
    this.setAnimateCard()
  },
  computed: {
    preloader() { return this.$store.getters['preloader/preloader'] },
    duration() { return this.$store.getters['plug/duration'] }
  },
  methods: {
    setChosen(index) {
      console.log(index);
      this.chosed_project_index = index;
    },
    ...mapMutations({
        setPlug: 'plug/setVisible',
    }),
    getImg(img) {
      return `${this.baseUrl}${img}`
    },
    setAnimateCard() {
      if (this.$refs.card) {
          Array.from(this.$refs.card).forEach((card) => {
              card.addEventListener("click", () => {

                if (window.innerWidth >= 768) {


                  card.classList.add("this-card");

                  let marginTop = 0;
                  if (window.innerWidth <= 768) {
                    marginTop = 380;
                  } else if (window.innerWidth <= 1024) {
                    marginTop = 540;
                  } else if (window.innerWidth <= 1280) {
                    marginTop = 492;
                  } else if (window.innerWidth <= 1440) {
                    marginTop = 547;
                  } else {
                    marginTop = 586;
                  }

                  const width = window.innerWidth <= 1088 ? window.innerWidth - 128 : 960;

                  let elementTop = card.getBoundingClientRect().top;


                  this.$gsap.to(card, {
                      // width: 100 + '%',
                      // marginTop: 590,
                      width,
                      // marginTop,
                      y: marginTop - elementTop,
                      duration: 1,
                      // delay: 1,
                  })

                    card.querySelector(".projects-interior-link").style.opacity = 0;
                    let selectedPosX = 0;
                    let selectedPosY = 0;

                    while (card != null) {
                        selectedPosX += card.offsetLeft;
                        selectedPosY += card.offsetTop;
                        card = card.offsetParent;
                    }
                  }
                  // window.scrollTo(selectedPosX, selectedPosY);
              })
          })
      }
    },
    openProject(fullLink) {
      const timeout = window.innerWidth >= 768 ? 1000 : 0;
      setTimeout(() => {
          this.$router.push(this.localePath(fullLink))
      }, timeout);
    },
  }
}
</script>

<style lang="scss">
.projects-grid {
  margin-top: 293px;
  margin-bottom: 188px;
  display: flex;
  justify-content: center;
  &__wrap {
    // width: 970px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-family: 'ThinItalic', Arial;
    font-style: italic;
    font-weight: 300;
    // font-size: 164px;
    font-size: 148px;
    letter-spacing: unset;
    line-height: 115%;
    text-align: center;
    // letter-spacing: 0.05em;
    text-transform: uppercase;
    width: 970px;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #FFFFFF;
    margin-top: 56px;
    span {
      font-family: 'Roman', Arial;
      font-style: normal;
      font-weight: normal;
    }
  }
  &__description {
    font-family: 'Light';
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    // line-height: 120%;
    line-height: 140%;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #FFFFFF;
    margin-top: 86px;
    text-align: center;
  }
}
.projects-interior {
  margin-top: 164px;
    display: flex;
    flex-direction: column;
    align-items: center;
        width: 100%;
  &__item {
    margin-bottom: 16px;
    position: relative;
    width: 644px;
    max-width: 1280px;
    &:hover {
      .projects-interior__link {
        opacity: 1;
      }
      .projects-interior-link__address {
        transform: translateY(0);
      }
      .projects-interior-link {
        &__head {
          &::after {
            transform: scale(1);
          }
        }
        &__bottom {
          &-left,
          &-right {
            span {
              transform: translateY(0)
            }
          }
        }
      }
      .projects-name__item {
        transform: translateY(0);
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__block {
    width: 100%;
    height: 720px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    padding: 24px;
    cursor: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: .5s;
    background: rgba(0,0,0,.6);
  }
}
.projects-interior-link {
  &__head {
      position: relative;
      overflow: hidden;
    &::after {
      content: '';
      right: 0;
      top: 0;
      position: absolute;
      width: 11px;
      height: 11px;
      background: #fff;
      border-radius: 50%;
      transform: scale(0);
      transition: .5s;
    }
  }
  &__middle {
    text-align: center;
    overflow: hidden;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    &-left,
    &-right {
      span {
        display: inline-block;
        transform: translateY(16px);
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        transition: .5s;
        &:last-child {
          margin-left: 64px;
        }
      }
    }
    &-left {
      span {

      }
    }
    &-right {
      span {

      }
    }
  }
  &__address {
    font-family: 'LightItalic', Arial;
    // font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #FFFFFF;
    transform: translateY(16px);
    transition: .5s;
    display: inline-block;
  }
  .projects-name__item {
    transform: translateY(62px);
    display: block;
    transition: .5s;
  }
}
@media (max-width: 1440px) {
.projects-grid {
  margin-top: 255px;
  margin-bottom: 156px;
    &__title {
      font-size: 148px;
    }
  }
  .projects-interior {
    margin-top: 156px;
  }
}
@media (max-width: 1280px) {
.projects-grid {
  margin-top: 237px;
  margin-bottom: 148px;
    &__title {
      font-size: 116px;
    }
    &__description {
      font-size: 19px;
    }
  }
  .projects-interior {
    &__block {
      // width: 530px;
      // height: 596px;
    }
  }
}
@media (max-width: 1024px) {
.projects-grid {
  margin-top: 221px;
  margin-bottom: 132px;
    &__title {
      font-size: 108px;
      width: 100%;
    }
    &__description {
      font-size: 17px;
      margin-top: 80px;
    }
  }
  .projects-interior {
    margin-top: 132px;
    &__link {
      opacity: 1;
    }
    &-link {
      &__address {
        font-size: 12px;
        transform: translateY(0);
      }
      &__head {
        &::after {
          transform: scale(1);
        }
      }
      &__bottom {
        &-left span,
        &-right span {
        transform: translateY(0);
        font-size: 12px;
        }
      }
      .projects-name__item {
        transform: translateY(0);
      }
    }
  }
}
@media (max-width: 768px) {
  .projects-grid {
  margin-top: 205px;
  margin-bottom: 88px;
    &__title {
      font-size: 88px;
      margin-top: 49px;
    }
    &__description {
      font-size: 16px;
      margin-top: 72px;
    }
  }
}
@media (max-width: 644px) {
  .projects-interior {
    &__item {
      width: 100%;
    }
  }
}
@media (max-width: 600px) {
  .projects-grid {
    &__title {
      font-size: 70px;
    }
  }
  .projects-interior {
    &__block {
      // width: 343px;
      height: 434px;
    }
  }
  .projects-interior {
    &-link {
      &__bottom {
        &-left span,
        &-right span {
          &:last-child {
            margin-left: 24px;
          }
        }
      }
    }
  }
}
@media (max-width: 470px) {
  .projects-interior {
    &__link {
      padding: 15px;
    }
    &-link {
      &__bottom {
        &-left span,
        &-right span {
          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
  }
}
@media (max-width: 414px) {
  .projects-grid {
    margin-top: 160px;
    &__title {
      font-size: 56px;
      margin-top: 42px;
    }
    &__description {
      font-size: 15px;
      margin-top: 64px;
    }
    &__wrap {
      padding: 0 16px;
    }
  }
  .projects-interior {
    margin-top: 88px;
    &__block {
      width: 100%;
    }
  }
}
@media (min-width: 767px) {
  .projects-interior__item__is-hidden {
    opacity: 0;
    transition: opacity .5s ease;
  }

  .projects-interior__item__is-visible {
    opacity: 1;
    z-index: 10;
  }
}
</style>
