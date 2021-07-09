<template>
    <main class="one-news-page">
        <section class="one-news">
            <div class="one-news__wrap">
                <div class="one-news__date">
                    <span>17 AUGUST</span>2020
                </div>
                <div class="one-news__title">Personal information is data that can be used to identify or contact a single person</div>
                <div class="one-news__image one-news__image--main">
                    <img :src="require('~/assets/img/one-news/1.jpg')" alt="">
                </div>
            </div>
            <hr class="one-news__line">
            <div class="one-news__wrap">
                <div class="one-news__info">
                    <div class="one-news__info-left one-news__info-left--share">
                        <span>Share</span>
                        <ul class="animate-text animate-text--share">
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">Facebook</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">Facebook</a>
                            </li>
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">Twitter</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">Twitter</a>
                            </li>
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <a href="#" class="animate-text__button">LinkedIn</a>
                                <a href="#" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div class="one-news__info-middle">
                        <span>author</span>
                        <ul class="animate-text animate-text--team">
                            <li class="animate-text__item" @mouseover="showCursive($event)" @mouseleave="hideCursive($event)">
                                <button @click.prevent="openModal()" class="animate-text__button">BABANIN BOGDAN</button>
                                <button @click.prevent="openModal()" class="animate-text__button animate-text__button--cursive animate-text__button--absolute">BABANIN BOGDAN</button>
                            </li>
                        </ul>
                    </div>
                    <div class="one-news__info-right">
                        <span>subject</span>
                        <span>interior design</span>
                    </div>
                </div>
                <div class="one-news__block">
                    <p class="one-news__text">It’s not easy to choose a particular style to work with for any studio. Why? With the abundance of materials, trends, requests, and decoration available now, it might seem like the only way out is to succumb to the omnipresent eclecticism. While it might be an option for some, it’s not the one for IQOSA. In our industry, there is an idea that a great studio focuses on one-two styles, creates the projects in those styles only and only for those people, who share the philosophy behind them. For IQOSA, these styles are modern and modern classic.</p>
                    <blockquote class="one-news__text one-news__text--quote">
                        <span>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.212 0.457998L20.6 3.10999C18.084 4.538 16.316 7.666 15.296 12.494L13.154 22.694H11.012L13.154 12.494C13.834 9.09399 14.65 6.57799 15.602 4.946C16.622 3.246 18.492 1.75 21.212 0.457998ZM10.91 0.457998L10.298 3.10999C7.782 4.538 6.014 7.666 4.994 12.494L2.852 22.694H0.71L2.852 12.494C3.532 9.09399 4.348 6.57799 5.3 4.946C6.32 3.246 8.19 1.75 10.91 0.457998Z"/></svg>
                        </span>
                        Each of these styles uses many similar techniques, materials, and color solutions to, well, create the same thing – interior design. However, they do have differences, twists, and formulas that make them stand out independently.</blockquote>
                    <p class="one-news__text one-news__text--standart">And in this article, we’ll tell you why we decided to work with the modern and modern classic styles, what’s the difference between them, and why you might consider them for your future home. Let’s start with a review of both.</p>
                </div>
                <!-- <div class="one-news__image one-news__image--standart">
                    <img :src="require('~/assets/img/project/2.jpg')" alt="">
                </div>
                <div class="one-news__image one-news__image--standart">
                    <img :src="require('~/assets/img/project/3.jpg')" alt="">
                </div> -->
                <div class="one-news__images">
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/3.jpg')" alt="">
                    </div>
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/4.jpg')" alt="">
                    </div>
                </div>
                <div class="one-news__block">
                    <h2 class="one-news__subject">Materials</h2>
                    <p class="one-news__text one-news__text--normal">One of the main characteristics of the modern classic is the choice of the materials for furniture, decoration, or fit-out. This is where it tends to classical interior more, emphasizing the use of natural marble, high-quality wood, brass details, leather, branded textile, glass, etc. It is slightly different with the modern interior as it relies heavily on the use of technologies, novel materials with different textures and finishes, especially contrasting ones mixed together.</p>
                </div>
                <div class="one-news__block one-news__block--next">
                    <h2 class="one-news__subject">Color Palette</h2>
                    <ul class="one-news__list">
                        <li class="one-news__item one-news__text">With a modern classic, it’s easy.</li>
                        <li class="one-news__item one-news__text">This style is all about the neutral, usually pastel base colors as they add certain nobility to the whole space.</li>
                        <li class="one-news__item one-news__text">Usually, you can spot brown, beige, black, chocolate brown, gray, silver, white, and grayest blue shades in these interiors.</li>
                        <li class="one-news__item one-news__text">With the modern, however, it’s a bit complicated, as it uses bold, intense colors as accents and builds the whole color look around them.</li>
                        <li class="one-news__item one-news__text">Here you can spot bright accents in the furniture parts or upholstering but they will look organic to the place as they will be well-balanced with the lighter tones of the same color.</li>
                    </ul>
                </div>
                <div class="one-news__image one-news__image--main">
                    <img :src="require('~/assets/img/one-news/2.jpg')" alt="">
                </div>
                <div class="one-news__block">
                    <h2 class="one-news__subject">Geometry</h2>
                    <p class="one-news__text one-news__text--normal">Modern classic favors the traditional geometric forms, symmetry, and balanced proportions. However, it does allow asymmetry in details to freshen the space up. Modern, on the other hand, is more flexible in terms of the lines, shapes, and forms. Here, irregularity and transformation can take a lead as if reflecting the fast-paced lifestyle.</p>
                </div>
                <div class="one-news__block one-news__block--next">
                    <h2 class="one-news__subject">Contrasts</h2>
                    <p class="one-news__text one-news__text--normal">The contrast in textures is what makes a difference between the classic and modern classic. Why? Because the modern classic loves adding elements that would contradict while complimenting each other. For example, mixing various patterns of the marble slabs in the bathroom and dividing them with metal profiles. Or making the classical moldings on the textured marble panels. Classical? Yes. Modern? Absolutely!<br>The modern style, however, takes it all to the next level. While in modern classic the contrasts aren’t too vivid and more harmonious, here they might be more visible and include more things to combine. For example, matte plaster wall panes with ribbed ones made of micro concrete can be found together with marble and mirror blocks in one room.</p>
                </div>
                <div class="one-news__images">
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/3.jpg')" alt="">
                    </div>
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/4.jpg')" alt="">
                    </div>
                </div>
                <div class="one-news__block">
                    <h2 class="one-news__subject">Functionality</h2>
                    <p class="one-news__text one-news__text--normal">Both modern and modern classic interiors are known for their admiration of furniture and decorative elements being functional first. The simple furniture forms, various lighting solutions, curtains, etc – if used in these designs, they are never for the view only. And this is the reason for choosing minimalism, too.</p>
                </div>
                <div class="one-news__block one-news__block--next">
                    <h2 class="one-news__subject">Minimalism</h2>
                    <p class="one-news__text one-news__text--normal">The quality, inherent to both styles. Modern and modern classic avoid the exuberance of decorative elements and create beauty with a carefully picked combination of materials, textures, and forms. For these styles, the less is always more.</p>
                </div>
                <div class="one-news__image one-news__image--main">
                    <img :src="require('~/assets/img/one-news/2.jpg')" alt="">
                </div>
                <div class="one-news__block">
                    <h2 class="one-news__subject">Brands</h2>
                    <p class="one-news__text one-news__text--normal">Another thing that unites these styles is that they put a heavy accent on the craftsmanship and quality of the materials and furniture they include as a part of the interior. From this perspective, you will always see famous, luxury brands in everything – from flooring solutions to sofas. In the case of the modern style, it can also be custom-made, exclusive niche furniture to fit the mood of the space.<br>Now, as we’ve covered the major similarities and differences, it’s time to reveal why modern and modern classic are the styles we decided to work with.</p>
                </div>
                <div class="one-news__block one-news__block--next">
                    <h2 class="one-news__subject">Minimalism</h2>
                    <p class="one-news__text one-news__text--normal">The quality, inherent to both styles. Modern and modern classic avoid the exuberance of decorative elements and create beauty with a carefully picked combination of materials, textures, and forms. For these styles, the less is always more.</p>
                </div>
                <div class="one-news__images">
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/3.jpg')" alt="">
                    </div>
                    <div class="one-news__image">
                        <img :src="require('~/assets/img/one-news/4.jpg')" alt="">
                    </div>
                </div>
                <div class="one-news__block">
                    <h2 class="one-news__subject">And the Main Question in Why</h2>
                    <p class="one-news__text one-news__text--normal">The reason is simple: because it takes the best of both worlds, allowing us to combine their elements and create a timeless, yet interesting look. We love balance and we find it in the classical tradition but we also like making statements – and this is what modern design is about.<br>Besides, the interior and architecture is something that can’t go in different directions. For instance, an apartment in a newly-built complex needs an interior to emphasize the building’s modern architecture. However, a renovated apartment in a historical building has to preserve what was valued for years and be suitable for modern life.</p>
                    <blockquote class="one-news__text one-news__text--quote">
                        <span>
                            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.212 0.457998L20.6 3.10999C18.084 4.538 16.316 7.666 15.296 12.494L13.154 22.694H11.012L13.154 12.494C13.834 9.09399 14.65 6.57799 15.602 4.946C16.622 3.246 18.492 1.75 21.212 0.457998ZM10.91 0.457998L10.298 3.10999C7.782 4.538 6.014 7.666 4.994 12.494L2.852 22.694H0.71L2.852 12.494C3.532 9.09399 4.348 6.57799 5.3 4.946C6.32 3.246 8.19 1.75 10.91 0.457998Z"/></svg>
                        </span>
                        Each of these styles uses many similar techniques, materials, and color solutions to, well, create the same thing – interior design. However, they do have differences, twists, and formulas that make them stand out independently.</blockquote>
                </div>
                <a @click.prevent="go('/news/article-2')" href="/news/article-2" class="one-news__next">
                    <div class="one-news__title one-news__title--next">
                        <ul class="animate-text animate-text--next">
                            <li class="animate-text__item">
                                <a href="#" class="animate-text__button animate-text__button--cursive  animate-text__button--next">NEXT</a>
                                <a href="#" class="animate-text__button animate-text__button--next animate-text__button--absolute">Article 2</a>
                            </li>
                        </ul>
                    </div>
                    <div class="one-news__image one-news__image--next">
                        <img :src="require('~/assets/img/project/8.jpg')" alt="">
                    </div>
                </a>
            </div>
        </section>
        <Modals v-if="modal.show" :modal="modal"/>
    </main>
</template>

<script>
// import gsap from 'gsap';
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Modals from '@/components/system/modals/Modals.vue'
import { mapMutations } from 'vuex'
export default {
  layout: 'project',
  components: { Modals },
    data() {
        return {
            imgParallax: null
        }
    },
    created() {
        // this.$gsap.registerPlugin(this.$ScrollTrigger)
        // gsap.registerPlugin(ScrollTrigger);
    },
    mounted() {
        this.$gsap.registerPlugin(this.$ScrollTrigger);
        this.imgParallax = document.querySelectorAll('.one-news__image--parallax')
        this.testSize()
        if (this.preloader) {
        setTimeout(() => {
            this.setPlug(false)
        }, this.duration.preloader);
        } else {
        setTimeout(() => {
            this.setPlug(false)
        }, this.duration.page);
        }
    },
  computed: {
    preloader() { return this.$store.getters['preloader/preloader'] },
    duration() { return this.$store.getters['plug/duration'] },
	modal() { return this.$store.getters['modal/modal'] },
  },
    methods: {
        ...mapMutations({
            setPlug: 'plug/setVisible',
            setModal: 'modal/setModal',
            setTeam: 'team/setTeam',
            setAnimate: 'plug/setAnimate',
        }),
        testSize() {
            console.log(this.imgParallax)
            if (window.innerWidth > 480) {
                this.$nextTick( () => {
                    this.imgParallax.forEach((img) => {
                        let hero_scroll = this.$gsap.timeline({
                            scrollTrigger: {
                                trigger: img,
                                start: "top bottom",
                                end: "bottom top",
                                // markers:true,
                                scrub: 1.7,
                            },
                        })
                        .to(img, {
                            translateY: 0,
                            duration: 1
                        })
                    })
                })
            }
        },
        
        showCursive(e) {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
                this.$gsap.to(e.target.parentElement.children[0], {
                    translateY: -100 + "%",
                    duration: .5
                })
                this.$gsap.to(e.target.parentElement.children[1], {
                    translateY: -100 + "%",
                    duration: .5
                })
            }
        },
        hideCursive(e) {
            if (e.target.tagName === 'LI') {
                this.$gsap.to(e.target.children[0], {
                    translateY: 0 + "%",
                    duration: .5
                })
                this.$gsap.to(e.target.children[1], {
                    translateY: 0 + "%",
                    duration: .5
                })
            }
        },
        openModal() {
            this.setTeam({
                name: 'Fil Vladimir',
                position: 'Designer-Visualizer',
                img: 'https://iqosa.com/wp-content/uploads/2021/05/IMG_4211-2-copy.jpg',
                quote: 'IQOSA is ambition, striving for individuality in design. We always wanted to create something unique and that no one has pointed us what to do.'
            })
            this.setModal({
                show: true,
                type: 'team',
                animate: 'fade'
            })
        },
        go(link) {
            if (this.$route.path !== link) {
                this.setAnimate('up')
                this.setPlug(true)
                setTimeout(() => {
                this.setAnimate('dissolve')
                this.$router.push({ path: link })
                }, 1000);
            }
        },
    }
}
</script>

<style lang="scss">
.one-news {
    margin-top: 256px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 100%;
        padding: 0 72px;
    }
    &__date {
        font-family:'Light', Arial;
        font-style: italic;
        font-weight: 300;
        font-size: 16px;
        line-height: 100%;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        span {
            font-family: 'LightItalic', Arial;
        }
    }
    &__title {
        margin-top: 71px;
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 62px;
        line-height: 100%;
        text-align: center;
        // letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        width: 1176px;
        &--text {
            margin-top: 111px;
        }
        &--next {
            font-size: 164px;
            position: absolute;
            margin-top: 0px;
            left: 50%;
            transform: translateX(-50%);
            top: -75px;
            z-index: 1;
            width: 100%;
        }
    }
    &__image {
        margin-top: 188px;
        width: 868px;
        height: 1173px;
        // margin: 72px auto 0 auto;
        // width: 100%;
        // height: 950px;
        // height: auto;
        img {
            width: 100%;
            height: 100%;
        }
        &--main {
            width: 100%;
            height: auto;
            margin-top: 72px;
        }
        // &--margin {
        //     margin: 0 auto 213px auto;
        // }
        // &--uno {
            // margin: 148px 0 0 0; 
            // width: 645px;
            // width: 516px;
            // height: 610px;
            // height: 762px;
            // transform: translateY(260px);
            // margin-bottom: 260px;
        // }
        // &--dos {
        //     margin: 494px 0 0 0;
        //     width: 781px;
        //     height: 1057px;
        //     transform: translateY(200px);
        //     margin-bottom: 200px;
            // width: 625px;
            // height: 846px;
        // }
        // &--tres {
        //     margin: -113px 0 0 0;
        //     width: 288px;
        //     height: 340px;
        //     transform: translateY(200px);
        //     margin-bottom: 200px;
        // }
        // &--quatro {
        //     margin: 250px 0 300px 0; 
        //     width: 665px;
        //     height: 785px;
        //     transform: translateY(120px);
        //     margin-bottom: 120px;
        // }
        &--next {
            width: 852px;
            height: 530px;
            overflow: hidden;
            margin: 0 auto;
        }
    }
    &__images {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    &__line {
        width: 100%;
        height: 1px;
        opacity: .3;
        margin-top: 72px;
        background: #FFFFFF;
        &--share {
            margin-top: 3px;
        }
    }
    &__info {
        width: 100%;
        margin-top: 24px;
        // margin-bottom: 188px;
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        display: flex;
        &--share {
            margin-bottom: 0px;
        }
        &-left {
            &--share {
                display: flex;
            }
        }
        &-middle {
            display: flex;
            margin-left: auto;
            span {
                display: inline-block;
            }
            &--share {
                display: flex;
                flex-direction: column;
                margin-right: 529px;
                span {
                    &:last-child {
                        margin-left: 0;
                    }
                }
            }
        }
        &-right {
            margin-left: 367px;
            span {
                &:last-child {
                    margin-left: 70px;
                }
            }
        }
    }
    &__next {
        position: relative;
        margin: 357px auto 0 auto;
        img {
            transform: scale(1.1);
            transition: .5s;
        }
        &:hover {
            img {
                transform: scale(1);
            }
            .animate-text__button {
                &:first-child {
                    transform: translateY(-100%);
                }
                &:last-child {
                    transform: translateY(-100%);
                }
            }
        }
    }
    &__list {
        margin-top: 16px;
    }
    &__item {
        margin-bottom: 8px;
        list-style: inside;
        &:last-child {
            margin-bottom: 0px;
        }
    }
    &__block {
        margin-top: 188px;
        width: 755px;
        &--next {
            margin-top: 104px;
        }
    }
    &__subject {
        font-family: 'Roman', Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 50px;
        line-height: 110%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
        color: #FFFFFF;
        // width: 755px;
    }
    &__text {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 22px;
        line-height: 140%;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
        // width: 755px;
        // margin-top: 16px;
        // &--alone {
        //     margin-top: 188px;
        // }
        &--standart {
            margin-top: 80px;
        }
        &--normal {
            margin-top: 16px;
        }
        &--quote {
            color: rgba(255,255,255,0.5);
            position: relative;
            padding-left: 64px;
            font-style: italic;
            font-family: 'LightItalic', Arial;
            margin-top: 80px;
            span {
                width: 29px;
                height: 102px;
                position: absolute;
                left: 0;
                top: -20px;
                display: flex;
                justify-content: flex-end;
            }
            svg {
                fill: rgba(255,255,255,0.2);
            }
        }
    }
}
.animate-text {
    &--team {
        margin-left: 70px;
    }
    &--share {
        margin-left: 120px;
    }
    &__item {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        transform: translateY(0);
        position: relative;
        margin-bottom: 4px;
        &:last-child {
            margin-bottom: 0px;
        }
    }
    &__button {
        font-family: 'Light', Arial;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        background: none;
        cursor: pointer;
        text-align: left;
        &--cursive {
            font-family: 'LightItalic', Arial;
        }
        &--absolute {
            position: absolute;
            bottom: -100%;
        }
        &--next {
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            text-align: center;
            width: 100%;
            transition: .4s;
        }
    }
}
.animate-line {
    display: flex;
    position: relative;
    &--share {
        margin-top: 4px;
    }
    &:hover {
        .animate-line__line {
            animation: 'under-line' 1s;
        }
    }
	&__link {
		color: #fff;
	}
	&__line {
		position: absolute;
		height: 1px;
		background: #fff;
		display: block;
		transition: .3s ease;
		bottom: 0;
		width: 100%;
	}
}

@media (max-width: 1643px) {
    .one-news {
        &__image {
            width: 636px;
            height: 860px;
            &--main {
                width: 100%;
                height: 100%;
            }
        }
    }
}
@media (max-width: 1440px) {
    .one-news {
        margin-top: 217px;
        &__wrap {
            padding: 0 64px;
        }
        &__title {
            font-size: 62px;
            width: 978px;
            &--next {
                font-size: 120px;
                top: -61px;
                width: 100%
            }
        }
        &__info {
            // margin-bottom: 156px;
            &--share {
                margin-bottom: 0px;
            }
            &-right {
                margin-left: 191px;
            }
            &-middle {
                &--share {
                    margin-right: 353px;
                }
            }
        }
        &__image {
            margin-top: 156px;
            // &--margin {
            //     margin: 0 auto 181px auto;
            // }
            // &--uno {
            //     margin: 116px 0 260px 0;
            //     width: 476px;
            //     height: 562px;
            // }
            // &--dos {
            //     margin: 371px 0 200px 0;
            //     width: 576px;
            //     height: 780px;
            // }
            // &--tres {
            //     margin: -113px 0 200px 0;
            //     width: 213px;
            //     height: 251px;
            // }
            // &--quatro {
            //     margin: 160px 0 120px 0;
                // margin: 160px 0 275px 0;
            //     width: 491px;
            //     height: 579px;
            // }
            &--main {
                margin-top: 72px;
            }
            &--next {
                margin-top: 0;
                width: 639px;
                height: 398px;
            }
        }
        &__next {
            margin: 326px auto 0 auto;
        }
        &__block {
            margin-top: 156px;
            &--next {
                margin-top: 104px;
            }
        }
    }
}
@media (max-width: 1280px) {
    .one-news {
        margin-top: 223px;
        &__wrap {
            padding: 0 56px;
        }
        &__title {
            font-size: 52px;
            margin-top: 48px;
            &--next {
                font-size: 108px;
                top: -56px;
                width: 100%;
                margin-top: 0;
            }
        }
        &__info {
            // margin-bottom: 148px;
            // &--share {
            //     margin-bottom: 0px;
            // }
            &-right {
                margin-left: 120px;
            }
            &-middle {
                &--share {
                    margin-right: 245px;
                }
            }
        }
        &__image {
            margin-top: 148px;
            width: 564px;
            height: 763px;
            &--main {
                margin-top: 72px;
                width: 100%;
                height: 100%;
            }
            // &--margin {
            //     margin: 0 auto 173px auto;
            // }
            // &--uno {
            //     margin: 108px 0 0 0;
            //     // width: 424px;
            //     // height: 501px;
            //     width: 382px;
            //     height: 451px;
            //     transform: translateY(0);
            // }
            // &--dos {
            //     margin: 335px 0 0 0;
            //     // width: 513px;
            //     // height: 695px;
            //     width: 462px;
            //     height: 626px;
            //     transform: translateY(0);
            // }
            // &--tres {
            //     margin: -86px 0 0 0;
            //     width: 189px;
            //     height: 223px;
            //     transform: translateY(0);
            // }
            // &--quatro {
            //     margin: 159px 0 232px 0;
            //     width: 437px;
            //     height: 516px;
            //     transform: translateY(0);
            // }
            &--next {
                margin-top: 0;
                width: 568px;
                height: 357px;
            }
        }
        &__next {
            margin: 272px auto 0 auto;
        }
        &__text {
            font-size: 20px;
            &--quote {
                padding-left: 54px;
            }
        }
        &__block {
            margin-top: 148px;
            width: 600px;
            &--next {
                margin-top: 94px;
            }
        }
        &__subject {
            font-size: 46px;
        }
    }
}
@media (max-width: 1024px) {
    .one-news {
        margin-top: 188px;
        &__wrap {
            padding: 0 56px;
        }
        &__date {
            font-size: 14px;
        }
        &__title {
            // font-size: 108px;
            font-size: 52px;
            width: 676px;
            &--next {
                font-size: 90px;
                top: -46px;
            }
        }
        &__info {
            font-size: 12px;
            // margin-bottom: 132px;
            // &--share {
                // margin-bottom: 0px;
            // }
            &-right {
                margin-left: 100px;
            }
            &-middle {
                &--share {
                    margin-right: 204px;
                }
            }
        }
        &__image {
            margin-top: 132px;
            width: 440px;
            height: 595px;
            &--main {
                margin-top: 64px;
                width: 100%;
                height: 100%;
            }
            // margin: 64px auto 0 auto;
            // &--standart {
            //     margin: 0 auto 32px auto;
            // }
            // &--margin {
            //     margin: 0 auto 156px auto;
            // }
            // &--uno {
            //     margin: 100px 0 0 0;
            //     width: 331px;
            //     height: 391px;
            // }
            // &--dos {
            //     margin: 278px 0 0 0;
            //     width: 401px;
            //     height: 542px;
            // }
            // &--tres {
            //     margin: -70px 0 0 0;
            //     width: 148px;
            //     height: 175px;
            // }
            // &--quatro {
            //     margin: 107px 0 192px 0;
            //     width: 342px;
            //     height: 403px;
            // }
            &--next {
                width: 444px;
                height: 280px;
                margin-top: 0;
            }
        }
        &__next {
            margin: 229px auto 0 auto;
        }
        &__line {
            margin-top: 64px;
            &--share {
                margin-top: 0px;
            }
        }
        &__block {
            margin-top: 132px;
            &--next {
                margin-top: 84px;
            }
        }
    }
}

@media (max-width: 890px) {
    .one-news {
        &__image {
            width: 320px;
            height: 433px;
            &--main {
                width: 100%;
                height: 100%;
            }
            &--next {
                width: 324px;
                height: 202px;
            }
        }
        &__info {
            &-middle {
                &--share {
                    margin-right: 100px;
                }
            }
        }
    }
}

@media (max-width: 768px) {
    .one-news {
        margin-top: 190px;
        &__wrap {
            padding: 0 48px;
        }
        &__title {
            width: 614px;
            margin-top: 40px;
            font-size: 46px;
            // font-size: 50px;
            &--next {
                // font-size: 88px;
                font-size: 50px;
                top: -25px;
                margin-top: 0px;
                width: 100%;
            }
        }
        &__info {
            // margin-bottom: 132px;
            // &--share {
            //     margin-bottom: 0px;
            // }
            &-right {
                margin-left: 24px;
            }
            &-middle {
                &--share {
                    margin-right: 204px;
                }
            }
        }
        &__image {
            margin-top: 132px;
            width: 320px;
            height: 433px;
            &--main {
                margin-top: 56px;
                width: 100%;
                height: 100%;
            }
            &--next {
                margin-top: 0;
                width: 324px;
                height: 200px;
            }
        }
        &__next {
            margin: 222px auto 0 auto;
        }
        &__line {
            margin-top: 56px;
            &--share {
                margin-top: 0px;
            }
        }
        &__block {
            margin-top: 132px;
            width: 556px;
            &--next {
                margin-top: 74px;
            }
        }
        &__subject {
            font-size: 36px;
        }
        &__text {
            font-size: 18px;
            &--quote {
                padding-left: 44px;
            }
        }
    }
}

@media (max-width: 670px) {
    .one-news {
        &__images {
            flex-direction: column;
        }
        &__image {
            // &--uno {
            //     width: 255px;
            //     height: 302px;
            // }
            // &--dos {
            //     margin: 16px 0 0 0;
            //     width: 100%;
            //     height: auto;
            // }
            // &--tres {
            //     margin: 88px 0 0 0;
            //     width: 100%;
            //     height: auto;
            // }
            // &--quatro {
            //     margin: 16px 0 88px auto;
            //     width: 255px;
            //     height: 301px;
            // }
        }
        &__title {
            width: 100%;
            // &--text {
            //     margin-top: 88px;
            // }
        }
    }
}

@media (max-width: 620px) {
    .one-news {
        &__title {
            font-size: 40px;
        }
        &__wrap {
            padding: 0 16px;
        }
        &__info {
            font-size: 13px;
            // margin-bottom: 88px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // &--share {
            //     margin-bottom: 0px;
            // }
            &-left {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            &-right {
                margin-left: 0px;
                margin-top: 56px;
                display: flex;
                flex-direction: column;
                align-items: center;
                span {
                    &:last-child {
                        margin-left: 0px;
                        margin-top: 8px;
                    }
                }
            }
            &-middle {
                margin-top: 56px;
                align-items: center;
                flex-direction: column;
                margin-left: 0;
                &--share {
                    margin-right: 0px;
                }
            }
        }
        &__block {
            width: 100%;
        }
    }
    .animate-text {
        &--team {
            margin-left: 0px;
            margin-top: 8px;
        }
        &--share {
            margin-left: 0px;
            margin-top: 8px;
        }
        &__button {
            text-align: center;
        }
    }
}
@media (max-width: 414px) {
    .one-news {
        margin-top: 145px;
        &__date {
            font-size: 13px;
        }
        &__title {
            margin-top: 32px;
            font-size: 40px;
            // &--text {
            //     margin-top: 88px;
            // }
            &--next {
                margin-top: 0px;
                top: -24px;
                font-size: 47px;
            }
        }
        &__images {
            .one-news__image {
                &:last-child {
                    margin-top: 16px;
                }
            }
        }
        &__image {
            margin-top: 88px;
            width: 100%;
            height: 464px;
            &--main {
                margin-top: 48px;
                width: 100%;
                height: 100%;
            }
            // margin: 48px auto 0 auto;
            // &--standart {
            //     margin: 0 auto 16px auto;
            // }
            // &--uno {
            //     margin: 72px 0 0 0;
            // }
            // &--dos {
            //     margin: 16px 0 0 0;
            // }
            // &--tres {
            //     margin: 88px 0 0 0;
            // }
            // &--quatro {
            //     margin: 16px 0 88px auto;
            // }
            // &--margin {
            //     margin: 0 auto 108px auto;
            // }
            &--next {
                width: 225px;
                height: 144px;
                margin: 0 auto;
            }
        }
        &__line {
            margin-top: 48px;
        }
        &__next {
            margin: 143px auto 0 auto;
        }
        &__block {
            margin-top: 88px;
            &--next {
                margin-top: 64px;
            }
        }
    }
}
</style>