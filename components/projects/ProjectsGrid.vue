<template>
  <section class="projects-grid">
    <div class="projects-grid__wrap">
      <IqosaCursor />
      <SwitchProjects class="switch-project-grid" :view="view" />
      <h1 class="projects-grid__title">Featured <span>cases</span></h1>
      <div class="projects-grid__description">
        <p>SHARE THE CLIENT'S PHILOSOPHY.</p>
        <p>HIS SPACE - HIS CHARACTER</p>
      </div>
      <ul class="projects-interior">
        <li class="projects-interior__item" data-cursor="link">
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="require('~/assets/img/projects/interior/1.jpg')" alt="">
          </div>
          <a class="projects-interior__link projects-interior-link" href="#">
            <span class="projects-interior-link__head">
              <span class="projects-interior-link__address projects-interior-link__address--italic">Odessa,</span>
              <span class="projects-interior-link__address">Ukraine</span>
            </span>
            <span class="projects-interior-link__middle">
              <span class="projects-name">
                <span class="projects-name__item">
                  <span>IQ</span>-08-SL
                </span>
              </span>
            </span>
            <span class="projects-interior-link__bottom">
              <span class="projects-interior-link__bottom-left">
                <span>Release date</span>
                <span>2021</span>
              </span>
              <span class="projects-interior-link__bottom-right">

              </span>
            </span>
          </a>
        </li>
        <li class="projects-interior__item" data-cursor="link">
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="require('~/assets/img/projects/interior/2.jpg')" alt="">
          </div>
          <a class="projects-interior__link" href="#"></a>
        </li>
        <li class="projects-interior__item" data-cursor="link">
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="require('~/assets/img/projects/interior/3.jpg')" alt="">
          </div>
          <a class="projects-interior__link" href="#"></a>
        </li>
      </ul>
    </div>
  </section>
</template>


<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    view: {
      type: String,
      required: true
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
  },
  computed: {
    preloader() { return this.$store.getters['preloader/preloader'] },
    duration() { return this.$store.getters['plug/duration'] }
  },
  methods: {
    ...mapMutations({
        setPlug: 'plug/setVisible',
    }),
  }
}
</script>

<style lang="scss">
.projects-grid {
  margin-top: 279px;
  display: flex;
  justify-content: center;
  &__wrap {
    width: 970px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-family: 'ThinItalic', Arial;
    font-style: italic;
    font-weight: 300;
    font-size: 164px;
    line-height: 90%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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
    line-height: 120%;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #FFFFFF;
    margin-top: 86px;
    text-align: center;
  }
}
.projects-interior {
  margin-top: 164px;
  &__item {
    margin-bottom: 16px;
    position: relative;
    &:hover {
      .projects-interior__link {
        opacity: 1;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__block {
    width: 644px;
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
    &::after {
      content: '';
      right: 0;
      top: 0;
      position: absolute;
      width: 11px;
      height: 11px;
      background: #fff;
      border-radius: 50%;
    }
  }
  &__middle {
    text-align: center;
  }
  &__bottom {

  }
  &__address {
    font-family: 'LightItalic', Arial;
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #FFFFFF;
  }
}
</style>
