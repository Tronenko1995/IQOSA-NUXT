<template>
    <div class="social">
        <ul class="social__list">
            <li class="social__item" v-for="(item, i) in social" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)" :key="i">
                <a target="_blank" rel="nofollow noopener noreferrer" :href="item.social_link" class="social__link">{{ item.social_name }}</a>
                <a target="_blank" rel="nofollow noopener noreferrer" :href="item.social_link" class="social__link social__link--cursive">{{ item.social_name }}</a>
            </li>
            <!-- <li class="social__item" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)">
                <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/iqosa/_created/" class="social__link">Pinterest,</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/iqosa/_created/" class="social__link social__link--cursive">Pinterest,</a>
            </li>
            <li class="social__item" @mouseover="$emit('showCursive', $event)" @mouseleave="$emit('hideCursive', $event)">
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/iqosa/" class="social__link">Instagram</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/iqosa/" class="social__link social__link--cursive">Instagram</a>
            </li> -->
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        social: {
            type: Array,
            require: true,
        }
    }
}
</script>

<style lang="scss">
.social {
    position: absolute;
    left: 64px;
    bottom: 40px;
    &--footer {
        width: 30%;
        position: unset;
        left: unset;
        bottom: unset;
        .social {
            &__link {
                color: #000;
                transform: unset;
            }
            &__item {
                &:first-child {
                    margin-left: 0;
                }
            }
        }
    }
    &__list {
        display: flex;
    }
    &__item {
        display: flex;
        transform: translateY(0);
        margin-left: 10px;
        padding-left: 2px;
        padding-right: 2px;
        overflow: hidden;
        position: relative;
    }
    &__link {
        font-family: Light,Arial;
        font-weight: 300;
        color: #fff;
        font-size: 16px;
        line-height: 140%;
        transform: translate(0px, 100%);
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
            bottom: -100%;
        }
    }
}
@media (max-width: 768px) {
    .social {
        &--footer {
            width: fit-content;
        }
    }
}
@media(max-width: 690px) {
    .social {
        position: relative;
        bottom: unset;
        right: unset;
        left: unset;
        margin-top: auto;
        margin-bottom: 8px;
    }
}
</style>
