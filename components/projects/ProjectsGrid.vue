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
                <span>SQ.M.</span>
                <span>560M2</span>
              </span>
            </span>
          </a>
        </li>
        <li class="projects-interior__item" data-cursor="link">
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="require('~/assets/img/projects/interior/2.jpg')" alt="">
          </div>
          <a class="projects-interior__link projects-interior-link" href="#">
            <span class="projects-interior-link__head">
              <span class="projects-interior-link__address projects-interior-link__address--italic">Kyiv,</span>
              <span class="projects-interior-link__address">Ukraine</span>
            </span>
            <span class="projects-interior-link__middle">
              <span class="projects-name">
                <span class="projects-name__item">
                  <span>IQ</span>-87-OR
                </span>
              </span>
            </span>
            <span class="projects-interior-link__bottom">
              <span class="projects-interior-link__bottom-left">
                <span>Release date</span>
                <span>2021</span>
              </span>
              <span class="projects-interior-link__bottom-right">
                <span>SQ.M.</span>
                <span>119M2</span>
              </span>
            </span>
          </a>
        </li>
        <li class="projects-interior__item" data-cursor="link">
          <div class="projects-interior__block">
            <img  class="projects-interior__img" :src="require('~/assets/img/projects/interior/3.jpg')" alt="">
          </div>
          <a class="projects-interior__link projects-interior-link" href="#">
            <span class="projects-interior-link__head">
              <span class="projects-interior-link__address projects-interior-link__address--italic">Odessa,</span>
              <span class="projects-interior-link__address">Ukraine</span>
            </span>
            <span class="projects-interior-link__middle">
              <span class="projects-name">
                <span class="projects-name__item">
                  <span>IQ</span>-86-SL
                </span>
              </span>
            </span>
            <span class="projects-interior-link__bottom">
              <span class="projects-interior-link__bottom-left">
                <span>Release date</span>
                <span>2021</span>
              </span>
              <span class="projects-interior-link__bottom-right">
                <span>SQ.M.</span>
                <span>101M2</span>
              </span>
            </span>
          </a>
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

