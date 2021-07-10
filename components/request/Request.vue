<template>
    <main class="request-page">
        <section class="request-page__section">
            <p class="request-page__question">What do you want<br>to talk about?</p>
            <p class="request-page__title">i want to</p>
            <SayHiText />
            <SayHiForm />
        </section>
    </main>
</template>

<script>
import SayHiText from '@/components/request/SayHiText.vue'
import SayHiForm from '@/components/request/SayHiForm.vue'
import { mapMutations } from 'vuex'
export default {
    layout: 'standart',
    components: {
        SayHiText,
        SayHiForm
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
</style>