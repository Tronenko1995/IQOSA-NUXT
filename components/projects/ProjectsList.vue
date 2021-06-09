<template>
    <section class="projects-list">
        <div class="projects-list__shadow"></div>
        <div class="projects-list__title">
            <p class="projects-list__title-text">Featured</p>
            <p class="projects-list__title-text projects-list__title-text--roman">cases</p>
        </div>
        <div class="switch">
            <div class="switch__eye eye">
                <div class="eye__pupil"></div>
                <img class="eye__img" :src="require('~/assets/svg/eye.svg')" width="38" height="16" alt="">
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.projects-list {
    height: 100vh;
    width: 100%;
    position: relative;
    &__shadow {
        height: 100vh;
        width: 100%;
        opacity: .5;
    }
    &__title {
        position: absolute;
        left: 72px;
        bottom: 72px;
        // z-index: 2;
        &-text {
            font-family: 'ThinItalic', Arial;
            font-style: italic;
            font-weight: 300;
            font-size: 62px;
            line-height: 100%;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
            color: #FFFFFF;
            &--roman {
                font-family: 'Roman', Arial;
                font-style: normal;
                font-weight: normal;
            }
        }
    }
}
</style>