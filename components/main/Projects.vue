<template>
    <div class="projects">
        <div class="projects__info">
            <div class="featured">
                <p class="featured__text">Featured</p>
                <div class="featured__item">
                   <nuxt-link to="/" class="featured__link">Projects</nuxt-link>
                   <span class="featured__line"></span>
                </div>
            </div>
        </div>
        <div class="projects__photos"></div>
    </div>
</template>

<style lang="scss">
.projects {
    height: 100vh;
    display: flex;
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
    }
    &__photos {
        width: 60%;
    }
}
.featured {
    display: flex;
    padding-left: 72px;
    &__text {
        font-size: 22px;
        letter-spacing: 0.05em;
        font-weight: 300;
        line-height: 100%;
        color: #fff;
        text-transform: uppercase;
        font-family: 'LightItalic', Arial;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
    }
    &__item {
        margin-left: 8px;
        position: relative;
    }
    &__link {
        color: #fff;
        font-size: 22px;
        line-height: 100%;
        text-transform: uppercase;
        font-family: 'Roman', Arial;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
    }
    &__line {
        position: absolute;
        height: 1px;
        background: #fff;
        display: block;
        transition: .3s ease;
        bottom: 0;
        width: 100%;
    }
}
</style>