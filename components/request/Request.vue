<template>
    <main class="request-page">
        <section class="request-page__section">
    <div class="request-page__question">
        <p v-for="(item, i) in data.title_small" :key="i">{{ item }}</p>
    </div>
            <p class="request-page__title">{{ data.title_big_bold }}</p>
            <SayHiText :data="data"/>
            <SayHiForm v-if="type === 'sayHi'" :data="data"/>
            <WorkWithYouForm v-if="type === 'workWithYou'" :data="data"/>
            <JoinForm v-if="type === 'join'" :data="data"/>
            <!-- <WorkWithYouText v-if="type === 'workWithYou'" :data="data"/> -->
            <!-- <JoinText v-if="type === 'join'" :data="data"/> -->
            <!-- <BriefText v-if="type === 'brief'"/> -->
            <!-- <BriefForm v-if="type === 'brief'"/> -->
        </section>
    </main>
</template>

<script>
import SayHiText from '@/components/request/SayHiText.vue'
import SayHiForm from '@/components/request/SayHiForm.vue'
import WorkWithYouText from '@/components/request/WorkWithYouText.vue'
import WorkWithYouForm from '@/components/request/WorkWithYouForm.vue'
import JoinText from '@/components/request/JoinText.vue'
import JoinForm from '@/components/request/JoinForm.vue'
// import BriefText from '@/components/request/BriefText.vue'
// import BriefForm from '@/components/request/BriefForm.vue'
import { mapMutations } from 'vuex'
export default {
    layout: 'standart',
    components: {
        SayHiText,
        SayHiForm,
        WorkWithYouText,
        WorkWithYouForm,
        JoinText,
        JoinForm,
        // BriefText,
        // BriefForm,
    },
    props: {
        type: {
            type: String,
            required: true
        },
        data: {
            type: Object,
            required: true
        },
    },
    mounted() {
        if (this.preloader) {
        setTimeout(() => {
            this.setPlug(false)
            // this.animate()
        }, this.duration.preloader);
        } else {
        setTimeout(() => {
            this.setPlug(false)
            // this.animate()
        }, this.duration.page);
        }
    },
    computed: {
        preloader() { return this.$store.getters['preloader/preloader'] },
        duration() { return this.$store.getters['plug/duration'] },
	    modal() { return this.$store.getters['modal/modal'] },
    },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
        }),
    }
}
</script>

<style lang="scss">
.request-page {
    &__section {
        margin-top: 215px;
        // margin-bottom: 125px;
    }
    &__question {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 140%;
        text-align: center;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-weight: 400;
        font-size: 148px;
        line-height: 115%;
        text-align: center;
        text-transform: uppercase;
        // font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
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