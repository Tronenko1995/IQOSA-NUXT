<template>
    <div class="about-modal">
        <video playsinline="" autoplay="" controls="" data-poster="">
            <source src="https://iqosa.com/wp-content/uploads/2021/06/IQOSA_final7_en.mp4" type="video/mp4">
        </video>
        <div class="close-modal" @click="$emit('close', 'show')"></div>
    </div>
</template>

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