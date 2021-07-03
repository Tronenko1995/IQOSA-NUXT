<template>
    <section class="career">
        <p class="career__title">CAREER</p>
        <p class="career__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor i</p>
        <ul class="career__list">
            <li class="job" @mouseover="hideJobs()" @mouseleave="showJobs()">
                <hr class="job__line">
                <p class="job__counter">JOB 1</p>
                <div class="job__info">
                    <p class="job__title">architecture</p>
                    <div class="job__visible">
                        <p>Итак, если ты:</p>
                        <ul>
                            <li>имеешь высшее профильное образование и опыт работы от 3х лет;</li>
                            <li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li>
                            <li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li>
                        </ul>
                        <p>Ты - тот, кто нам нужен!</p>
                    </div>
                </div>
                <img class="job__svg" :src="require('~/assets/svg/arrow-career.svg')" alt="" width="42" height="42">
            </li>
            <li class="job" @mouseover="hideJobs()" @mouseleave="showJobs()">
                <hr class="job__line">
                <p class="job__counter">JOB 2</p>
                <div class="job__info">
                    <p class="job__title">3D Max Visualisator</p>
                    <div class="job__visible">
                        <p>Итак, если ты:</p>
                        <ul>
                            <li>имеешь высшее профильное образование и опыт работы от 3х лет;</li>
                            <li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li>
                            <li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li>
                        </ul>
                        <p>Ты - тот, кто нам нужен!</p>
                    </div>
                </div>
                <img class="job__svg" :src="require('~/assets/svg/arrow-career.svg')" alt="" width="42" height="42">
            </li>
            <li class="job" @mouseover="hideJobs()" @mouseleave="showJobs()">
                <hr class="job__line">
                <p class="job__counter">JOB 3</p>
                <div class="job__info">
                    <p class="job__title">EnginEer</p>
                    <div class="job__visible">
                        <p>Итак, если ты:</p>
                        <ul>
                            <li>имеешь высшее профильное образование и опыт работы от 3х лет;</li>
                            <li>мобильный, активный, в “теме” рынка современных материалов, нормы их расхода;</li>
                            <li>знаешь процессы ремонтно-строительных работ и у тебя всегда всё под контролем.</li>
                        </ul>
                        <p>Ты - тот, кто нам нужен!</p>
                    </div>
                </div>
                <img class="job__svg" :src="require('~/assets/svg/arrow-career.svg')" alt="" width="42" height="42">
            </li>
        </ul>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
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
            setModal: 'modal/setModal',
        }),
        hideJobs() {
            if (window.innerWidth > 1366) {
                this.$gsap.to('.job', {opacity: 0.5, duration: 0.2})
            }
        },
        showJobs() {
            if (window.innerWidth > 1366) {
                this.$gsap.to('.job', {opacity: 1, duration: 0.2})
            }
        }
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
    }
    &__list {
        margin-top: 164px;
    }
}
.job {
    width: 978px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s;
    &__counter {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'zero' on, 'hist' on, 'ss12' on, 'kern' off;
        color: #FFFFFF;
        position: absolute;
        top: 20px;
        left: 0;
    }
    &__line {
        height: 1px;
        width: 100%;
        background: #fff;
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
    }
    &__visible {
        margin-top: 16px;
        margin-bottom: 96px;
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        p {

        }
        ul {
            margin: 30px 0;
            list-style: inside;
        }
        li {

        }
    }
    &__svg {
        position: absolute;
        top: 18px;
        right: 0;
        opacity: 0;
        transition: .5s;
    }
    &:hover {
        cursor: pointer;
        opacity: 1 !important;
        .job__svg {
            opacity: 1;
        }
    }
}
</style>