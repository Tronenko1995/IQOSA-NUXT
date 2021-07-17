<template>
    <div class="say-hi">
        <div class="say-hi__container">
            <nuxt-link :to="localePath('/sayhi')" class="say-hi__text">Say hi</nuxt-link>
            <p class="say-hi__text say-hi__text--active">join the team</p>
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
        margin-left: -253px;
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

@media (max-width: 1440px) {
    .say-hi {
        &__text {
            font-size: 148px;
        }
        &__container {
           margin-left: -384px;
        }
    }
}
@media (max-width: 1280px) {
    .say-hi {
        &__text {
            font-size: 116px;
            margin-right: 56px;
        }
        &__container {
            margin-left: -221px;
        }
    }
}
@media (max-width: 1024px) {
    .say-hi {
        &__text {
            font-size: 108px;
            margin-right: 48px;
        }
        &__container {
            margin-left: -288px;
        }
    }
}
@media (max-width: 768px) {
    .say-hi {
        &__text {
            font-size: 88px;
            margin-right: 40px;
            letter-spacing: unset;
        }
        &__container {
            margin-left: -213px;
        }
    }
}
@media (max-width: 500px) {
    .say-hi {
        &__text {
            white-space: unset;
            text-align: center;
            font-size: 56px;
            display: none;
            margin-right: 0px;
            width: 320px;
            &--active {
                display: block;
            }
        }
        &__container {
            margin: 0 auto;
        }
    }
}
</style>