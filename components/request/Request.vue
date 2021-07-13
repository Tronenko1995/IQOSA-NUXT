<template>
    <main class="request-page">
        <section class="request-page__section">
            <p class="request-page__question">What do you want<br>to talk about?</p>
            <p class="request-page__title">i want to</p>
            <SayHiText v-if="type === 'sayHi'"/>
            <SayHiForm v-if="type === 'sayHi'"/>
            <WorkWithYouText v-if="type === 'workWithYou'"/>
            <WorkWithYouForm v-if="type === 'workWithYou'"/>
            <JoinText v-if="type === 'join'"/>
            <JoinForm v-if="type === 'join'"/>
            <BriefText v-if="type === 'brief'"/>
            <BriefForm v-if="type === 'brief'"/>
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
import BriefText from '@/components/request/BriefText.vue'
import BriefForm from '@/components/request/BriefForm.vue'
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
        BriefText,
        BriefForm,
    },
    props: {
        type: {
            type: String,
            required: true
        }
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
        margin-top: 279px;
    }
    &__question {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 120%;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 164px;
        line-height: 90%;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        margin-top: 112px;
    }
}
@media (max-width: 1440px) {
    .request-page {
        &__section {
            margin-top: 241px;
        }
        &__title {
            font-size: 148px;
        }
    }
}
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
            font-size: 17px;
        }
    }
}
@media (max-width: 768px) {
    .request-page {
        &__section {
            margin-top: 190px;
        }
        &__title {
            font-size: 88px;
            margin-top: 64px;
        }
        &__question {
            font-size: 16px;
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
        &__question {
            font-size: 15px;
        }
    }
}
</style>