<template>
    <form class="say-hi-form" @submit.prevent="sendForm()">
        My <span class="say-hi-form__span say-hi-form__span--accent">name</span> is <span class="say-hi-form__span say-hi-form__span--wrap">
            <input type="text" class="say-hi-form__input">
        </span>
        Lorem ipsum Lorem ipsum aliq <span class="say-hi-form__span say-hi-form__span--accent">vacancy</span>
        <div class="say-hi-form__select" :class="{'active': vacancy !== 'VACANCY LIST'}">
            <div class="say-hi-form__select-head" @click.stop="vacancySelect = !vacancySelect">{{ vacancy }}</div>
            <ul v-if="vacancySelect" class="say-hi-form__dropdown">
                <li class="say-hi-form__dropdown-item" v-for="(item, index) in vacancyArray" :key="index" @click="changeVacancy($event)">{{ item }}</li>
            </ul>
        </div>
        dolor sit amet, consectetur adipiscing elit. sed
        aliquip ex <span class="say-hi-form__span say-hi-form__span--accent">email address</span> <span class="say-hi-form__span say-hi-form__span--wrap">
            <input type="text" class="say-hi-form__input">
        </span>
        dolor sit amet, consectetur adipiscing elit. sed
        <span class="say-hi-form__span say-hi-form__span--accent">resume/cv</span> 
        <span class="say-hi-form__span say-hi-form__span--wrap">
            <input type="text" class="say-hi-form__input" @focus="focusInput($event)" v-model="inputNameFile">
        </span>
        <input class="say-hi-form__file" :disabled="cv.preloader" type="file" name="file" ref="fileInput" @change="uploadCv">
        . Nemo enim

        voluptatem quia <span class="say-hi-form__span say-hi-form__span--accent">linkedin</span> <span class="say-hi-form__span say-hi-form__span--wrap">
            <input type="text" class="say-hi-form__input">
        </span>
        Ut enim ad minima veniam, quis nostrum exercita.


        <!-- <p class="say-hi-form__title">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
        <div class="say-hi-form__input-wrap" ref="firstNameWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">First name</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="firstName">
            <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p>
        </div>
        <div class="say-hi-form__input-wrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">Last name</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="lastName">
        </div>
        <div class="say-hi-form__input-wrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">Phone number</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="phone">
        </div>
        <div class="say-hi-form__input-wrap" ref="emailWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">E-mail address</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="email">
            <p class="say-hi-form__text say-hi-form__text--error">Incorrect email</p>
        </div>
        <div class="say-hi-form__textarea-wrap" ref="messageWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder say-hi-form__text--textarea">Message</p>
            <textarea class="say-hi-form__textarea" id="" cols="30" name="message" v-model="message"></textarea>
            <p class="say-hi-form__text say-hi-form__text--error">Incorrect message</p>
        </div> -->
        <button class="say-hi-form__button arrow-link" @mouseover="findElement($event)" @mouseleave="animateTextHide($event)">
            <span class="arrow-link__change">
                <span class="arrow-link__span arrow-link__span--first">send</span>
                <span class="arrow-link__span arrow-link__span--last">send</span>
            </span>
            <span class="arrow-link__text">THE form</span>
            <span class="arrow-link__circle">
                <svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
            </span>
        </button>
        <!-- <div class="say-hi-form__button">
            <span>SHOW</span>&nbsp; MORE 
            <span class="arrow-link__circle arrow-link__circle--news">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-link__svg">
                    <path d="M6.40039 12.4004H17.6004" stroke-linecap="square"></path>
                    <path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"></path>
                </svg>
            </span>
        </div> -->
    </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: '',
            vacancy: 'VACANCY LIST',
            vacancySelect: false,
            vacancyArray: ['Architecture','3D Max Visualisator','Engineer'],
            cv: {
                file: '',
                preloader: false,
            },
            inputNameFile: ''
        }
    },
    methods: {
        ...mapMutations({
            setModal: 'modal/setModal',
        }),
        // focusInput(e) {
        //     e.target.parentElement.classList.add('focus')
        // },
        // BlurInput(e) {
        //     if (!e.target.value) {
        //         e.target.parentElement.classList.remove('focus')
        //     }
        // },
		findElement(e) {
			if (e.target.classList.contains('arrow-link__text') || e.target.classList.contains('arrow-link') || e.target.classList.contains('arrow-link__circle')) {
                const el = e.target.parentElement.querySelector('.arrow-link__change')
				this.animateTextShow(el)
			} else if (e.target.classList.contains('arrow-link__span--first')) {
                this.animateTextShow(e.target.parentElement)
            }
		},
        animateTextShow(el) {
            this.$gsap.to(el.children[0], { 
                translateY: -100 + "%",
                duration: .5
            })
            this.$gsap.to(el.children[1], { 
                translateY: -100 + "%",
                duration: .5
            })
        },
		animateTextHide(e) {
			if (e.target.classList.contains('arrow-link')) {
                const el = e.target.querySelector('.arrow-link__change')
				this.$gsap.to(el.children[0], { 
					translateY: 0 + "%",
					duration: .5
				})
				this.$gsap.to(el.children[1], { 
					translateY: 0 + "%",
					duration: .5
				})
			}
		},
        openModal(type) {
            this.setModal({
                show: true,
                animate: 'show',
                type
            })
        },
        sendForm() {
            // if (!this.firstName) {
            //     this.$refs.firstNameWrap.classList.add('say-hi-form__input-wrap--error')
            // } else {
            //     this.$refs.firstNameWrap.classList.remove('say-hi-form__input-wrap--error')
            // }
            // if (!this.email) {
            //     this.$refs.emailWrap.classList.add('say-hi-form__input-wrap--error')
            // } else {
            //     this.$refs.emailWrap.classList.remove('say-hi-form__input-wrap--error')
            // }
            // if (!this.message) {
            //     this.$refs.messageWrap.classList.add('say-hi-form__textarea-wrap--error')
            // } else {
            //     this.$refs.messageWrap.classList.remove('say-hi-form__textarea-wrap--error')
            // }
            // if (this.firstName && this.email && this.message) {
                this.openModal('thank')
            // }
        },
        changeVacancy(e) {
            this.vacancy = e.target.textContent
            this.vacancySelect = false
        },
        focusInput(e) {
            // console.log('фокус')
            e.target.blur()
            // console.log('снял фокус')
            this.$refs.fileInput.click()
            // console.log('кликнул')
        },
        uploadCv() {
            this.cv.file = this.$refs.fileInput.files[0]
            if (this.cv.file) {
                this.cv.preloader = true
                this.inputNameFile = this.cv.file.name
                this.cv.preloader = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.say-hi-form {
    margin: 200px auto 200px auto;
    width: 978px;
    font-family: 'Roman', Arial;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: calc(110% + 15px);
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: rgba(255,255,255,.2);
    &__span {
        &--accent {
            color: #fff;
        }
        &--wrap {
            position: relative;
            margin: 0 16px;
            width: 440px;
            display: inline-block;
        }
    }
    &__select {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin: 0 0 0 16px;
        width: 440px;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid hsla(0,0%,100%,.5);
        height: 40px;
        font-family: 'Lightitalic', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 35px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        &-head {
            width: 100%;
        }
        &::after {
            content: "";
            position: absolute;
            background-image: url('~/static/svg/chevron.svg');
            width: 24px;
            height: 24px;
            right: 0;
            bottom: 10px;
            transition: .5s;
        }
        &.active {
            color: #FFFFFF;
        }
    }
    &__dropdown {
        display: flex;
        flex-direction: column;
        position: absolute;
        overflow: hidden;
        width: 100%;
        background: #202020;
        z-index: 1;
        height: auto;
        top: 39px;
        &-item {
            width: 100%;
            height: fit-content;
            transition: .5s;
            opacity: 1;
            margin-bottom: unset;
            padding: 16px 24px;
            color: #fff;
            margin: 0;
            text-transform: none;
            font-family: 'Light',Arial;
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            cursor: pointer;
            line-height: 140%;
            &:hover {
                transition: .5s;
                opacity: .5;
            }
            &:first-child {
                padding-top: 24px;
            }
            &:last-child {
                padding-bottom: 24px;
            }
        }
    }
    &__title {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 35px;
        line-height: 110%;
        text-align: center;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        margin-bottom: 72px;
    }
    &__input-wrap {
        position: relative;
        height: 50px;
        margin-bottom: 64px;
        &.focus {
            .say-hi-form__text--placeholder {
                top: -5px;
                transform: translateY(-50%) scale(.7);
                opacity: .5;
                left: 2px;
            }
        }
        &.say-hi-form__input-wrap--error {
            .say-hi-form__input {
                border-bottom: 1px solid rgba(255,73,73,.4);
            }
            .say-hi-form__text--error {
                opacity: 1;
            }
        }
    }
    &__input {
        // padding: 11px 14px;
        // background: 0 0;
        // outline: none;
        // border: none;
        // border-bottom: 1px solid hsla(0,0%,100%,.1);
        // border-radius: 0;
        // width: 100%;
        // transition: .3s;
        // color: #fff;
        // line-height: 140%;
        // font-size: 16px;
        height: 40px;
        width: 100%;
        background: none;
        border: none;
        border-bottom: 1px solid hsla(0,0%,100%,.5);
        outline: none;
        color: #fff;
        font-size: 35px;
        line-height: 110%;
        text-transform: uppercase;
        font-family: 'LightItalic',Arial;
        font-weight: 300;
        transition: .5s;
    }
    &__text {
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        &--placeholder {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 16px;
            transition: .5s;
            pointer-events: none;
        }
        &--error {
            color: #bd2727;
            position: absolute;
            top: calc(100% + 11px);
            left: 14px;
            opacity: 0;
            transition: opacity .3s ease-in-out;
        }
        &--textarea {
            position: absolute;
            top: 11px;
            left: 16px;
            transition: 1s;
        }
    }
    &__textarea-wrap {
        position: relative;
        width: 100%;
        padding-top: 40px;
        &.say-hi-form__textarea-wrap--error {
            .say-hi-form__textarea {
                border-bottom: 1px solid rgba(255,73,73,.4);
            }
            .say-hi-form__text--error {
                opacity: 1;
            }
        }
    }
    &__textarea {
        color: #fff;
        border: none;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        padding-left: 16px;
        background: 0 0;
        height: 100%;
        width: 100%!important;
        outline: none;
        font-style: normal;
        min-height: 80px;
        max-height: 280px;
        font-size: 16px;
        line-height: 140%;
        font-family: 'Light' ,Arial;
        font-weight: 300;
    }
    &__button {
        display: flex;
        align-items: center;
        margin-top: 72px;
        margin: 72px auto 0 auto;
        text-align: center;
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        background: none;
        cursor: pointer;
        span {
            font-family: 'LightItalic';
            font-style: italic;
        }
    }
    &__file {
        display: none;
    }
}
@media (max-width: 1280px) {
    .say-hi-form {
        margin: 180px auto 180px auto;
        width: 756px;
        font-size: 30px;
        &__span {
            &--wrap {
                width: 320px;
            }
        }
        &__select {
            margin-left: 0px;
            width: 368px;
            font-size: 30px;
        }
        &__input {
            font-size: 30px;
            height: 30px;
        }
    }
}
@media (max-width: 1024px) {
    .say-hi-form {
        margin: 132px auto 132px auto;
    }
}
@media (max-width: 768px) {
    .say-hi-form {
        margin: 132px auto 132px auto;
        width: 672px;
        font-size: 24px;
        &__span {
            &--wrap {
                width: 260px;
            }
        }
        &__select {
            width: 308px;
            font-size: 24px;
            height: 30px;
        }
        &__input {
            font-size: 24px;
            height: 30px;
        }
    }
}
@media (max-width: 500px) {
    .say-hi-form {
        margin: 88px auto 88px auto;
        width: 343px;
        font-size: 22px;
        &__span {
            &--wrap {
                width: 343px;
                margin: 0;
            }
        }
        &__select {
            width: 100%;
            font-size: 22px;
            height: 30px;
        }
        &__input {
            font-size: 22px;
            height: 30px;
        }
        &__button {
            margin: 64px auto 0 auto;
        }
    }
}
</style>