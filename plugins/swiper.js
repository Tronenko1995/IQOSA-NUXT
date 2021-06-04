import Vue from 'vue'

import { Swiper as SwiperClass, Pagination, Navigation, Mousewheel, Autoplay, Controller } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, Controller])

Vue.use(getAwesomeSwiper(SwiperClass))