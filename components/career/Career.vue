<template>
    <section class="career">
        <h1 class="career__title">
            <p class="career__title-text">{{ data.title }}</p>
        </h1>
        <h2 class="career__description">
            <p class="career__description-text">{{ data.subtitle[0].text_line }}</p>
        </h2>
        <ul class="career__list" v-if="list">
            <li v-for="(item, i) in list" class="job" ref="job" @mouseover="hideJobs()" @mouseleave="showJobs()" @click="job(i)"  :key="i">
                <hr class="job__line">
                <div class="job__container">
                    <div class="job__for-counter">
                        <p class="job__counter">{{ data.numeration_text }} {{i+1}}</p>
                    </div>
                    <div class="job__info">
                        <h2 class="job__title">
                            <p class="job__title-text">{{ item.vacancy_name }}</p>
                        </h2>
                        <div class="job__visible">
                            <div v-if="item.vacancy_top_text">{{ item.vacancy_top_text }}</div>
                            <div v-if="item.vacancy_responsibilities" v-html="item.vacancy_responsibilities"></div>
                            <div v-if="item.vacancy_bottom_text">{{ item.vacancy_bottom_text }}</div>
                        </div>
                        <div class="job__hidden">
                        <template v-if="item.vacancy_description">
                            <template v-for="(item,i) in item.vacancy_description">
                                <div v-if="item" :key="i" v-html="item.paragraph">
                                </div>
                            </template>
                        </template>
                            <nuxt-link :to="localePath('/forms/join')" class="job__link job-link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
                                <span class="arrow-link__change">
                                    <span class="arrow-link__span arrow-link__span--first">fill</span>
                                    <span class="arrow-link__span arrow-link__span--last">fill</span>
                                </span>
                                <span class="arrow-link__text">THE form</span>
                                <span class="arrow-link__circle">
                                    <svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                    <img class="job__svg" :src="require('~/assets/svg/arrow-career.svg')" alt="" width="42" height="42">
                </div>
                <hr class="job__line job__line--last" v-if="i === list.length">
            </li>
        </ul>
        <div class="career__no-vacancy">
            <p class="job__title job__title--animate jsTitleAnimation">{{ data.bottom_title_bold }}</p>
            <div class="job__descr job__descr--animate jsTitleAnimation">
                <p class="job__title job__title--italic ">{{ data.bottom_title_thin }}</p>
                <div
                class="make-request job__request"
                @mouseover="findElement($event)"
                @mouseleave="animateTextHide($event)"
                >
                <a @click.prevent="goPage('/forms/sayhi')" :href="localePath('/forms/sayhi')"  class="make-request__link">
                    <span class="make-request__text">{{ data.vacancy_link_text }}</span>
                    <span class="make-request__change">
                    <span class="make-request__span make-request__span--first"
                        >{{ data.vacancy_link_text_animated }}</span
                    >
                    <span class="make-request__span">{{ data.vacancy_link_text_animated }}</span>
                    </span>
                </a>
                <span class="make-request__line"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
	props: {
		data: {
			type: Object,
			required: true
		},
		list: {
			type: Array,
		}
	},
    mounted() {
        this.$gsap.registerPlugin(this.$ScrollTrigger);
        if (this.preloader) {
            setTimeout(() => {
                this.setPlug(false)
                this.animate()
            }, this.duration.preloader);
        } else {
            setTimeout(() => {
                this.setPlug(false)
                this.animate()
            }, this.duration.page);
        }
    },
    computed: {
        preloader() { return this.$store.getters['preloader/preloader'] },
        duration() { return this.$store.getters['plug/duration'] }
    },
    methods: {
        ...mapMutations({
			setAnimate: 'plug/setAnimate',
            setPlug: 'plug/setVisible',
            setModal: 'modal/setModal',
        }),
        animate() {
            let tl,
                title = document.querySelector('.career__title-text'),
                description = document.querySelector('.career__description-text'),
                line = document.querySelector('.make-request__line'),
                link = document.querySelector('.make-request__link')

                this.$ScrollTrigger.create(
                    {
                        trigger: title,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(title, {translateY: 0, duration: 1})

                this.$ScrollTrigger.create(
                    {
                        trigger: description,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(description, {translateY: 0, duration: 1})

                this.$ScrollTrigger.create(
                    {
                        trigger: line,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(line, {translateX: 0, opacity: 1, duration: 0.5})

                this.$ScrollTrigger.create(
                    {
                        trigger: link,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );
                this.$gsap.to(link, {translateY: 0, opacity: 1, duration: 0.25})


            Array.from(this.$refs.job).forEach((item)=> {

                this.$ScrollTrigger.create(
                    {
                        trigger: item,
                        start: "top bottom",
                    },
                    tl = this.$gsap.timeline()
                );

                tl.to(item.querySelector("hr"), {width: 100 + "%", duration: 0.5, delay: 0})
                tl.to(item.querySelector("hr:last-child"), {width: 100 + "%", duration: 0.5})
                tl.to(item.querySelector(".job__counter"), {translateY: 0, duration: 0.5})
                tl.to(item.querySelector(".job__title-text"), {translateY: 0, scale: 1, duration: 0.5, delay: 0.5}, 0)
                tl.to(item.querySelectorAll(".job__visible div"), {translateY: 0, opacity: 1, duration: 0.5, delay: 0.850}, 0)
                tl.to(item.querySelectorAll(".job__visible li"), {translateY: 0, opacity: 1, duration: 0.5, delay: 0.850}, 0)
            })

            let titleAnimate = document.querySelectorAll('.jsTitleAnimation')

            Array.from(titleAnimate).forEach((item)=> {

                this.$ScrollTrigger.create(
                    {
                        trigger: item,
                        start: "top bottom",
                    },
                this.$gsap.to(item, {translateX: 0, opacity: 1, duration: 1})
                );

            })
        },
        hideJobs() {
            if (window.innerWidth > 1366) {
                this.$gsap.to('.job', {opacity: 0.5, duration: 0.2})
            }
        },
        showJobs() {
            if (window.innerWidth > 1366) {
                this.$gsap.to('.job', {opacity: 1, duration: 0.2})
            }
        },
        job(id) {
            // console.log(id)
            let job = this.$refs.job[id]
            if (!job.classList.contains("job--active")) {
                    Array.from(this.$refs.job).forEach((item) => {
                        item.classList.remove('job--active')
                        item.classList.remove('job--transition')
                        this.$gsap.to(item.querySelector(".job__hidden"), {
                            height: 0,
                            opacity: 0,
                            duration: 0
                        })
                    })
                    this.$gsap.to(job.querySelector(".job__hidden"), {
                        height: "auto",
                        opacity: 1,
                        duration: 1,
                    })
                    job.classList.toggle('job--active')
                    job.classList.toggle('job--transition')
                    setTimeout(() => {
                        this.scrollToElement(job)
                    }, 300);

            } else {
                job.classList.toggle('job--active')
                job.classList.toggle('job--transition')
                this.$gsap.to(job.querySelector(".job__hidden"), {
                    height: 0,
                    opacity: 0,
                    duration: 1
                })
            }
        },
        scrollToElement(el) {
            let selectedPosY = 0
            // let selectedPosX = 0

            while (el != null) {
                // selectedPosX += el.offsetLeft
                selectedPosY += el.offsetTop
                el = el.offsetParent
            }

            selectedPosY -= 21

            window.scrollTo({
                top: selectedPosY,
                // left: selectedPosX,
                behavior: 'smooth'
            })

            setTimeout(() => {
            selectedPosY += 1

            window.scrollTo({
                top: selectedPosY,
                // left: selectedPosX,
                behavior: 'smooth'
            })
            }, 500);
        },
		findElement(e) {
			if (e.target.classList.contains('arrow-link__text') || e.target.classList.contains('arrow-link') || e.target.classList.contains('arrow-link__circle')) {
                const el = e.target.parentElement.querySelector('.arrow-link__change')
				this.animateTextShow(el)
			} else if (e.target.classList.contains('arrow-link__span--first')) {
                this.animateTextShow(e.target.parentElement)
            } else if (e.target.classList.contains("make-request__text") || e.target.classList.contains("make-request__link")) {
                const el = e.target.parentElement.querySelector(".make-request__change");
                this.animateTextShow(el);
            } else if (e.target.classList.contains("make-request__span--first")) {
                this.animateTextShow(e.target.parentElement);
            }
		},
        animateTextShow(el) {
            this.$gsap.to(el.children[0], {
                translateY: -100 + "%",
                duration: .5
            })
            this.$gsap.to(el.children[1], {
                translateY: -100 + "%",
                duration: .5
            })
        },
		animateTextHide(e) {
			if (e.target.classList.contains('arrow-link')) {
                const el = e.target.querySelector('.arrow-link__change')
				this.$gsap.to(el.children[0], {
					translateY: 0 + "%",
					duration: .5
				})
				this.$gsap.to(el.children[1], {
					translateY: 0 + "%",
					duration: .5
				})
			} else if (e.target.classList.contains("make-request")) {
                this.$gsap.to(e.target.children[0].children[1].children[0], {
                translateY: 0 + "%",
                duration: 0.5,
                });
                this.$gsap.to(e.target.children[0].children[1].children[1], {
                translateY: 0 + "%",
                duration: 0.5,
                });
            }
		},
        goPage(page) {
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(page))
            }, 1000);
        },
    }
}
</script>


<style lang="scss">
.career {
    margin-top: 367px;
    margin-bottom: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    &__title {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        overflow: hidden;
        &-text {
            transform: translateY(100%);
        }
    }
    &__description {
        margin-top: 88px;
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 120%;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        width: 516px;
        text-align: center;
        overflow: hidden;
        &-text {
            transform: translateY(100%);
        }
    }
    &__list {
        margin-top: 164px;
        width: 60%;
    }
    &__no-vacancy {
        margin-top: 200px;
    }
}
.job {
    // width: 978px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
    // padding-bottom: 56px;
    &__container {
        display: flex;
        width: 100%;
    }
    &__for-counter {
        // position: absolute;
        // top: 20px;
        // left: 0;
        overflow: hidden;
        margin-top: 16px;
    }
    &__counter {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        // text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'zero' on, 'hist' on, 'ss12' on, 'kern' off;
        color: #FFFFFF;
        transform: translateY(-100%);
    }
    &__line {
        height: 1px;
        // width: 100%;
        width: 0;
        background: #fff;
        margin-right: auto;
        &--last {
            display: none;
        }
    }
    &__info {
        margin-top: 16px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-align: center;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        overflow: hidden;
        &-text {
            transform: translateY(100%);
            text-align: left;
        }
        &--italic {
            font-family: 'ThinItalic', Arial;
        }
        &--animate {
            opacity: 0;
            transform: translateX(300px);
        }
    }
    &__visible {
        margin-top: 16px;
        margin-bottom: 50px;
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        // p {
        //     transform: translateY(-20%);
        //     opacity: 0;
        // }
        div {
            transform: translateY(-20%);
            opacity: 0;
        }
        ul {
            margin: 30px 0;
            list-style: inside;
        }
        li {
            transform: translateY(-20%);
            opacity: 0;
        }
        a {
            color: #fff;
            text-decoration: underline;
        }
    }
    &__hidden {
        overflow: hidden;
        height: 0;
        opacity: 0;
        margin-top: 16px;
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        p {}
        ul {
            margin: 30px 0;
            list-style: inside;
        }
        li {}
    }
    &__svg {
        // position: absolute;
        margin-top: 28px;
        margin-right: 13px;
        // top: 18px;
        // right: 0;
        opacity: 0;
        transition: .5s;
    }
    &__descr {
        display: flex;
        align-items: center;
        &--animate {
            opacity: 0;
            transform: translateX(-300px);
        }
    }
    &__request {
        margin-left: 56px;
    }
    &__link {
        margin-top: 72px;
        margin-bottom: 56px;
    }
    &:hover {
        cursor: pointer;
        opacity: 1 !important;
        .job__svg {
            opacity: 1;
        }
    }
    &--active {
        opacity: 1 !important;
        .job__svg {
            transform: rotate(90deg);
            opacity: 1;
        }
    }
    &:last-child {
        padding-bottom: 0;
    }
}
@media (max-width: 1440px) {
    .career {
        margin-top: 305px;
        margin-bottom: 200px;
        &__title {
            font-size: 148px;
        }
        &__list {
            margin-top: 156px;
        }
        &__no-vacancy {
            margin-top: 160px;
        }
    }
}
@media (max-width: 1280px) {
    .career {
        margin-top: 311px;
        margin-bottom: 200px;
        &__title {
            font-size: 116px;
        }
        &__description {
            font-size: 19px;
        }
        &__list {
            margin-top: 148px;
        }
        &__no-vacancy {
            margin-top: 160px;
        }
    }
    .job {
        &__title {
            font-size: 46px;
        }
        &__svg {
            height: 38px;
            width: 38px;
        }
        &__request {
            margin-left: 48px;
        }
    }
}
@media (max-width: 1024px) {
    .career {
        // padding: 0;
        margin-top: 296px;
        margin-bottom: 180px;
        &__title {
            font-size: 108px;
        }
        &__description {
            font-size: 17px;
            width: 363px;
            margin-top: 80px;
        }
        &__list {
            width: 90%;
            margin-top: 132px;
        }
        &__no-vacancy {
            margin-top: 140px;
        }
    }
    .job {
        width: 100%;
        &__counter {
            font-size: 14px;
        }
        &__request {
            margin-left: 40px;
        }
        &__svg {
            height: 34px;
            width: 34px;
        }
    }
}
// @media (max-width: 825px) {
//     .job {
//         &__title {
//             font-size: 40px;
//         }
//     }
// }
@media (max-width: 768px) {
    .career {
        // padding: 0 48px;
        margin-top: 242px;
        margin-bottom: 156px;
        &__title {
            font-size: 88px;
        }
        &__description {
            font-size: 16px;
            width: 324px;
            margin-top: 72px;
        }
        &__no-vacancy {
            margin-top: 106px;
        }
        // &__list {
        //     width: 100%;
        // }
    }
    .job {
        width: 100%;
        padding-bottom: 38px;
        &__counter {
            font-size: 14px;
        }
        &__request {
            margin-left: 40px;
        }
        // &__title {
            // font-size: 36px;
        // }
        &__visible {
            margin-bottom: 50px;
        }
        &__svg {
            height: 28px;
            width: 28px;
        }
    }
}
@media (max-width: 618px) {
    .job {
        &__info {
            width: 100%;
        }
    }
}
@media (max-width: 710px) {
    .job {
        &__descr {
            flex-direction: column;
        }
        &__request {
            margin: 24px 0 0 0;
        }
    }
}
@media (max-width: 660px) {
    .career {
        // padding: 0 16px;
        margin-top: 187px;
        margin-bottom: 124px;
        &__title {
            font-size: 56px;
        }
        &__description {
            font-size: 15px;
            width: 343px;
            margin-top: 64px;
        }
        &__no-vacancy {
            margin-top: 106px;
        }
        &__list {
            // width: 100%;
            margin-top: 88px;
        }
    }
    .job {
        width: 100%;
        padding-bottom: 16px;
        &__info {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
        &__container {
            flex-direction: column;
        }
        &__for-counter {
            display: none;
        }
        &__counter {
            display: none;
        }
        // &__title {
            // font-size: 32px;
        // }
        &__visible {
            margin-bottom: 50px;
        }
        &__svg {
            position: unset;
            margin-right: auto;
            opacity: 1;
        }
        &__line {
            &--last {
                display: block;
                margin-top: 16px;
            }
        }
    }
}

@media (max-width: 414px) {
    .job {
        &__title {
            font-size: 32px;
        }
        &:last-of-type {
          padding-bottom: 10px;
          border-bottom: 1px solid white;
        }
    }
}
</style>
