<template>
    <div class="team-modal">
        <div class="team-modal__block">
            <img class="team-modal__img" :src="getImg(team.img)" alt="">
        </div>
        <div class="team-modal__info">
            <div class="team-modal__info-top">
                <p class="team-modal__quote" v-if="team.quote">
                    <span><img width="10" height="10" class="team-modal__svg" :src="require('~/assets/svg/quotes.svg')" alt=""></span>
                    {{ team.quote }}
                    <span><img width="10" height="10" class="team-modal__svg" :src="require('~/assets/svg/quotes.svg')" alt=""></span>
                </p>
            </div>
            <div class="team-modal__info-bottom">
                <p class="team-modal__name"><span>{{ team.surname }}</span> <em>{{ team.name }}</em></p>
                <p class="team-modal__position">{{ team.position }}</p>
            </div>
        </div>
        <div class="close-modal" @click="$emit('close', 'fade')"></div>
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
		team() { return this.$store.getters['team/team'] }
    },
    methods: {
        getImg(img) {
            return `${this.baseUrl}${img}`
        }
    },
}
</script>

<style lang="scss">
.team-modal {
    height: 100%;
    display: flex;
    &__block {
        width: 50%;
        height: 100%;
    }
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__info {
        width: 50%;
        height: 100%;
        padding: 12px 93px 72px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    &__quote {
        font-size: 32px;
        line-height: 140%;
        max-width: 718px;
        font-family: 'Light', Arial;
        font-weight: 300;
        color: #fff;
    }
    &__svg {
        height: 10px;
        width: 10px;
        object-fit: contain;
        margin-bottom: 20px;
    }
    &__name {
        font-family: 'Roman', Arial;
        font-weight: 400;
        font-size: 22px;
        margin: 0 0 8px;
        text-transform: uppercase;
        max-width: 718px;
        color: #fff;
        font-style: normal;
        em {
        font-family: 'LightItalic', Arial;

        font-weight: 300;
        }
    }
    &__position {
        font-family: 'Light', Arial;
        max-width: 718px;
        font-weight: 300;
        line-height: 140%;
        font-size: 11px;
        text-transform: uppercase;
        color: #fff;
    }
}
.close-modal {
    position: fixed;
    cursor: pointer;
    right: 22px;
    top: 22px;
    width: 32px;
    height: 26px;
    transform: rotate(0);
    transition: .5s;
    &::after,
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 26px;
        width: 1px;
        background-color: #fff;
    }
    &::after {
        transform: rotate(45deg);
    }
    &::before {
        transform: rotate(-45deg);
    }
    &:hover {
        transform: rotate(180deg);
    }
}
@media (max-width: 1280px) {
    .team-modal {
        &__quote {
            font-size: 26px;
        }
        &__name {
            font-size: 19px;
        }
        &__svg {
            height: 9px;
            margin-bottom: 11px;
        }
    }
}
@media (max-width: 1024px) {
    .team-modal {
        flex-direction: column;
        &__img {
            display: block;
        }
        &__quote {
            font-size: 24px;
        }
        &__name {
            font-size: 16px;
        }
        &__position {
            font-size: 10px;
        }
        &__svg {
            height: 9px;
            margin-bottom: 9px;
        }
    }
}
@media (max-width: 768px) {
    .team-modal {
        &__block {
            width: 100%;
            height: 50%;
        }
        &__info {
            width: 100%;
            height: 50%;
            padding: 15px 0 16px 20px;
        }
    }
}
@media (max-width: 480px) {
    .team-modal {
        &__info {
            padding: 15px 20px 65px;
            justify-content: flex-start;
            &-bottom {
                margin-top: 40px;
            }
        }
        &__quote {
            font-size: 20px;
        }
        &__img {
            object-position: top;
        }
    }
}
</style>