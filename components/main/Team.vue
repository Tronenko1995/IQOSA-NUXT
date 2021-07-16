<template>
    <section ref="parallaxScene" class="team">
        <div class="team__shadow"></div>
            <div type="translate" data-depth="1" ref="parallaxContainer" class="team__container">
                <div class="team__line team__line--uno"></div>
                <div class="team__line team__line--dos">
                    <div class="team__item team__item--uno team__item--small" data-position="13">
                        <template v-if="data.team_members[12]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[12])" :src="getImg(data.team_members[12].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[12].name }} {{ data.team_members[12].surname }}</p>
                                <p class="team__position">{{ data.team_members[12].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--dos team__item--middle" data-position="6">
                        <template v-if="data.team_members[5]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[5])" :src="getImg(data.team_members[5].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[5].name }} {{ data.team_members[5].surname }}</p>
                                <p class="team__position">{{ data.team_members[5].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--tres team__item--middle" data-position="1">
                        <template v-if="data.team_members[0]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[0])" :src="getImg(data.team_members[0].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[0].name }} {{ data.team_members[0].surname }}</p>
                                <p class="team__position">{{ data.team_members[0].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--cuatro team__item--small" data-position="7">
                        <template v-if="data.team_members[6]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[6])" :src="getImg(data.team_members[6].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[6].name }} {{ data.team_members[6].surname }}</p>
                                <p class="team__position">{{ data.team_members[6].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div  class="team__item team__item--cinco team__item--small" data-position="14">
                        <template v-if="data.team_members[13]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[13])" :src="getImg(data.team_members[13].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[13].name }} {{ data.team_members[13].surname }}</p>
                                <p class="team__position">{{ data.team_members[13].position }}</p>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="team__line team__line--tres">
                    <div  class="team__item team__item--uno team__item--major" data-position="9">
                        <template v-if="data.team_members[8]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[8])" :src="getImg(data.team_members[8].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[8].name }} {{ data.team_members[8].surname }}</p>
                                <p class="team__position">{{ data.team_members[8].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--dos team__item--middle" data-position="4">
                        <template v-if="data.team_members[3]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[3])" :src="getImg(data.team_members[3].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[3].name }} {{ data.team_members[3].surname }}</p>
                                <p class="team__position">{{ data.team_members[3].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div ref="parallaxTitle" class="team__title team-title">
                        <p class="team__title-text team-title__text" style="transform: translate(0px, 0px);">{{ data.team_text.bold_text }}</p>
                        <p class="team__title-text team-title__text" style="transform: translate(0px, 0px);">{{ data.team_text.thin_text }}</p>
                        <div class="team__link team-link arrow-link" @mouseover="findElement($event)" @mouseleave="animateTextHide($event)" @click="openVideo">
                            <span class="arrow-link__change">
                                <span class="arrow-link__span arrow-link__span--first">{{ data.team_text.team_link_text_animated }}</span>
                                <span class="arrow-link__span arrow-link__span--last">{{ data.team_text.team_link_text_animated }}</span>
                            </span>
                            <span class="arrow-link__text">{{ data.team_text.team_link_text }}</span>
                            <span class="arrow-link__circle">
                                <svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                            </span>
                        </div>

                    </div>
                    <div class="team__item team__item--tres team__item--small" data-position="2">
                        <template v-if="data.team_members[1]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[1])" :src="getImg(data.team_members[1].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[1].name }} {{ data.team_members[1].surname }}</p>
                                <p class="team__position">{{ data.team_members[1].position }}</p>
                            </div>
                         </template>
                    </div>
                    <div  class="team__item team__item--cuatro team__item--middle" data-position="8">
                        <template v-if="data.team_members[7]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[7])" :src="getImg(data.team_members[7].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[7].name }} {{ data.team_members[7].surname }}</p>
                                <p class="team__position">{{ data.team_members[7].position }}</p>
                            </div>
                         </template>
                    </div>
                </div>
                <div class="team__line team__line--cuatro">
                    <div class="team__item team__item--uno team__item--small" data-position="12">
                        <template v-if="data.team_members[11]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[11])" :src="getImg(data.team_members[11].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[11].name }} {{ data.team_members[11].surname }}</p>
                                <p class="team__position">{{ data.team_members[11].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--dos team__item--small" data-position="5">
                        <template v-if="data.team_members[4]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[4])" :src="getImg(data.team_members[4].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[4].name }} {{ data.team_members[4].surname }}</p>
                                <p class="team__position">{{ data.team_members[4].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--tres team__item--major" data-position="3">
                        <template v-if="data.team_members[2]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[2])" :src="getImg(data.team_members[2].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[2].name }} {{ data.team_members[2].surname }}</p>
                                <p class="team__position">{{ data.team_members[2].position }}</p>
                            </div>
                        </template>
                    </div>
                    <div class="team__item team__item--cuatro team__item--square" data-position="10">
                        <template v-if="data.team_members[9]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[9])" :src="getImg(data.team_members[9].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[9].name }} {{ data.team_members[9].surname }}</p>
                                <p class="team__position">{{ data.team_members[9].position }}</p>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="team__line team__line--cinco">
                    <div  class="team__item team__item--uno team__item--major" data-position="11">
                        <template v-if="data.team_members[10]">
                            <picture class="team__block">
                                <img class="team__img" @click="openModal(data.team_members[10])" :src="getImg(data.team_members[10].parallax_photo)" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">{{ data.team_members[10].name }} {{ data.team_members[10].surname }}</p>
                                <p class="team__position">{{ data.team_members[10].position }}</p>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import gsap from "gsap"
import Parallax from 'parallax-js'
import { mapMutations } from 'vuex'
export default {
	props: {
		data: {
			type: Object,
			required: true
		}
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
            parallax: null,
            parallaxScene: null,
            parallaxTitle: null,
            parallaxContainer: null,
            resizeTimer: null
        }
    },
    beforeMount() {
        window.addEventListener('resize', this.onWindowResize);
    },
    mounted() {
        this.parallaxScene = this.$refs.parallaxScene
        this.parallaxTitle = this.$refs.parallaxTitle
        this.parallaxContainer = this.$refs.parallaxContainer
        this.parallax = new Parallax(this.parallaxScene, {
            relativeInput: true,
            hoverOnly: true,
        });
        this.parallax.friction(0.01, 0.01);
        this.testSize()
        this.configContainer()
    },
    beforeDestroy() {
		window.removeEventListener('resize',  this.onWindowResize)
    },
    methods: {
        ...mapMutations({
            setModal: 'modal/setModal',
            setTeam: 'team/setTeam',
        }),
        configContainer() {
            let marginW, marginH, elX, elH, x, h
            marginW = (window.innerWidth - this.parallaxTitle.clientWidth)/2
            marginH = (this.parallaxContainer.clientHeight - this.parallaxTitle.clientHeight)/2;
            elX = this.parallaxTitle.getBoundingClientRect().left
            elH = (window.innerHeight - this.parallaxTitle.clientHeight)/1.5;
            x = elX - marginW
            h = elH - marginH;
            this.parallaxContainer.style.left = -x + "px"
            this.parallaxContainer.style.top = h + "px";
        },
        testSize() {
             if (window.innerWidth >= 1920) {
                this.parallax.scalar(30, 75);
            } else if (window.innerWidth >= 1440) {
                this.parallax.scalar(50, 90);
            } else {
                this.parallax.scalar(40, 80);
            }
        },
        onWindowResize() {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.testSize()
                // this.configContainer()
            }, 250);
        },
        openModal(data) {
            this.setTeam({
                name: `${data.name} ${data.surname}`,
                position: data.position,
                img: data.photo,
                quote: data.about
            })
            this.setModal({
                show: true,
                type: 'team',
                animate: 'fade'
            })
        },
        openVideo() {
            this.setModal({
                show: true,
                type: 'about',
                animate: 'show'
            })
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
            gsap.to(el.children[0], { 
                translateY: -100 + "%",
                duration: .5
            })
            gsap.to(el.children[1], { 
                translateY: -100 + "%",
                duration: .5
            })
        },
		animateTextHide(e) {
			if (e.target.classList.contains('arrow-link')) {
                const el = e.target.querySelector('.arrow-link__change')
				gsap.to(el.children[0], { 
					translateY: 0 + "%",
					duration: .5
				})
				gsap.to(el.children[1], { 
					translateY: 0 + "%",
					duration: .5
				})
			}
		},
        getImg(img) {
            return `${this.baseUrl}${img}`
        }
    }
}
</script>

<style lang="scss">
.team {
    margin-top: 188px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: unset !important;
    backface-visibility: hidden; 
    position: relative;
    &__shadow {
        background: linear-gradient(180deg,#1b1b1b,rgba(27,27,27,0) 29.75%,rgba(27,27,27,0) 72.02%,#1b1b1b);
        width: 120%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        pointer-events: none;
        margin-left: -10%;
        backface-visibility: hidden;
        position: relative;
        display: block;
    }
    &__link {
        width: 100%;
        justify-content: center;
        cursor: pointer;
    }
    &__container {
        // transform: translate3d(406.4px, 70.8px, 0px);
        // transform-style: preserve-3d;
        // backface-visibility: hidden;
        position: absolute;
        display: block;
        left: 40px;
        top: 40px;
        left: -707.313px;
        top: -698px;
    }
    &__line {
        display: flex;
        &--uno {
            min-height: 500px;
        }
        &--dos {
            .team__item {
                &--uno {
                    margin: auto auto 16px;
                }
                &--dos {
                    margin-top: auto;
                    margin-left: 140px;
                    margin-bottom: 50px;
                }
                &--tres {
                    margin-top: auto;
                    margin-left: 276px;
                    margin-bottom: 123px;
                }
                &--cuatro {
                    margin-top: auto;
                    margin-left: 280px;
                    margin-bottom: 90px;
                }
                &--cinco {
                    margin: auto 650px 67px 176px;
                }
            }
        }
        &--tres {
            margin-bottom: 24px;
            .team__item {
                &--uno {
                    margin-top: auto;
                    margin-left: 207px;
                    margin-bottom: 10px;
                }
                &--dos {
                    margin-top: auto;
                    margin-left: 132px;
                    margin-bottom: auto;
                }
                &--tres {
                    margin-top: auto;
                    margin-left: 276px;
                    margin-bottom: 123px;
                }
                &--cuatro {
                    margin-top: auto;
                    margin-left: 280px;
                    margin-bottom: 90px;
                }
                &--cinco {
                    
                }
            }
        }
        &--cuatro {
            .team__item {
                &--uno {
                    margin-top: 18px;
                    margin-left: 573px;
                    margin-bottom: 97px;
                }
                &--dos {
                    margin-top: auto;
                    margin-left: 192px;
                    margin-bottom: 136px;
                }
                &--tres {
                    margin-top: auto;
                    margin-left: 207px;
                    margin-bottom: 155px;
                }
                &--cuatro {
                    margin: auto 661px 76px 290px;
                }
                &--cinco {
                    
                }
            }
        }
        &--cinco {
            .team__item {
                &--uno {
                    margin-top: auto;
                    margin-left: 1201px;
                    margin-bottom: 274px;
                }
                &--dos {

                }
                &--tres {

                }
                &--cuatro {

                }
                &--cinco {
                    
                }
            }
        }
    }
    &__item {
        position: relative;
        &--square {
            width: 295px;
            height: 249px;
        }
        &--small {
            width: 215px;
            height: 287px;
        }
        &--middle {
            width: 375px;
            height: 250px;
        }
        &--major {
            width: 447px;
            height: 255px;
        }
        &:hover {
            .team {
                &__text {
                    opacity: 1;
                }
            }
        }
    }
    &__block {
        margin: 0;
        display: inline;
    }
    &__img {
        cursor: pointer;
        max-width: 100%;
        display: block;
        opacity: 1;
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
    &__text {
        opacity: 0;
        position: absolute;
        margin: 0;
        bottom: 16px;
        left: -54px;
        transition: .5s;
    }
    &__name {
        font-weight: 300;
        font-size: 16px;
        font-family: 'Light', Arial;
        margin: 0;
        line-height: 115%;
        height: fit-content;
        color: #fff;
    }
    &__position {
        font-weight: 300;
        font-size: 16px;
        font-family: 'Light', Arial;
        margin: 0;
        line-height: 140%;
        height: fit-content;
        color: #fff;
    }
    &__title {
        height: fit-content;
        margin-left: 16px;
        margin-bottom: 24px;
        padding: 0 30px;
        &-text {
            margin: 0;
            font-size: 30px;
            line-height: 120%;
            text-transform: uppercase;
            font-family: 'Roman', Arial;
            font-weight: 400;
            white-space: nowrap;
            width: fit-content;
            color: #fff;
            &:nth-child(2) {
                font-family: 'ThinItalic', Arial;
                font-weight: 300;
            }
        }
    }
}
.team-title {
    &__text {
        &:first-child {
            margin-right: 140px;
            transform: translateX(-300px);
        }
        &:nth-child(2) {
            margin-left: 175px;
            transform: translateX(300px);
        }
    }
}
.team-link {
    margin-top: 48px;
}
</style>