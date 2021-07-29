<template>
    <div class="about-modal">
        <video playsinline="" autoplay="" controls="" data-poster="">
            <source v-if="mainData && mainData.main_video" :src="getVideo(mainData.main_video)" type="video/mp4">
            <source v-else-if="aboutData && aboutData.main_video" :src="getVideo(aboutData.main_video)" type="video/mp4">
        </video>
        <div class="close-modal" @click="$emit('close', 'show')"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    computed: {
		mainData() { return this.$store.getters['lang/main/data'] },
		aboutData() { return this.$store.getters['lang/about/data'] },
    },
    methods: {
        getVideo(video) {
            return `${this.baseUrl}${video}`
        },
    }
}
</script>

<style lang="scss">
.about-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    background: #000;
    video {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>