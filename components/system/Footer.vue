<template>
    <div class="footer">
        <div class="footer__row">
            <div class="footer__column">
                <div class="footer__column-top">
                    <p class="footer__title">Offices</p>
                </div>
                <div class="footer__column-middle">
                    <div class="footer__block">
                        <p class="footer__subtitle">Kyiv (Ukraine)</p>
                        <div class="footer__block-column">
                            <a href="https://goo.gl/maps/WiShLLXx7mpxj3nV8" class="footer__link">Solomyanska st. 15a</a>
                            <a href="mailto:info@iqosa.com" class="footer__link">info@iqosa.com</a>
                        </div>

                    </div>
                    <div class="footer__block">
                        <p class="footer__subject">Dmitry Babanin</p>
                        <a href="tel:+380954003835" class="footer__link">+380954003835</a>
                    </div>
                    <div class="footer__block">
                        <p class="footer__subject">Aleksandra Maklyalova</p>
                        <a href="tel:+380954003835" class="footer__link">+380954003835</a>
                    </div>
                </div>
            </div>
            <div class="footer__column footer__column--dos">
                <div class="footer__column-top">
                    <p class="footer__title">business</p>
                </div>
                <div class="footer__column-middle">
                    <div class="footer__block">
                        <p class="footer__subtitle">Career</p>
                        <div class="footer__unit">
                            <a href="mailto:hr@iqosa.com" class="footer__link footer__link--line">hr@iqosa.com</a>
                            <span class="footer__line"></span>
                        </div>
                    </div>
                    <div class="footer__block">
                        <p class="footer__subtitle">Suppliers</p>
                        <div class="footer__unit">
                            <a href="mailto:supply@iqosa.com" class="footer__link footer__link--line">supply@iqosa.com</a>
                            <span class="footer__line"></span>
                        </div>
                    </div>
                    <div class="footer__block">
                        <p class="footer__subtitle">Cooperation</p>
                        <div class="footer__unit">
                            <a href="mailto:pr@iqosa.com" class="footer__link footer__link--line">pr@iqosa.com</a>
                            <span class="footer__line"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__column footer__column--tres">
                <div class="footer__column-top">
                    <p class="footer__title">Others</p>
                </div>
                <div class="footer__column-middle">
                    <p class="footer__main-text">Don't be shy,
                    <span class="footer__main-item"  @mouseover="showAnimateText($event)" @mouseleave="hideAnimateText($event)">
                        <a href="/sayhi" class="footer__main-link">say hi.</a>
                        <a href="/sayhi" class="footer__main-link">say hi.</a>
                    </span>
                    </p>
                    <!-- <p class="footer__main-text footer__main-text--italic">say hi.</p> -->
                    <div class="footer__main-row">
                        <div class="footer__unit">
                            <a class="footer__link footer__link--line" href="https://iqosa.com/wp-content/uploads/2021/02/IQOSA-_MediaKit_EN.pdf">Media Kit</a>
                            <span class="footer__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__row footer__row--bottom">
            <div class="footer__bottom-item">
                <nuxt-link to="/privaty-policy" class="footer__link">Privacy Policy</nuxt-link>
            </div>
            <Social class="social--footer" @showCursive="showCursive($event)" @hideCursive="hideCursive($event)"/>
            <!-- <div class="footer__bottom-item footer__bottom-item--social">
                <a href="https://www.facebook.com/IQOSA/" class="footer__link">Facebook,</a>
                <a href="https://www.pinterest.com/iqosa/_created/" class="footer__link">Pinterest,</a>
                <a href="https://www.instagram.com/iqosa/" class="footer__link">Instagram</a>
            </div> -->
            <div class="footer__bottom-item footer__bottom-item--tres">
                <p class="footer__description footer__description--opacity">&copy; Iqosa 2021.</p>
                <p class="footer__developed">
                    <span class="footer__description footer__description--opacity">Developed by</span>
                    <a href="https://thefirstthelast.agency/" class="footer__link">The First The Last.</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap"
export default {
    methods: {
        showAnimateText(e) {
            if (e.target.tagName === 'A') {
                gsap.to(e.target.parentElement.children[0], { 
                    translateY: -100 + "%",
                    duration: .5
                })
                gsap.to(e.target.parentElement.children[1], { 
                    translateY: -100 + "%",
                    duration: .5
                })
            }
        },
        hideAnimateText(e) {
            if (e.target.tagName === 'SPAN') {
                gsap.to(e.target.children[0], { 
                    translateY: 0 + "%",
                    duration: .5
                })
                gsap.to(e.target.children[1], { 
                    translateY: 0 + "%",
                    duration: .5
                })
            }
        },
        showCursive(e) {
            if (e.target.tagName === 'A') {
                gsap.to(e.target.parentElement.children[0], { 
                    translateY: -100 + "%",
                    duration: .5
                })
                gsap.to(e.target.parentElement.children[1], { 
                    translateY: -100 + "%",
                    duration: .5
                })
            }
        },
        hideCursive(e) {
            if (e.target.tagName === 'LI') {
                gsap.to(e.target.children[0], { 
                    translateY: 0 + "%",
                    duration: .5
                })
                gsap.to(e.target.children[1], { 
                    translateY: 0 + "%",
                    duration: .5
                })
            }
        },
    }
}
</script>

<style lang="scss">
.footer {
    background-color: #E8E8E8;
    padding: 64px 72px 55px 72px;
    &__row {
        display: flex;
        &--bottom {
            margin-top: 196px;
        }
    }
    &__column {
        display: flex;
        flex-direction: column;
        width: 30%;
        &-top {

        }
        &-middle {
            margin-top: 156px;
        }
    }
    &__block {
        margin-bottom: 48px;
        &-column {
            display: flex;
            flex-direction: column;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 100%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #000000;
    }
    &__subtitle {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #000000;
        margin-bottom: 8px;
    }
    &__subject {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #000000;
        margin-bottom: 8px;
    }
    &__description {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #000000;
        &--opacity {
            opacity: .5;
        }
    }
    &__link {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #000000;
        transition: opacity .5s ease;
        width: fit-content;
        &:hover {
            opacity: .5;
        }
        &--line {
            &:hover {
                opacity: 1;
            }
        }
    }
    &__bottom-item {
        width: 30%;
        &--tres {
            width: 40%;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    &__main-text {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #000000;
        &--italic {
            font-family: 'ThinItalic', Arial;
            font-weight: 300;

        }
    }
    &__main-row {
        display: flex;
        margin-top: 38px;
    }
    &__main-item {
        display: block;
        width: fit-content;
        transform: translateY(0);
        overflow: hidden;
    }
    &__main-link {
        display: block;
        font-family: 'ThinItalic', Arial;
        font-weight: 300;
        font-style: italic;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #000000;
        &:last-child {
            position: absolute;
        }
    }
    &__unit {
        position: relative;
        width: fit-content;
        margin-right: 26px;
        &:last-child {
            margin-right: 0;
        }
        &:hover {
            .footer__line {
                animation: 'under-line' 1s;
                transition: .3s ease;
            }
        }
    }
    &__line {
        position: absolute;
        height: 1px;
        width: 100%;
        background: #000;
        transform: translateX(0%);
        display: block;
        transition: .3s ease;
        bottom: 0;
    }
}

@media (max-width: 1440px) {
    .footer {
        padding: 64px 64px 55px 64px;
        &__main-text {
            font-size: 48px;
        }
    }
}

@media (max-width: 1280px) {
    .footer {
        padding: 56px 55px 49px 56px;
        &__title {
            font-size: 19px;
        }
        &__subtitle {
            font-size: 20px;
        }
        &__column {
            &-middle {
                margin-top: 148px;
            }
        }
        &__main-text {
            font-size: 38px;
        }
    }
}

@media (max-width: 1024px) {
    .footer {
        padding: 56px 56px 49px 56px;
    }
}

@media (max-width: 768px) {
    .footer {
        padding: 48px 48px 48px 43px;
        &__row {
            flex-wrap: wrap;
            &--bottom {
                margin-top: 80px;
                flex-direction: column;
                position: relative;
            }
        }
        &__column {
            width: 50%;
            &--tres {
                width: 100%;
                margin-top: 80px;
            }
            &-middle {
                margin-top: 64px;
            }
        }
        &__block {
            margin-bottom: 48px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__title {
            font-size: 16px;
        }
        &__subtitle {
            font-size: 18px;
        }
        &__main-text {
            font-size: 36px;
            display: inline-block;
        }
        &__main-row {
            margin-top: 24px;
        }
        &__bottom {
            &-item {
                width: fit-content;
                &--tres {
                    flex-direction: column;
                    align-items: flex-start;
                    position: absolute;
                    right: 0;
                }
                &--social {
                    margin-top: 8px;
                }
            }
        }
        &__developed {
            margin-top: 8px;
        }
    }
}
@media (max-width: 550px) {
    .footer {
        &__bottom {
            &-item {
                &--tres {
                    position: unset;
                    right: unset;
                    margin-top: 40px;
                }
            }
        }
    }
}
@media (max-width: 414px) {
    .footer {
        padding: 32px 16px 27px 16px;
        &__column {
            margin-top: 80px;
            width: 100%;
            &-middle {
                margin-top: 54px;
            }
            &--dos {
                .footer {
                    &__column {
                        &-middle {
                            display: flex;
                            flex-wrap: wrap;
                        }
                    }
                    &__block {
                        width: 50%;
                    }
                }
            }
            &:first-child {
                margin-top: 0;
            }
        }
        &__block {
            margin-bottom: 40px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__main-text {
            font-size: 32px;
        }
    }
}
</style>