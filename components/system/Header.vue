<template>
    <header class="header">
        <nuxt-link to="/" class="header__logo">
            <img src="@/static/svg/header-logo.svg" alt="" class="header__img">
        </nuxt-link>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item">
                    <nuxt-link to="/projects" class="nav__link">Projects</nuxt-link>
                    <nuxt-link to="/projects" class="nav__link nav__link--cursive">Projects</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to="/about-plug-2" class="nav__link">About</nuxt-link>
                    <nuxt-link to="/about-plug-2" class="nav__link nav__link--cursive">About</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to="/career" class="nav__link">Career</nuxt-link>
                    <nuxt-link to="/career" class="nav__link nav__link--cursive">Career</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to="/news" class="nav__link">Media</nuxt-link>
                    <nuxt-link to="/news" class="nav__link nav__link--cursive">Media</nuxt-link>
                </li>
                <li class="nav__item">
                    <nuxt-link to="/contacts" class="nav__link">Contacts</nuxt-link>
                    <nuxt-link to="/contacts" class="nav__link nav__link--cursive">Contacts</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="lang">
            <ul class="lang__list">
                <li class="lang__item">
                    <nuxt-link to="/ua" class="lang__link">UA</nuxt-link>
                </li>
                <li class="lang__item">
                    <nuxt-link to="/ru" class="lang__link">RU</nuxt-link>
                </li>
                <li class="lang__item">
                    <nuxt-link to="/" class="lang__link">EN</nuxt-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    padding: 30px 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__logo {

    }
    &__img {
        width: 85px;
        height: 27px;
        object-fit: cover;
    }
    
}
.nav {
    width: 470px;
    &__list {
        display: flex;
        justify-content: space-between;
    }
    &__item {

    }
    &__link {
        font-family: Roman,Arial;
        font-weight: 400;
        color: #fff;
        text-transform: uppercase;
        font-size: 16px;
        line-height: 120%;
        &--cursive {
            font-family: ThinItalic,Arial;
            position: absolute;
        }
    }
}
.lang {
    width: 120px;
    &__list {
        display: flex;
        justify-content: space-between;
    }
    &__item {

    }
    &__link {
        font-family: Roman,Arial;
        font-weight: 400;
        color: #fff;
    }
}
</style>