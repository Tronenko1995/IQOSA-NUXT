<template>
  <main class="project-page">
    <section class="project">
      <div class="project__wrap">
        <div class="project__address">
          <span>{{ project.city }}</span
          >, {{ project.country }}
        </div>
        <h1 class="project__title" v-showFade>
          {{ project.type }}<span>-{{ project.number }}</span>
        </h1>
        <!-- <p>{{ slug }}</p> -->
        <div class="project__image">
          <img :src="getImg(project.main_picture)" alt="" />
        </div>
      </div>
      <hr class="project__line" v-showWidth />
      <div class="project__wrap" ref="project__info__wrap">
        <div class="project__info">
          <div class="project__info-left">
            <span>{{ data.date_label }}</span>
            <span>{{ project.release_date }}</span>
          </div>
          <div class="project__info-middle">
            <template
              v-if="project.team_members && project.team_members.length"
            >
              <span>{{ data.team_label }}</span>
              <ul class="animate-text animate-text--team">
                <li
                  class="animate-text__item"
                  @mouseover="showCursive($event)"
                  @mouseleave="hideCursive($event)"
                  v-for="(item, i) in project.team_members"
                  :key="i"
                >
                  <button
                    @click.prevent="openModal(item)"
                    class="animate-text__button"
                  >
                    {{ item.name }} {{ item.surname }}
                  </button>
                  <button
                    @click.prevent="openModal(item)"
                    class="animate-text__button animate-text__button--cursive animate-text__button--absolute"
                  >
                    {{ item.name }} {{ item.surname }}
                  </button>
                </li>
              </ul>
            </template>
          </div>
          <div class="project__info-right">
            <span>{{ data.area_label }}</span>
            <span>{{ project.area }}{{ data.area_unit }}</span>
          </div>
        </div>
        <template v-for="(item, i) in project.content">
          <template v-if="item && item.big_image">
            <div class="project__image project__image--standart" :key="i">
              <img :src="getImg(item.big_image)" alt="" v-showFade />
            </div>
          </template>
          <div v-if="item && item.gallery" :key="i">
            <div class="project__images">
              <div
                v-if="item.gallery.first_image"
                class="project__image project__image--uno project__image--parallax project__image--text"
              >
                <img
                  :src="getImg(item.gallery.first_image)"
                  alt=""
                  v-showFade
                />
                <div class="project__image-text" v-if="item.gallery.first_image_text1 || item.gallery.first_image_text2">
                  <p>{{ item.gallery.first_image_text1 }}</p>
                  <p>{{ item.gallery.first_image_text2 }}</p>
                </div>
              </div>
              <div
                v-if="item.gallery.second_image"
                class="project__image project__image--dos project__image--parallax project__image--text"
              >
                <img
                  :src="getImg(item.gallery.second_image)"
                  alt=""
                  v-showFade
                />
                <div class="project__image-text project__image-text--right" v-if="item.gallery.second_image_text1 || item.gallery.second_image_text2">
                  <p>{{ item.gallery.second_image_text1 }}</p>
                  <p>{{ item.gallery.second_image_text2 }}</p>
                </div>
              </div>
            </div>
            <div
              v-if="item && item.gallery && item.gallery.center_text"
              class="project__title project__title--text"
              v-html="item.gallery.center_text"
            ></div>
            <div class="project__images">
              <div
                v-if="item.gallery.third_image"
                class="project__image project__image--tres project__image--parallax project__image--text"
              >
                <img
                  :src="getImg(item.gallery.third_image)"
                  alt=""
                  v-showFade
                />
                <div class="project__image-text" v-if="item.gallery.third_image_text1 || item.gallery.third_image_text2">
                  <p>{{ item.gallery.third_image_text1 }}</p>
                  <p>{{ item.gallery.third_image_text2 }}</p>
                </div>
              </div>
              <div
                v-if="item.gallery.fourth_image"
                class="project__image project__image--quatro project__image--parallax project__image--text"
              >
                <img
                  :src="getImg(item.gallery.fourth_image)"
                  alt=""
                  v-showFade
                />
                <div class="project__image-text project__image-text--right" v-if="item.gallery.fourth_image_text1 || item.gallery.fourth_image_text2">
                  <p>{{ item.gallery.fourth_image_text1 }}</p>
                  <p>{{ item.gallery.fourth_image_text2 }}</p>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- <div class="project__image project__image--margin">
                    <img :src="require('~/assets/img/project/2.jpg')" alt="">
                </div>
                <div class="project__image project__image--margin">
                    <img :src="require('~/assets/img/project/3.jpg')" alt="">
                </div> -->
      </div>
      <hr
        class="project__line project__line--share"
        ref="project__info__line"
      />
      <div class="project__wrap">
        <div class="project__info project__info--share" ref="project__info">
          <div class="project__info-left project__info-left--share">
            <span>{{ data.share_title }}</span>
            <ul class="animate-text animate-text--share">
              <li
                class="animate-text__item"
                @mouseover="showCursive($event)"
                @mouseleave="hideCursive($event)"
              >
                <a
                  :href="share('facebook')"
                  class="animate-text__button"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_facebook }}</a
                >
                <a
                  :href="share('facebook')"
                  class="animate-text__button animate-text__button--cursive animate-text__button--absolute"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_facebook }}</a
                >
              </li>
              <li
                class="animate-text__item"
                @mouseover="showCursive($event)"
                @mouseleave="hideCursive($event)"
              >
                <a
                  :href="share('twitter')"
                  class="animate-text__button"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_twitter }}</a
                >
                <a
                  :href="share('twitter')"
                  class="animate-text__button animate-text__button--cursive animate-text__button--absolute"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_twitter }}</a
                >
              </li>
              <li
                class="animate-text__item"
                @mouseover="showCursive($event)"
                @mouseleave="hideCursive($event)"
              >
                <a
                  :href="share('linkedIn')"
                  class="animate-text__button"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_linkedin }}</a
                >
                <a
                  :href="share('linkedIn')"
                  class="animate-text__button animate-text__button--cursive animate-text__button--absolute"
                  target="_blank" rel="noopener noreferrer"
                  >{{ data.share_linkedin }}</a
                >
              </li>
            </ul>
          </div>
          <div class="project__info-middle project__info-middle--share">
            <span>{{ data.link_block_title }}</span>
            <div class="animate-line animate-line--share">
              <nuxt-link
                :to="localePath('/forms/sayhi')"
                class="animate-line__link"
                >{{ data.link_block_text }}</nuxt-link
              >
              <span class="animate-line__line"></span>
            </div>
          </div>
        </div>
        <div ref="next__wrap" class="project__next-wrap">
          <div
            ref="next"
            @click.prevent="goToOneProject(`/project/${list[index + 1].link}`)"
            v-if="index !== null && list[index + 1]"
            class="project__next"
          >
            <!-- openProject -->
            <!-- :href="localePath(`/project/${list[index+1].link}`)"  -->
            <div ref="nextText" class="project__title project__title--next">
              <ul class="animate-text animate-text--next">
                <li class="animate-text__item">
                  <a
                    href="#"
                    ref="nextText1"
                    class="animate-text__button animate-text__button--cursive  animate-text__button--next"
                    >{{ data.next_project_text }}</a
                  >
                  <a
                    href="#"
                    class="animate-text__button animate-text__button--next animate-text__button--absolute"
                    >{{ list[index + 1].type
                    }}<span>-{{ list[index + 1].number }} </span></a
                  >
                </li>
              </ul>
            </div>
            <div ref="last_screen" class="project__image project__image--next">
              <div class="project__image--wrapper">
                <img
                  ref="next_img"
                  :src="getImg(list[index + 1].main_picture)"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modals v-if="modal.show" :modal="modal" />
  </main>
</template>

<script>
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { mapMutations } from "vuex";
export default {
  head() {
    return {
      title: this.project.seo_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.project.meta_description
        },
				{
					property: 'og:title',
					content: this.project.seo_title,
				},
				{
					property: 'og:description',
					content: this.project.meta_description,
				},
				{
					property: 'og:url',
					content: this.fullUrl
				},
				{
					property: 'og:image',
					content: this.getImg(this.project.main_picture),
				},
				{
					property: 'og:image:width',
					content: '1080',
				},
				{
					property: 'og:image:height',
					content: '1080',
				},
				{
					property: 'twitter:card',
					content: 'summary_large_image',
				},
        // {
        //   hid: "keywords",
        //   name: "keywords",
        //   content: this.mainPage.meta_keywords
        // }
      ]
    };
  },
  scrollToTop: true,
  transition: "project-page",
  layout: "project",
  async asyncData({ store, i18n, route, params, env }) {
    // try {
    // 	await store.dispatch('lang/parts/getPartsContent', `/parts?lang=${i18n.locale}`)
    // } catch(e) {
    // redirect(`404`);
    // 	throw new Error(e);
    // }
    try {
      await store.dispatch(
        "lang/project/getProjectPageContent",
        `/project_page?lang=${i18n.locale}`
      );
    } catch (e) {
      // redsirect(`404`);
      throw new Error(e);
    }
    try {
      await store.dispatch("lang/projects/getProjects", "/projects");
    } catch (e) {
      // redirect(`404`);
      throw new Error(e);
    }
    try {
      const slug = params.slug; // When calling /abc the slug will be "abc"
      await store.dispatch(
        "lang/project/getProject",
        `/projects/${slug}?lang=${i18n.locale}`
      );
		  let fullUrl = `${env.frontUrl}${route.path}`
      return { slug, fullUrl  };
    } catch (e) {
      // redsirect(`404`);
      throw new Error(e);
    }
  },
  data() {
    return {
      imgParallax: null,
      index: null,
      baseUrl: process.env.baseUrl,
      url: ""
    };
  },
  created() {
    // this.$gsap.registerPlugin(this.$ScrollTrigger)
    // gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    this.deletePreviousLastScreen();
    this.url = window.location.href;
    this.$gsap.registerPlugin(this.$ScrollTrigger);
    this.imgParallax = document.querySelectorAll(".project__image--parallax");
    this.testSize();
    if (this.preloader) {
      setTimeout(() => {
        this.setPlug(false);
      }, this.duration.preloader);
    } else {
      setTimeout(() => {
        this.setPlug(false);
      }, this.duration.page);
    }
    if (this.list) {
      this.index = this.list.findIndex(item => item.link === this.project.link);
      this.index === this.list.length - 1 ? (this.index = -1) : "";
    }
  },
  // watch: {
  //     list() {
  //         if (this.list) {
  //             this.index = this.list.findIndex(item => item.link === this.project.link);
  //         }
  //     }
  // },
  computed: {
    preloader() {
      return this.$store.getters["preloader/preloader"];
    },
    duration() {
      return this.$store.getters["plug/duration"];
    },
    modal() {
      return this.$store.getters["modal/modal"];
    },
    data() {
      return this.$store.getters["lang/project/data"];
    },
    project() {
      return this.$store.getters["lang/project/project"];
    },
    list() {
      return this.$store.getters["lang/projects/list"];
    }
  },
  methods: {
    ...mapMutations({
      setPlug: "plug/setVisible",
      setModal: "modal/setModal",
      setTeam: "team/setTeam"
    }),
    testSize() {
      // console.log(this.imgParallax)
      if (window.innerWidth > 480) {
        this.$nextTick(() => {
          this.imgParallax.forEach(img => {
            let hero_scroll = this.$gsap
              .timeline({
                scrollTrigger: {
                  trigger: img,
                  start: "top bottom",
                  end: "bottom top",
                  // markers:true,
                  scrub: 1.7
                }
              })
              .to(img, {
                translateY: 0,
                duration: 1
              });
          });
        });
      }
    },

    showCursive(e) {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
        this.$gsap.to(e.target.parentElement.children[0], {
          translateY: -100 + "%",
          duration: 0.5
        });
        this.$gsap.to(e.target.parentElement.children[1], {
          translateY: -100 + "%",
          duration: 0.5
        });
      }
    },
    hideCursive(e) {
      if (e.target.tagName === "LI") {
        this.$gsap.to(e.target.children[0], {
          translateY: 0 + "%",
          duration: 0.5
        });
        this.$gsap.to(e.target.children[1], {
          translateY: 0 + "%",
          duration: 0.5
        });
      }
    },
    openModal(data) {
      this.setTeam({
        name: `${data.name} ${data.surname}`,
        position: data.position,
        img: data.photo,
        quote: data.about
      });
      this.setModal({
        show: true,
        type: "team",
        animate: "fade"
      });
    },
    getImg(img) {
      return `${this.baseUrl}${img}`;
    },
    share(social) {
      if (social === "facebook") {
        return `https://www.facebook.com/sharer.php?s=100&p[title]=${this.project.type}-${this.project.number}&u=${this.url}&p[summary]=&p[url]=${this.url}`;
      } else if (social === "twitter") {
        return `https://twitter.com/intent/tweet?url=${this.url}/&text=${this.project.type}-${this.project.number}`;
      } else if (social === "linkedIn") {
        return `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}/&title=${this.project.type}-${this.project.number}`;
      }
    },
    openProject(fullLink) {
      if (window.innerWidth >= 1024) {
        const card = this.$refs.next;

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

        let style = window.getComputedStyle(card, null);
        let elementTop = card.getBoundingClientRect().top;

        let tl = this.$gsap.timeline();

        tl.to(
          this.$refs.nextText,
          {
            opacity: 0
          },
          0
        );

        tl.to(
          this.$refs.next_img,
          {
            scale: 1
          },
          0
        );

        tl.to(card, {
          width,
          // y: marginTop - elementTop,
          marginTop:
            Number.parseInt(style["margin-top"]) + marginTop - elementTop,
          duration: 1
        });

        setTimeout(() => {
          this.$router.push(this.localePath(fullLink));
        }, 1500);
      } else {
        this.$router.push(this.localePath(fullLink));
        // window.scrollTo({
        //     top: 0,
        //     left: 0,
        // })
      }
    },
    goToOneProject(link) {
      if (window.innerWidth >= 1024) {
        this.fullScreen = true;
        let { last_screen } = this.$refs;

        let tl = this.$gsap.timeline();

        tl.to(
          this.$refs.nextText,
          {
            opacity: 0
          },
          0
        );

        tl.to(
          this.$refs.project__info,
          {
            opacity: 0
          },
          0
        );

        tl.to(
          this.$refs.project__info__line,
          {
            opacity: 0
          },
          0
        );

        tl.to(
          this.$refs.project__info__wrap,
          {
            opacity: 0
          },
          0
        );

        let dekstop_wrapper = last_screen;

        // Copy the dekstop_wrapper element and its child nodes
        let fixed_wrapper = dekstop_wrapper.cloneNode(true);
        dekstop_wrapper.style.opacity = 0;
        let last_screen__content = fixed_wrapper.querySelector(
          ".last-screen__content"
        );
        let elementWidth = dekstop_wrapper.offsetWidth;
        let elementLeft = dekstop_wrapper.getBoundingClientRect().left;
        let elementRight = dekstop_wrapper.getBoundingClientRect().top;

        document.body.appendChild(fixed_wrapper);
        fixed_wrapper.id = "cloned_last_screen";

        fixed_wrapper.style.cssText += `
            position: fixed;
            left: ${elementLeft}px;
            top: ${elementRight}px;
            width: ${elementWidth}px;
            transition: all .8s cubic-bezier(.79,0,.21,1);
            filter: none;
            overflow: visible;
          `;

        // fixed_wrapper.innerHTML = "";
        fixed_wrapper.parentNode.classList.remove("one_project_hover");

        const width = window.innerWidth <= 1088 ? window.innerWidth - 128 : 960;

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

        // without set timeout not working, fix later
        setTimeout(() => {
          fixed_wrapper.style.left = (window.innerWidth - width) / 2 + "px";
          fixed_wrapper.style.top = marginTop + "px";
          fixed_wrapper.style.width = width + "px";
          last_screen__content.classList.add("first-screen-adapted");
        }, 500);

        setTimeout(() => {
          this.$router.push(this.localePath(link));
        }, 1500);
      } else {
        this.$router.push(this.localePath(link));
      }
    },
    deletePreviousLastScreen() {
      this.$nextTick(() => {
        const fixed_wrappers = document.querySelectorAll("#cloned_last_screen");

        if (fixed_wrappers && fixed_wrappers.length) {
          for (const el of fixed_wrappers) {
            document.body.removeChild(el);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss">
.project {
  margin-top: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__wrap {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    // padding: 0 72px;
  }
  &__address {
    font-family: "Light", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on;
    color: #ffffff;
    span {
      font-family: "LightItalic", Arial;
      // font-style: italic;
    }
  }
  &__title {
    padding: 0 72px;
    margin-bottom: 72px;
    font-size: 148px;
    line-height: 115%;
    letter-spacing: 0.05em;
    margin-top: 48px;
    font-family: "Roman", Arial;
    font-style: normal;
    font-weight: 400;
    // font-size: 164px;
    // line-height: 90%;
    text-align: center;
    // letter-spacing: 0.05em;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #ffffff;
    span {
      font-family: "LightItalic", Arial;
      // font-style: italic;
      font-weight: 300;
    }
    &--text {
      margin-top: 48px;
      margin-bottom: 48px;
      font-size: 120px;
      font-family: Light, Arial;
      font-weight: 300;
      em {
        font-family: ThinItalic, Arial;
        font-style: normal;
      }
    }
    &--next {
      position: absolute;
      margin-top: 0px;
      left: 50%;
      transform: translate(-50%, 50%);
      top: -150px;
      z-index: 1;
      // width: 100%;
      min-width: 710px;
      padding: 0;
    }
  }
  &__image {
    width: calc(100% - 128px);
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin: 0 auto;
    // width: 100%;
    // height: 950px;
    // height: auto;
    height: 720px;
    max-width: 960px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &--standart {
      margin: 0 auto 40px auto;
    }
    &--margin {
      margin: 0 auto 213px auto;
    }
    &--uno {
      margin: 0 0 260px 0;
      // width: 645px;
      width: 476px;
      // width: 516px;
      // height: 610px;
      // height: 762px;
      height: fit-content;
      transform: translateY(260px);
      // margin-bottom: 260px;
    }
    &--dos {
      margin: 0 0 170px 0;
      width: 576px;
      // width: 781px;
      // height: 1057px;
      height: fit-content;
      transform: translateY(200px);
      // margin-bottom: 200px;
      // width: 625px;
      // height: 846px;
    }
    &--tres {
      margin: 0 0 260px 0;
      width: 350px;
      // width: 288px;
      height: fit-content;
      // height: 340px;
      transform: translateY(260px);
      // margin-bottom: 260px;
    }
    &--quatro {
      margin: 0 0 120px 0;
      // width: 665px;
      width: 491px;
      // height: 785px;
      height: fit-content;
      transform: translateY(120px);
      // margin-bottom: 120px;
    }
    &--next {
      width: auto;
      height: 160px;
      // height: 530px;
      // height: 720px;
      // overflow: hidden;
      margin: 0 auto;
    }
    &--wrapper {
      height: 720px;
      overflow: hidden;
    }
    &--text {
      display: flex;
      overflow: unset;
    }
    &-text {
      position: absolute;
      transform: rotate(-90deg);
      display: flex;
      flex-direction: row;
      width: 12px;
      height: fit-content;
      bottom: 0;
      right: -20px;
      &--right {
        left: -20px;
      }
      p {
        font-family: 'Light',Arial;
        font-weight: 300;
        font-size: 11px;
        line-height: 120%;
        width: fit-content;
        height: fit-content;
        text-transform: uppercase;
        white-space: nowrap;
        margin: 0;
        color: #fff;
        &:first-child {
          margin-right: 97px;
        }
      }
    }
  }
  &__images {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }
  &__line {
    width: 100%;
    height: 1px;
    opacity: 0.3;
    margin-top: 48px;
    background: #ffffff;
    margin-right: auto;
    &--share {
      margin-top: 108px;
    }
  }
  &__info {
    // padding: 0 72px;
    margin: 24px auto 156px;
    width: 1280px;
    // margin-top: 24px;
    margin-bottom: 188px;
    font-family: "Light", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #ffffff;
    display: flex;
    &--share {
      margin-bottom: 0px;
    }
    &-left {
      span {
        &:first-child {
          margin-right: 70px;
        }
      }
      &--share {
        display: flex;
      }
    }
    &-middle {
      display: flex;
      margin-left: auto;
      margin-right: 140px;
      span {
        display: inline-block;
      }
      &--share {
        display: flex;
        flex-direction: column;
        // margin-right: 529px;
        & > span {
          font-family: "LightItalic";
        }
        span {
          &:last-child {
            margin-left: 0;
          }
        }
      }
    }
    &-right {
      // margin-left: 367px;
      span {
        &:last-child {
          margin-left: 70px;
        }
      }
    }
  }
  &__next-wrap {
    width: 100%;
    margin-top: 357px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__next {
    // width: 852px;
    width: 640px;
    max-width: 100%;
    cursor: pointer;
    // position: relative;
    img {
      transform: scale(1.1);
      transition: 0.5s;
    }

    &:hover {
      @media (hover: hover) {
        img {
          transform: scale(1);
        }
        .animate-text__button {
          &:first-child {
            transform: translateY(-100%);
          }
          &:last-child {
            transform: translateY(-100%);
          }
        }
      }
    }
  }
}
.animate-text {
  &--team {
    margin-left: 70px;
  }
  &--share {
    margin-left: 120px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transform: translateY(0);
    position: relative;
    margin-bottom: 4px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
  &__button {
    font-family: "Light", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 120%;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #ffffff;
    background: none;
    cursor: pointer;
    text-align: left;
    &--cursive {
      font-family: "ThinItalic", Arial;
    }
    &--absolute {
      position: absolute;
      bottom: -100%;
    }
    &--next {
      font-size: inherit;
      line-height: inherit;
      font-weight: inherit;
      text-align: center;
      width: 100%;
      transition: 0.4s;
      .animate-text__item {
        height: 220px;
      }
    }
  }
}
.animate-line {
  display: flex;
  position: relative;
  width: fit-content;
  &--share {
    margin-top: 4px;
  }
  &:hover {
    .animate-line__line {
      animation: "under-line" 1s;
    }
  }
  &__link {
    color: #fff;
  }
  &__line {
    position: absolute;
    height: 1px;
    background: #fff;
    display: block;
    transition: 0.3s ease;
    bottom: 0;
    width: 100%;
  }
}

// @media (max-width: 1643px) {
// .project {
// &__image {
// &--uno {
// width: 516px;
// height: 610px;
// }
// &--dos {
// width: 625px;
// height: 846px;
// }
// &--tres {

// }
// &--quatro {

// }
// }
// }
// }
@media (max-width: 1440px) {
  .project {
    margin-top: 241px;
    &__wrap {
      // padding: 0 64px;
    }
    &__title {
      padding: 0 64px;
      font-size: 148px;
      &--next {
        font-size: 140px;
        top: 165px;
        padding: 0;
      }
    }
    &__info {
      margin-bottom: 156px;
      // padding: 0 64px;
      &--share {
        margin-bottom: 0px;
      }
      // &-right {
      // margin-left: 191px;
      // }
      &-middle {
        &--share {
          // margin-right: 353px;
        }
      }
    }
    &__image {
      &--margin {
        margin: 0 auto 181px auto;
      }
      &--uno {
        // margin: 116px 0 260px 0;
        // width: 476px;
        // height: 562px;
      }
      &--dos {
        // margin: 371px 0 200px 0;
        // width: 576px;
        // height: 780px;
      }
      &--tres {
        // margin: -113px 0 200px 0;
        // width: 213px;
        // height: 251px;
      }
      &--quatro {
        // margin: 160px 0 120px 0;
        // margin: 160px 0 275px 0;
        // width: 491px;
        // height: 579px;
      }
      &--next {
        // width: auto;
        // height: 398px;
      }
    }
    &__next {
      margin: 326px auto 0 auto;
      &-wrap {
        margin-top: 0px;
      }
    }
  }
}

@media (max-width: 1392px) {
  .project {
    &__info {
      width: 100%;
      padding: 0 56px;
    }
  }
}

@media (max-width: 1280px) {
  .project {
    margin-top: 223px;
    // &__wrap {
    // padding: 0 56px;
    // }
    &__title {
      padding: 0 56px;
      font-size: 116px;
      &--next {
        font-size: 116px;
        // top: -63px;
        top: 160px;
        padding: 0;
      }
    }
    &__info {
      margin-bottom: 148px;
      &--share {
        margin-bottom: 0px;
      }
      // &-right {
      // margin-left: 120px;
      // }
      &-middle {
        &--share {
          // margin-right: 245px;
        }
      }
    }
    &__image {
      &--margin {
        margin: 0 auto 173px auto;
      }
      &--uno {
        margin: 0 0 260px 0;
        width: 424px;
        height: 501px;
        // width: 382px;
        // height: 451px;
        transform: translateY(0);
      }
      &--dos {
        margin: 0 0 170px 0;
        width: 513px;
        height: 695px;
        // width: 462px;
        // height: 626px;
        transform: translateY(0);
      }
      &--tres {
        margin: 0 0 260px 0;
        width: 189px;
        height: 223px;
        transform: translateY(0);
      }
      &--quatro {
        margin: 0 0 120px 0;
        width: 437px;
        height: 516px;
        transform: translateY(0);
      }
      &--next {
        // width: auto;
        // height: 357px;
        // comment width for page transition
        // width: 640px;
        // height: 720px;
        height: 530px;
      }
      &-text {
        p {
          &:first-child {
            margin-right: 50px;
          }
        }
      }
    }
    &__next {
      margin: 272px auto 0 auto;
    }
    &__line {
      &--share {
        // margin-top: 148px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .project {
    // margin-top: 206px;
    margin-top: 280px;
    // &__wrap {
    // padding: 0 56px;
    // }
    &__address {
      // font-size: 14px;
      font-size: 16px;
    }
    &__title {
      font-size: 108px;
      // padding: 0 56px;
      // font-size: 90px;
      &--next {
        // padding: 0;
        font-size: 90px;
        // top: -42px;
        top: 142px;
      }
    }
    &__info {
      // padding: 0 56px;
      font-size: 12px;
      margin-bottom: 132px;
      &--share {
        margin-bottom: 0px;
      }
      // &-right {
      // margin-left: 100px;
      // }
      &-middle {
        &--share {
          // margin-right: 204px;
        }
      }
    }
    &__image {
      margin: 0 auto;
      // margin: 64px auto 0 auto;
      &--standart {
        margin: 0 auto 32px auto;
      }
      &--margin {
        margin: 0 auto 156px auto;
      }
      &--uno {
        margin: 0 0 260px 0;
        width: 331px;
        height: 391px;
      }
      &--dos {
        margin: 0 0 170px 0;
        width: 401px;
        height: 542px;
      }
      &--tres {
        margin: 0 0 260px 0;
        width: 148px;
        height: 175px;
      }
      &--quatro {
        margin: 0 0 120px 0;
        width: 342px;
        height: 403px;
      }
      &--next {
        width: auto;
        height: 280px;
      }
    }
    &__next {
      margin: 229px auto 0 auto;
    }
    &__line {
      margin-top: 64px;
      &--share {
        margin-top: 0px;
      }
    }
  }
}

@media (max-width: 890px) {
  .project {
    &__image {
      &--uno {
        width: 267px;
        height: 316px;
      }
      &--dos {
        width: 324px;
        height: 438px;
      }
    }
    &__info {
      &-middle {
        &--share {
          // margin-right: 100px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .project {
    // margin-top: 190px;
    margin-top: 145px;
    // &__wrap {
    // padding: 0 48px;
    // }
    &__title {
      padding: 0 48px;
      // margin-top: 40px;
      font-size: 88px;
      // font-size: 50px;
      &--next {
        // font-size: 88px;
        font-size: 50px;
        top: 173px;
        padding: 0;
      }
    }
    &__address {
      font-size: 14px;
    }
    &__info {
      margin-bottom: 132px;
      padding: 0 48px;
      &--share {
        margin-bottom: 0px;
      }
      &-left {
        span {
          &:first-child {
            margin-right: 10px;
          }
        }
      }
      &-right {
        margin-left: 24px;
        span {
          &:last-child {
            margin-left: 10px;
          }
        }
      }
      &-middle {
        margin-right: 0px;
        // &--share {
        //     margin-right: 204px;
        // }
      }
    }
    &__images {
      margin-bottom: 20px;
    }
    &__image {
      margin: 0 auto;
      img {
        width: auto;
      }
      &--standart {
        margin: 0 auto 32px auto;
      }
      &--margin {
        margin: 0 auto 154px auto;
      }
      &--uno {
        // margin: 100px 0 0 0;
        // width: 244px;
        // height: 288px;
      }
      &--dos {
        // margin: 232px 0 0 0;
        // width: 295px;
        // height: 399px;
      }
      &--tres {
        // margin: -70px 0 0 0;
        // width: 109px;
        // height: 129px;
      }
      &--quatro {
        // margin: 107px 0 124px 0;
        // width: 252px;
        // height: 297px;
      }
      &--next {
        // width: auto;
        // height: 206px;
      }
      &--text {
        overflow: hidden;
      }
      &-text {
        display: none;
      }
    }
    &__next {
      margin: 222px auto 0 auto;
    }
    &__line {
      margin-top: 56px;
      &--share {
        margin-top: 0px;
      }
    }
  }
}

@media (max-width: 710px) {
  .project {
    &__title {
      &--next {
        min-width: 100%;
      }
    }
  }
}

@media (max-width: 670px) {
  .project {
    &__images {
      flex-direction: column;
    }
    &__image {
      width: calc(100% - 32px);
      height: unset;
      margin-bottom: 11px;
      &--uno {
        // width: 255px;
        // height: 302px;
      }
      &--dos {
        // margin: 16px 0 0 0;
        // width: 100%;
        // height: auto;
      }
      &--tres {
        // margin: 88px 0 0 0;
        // width: 100%;
        // height: auto;
      }
      &--quatro {
        // margin: 16px 0 88px auto;
        // width: 255px;
        // height: 301px;
      }
      &--next {
        height: 254px;
      }
      img {
        width: 100%;
      }
      &-text {
        display: none;
      }
    }
    &__title {
      font-size: 56px;
      &--text {
        margin-top: 88px;
        font-size: 32px;
      }
      &--next {
        font-size: 48px;
      }
    }
    &__next {
      width: 100%;
      padding-left: 75px;
      padding-right: 75px;
      // &-wrap {
      //     margin-top: 0px;
      // }
    }
  }
}

@media (max-width: 620px) {
  .project {
    &__title {
      // font-size: 50px;
      padding: 0 16px;
      &--next {
        padding: 0;
      }
      // &--text {
      //     font-size: 32px;
      // }
    }
    &__wrap {
      // padding: 0 16px;
    }
    &__info {
      padding: 0 16px;
      font-size: 13px;
      margin-bottom: 88px;
      display: flex;
      flex-direction: column;
      align-items: center;
      &--share {
        margin-bottom: 0px;
      }
      &-left {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      &-right {
        margin-left: 0px;
        margin-top: 56px;
        display: flex;
        flex-direction: column;
        align-items: center;
        span {
          &:last-child {
            margin-left: 0px;
            margin-top: 8px;
          }
        }
      }
      &-middle {
        margin-top: 56px;
        align-items: center;
        flex-direction: column;
        margin-left: 0;
        &--share {
          margin-right: 0px;
        }
      }
    }
  }
  .animate-text {
    &--team {
      margin-left: 0px;
      margin-top: 8px;
    }
    &--share {
      margin-left: 0px;
      margin-top: 8px;
    }
    &__button {
      text-align: center;
    }
  }
}
@media (max-width: 480px) {
  .project {
    &__title {
      margin-top: 32px;
      margin-bottom: 88px;
    }
  }
}
@media (max-width: 414px) {
  .project {
    // margin-top: 145px;
    &__address {
      font-size: 13px;
    }
    &__title {
      // margin-top: 35px;
      // font-size: 56px;
      &--text {
        margin-top: 88px;
        // font-size: 32px;
      }
      &--next {
        margin-top: 0px;
        top: 87px;
        // font-size: 49px;
      }
    }
    &__image {
      // margin: 48px auto 0 auto;
      &--standart {
        margin: 0 auto 16px auto;
      }
      &--uno {
        // margin: 72px 0 0 0;
      }
      &--dos {
        // margin: 16px 0 0 0;
      }
      &--tres {
        // margin: 88px 0 0 0;
      }
      &--quatro {
        // margin: 16px 0 88px auto;
      }
      &--margin {
        margin: 0 auto 108px auto;
      }
      &--next {
        width: auto;
        // height: 144px;
        margin: 0 auto;
      }
    }
    &__line {
      margin-top: 48px;
    }
    &__next {
      margin: 143px auto 0 auto;
    }
  }
}
</style>
