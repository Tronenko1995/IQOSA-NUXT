<template>
    <div class="say-hi">
        <div class="say-hi__container">
            <p class="say-hi__text">work with us</p>
            <p class="say-hi__text say-hi__text--active">Say hi</p>
            <p class="say-hi__text">fill the breif</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.say-hi {
    width: 100%;
    overflow: hidden;
    &__container {
        width: fit-content;
        // overflow-x: scroll;
        display: flex;
        overflow: hidden;
        margin-left: -646px;
    }
    &__text {
        font-family: 'ThinItalic', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 164px;
        line-height: 90%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        opacity: 0.15;
        white-space: nowrap;
        margin-right: 72px;
        &--active {
            opacity: 1;
        }
    }
}
</style>