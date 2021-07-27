<template>
    <form class="say-hi-form" @submit.prevent="sendForm()">
        <ul class="say-hi-form__list">
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__input-wrap">
                    <p class="say-hi-form__text say-hi-form__text--placeholder">Budget</p>
                    <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                    <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__input-wrap">
                    <p class="say-hi-form__text say-hi-form__text--placeholder">Name</p>
                    <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                    <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                </div>
                <div class="say-hi-form__input-wrap">
                    <p class="say-hi-form__text say-hi-form__text--placeholder">Phone</p>
                    <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                    <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__input-wrap">
                    <p class="say-hi-form__text say-hi-form__text--placeholder">Message</p>
                    <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                    <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__input-wrap">
                    <p class="say-hi-form__text say-hi-form__text--placeholder">Message</p>
                    <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                    <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__radio-list">
                    <label class="say-hi-form__radio-label radio__label" @click.self="clickRadioLabel($event)" data-name="radio1">
                        <input type="radio" class="radio__input" value="1" v-model="radio1">
                        <span class="radio__span"></span> Dolores eos qui
                    </label>
                    <label class="say-hi-form__radio-label radio__label" @click.self="clickRadioLabel($event)" data-name="radio1">
                        <input type="radio" class="radio__input" value="2" v-model="radio1">
                        <span class="radio__span"></span> Numquam eius modi tempora
                    </label>
                    <label class="say-hi-form__radio-label radio__label" @click.self="clickRadioLabel($event)" data-name="radio1">
                        <input type="radio" class="radio__input" value="3" v-model="radio1">
                        <span class="radio__span"></span> Voluptatem quia
                    </label>
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__radio-list">
                    <label class="say-hi-form__radio-label radio__label" @click.self="clickRadioLabel($event)" data-name="radio2">
                        <input type="radio" class="radio__input" value="1" v-model="radio2">
                        <span class="radio__span"></span> Dolores eos qui
                    </label>
                    <label class="say-hi-form__radio-label radio__label" @click.self="clickRadioLabel($event)" data-name="radio2">
                        <input type="radio" class="radio__input" value="2" v-model="radio2">
                        <span class="radio__span"></span> Voluptatem quia
                    </label>
                    <div class="say-hi-form__input-wrap say-hi-form__input-wrap--after-radio">
                        <p class="say-hi-form__text say-hi-form__text--placeholder">Message</p>
                        <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                        <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                    </div>
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__radio-list">
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="1" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Dolores eos qui
                    </label>
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="2" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Quis nostrum exercitationem ullam
                    </label>
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="3" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Voluptas nulla pariatur
                    </label>
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="4" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Aliquam quaerat voluptatem
                    </label>
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="5" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Magni dolores
                    </label>
                    <label class="say-hi-form__radio-label radio__label radio__label--checkbox" @click.self="clickCheckLabel($event)" data-name="checkbox1">
                        <input type="checkbox" class="radio__input radio__input--checkbox" value="6" v-model="checkbox1">
                        <span class="radio__span radio__span--checkbox"></span> Explicabo
                    </label>
                    <div class="say-hi-form__input-wrap say-hi-form__input-wrap--after-radio">
                        <p class="say-hi-form__text say-hi-form__text--placeholder">Message</p>
                        <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)">
                        <!-- <p class="say-hi-form__text say-hi-form__text--error">Incorrect name</p> -->
                    </div>
                </div>
            </li>
            <li class="say-hi-form__item">
                <p class="say-hi-form__title">Lorem ipsum dolor sit amet?</p>
                <div class="say-hi-form__radio-list">
                    <div class="say-hi-form__select" :class="[{'active': vacancy !== 'VACANCY LIST'},{'open': vacancySelect}]">
                        <div class="say-hi-form__select-head" @click.stop="vacancySelect = !vacancySelect">{{ vacancy }}</div>
                        <ul v-if="vacancySelect" class="say-hi-form__dropdown">
                            <li class="say-hi-form__dropdown-item" v-for="(item, index) in vacancyArray" :key="index" @click="changeVacancy($event)">{{ item }}</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
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
        <div class="say-hi-form__input-wrap" ref="emailWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">E-mail address</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="email">
            <p class="say-hi-form__text say-hi-form__text--error">Incorrect email</p>
        </div>
        <div class="say-hi-form__input-wrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">Resume/CV</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="resume">
        </div>
        <div class="say-hi-form__input-wrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">LinkedIn</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="linkedIn">
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
            radio1: '',
            radio2: '',
            checkbox1: [],
            vacancy: 'Duis aute irure',
            vacancySelect: false,
            vacancyArray: ['Duis aute irure 1','Duis aute irure 2','Duis aute irure 3'],
            // firstName: '',
            // lastName: '',
            // email: '',
            // resume: '',
            // linkedIn: '',
            // message: '',
        }
    },
    methods: {
        ...mapMutations({
            setModal: 'modal/setModal',
        }),
        focusInput(e) {
            e.target.parentElement.classList.add('focus')
        },
        BlurInput(e) {
            if (!e.target.value) {
                e.target.parentElement.classList.remove('focus')
            }
        },
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
        clickRadioLabel(e) {
            // console.log('data', e.target.dataset.name)
            if (!e.target.classList.contains('active')) {
            const list = document.querySelectorAll(`label[data-name='${e.target.dataset.name}']`)
            list.forEach(item => {
                item.classList.remove('active')
            })
            e.target.classList.add('active')
            }
        },
        clickCheckLabel(e) {
            // console.log('data', e.target.dataset.name)
            if (!e.target.classList.contains('active')) {
            // const list = document.querySelectorAll(`label[data-name='${e.target.dataset.name}']`)
            // list.forEach(item => {
                // item.classList.remove('active')
            // })
            e.target.classList.add('active')
            } else {
                e.target.classList.remove('active')
            }
        },
        changeVacancy(e) {
            this.vacancy = e.target.textContent
            this.vacancySelect = false
        },
    }
}
</script>

<style lang="scss" scoped>
.say-hi-form {
    margin: 200px auto 200px auto;
    width: 532px;
    &__list {
        counter-reset: section; 
    }
    &__item {
        margin-bottom: 150px;
        position: relative;
        &::before {
            counter-increment: section;
            content: counter(section, decimal-leading-zero);
            position: absolute;
            left: 50%;
            bottom: 100%;
            font-weight: 300;
            font-size: 16px;
            line-height: 0;
            text-align: center;
            text-transform: uppercase;
            font-feature-settings: 'pnum' on, 'lnum' on, 'zero' on, 'hist' on, 'ss12' on, 'kern' off;
            color: #FFFFFF;
            font-family: 'Light', Arial;
            margin-bottom: 32px;
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
        margin-bottom: 44px;
        &--after-radio {
            margin-top: 44px;
        }
        &.focus {
            .say-hi-form__text--placeholder {
                top: -5px;
                transform: translateY(-50%) scale(.7);
                opacity: .5;
                left: 2px;
            }
            .say-hi-form__input {
                border-bottom: 1px solid rgba(255, 255, 255, 0.5);
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
        padding: 11px 14px;
        background: 0 0;
        outline: none;
        border: none;
        border-bottom: 1px solid hsla(0,0%,100%,.1);
        border-radius: 0;
        width: 100%;
        transition: .3s;
        color: #fff;
        line-height: 140%;
        font-size: 16px;
    }
    &__select {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin: 0;
        width: 100%;
        cursor: pointer;
        position: relative;
        border-bottom: 1px solid hsla(0,0%,100%,.5);
        height: 40px;
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        &-head {
            width: 100%;
            height: 100%;
            padding: 9px 0 9px 16px;
        }
        &::after {
            content: "";
            position: absolute;
            background-image: url('~/static/svg/chevron.svg');
            width: 24px;
            height: 24px;
            right: 0;
            bottom: 10px;
            transition: .5s ease;
        }
        &.active {
            color: #FFFFFF;
        }
        &.open {
            &::after {
                transform: rotate(180deg);
            }
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
        top: 40px;
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
            // font-style: italic;
        }
    }
    &__radio-list {
        display: flex;
        flex-direction: column;
    }
    &__radio-label {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        margin-bottom: 16px;
        &:last-child {
            margin-bottom: 0px;
        }
    }
}
@media (max-width: 1280px) {
    .say-hi-form {
        margin: 180px auto 180px auto;
        width: 482px;
        &__title {
            font-size: 30px;
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
        width: 440px;
        &__title {
            font-size: 24px;
            margin-bottom: 64px;
        }
        // &__input {

        // }
        &__input-wrap {
            margin-bottom: 56px;
        }
    }
}
@media (max-width: 500px) {
    .say-hi-form {
        margin: 88px auto 88px auto;
        width: 343px;
        &__title {
            font-size: 22px;
            margin-bottom: 64px;
        }
        &__button {
            margin: 64px auto 0 auto;
        }
    }
}
</style>