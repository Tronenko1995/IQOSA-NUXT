<template>
    <section class="career">
        <h1 class="career__title">
            <p class="career__title-text">CAREER</p>
        </h1>
        <h2 class="career__description">
            <p class="career__description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor i</p>
        </h2>
        <ul class="career__list">
            <li class="job" ref="job" @mouseover="hideJobs()" @mouseleave="showJobs()" @click="job(item.id)" v-for="item in jobs" :key="item.id">
                <hr class="job__line">
                <div class="job__for-counter">
                    <p class="job__counter">JOB {{item.id}}</p>
                </div>
                <div class="job__info">
                    <h2 class="job__title">
                        <p class="job__title-text">{{ item.name }}</p>
                    </h2>
                    <div class="job__visible" v-html="item.visible"></div>
                    <div class="job__hidden">
                    <div v-html="item.hidden"></div>
                        <nuxt-link :to="localePath('/form')" class="job__link job-link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
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
                <hr class="job__line job__line--last" v-if="item.id === jobs.length">
            </li>
        </ul>
        <div class="career__no-vacancy">
            <p class="job__title job__title--animate jsTitleAnimation">DIDN’T FIND THE VACANCY</p>
            <div class="job__descr job__descr--animate jsTitleAnimation">
                <p class="job__title job__title--italic ">JUST DROP US A LINE </p>
                <div
                class="make-request job__request"
                @mouseover="findElement($event)"
                @mouseleave="animateTextHide($event)"
                >
                <nuxt-link :to="localePath('/sayhi')" class="make-request__link">
                    <span class="make-request__text">get request</span>
                    <span class="make-request__change">
                    <span class="make-request__span make-request__span--first"
                        >now</span
                    >
                    <span class="make-request__span">now</span>
                    </span>
                </nuxt-link>
                <span class="make-request__line"></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            jobs: [
                {
                    id: 1,
                    name: 'architecture',
                    visible: '<div><p>Итак, если ты:</p></div><ul><li>имеешь высшее профильное образование и опыт работы от 3х лет;</li><li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li><li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li></ul><p>Ты - тот, кто нам нужен!</p>',
                    hidden: '<p>Обязанности:</p><ul><li>читать чертежи, составлять и контролировать сметную документацию по проектам;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>учет и анализ взаиморасчетов с контрагентами и поставщиками, контроль выполнения договорных обязательств;</li><li>проверка актов выполненных работ (соответствия объемов выполненных работ).</li></ul><p>Что еще важно:</p><ul><li>личное авто;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>организаторские навыки;</li><li>пунктуальность;</li></ul>',
                },
                {
                    id: 2,
                    name: '3D Max Visualisator',
                    visible: '<p>Итак, если ты:</p><ul><li>имеешь высшее профильное образование и опыт работы от 3х лет;</li><li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li><li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li></ul><p>Ты - тот, кто нам нужен!</p>',
                    hidden: '<p>Обязанности:</p><ul><li>читать чертежи, составлять и контролировать сметную документацию по проектам;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>учет и анализ взаиморасчетов с контрагентами и поставщиками, контроль выполнения договорных обязательств;</li><li>проверка актов выполненных работ (соответствия объемов выполненных работ).</li></ul><p>Что еще важно:</p><ul><li>личное авто;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>организаторские навыки;</li><li>пунктуальность;</li></ul>',
                },
                {
                    id: 3,
                    name: 'EnginEer',
                    visible: '<p>Итак, если ты:</p><ul><li>имеешь высшее профильное образование и опыт работы от 3х лет;</li><li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li><li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li></ul><p>Ты - тот, кто нам нужен!</p>',
                    hidden: '<p>Обязанности:</p><ul><li>читать чертежи, составлять и контролировать сметную документацию по проектам;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>учет и анализ взаиморасчетов с контрагентами и поставщиками, контроль выполнения договорных обязательств;</li><li>проверка актов выполненных работ (соответствия объемов выполненных работ).</li></ul><p>Что еще важно:</p><ul><li>личное авто;</li><li>контролировать расходование и списание материальных ресурсов;</li><li>организаторские навыки;</li><li>пунктуальность;</li></ul>',
                },
            ]
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

                tl.to(item.querySelector("hr"), {width: 100 + "%", duration: 0.5, delay: 1})
                tl.to(item.querySelector("hr:last-child"), {width: 100 + "%", duration: 0.5})
                tl.to(item.querySelector(".job__counter"), {translateY: 0, duration: 0.5})
                tl.to(item.querySelector(".job__title-text"), {translateY: 0, scale: 1, duration: 0.5, delay: 0.5}, 0)
                tl.to(item.querySelectorAll(".job__visible p"), {translateY: 0, opacity: 1, duration: 0.5, delay: 0.850}, 0)
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
            console.log(id)
            let job = this.$refs.job[id-1]
            if (!job.classList.contains("job--active")) {
                    this.$gsap.to(job.querySelector(".job__hidden"), {
                        height: "auto",
                        opacity: 1,
                        duration: 1
                    })
                    job.classList.toggle('job--active')
                    job.classList.toggle('job--transition')
                    this.scrollToElement(job)
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
            let selectedPosX = 0
            let selectedPosY = 0

            while (el != null) {
                selectedPosX += el.offsetLeft
                selectedPosY += el.offsetTop
                el = el.offsetParent
            }

            selectedPosY -= 20

            window.scrollTo({
                top: selectedPosY,
                left: selectedPosX,
                behavior: 'smooth'

            })
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
    &__title {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
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
    }
    &__no-vacancy {
        margin-top: 200px;
    }
}
.job {
    width: 978px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
    padding-bottom: 56px;
    &__for-counter {
        position: absolute;
        top: 20px;
        left: 0;
        overflow: hidden;
    }
    &__counter {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'zero' on, 'hist' on, 'ss12' on, 'kern' off;
        color: #FFFFFF;
        transform: translateY(-100%);
    }
    &__line {
        height: 1px;
        // width: 100%;
        width: 0;
        background: #fff;
        &--last {
            display: none;
        }
    }
    &__info {
        margin-top: 16px;
        width: 607px;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        overflow: hidden;
        &-text {
            transform: translateY(100%);
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
        margin-bottom: 40px;
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        p {
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
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        p {}
        ul {
            margin: 30px 0;
            list-style: inside;
        }
        li {}
    }
    &__svg {
        position: absolute;
        top: 18px;
        right: 0;
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
        padding: 0 56px;
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
            margin-top: 132px;
        }
        &__no-vacancy {
            margin-top: 140px;
        }
        &__list {
            width: 100%;
        }
    }
    .job {
        width: 100%;
        &__counter {
            font-size: 14px;
        }
        &__info {
            width: 522px;
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
@media (max-width: 825px) {
    .job {
        &__title {
            font-size: 40px;
        }
    }
}
@media (max-width: 768px) {
    .career {
        padding: 0 48px;
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
        &__list {
            width: 100%;
        }
    }
    .job {
        width: 100%;
        padding-bottom: 38px;
        &__counter {
            font-size: 14px;
        }
        &__info {
            width: 522px;
        }
        &__request {
            margin-left: 40px;
        }
        &__title {
            font-size: 36px;
        }
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
@media (max-width: 414px) {
    .career {
        padding: 0 16px;
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
            width: 100%;
            margin-top: 88px;
        }
    }
    .job {
        width: 100%;
        padding-bottom: 16px;
        &__for-counter {
            display: none;
        }
        &__counter {
            display: none;
        }
        &__title {
            font-size: 32px;
        }
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
</style>