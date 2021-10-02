<template>
  <div class="forms__container">
    <main class="request-page">
      <section class="request-page__section">
        <div class="request-page__question">
          <p v-for="(item, i) in data.title_small" :key="i">{{ item }}</p>
        </div>
        <p class="request-page__title">{{ data.title_big_bold }}</p>
        <SayHiText :data="dataRequests" />

        <transition name="fade" mode="out-in">
          <div :key="getKey">
            <nuxt-child />
          </div>
        </transition>
        <Modals v-if="modal.show" :modal="modal" />
      </section>
    </main>
  </div>
</template>

<script>
import SayHiText from "@/components/request/SayHiText.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "forms",
  components: {
    SayHiText
  },
  head() {
    return {
      title: this.data.seo_title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.meta_description
        },
        {
          property: "og:title",
          content: this.data.seo_title
        },
        {
          property: "og:description",
          content: this.data.meta_description
        },
        {
          property: "og:url",
          content: this.fullUrl
        },
        {
          property: "og:image",
          content: this.getImg(this.dataFooter.og_image)
        },
        {
          property: "og:image:width",
          content: "1080"
        },
        {
          property: "og:image:height",
          content: "1080"
        },
        {
          property: "twitter:card",
          content: "summary_large_image"
        }
      ]
    };
  },
  data: function() {
    return {
      dataRequests: [],
      baseUrl: process.env.baseUrl
    };
  },
  layout: "standart",
  async asyncData({ store, i18n, route, env, redirect }) {
    try {
      await store.dispatch(
        "lang/request/getDataWorkWithYouPageContent",
        `/work_with_you?lang=${i18n.locale}`
      );
      await store.dispatch(
        "lang/request/getSayHiPageContent",
        `/say_hi?lang=${i18n.locale}`
      );
      await store.dispatch(
        "lang/request/getJoinPageContent",
        `/join?lang=${i18n.locale}`
      );
    } catch (e) {
      // throw new Error(e);
      redirect('/404')
    }
    let fullUrl = `${env.frontUrl}${route.path}`;
    return { fullUrl };
  },
  computed: {
    getKey() {
      return this.$route.name;
    },
    ...mapGetters("lang/request/", [
      "dataSayHi",
      "dataJoin",
      "dataWorkWithYou"
    ]),
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
      return this.$store.getters["lang/request/dataJoin"];
    },
    dataFooter() {
      return this.$store.getters["lang/parts/dataFooter"];
    }
  },
  methods: {
    ...mapMutations({
      setPlug: "plug/setVisible"
    }),
    setPlugVisibility() {
      if (this.preloader) {
        setTimeout(() => {
          this.setPlug(false);
          // this.animate()
        }, this.duration.preloader);
      } else {
        setTimeout(() => {
          this.setPlug(false);
          // this.animate()
        }, this.duration.page);
      }
    },
    setDataRequests() {
      if (/forms-sayhi/.test(this.$route.name)) {
        this.dataRequests = [
          this.dataSayHi,
          this.dataJoin,
          this.dataWorkWithYou
        ];
      } else if (/forms-join/.test(this.$route.name)) {
        this.dataRequests = [
          this.dataJoin,
          this.dataWorkWithYou,
          this.dataSayHi
        ];
      } else {
        this.dataRequests = [
          this.dataWorkWithYou,
          this.dataSayHi,
          this.dataJoin
        ];
      }
    },
    // testLang() {
    //   const html = document.getElementsByTagName("html");
    //   let lang;
    //   this.$i18n.locale === "ua" ? (lang = "uk") : (lang = this.$i18n.locale);
    //   html[0].setAttribute("lang", lang);
    // },
    getImg(img) {
      return `${this.baseUrl}${img}`;
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
		copyFunction() {
			document.oncopy = function () {
				let bodyElement = document.body
				let selection = getSelection()
				let href = document.location.href
				let copyright = "<br><br>Источник: <a href='"+ href +"'>" + href + "</a><br>©  IQOSA  "
				let text = selection + copyright
				let divElement = document.createElement('div')
				divElement.style.position = 'absolute'
				divElement.style.left = '-99999px'
				divElement.innerHTML = text
				bodyElement.appendChild(divElement)
				selection.selectAllChildren(divElement)
				setTimeout(function() { 
					bodyElement.removeChild(divElement)
				}, 0)
			}
		},
  },
  beforeMount() {
    // this.testLang();
  },
  created() {
    this.setDataRequests();
  },
  mounted() {
    this.setPlugVisibility();
    this.scrollToTop();
		this.copyFunction()
  }
};
</script>

<style lang="scss">
.request-page {
  &__section {
    margin-top: 215px;
    // margin-bottom: 125px;
  }
  &__question {
    font-family: "Light", Arial;
    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #ffffff;
  }
  &__title {
    font-family: "Roman", Arial;
    font-style: normal;
    font-weight: normal;
    font-weight: 400;
    font-size: 148px;
    line-height: 115%;
    text-align: center;
    text-transform: uppercase;
    // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
    color: #ffffff;
    margin-top: 125px;
  }
}
// @media (max-width: 1440px) {
//     .request-page {
//         &__section {
//             margin-top: 241px;
//         }
//         &__title {
//             font-size: 148px;
//         }
//     }
// }
@media (max-width: 1280px) {
  .request-page {
    &__section {
      margin-top: 223px;
    }
    &__title {
      font-size: 116px;
      margin-top: 88px;
    }
    &__question {
      font-size: 19px;
    }
  }
}
@media (max-width: 1024px) {
  .request-page {
    &__section {
      margin-top: 206px;
    }
    &__title {
      font-size: 108px;
      margin-top: 72px;
    }
    &__question {
      // font-size: 17px;
      font-size: 16px;
    }
  }
}
@media (max-width: 880px) {
  .request-page {
    // &__section {
    //     margin-top: 190px;
    // }
    &__title {
      font-size: 88px;
      // margin-top: 64px;
    }
    // &__question {
    // font-size: 16px;
    // }
  }
}
@media (max-width: 660px) {
  .request-page {
    &__title {
      font-size: 56px;
    }
    &__question {
      font-size: 14px;
    }
  }
}
@media (max-width: 500px) {
  .request-page {
    &__section {
      margin-top: 145px;
    }
    &__title {
      font-size: 56px;
      margin-top: 48px;
    }
  }
}
@media (max-width: 414px) {
  .request-page {
    &__title {
      font-size: 36px;
    }
  }
}
</style>
