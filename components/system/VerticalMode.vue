<template>
    <div class="vertical-mode">
        <img class="vertical-mode__svg" :src="require('~/assets/svg/vertical-mode.svg')" alt="" width="32" height="32">
        <p class="vertical-mode__text">{{ $t('verticalMode') }}</p>
    </div>
</template>

<style lang="scss">
.vertical-mode {
    display: none;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: #1b1b1b;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &__svg {
        width: 32px;
        height: 32px;
        margin-bottom: 16px;
    }
    &__text {
        font-family: 'Light',Arial;
        font-size: 14px;
        font-weight: 300;
        line-height: 140%;
        color: #fff;
    }
}
@media (orientation: landscape) and (max-width: 900px) {
    .vertical-mode {
        display: flex;
    }
}
</style>