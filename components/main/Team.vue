<template>
        <kinesis-container ref="parallaxScene" class="team" style="transform: translate3d(0px, 0px, 0px) rotate(0.0001deg); transform-style: preserve-3d; backface-visibility: hidden; position: relative;">
            <div class="team__shadow" style="transform: translate3d(0px, 0px, 0px); transform-style: preserve-3d; backface-visibility: hidden; position: relative; display: block; left: 0px; top: 0px;"></div>
                <kinesis-element type="translate" :strength="strength" data-depth="1" ref="parallaxBody" class="team__container">
                    <div class="team__line team__line--uno"></div>
                    <div class="team__line team__line--dos">
                        <div class="team__item team__item--uno team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3433-copy-scaled.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Romanchenko Kateryna</p>
                                <p class="team__position">SMM Manager</p>
                            </div>
                        </div>
                        <div class="team__item team__item--dos team__item--middle">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3816-2.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Pichugina Alina</p>
                                <p class="team__position">Designer-Visualizer</p>
                            </div>
                        </div>
                        <div class="team__item team__item--tres team__item--middle">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3778-2-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Matsiura Vladislav</p>
                                <p class="team__position">Purchasing Manager</p>
                            </div>
                        </div>
                        <div class="team__item team__item--cuatro team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4125-2-copy-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Maklyakova Aleksandra</p>
                                <p class="team__position">Co-Founder, CEO</p>
                            </div>
                        </div>
                        <div  class="team__item team__item--cinco team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3629-2-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Boiko Valeriа</p>
                                <p class="team__position">Chief Architect</p>
                            </div>
                        </div>
                    </div>
                    <div class="team__line team__line--tres">
                        <div  class="team__item team__item--uno team__item--major">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3322-2-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Krasulenko Tatiana</p>
                                <p class="team__position">HR Consultant</p>
                            </div>
                        </div>
                        <div class="team__item team__item--dos team__item--middle">
                            <picture class="team__block">
                                <img @click="openModal($event)" class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy-1.jpg" data-src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Fil Vladimir</p>
                                <p class="team__position">Designer-Visualizer</p>
                            </div>
                        </div>
                        <div ref="parallaxTitle" class="team__title">
                            <p class="team__title-text" style="transform: translate(0px, 0px);">We form the quality of life</p>
                            <p class="team__title-text" style="transform: translate(0px, 0px);">By the quality of implementation</p>
                            <nuxt-link to="/" class="team__link arrow-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
                                <span class="arrow-link__change">
                                    <span class="arrow-link__span arrow-link__span--first">Explore</span>
                                    <span class="arrow-link__span arrow-link__span--last">Explore</span>
                                </span>
                                <span class="arrow-link__text">THE project</span>
                                <span class="arrow-link__circle">
                                    <svg class="arrow-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                                </span>
                            </nuxt-link>
                        </div>
                        <div class="team__item team__item--tres team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3068-2.jpg" alt="">
                            </picture>
                        <div class="team__text">
                            <p class="team__name">Babanin Dmitry</p>
                            <p class="team__position">Founder, Creative Director</p>
                        </div>
                        </div>
                        <div  class="team__item team__item--cuatro team__item--middle">
                            <picture class="team__block">
                                <img class="team__item-img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3622-2-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Babanin Bogdan</p>
                                <p class="team__position">Visualizer</p>
                            </div>
                        </div>
                    </div>
                    <div class="team__line team__line--cuatro">
                        <div class="team__item team__item--uno team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3060-2.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Kim Nikita</p>
                                <p class="team__position">Legal Advisor</p>
                            </div>
                        </div>
                        <div class="team__item team__item--dos team__item--small">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3185-2.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Hovorukha Dana</p>
                                <p class="team__position">Office Manager</p>
                            </div>
                        </div>
                        <div class="team__item team__item--tres team__item--major">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_4412-2.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Ryazhko Nikita</p>
                                <p class="team__position">CO-Founder, Lead Designer</p>
                            </div>
                        </div>
                        <div class="team__item team__item--cuatro team__item--square">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2021/05/IMG_3986-2-1.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Molodets Marina</p>
                                <p class="team__position">Purchasing Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="team__line team__line--cinco">
                        <div  class="team__item team__item--uno team__item--major">
                            <picture class="team__block">
                                <img class="team__img" src="https://iqosa.com/wp-content/uploads/2020/12/IMG_4276-scaled.jpg" alt="">
                            </picture>
                            <div class="team__text">
                                <p class="team__name">Maksiuk Sviatoslav</p>
                               <p class="team__position">Architect</p>
                            </div>
                        </div>
                    </div>
                </kinesis-element>
        </kinesis-container>
</template>

<script>
export default {
    data() {
        return {
            parallax: null,
            parallaxScene: null,
            parallaxTitle: null,
            parallaxBody: null,
            strength: 300
        }
    },
    beforeMount() {
        this.parallaxScene = this.$refs.parallaxScene
        this.parallaxTitle = this.$refs.parallaxTitle
        this.parallaxBody = this.$refs.parallaxBody
    },
    mounted() {
    },
    methods: {
        openModal(e) {
            console.dir(e.target.dataset.src)
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
    }
}
</script>

<style lang="scss">
.team {
    margin-top: 188px;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    &__shadow {
        background: linear-gradient(180deg,#1b1b1b,rgba(27,27,27,0) 29.75%,rgba(27,27,27,0) 72.02%,#1b1b1b);
        position: absolute;
        width: 120%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        pointer-events: none;
        margin-left: -10%;
    }
    &__link {
        width: 100%;
        margin-top: 48px;
        justify-content: center;
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
            &:first-child {
                margin-right: 140px;
                transform: translateX(-300px);
                opacity: .5;
            }
            &:nth-child(2) {
                margin-left: 175px;
                font-family: 'ThinItalic', Arial;
                font-weight: 300;
                transform: translateX(300px);
                opacity: .5;
            }
        }
    }
}
</style>