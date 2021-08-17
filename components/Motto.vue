<template>
    <div class="motto">
        <ul class="motto__list">
            <li class="motto__item" v-for="item in mottoList" :key="item">
                <span>{{ item }}</span>
            </li>
            <template v-if="mottoListExtra && mottoListExtra.length">
            <li class="motto__item motto__item--right" v-for="item in mottoListExtra" :key="item">
                <span>{{ item }}</span>
            </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        mottoList: {
            type: Array,
            require: true,
        },
        mottoListExtra: Array,
    }
}
</script>

<style lang="scss">
.motto {
    &__list {
    }
    &__item {
    overflow: hidden;
    // font-size: 22px;
    font-size: 20px;
    line-height: 140%;
    font-family: Light, Arial;
    font-weight: 300;
    // line-height: 120%;
    color: #fff;
    text-transform: uppercase;
    // font-feature-settings: "pnum" on, "lnum" on, "kern" off;
        span {
            transform: translateY(100%);
            display: block;
        }
        &--right {
            text-align: right;
        }
    }
    &--about {
        position: absolute;
        bottom: 105px;
        width: 100%;
        padding: 0 72px;
    }
}
@media (max-width: 1440px) {
    .motto {
        &--about {
            padding: 0 63px;
        }
    }
}
@media (max-width: 1280px) {
    .motto {
        &__item {
            font-size: 19px;
        }
        &--about {
            padding: 0 56px;
        }
    }
}
@media (max-width: 1024px) {
    .motto {
        &__item {
            font-size: 16px;
        }
    }
}
@media (max-width: 768px) {
    .motto {
        &__item {
            font-size: 15px;
        }
        &--about {
            padding: 0 48px;
        }
    }
}
@media (max-width: 700px) {
    .motto {
        &__item {
            font-size: 13px;
        }
    }
}
@media (max-width: 669px) {
    .motto {
        &--main {
            position: absolute;
            top: 100px;
            left: 21px;
        }
    }
}
@media (max-width: 414px) {
    .motto {
        &--about {
            padding: 0 16px;
            .motto__item {
                text-align: right;
                &--right {
                    margin-right: 40px;
                }
            }
        }
    }
}
</style>