<template>
    <div class="say-hi">
        <div class="say-hi__container">
            <p class="say-hi__text">join the team</p>
            <p class="say-hi__text say-hi__text--active">work with us</p>
            <nuxt-link to="sayhi" class="say-hi__text">Say hi</nuxt-link>
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
        margin-left: -977px;
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
            margin-left: -1025px;
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
            margin-left: -728px;
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
            margin-left: -759px;
        }
    }
}
@media (max-width: 768px) {
    .say-hi {
        &__text {
            font-size: 88px;
            margin-right: 40px;
        }
        &__container {
            margin-left: -627px;
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