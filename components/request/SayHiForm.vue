<template>
    <form class="say-hi-form" @submit.prevent="sendForm()">
        <div class="say-hi-form__title">
            <p v-for="(item, i) in data.form_title" :key="i">{{ item }}</p>
        </div>
        <div class="say-hi-form__input-wrap" ref="firstNameWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">{{ data.firstname_input_placeholder }}</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="firstName">
            <p class="say-hi-form__text say-hi-form__text--error">{{ $t('IncorrectName') }}</p>
        </div>
        <div class="say-hi-form__input-wrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">{{ data.lastname_input_placeholder }}</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="lastName">
        </div>
        <div class="say-hi-form__input-wrap" ref="emailWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder">{{ data.email_input_placeholder }}</p>
            <input class="say-hi-form__input" type="text" @focus="focusInput($event)" @blur="BlurInput($event)" v-model="email">
            <p class="say-hi-form__text say-hi-form__text--error">{{ $t('IncorrectEmail') }}</p>
        </div>
        <div class="say-hi-form__textarea-wrap" ref="messageWrap">
            <p class="say-hi-form__text say-hi-form__text--placeholder say-hi-form__text--textarea">{{ data.message_input_placeholder }}</p>
            <textarea class="say-hi-form__textarea" id="" cols="30" name="message" v-model="message"></textarea>
            <p class="say-hi-form__text say-hi-form__text--error">{{ $t('IncorrectMessage') }}</p>
        </div>
        <button class="say-hi-form__button arrow-link" :disabled="dispatchForm" @mouseover="findElement($event)" @mouseleave="animateTextHide($event)">
            <span class="arrow-link__change">
                <span class="arrow-link__span arrow-link__span--first">{{ data.submit_text_animated }}</span>
                <span class="arrow-link__span arrow-link__span--last">{{ data.submit_text_animated }}</span>
            </span>
            <span class="arrow-link__text">{{ data.submit_text }}</span>
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
    props: {
        data: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            regMail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            dispatchForm: false,
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
            if (!this.firstName) {
                this.$refs.firstNameWrap.classList.add('say-hi-form__input-wrap--error')
            } else {
                this.$refs.firstNameWrap.classList.remove('say-hi-form__input-wrap--error')
            }

            if (!this.email || !this.regMail.test(this.email)) {
                this.$refs.emailWrap.classList.add('say-hi-form__input-wrap--error')
            } else {
                this.$refs.emailWrap.classList.remove('say-hi-form__input-wrap--error')
            }

            if (!this.message) {
                this.$refs.messageWrap.classList.add('say-hi-form__textarea-wrap--error')
            } else {
                this.$refs.messageWrap.classList.remove('say-hi-form__textarea-wrap--error')
            }

            if (this.firstName && this.email && this.regMail.test(this.email) && this.message) {
                this.dispatchForm = true
                this.$axios.post('/say_hi_popup_send', {
                    first_name: this.firstName,
                    last_name: this.lastName,
                    email: this.email,
                    message: this.message
                })
                .then((response) => {
                        this.firstName = ''
                        this.lastName = ''
                        this.email = ''
                        this.message = ''
						this.openModal('thank')
                        this.dispatchForm = false
					}, reject => {
						if (reject.response.status === 422) {
							if (Object.keys(reject.response.data.errors).length) {
								for (let key in reject.response.data.errors) {
                                    alert(reject.response.data.errors[key][0])
								}
							}
						}
						this.dispatchForm = false
					})
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.say-hi-form {
    margin: 200px auto 200px auto;
    width: 532px;
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