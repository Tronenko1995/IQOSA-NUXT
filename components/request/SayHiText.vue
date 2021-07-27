<template>
    <div class="say-hi">
        <div class="say-hi__container">
            <a @click.prevent="goPage(data.prev_page_link)" :href="localePath(data.prev_page_link)"  class="say-hi__text say-hi__text--first">{{ data.prev_page_label }}</a>
            <!-- <nuxt-link :to="localePath(data.prev_page_link)" class="say-hi__text say-hi__text--first">{{ data.prev_page_label }}</nuxt-link> -->
            <p class="say-hi__text say-hi__text--active">{{ data.title_big_thin }}</p>
            <!-- <nuxt-link :to="localePath(data.next_page_link)" class="say-hi__text say-hi__text--last">{{ data.next_page_label }}</nuxt-link> -->
            <a @click.prevent="goPage(data.next_page_link)" :href="localePath(data.next_page_link)"  class="say-hi__text say-hi__text--last">{{ data.next_page_label }}</a>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    methods: {
		...mapMutations({
			setAnimate: 'plug/setAnimate',
			setPlug: 'plug/setVisible',
		}),
        goPage(page) {
            this.setAnimate('up')
            this.setPlug(true)
            setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push(this.localePath(page))
            }, 1000);
        },
    }
}
</script>

<style lang="scss" scoped>
.say-hi {
    width: 100%;
    overflow: hidden;
    &__container {
        display: flex;
        overflow: hidden;
        position: relative;
        justify-content: center;
        width: 100%;
    }
    &__text {
        font-family: 'ThinItalic', Arial;
        font-style: italic;
        font-weight: 300;
        // font-size: 164px;
        font-size: 78px;
        line-height: 110%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        opacity: 0.15;
        white-space: nowrap;
        // margin-right: 72px;
        &--first {
            width: 25%;
            display: flex;
            justify-content: flex-end;
        }
        &--active {
            opacity: 1;
            padding-left: 69px;
            padding-right: 69px;
        }
        &--last {
            width: 25%;
        }
    }
}

// @media (max-width: 1440px) {
//     .say-hi {
//         &__text {
//             font-size: 148px;
//         }
//         &__container {
//             margin-left: -746px;
//         }
//     }
// }
// @media (max-width: 1280px) {
//     .say-hi {
//         &__text {
//             font-size: 116px;
//             margin-right: 56px;
//         }
//         &__container {
//             margin-left: -484px;
//         }
//     }
// }
// @media (max-width: 1024px) {
//     .say-hi {
//         &__text {
//             font-size: 108px;
//             margin-right: 48px;
//         }
//         &__container {
//             margin-left: -547px;
//         }
//     }
// }
@media (max-width: 768px) {
    .say-hi {
        &__text {
            // font-size: 88px;
            font-size: 56px;
            // margin-right: 40px;
        }
        // &__container {
        //     margin-left: -467px;
        // }
    }
}
@media (max-width: 660px) {
    .say-hi {
        &__form {
            // font-size: 88px;
            width: 100%;
            // margin-right: 40px;
        }
        // &__container {
        //     margin-left: -467px;
        // }
    }
}
@media (max-width: 500px) {
    .say-hi {
        &__text {
            font-size: 56px;
            display: none;
            margin-right: 0px;
            &--active {
                display: block;
            }
        }
        &__container {
            // margin: 0 auto;
        }
    }
}

@media (max-width: 414px) {
    .say-hi {
        &__text {
            font-size: 36px;
        }
    }
}
</style>