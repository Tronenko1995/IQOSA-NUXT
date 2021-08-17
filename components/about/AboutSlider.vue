<template>
    <div class="strip-outer drag">
        <div class="slider-text" v-if="data && data.length">
            <p v-for="(item, i) in data" :key="i">{{ item }}</p>
        </div>
        <div class="strip-inner" data-cursor="drag">
            <div class="draggable"></div>
            <div class="strip">
                <div class="strip__item" v-for="(item, i) in list" :key="i">
                    <div class="img-outer">
                        <div class="img-inner">
                            <img :src="getImg(item)" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import Draggabilly from "draggabilly"
import gsap from "gsap"
export default {
	props: {
		data: {
			type: Array,
		},
		list: {
			type: Array,
			required: true
		}
	},
    data() {
        return {
            baseUrl: process.env.baseUrl,
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        getImg(img) {
            return `${this.baseUrl}${img}`
        },
        init() {
            const Draggabilly = require("draggabilly")

            // let drag = document.body.querySelector(".drag");

            function initSlider() {
                let cursorich = document.querySelector('.cursor')
                // console.log(cursorich)
                // console.dir(cursorich)
                // const body = document.body;
                // imagesLoaded(document.querySelectorAll('.img-inner'), { background: true }, () => document.body.classList.remove('loading'));

                const MathUtils = {
                lineEq: (y2, y1, x2, x1, currentVal) => {
                    // y = mx + b
                    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
                    return m * currentVal + b;
                },
                lerp: (a, b, n) => (1 - n) * a + n * b,
                getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
                };

                // const getMousePos = (e) => {
                // let posx = 0;
                // let posy = 0;
                // if (!e) e = window.event;
                // if (e.pageX || e.pageY) {
                //     posx = e.pageX;
                //     posy = e.pageY;
                // }
                // else if (e.clientX || e.clientY) {
                //     posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
                //     posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
                // }
                // if (cursorich) {
                //     cursorich.x = posx
                //     // console.dir(cursorich.x)
                //     cursorich.y = posx
                //     // console.dir(cursorich.y)
                // }
                // return { x: posx, y: posy }
                // };

                let winsize;
                const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
                calcWinsize();
                window.addEventListener('resize', calcWinsize);

                // let mousepos = { x: winsize.width / 2, y: winsize.height / 2 };
                // window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

                // Strip Item
                class StripItem {
                constructor(el) {
                    this.DOM = { el: el };
                    this.DOM.image = this.DOM.el.querySelector('.img-inner');
                    this.DOM.number = this.DOM.el.querySelector('.strip__item-link');
                }
                }

                // Content Item


                // Images strip
                class Strip {
                constructor(el) {
                    this.DOM = { el: el };
                    this.DOM.strip = this.DOM.el.querySelector('.strip');
                    this.items = [];
                    [...this.DOM.strip.querySelectorAll('.strip__item')].forEach(item => this.items.push(new StripItem(item)));
                    // The draggable container
                    this.DOM.draggable = this.DOM.el.querySelector('.draggable');
                    // the extra indicator element (scales down when we start dragging)
                    this.DOM.indicator = document.querySelector('.frame__indicator');
                    // The width of the draggable container (also the strip container)
                    this.draggableWidth = this.DOM.draggable.offsetWidth;
                    // The total amount that we can drag the draggable container, so that both the first and last image stay next to the viewport boundary (left and right respectively)
                    this.maxDrag = this.draggableWidth < winsize.width ? 0 : this.draggableWidth - winsize.width;
                    // The current amount (in pixels) that was dragged
                    this.dragPosition = 0;
                    // Initialize the Draggabilly
                    this.draggie = new Draggabilly(this.DOM.draggable, { axis: 'x' });

                    this.init();
                    this.initEvents();
                }
                init() {
                    this.renderedStyles = {
                    position: { previous: 0, current: this.dragPosition },
                    scale: { previous: 1, current: 1 },
                    imgScale: { previous: 1, current: 1 },
                    opacity: { previous: 1, current: 1 },
                    coverScale: { previous: 0.75, current: 0.75 },
                    coverOpacity: { previous: 0, current: 0 },
                    indicatorScale: { previous: 1, current: 1 },
                    };

                    this.render = () => {
                    this.renderId = undefined;

                    for (const key in this.renderedStyles) {
                        this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, 0.1);
                    }

                    gsap.set(this.DOM.strip, { x: this.renderedStyles.position.previous });
                    for (const item of this.items) {
                        gsap.set(item.DOM.el, { scale: this.renderedStyles.scale.previous, opacity: this.renderedStyles.opacity.previous });
                        gsap.set(item.DOM.image, { scale: this.renderedStyles.imgScale.previous });
                    }

                    if (!this.renderId) {
                        this.renderId = requestAnimationFrame(() => this.render());
                    }
                    };
                    this.renderId = requestAnimationFrame(() => this.render());
                }
                initEvents() {
                    this.onDragStart = () => {
                    this.renderedStyles.scale.current = 0.8;
                    this.renderedStyles.imgScale.current = 1.1;
                    this.renderedStyles.opacity.current = 1;
                    this.renderedStyles.coverScale.current = 1;
                    this.renderedStyles.coverOpacity.current = 1;
                    this.renderedStyles.indicatorScale.current = 0;
                    };

                    this.onDragMove = (event, pointer, moveVector) => {
                    // The possible range for the drag is draggie.position.x = [-maxDrag,0 ]
                    if (this.draggie.position.x >= 0) {
                        // the max we will be able to drag is winsize.width/2
                        this.dragPosition = MathUtils.lineEq(0.5 * winsize.width, 0, winsize.width, 0, this.draggie.position.x);
                    }
                    else if (this.draggie.position.x < -1 * this.maxDrag) {
                        // the max we will be able to drag is winsize.width/2
                        this.dragPosition = MathUtils.lineEq(0.5 * winsize.width, 0, this.maxDrag + winsize.width, this.maxDrag, this.draggie.position.x);
                    }
                    else {
                        this.dragPosition = this.draggie.position.x;
                    }
                    this.renderedStyles.position.current = this.dragPosition;

                    // mousepos = getMousePos(event);
                    };

                    this.onDragEnd = () => {
                    // reset draggable if out of bounds.
                    if (this.draggie.position.x > 0) {
                        this.dragPosition = 0;
                        this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                    }
                    else if (this.draggie.position.x < -1 * this.maxDrag) {
                        this.dragPosition = -1 * this.maxDrag;
                        this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                    }
                    this.renderedStyles.position.current = this.dragPosition;
                    this.renderedStyles.scale.current = 1;
                    this.renderedStyles.imgScale.current = 1;
                    this.renderedStyles.opacity.current = 1;
                    this.renderedStyles.coverScale.current = 0.75;
                    this.renderedStyles.coverOpacity.current = 0;
                    this.renderedStyles.indicatorScale.current = 1;
                    };

                    this.draggie.on('pointerDown', this.onDragStart);
                    this.draggie.on('dragMove', this.onDragMove);
                    this.draggie.on('pointerUp', this.onDragEnd);

                    window.addEventListener('resize', () => {
                    this.maxDrag = this.draggableWidth < winsize.width ? 0 : this.draggableWidth - winsize.width;
                    if (Math.abs(this.dragPosition) + winsize.width > this.draggableWidth) {
                        const diff = Math.abs(this.dragPosition) + winsize.width - this.draggableWidth;
                        // reset dragPosition
                        this.dragPosition = this.dragPosition + diff;
                        this.draggie.setPosition(this.dragPosition, this.draggie.position.y);
                    }
                    });
                }
                }

                // The images strip
                const strip = new Strip(document.querySelector('.strip-outer'));
            }

            initSlider()
        }
    }
}
</script>

<style lang="scss">
.slider-text {
    text-align: right;
    font-size: 22px;
    font-family: Light, Arial;
    font-weight: 300;
    margin: 0 120px 134px 0;
    color: #fff;
    line-height: 115%
}
.strip-outer {
    display: flex;
    width: 100%;
    // min-height: 750px;
    min-height: 500px;
    margin: auto;
    position: relative;
    flex-direction: column;
    justify-content: center;
    flex: none;
    overflow: hidden;
    height: auto;
    // cursor: none !important;
}
.strip-inner {
    position: relative;
    top: 0;
    height: 100%;
    width: fit-content;
}
.draggable {
    touch-action: none;
    height: 500px;
    top: calc(50% - 250px);
    width: 100%;
    position: absolute;
}
.strip {
    width: fit-content;
    // align-items: start;
    pointer-events: none;
    align-items: center;
    &__item {
        flex-direction: column-reverse;
        justify-content: center;
        margin-left: 30px;
        &:first-child {
            margin-left: unset;
        }
        &:nth-of-type(4n+1) {
            .img-outer {
                width: 704px;
                height: 396px;
            }
        }
        &:nth-of-type(4n+2) {
            .img-outer {
                width: 230.4px;
                height: 259.2px;
            }
        }
        &:nth-of-type(4n+3) {
            .img-outer {
                width: 259.2px;
                height: 291.6px;
            }
        }
        &:nth-of-type(4n) {
            .img-outer {
                width: 640px;
                height: 360px;
            }
        }
    }
}
.strip,
.strip__item {
    display: flex;
    position: relative;
    height: 100%;
    will-change: transform;
}
.img-outer {
    --imgheight: 450px;
    height: 100%;
    width: calc(var(--imgheight)*1.2);
    overflow: hidden;
    position: relative;
    flex: none;
    margin: 0 -10px;
}
.img-inner {
    width: calc(100% + 40px);
    height: calc(100% + 40px);
    left: -20px;
    top: -20px;
    background-size: cover;
    background-position: 50% 50%;
    position: absolute;
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
}

@media (max-width: 1440px) {
    .slider-text {
        position: absolute;
        margin: 0;
        right: 120px;
        top: 18px;
        z-index: 1;
    }
}

@media (max-width: 1360px) {
    .strip {
        &__item {
            &:nth-of-type(4n+1) {
                .img-outer {
                    width: 640px;
                    height: 360px;
                }
            }
            &:nth-of-type(4n+2) {
                .img-outer {
                    width: 201.6px;
                    height: 226.8px;
                }
            }
            &:nth-of-type(4n+3) {
                .img-outer {
                    width: 230.4px;
                    height: 259.2px;
                }
            }
            &:nth-of-type(4n) {
                .img-outer {
                    width: 576px;
                    height: 324px;
                }
            }
        }
    }
}
@media (max-width: 1279px) {
    .strip {
        &__item {
            &:nth-of-type(4n+1) {
                .img-outer {
                    width: 576px;
                    height: 324px;
                }
            }
            &:nth-of-type(4n+2) {
                .img-outer {
                    width: 172.8px;
                    height: 194.4px;
                }
            }
            &:nth-of-type(4n+3) {
                .img-outer {
                    width: 201.6px;
                    height: 226.8px;
                }
            }
            &:nth-of-type(4n) {
                .img-outer {
                    width: 512px;
                    height: 288px;
                }
            }
        }
    }
    .strip-outer {
        // height: 533px;
    }
}
@media (max-width: 1023px) {
    .strip {
        &__item {
            &:nth-of-type(4n+1) {
                .img-outer {
                    width: 256px;
                    height: 144px;
                }
            }
            &:nth-of-type(4n+2) {
                .img-outer {
                    width: 201.6px;
                    height: 226.8px;
                }
            }
            &:nth-of-type(4n+3) {
                .img-outer {
                    width: 230.4px;
                    height: 259.2px;
                }
            }
            &:nth-of-type(4n) {
                .img-outer {
                    width: 224px;
                    height: 126px;
                }
            }
        }
    }
    .strip-outer {
        min-height: 406px;
    }
}
@media (max-width: 768px) {
    .slider-text {
        margin-right: 20px;
        // max-width: 85%;
        position: unset;
    }
}
@media (max-width: 767px) {
    .slider-text {
        font-size: 17px;
        margin: 10px 20px 10px 0;
    }
    .strip {
        &__item {
            &:nth-of-type(4n+1) {
                .img-outer {
                    width: 192px;
                    height: 108px;
                }
            }
            &:nth-of-type(4n+2) {
                .img-outer {
                    width: 158.4px;
                    height: 178.2px;
                }
            }
            &:nth-of-type(4n+3) {
                .img-outer {
                    width: 187.2px;
                    height: 210.6px;
                }
            }
            &:nth-of-type(4n) {
                .img-outer {
                    width: 160px;
                    height: 90px;
                }
            }
        }
    }
}
@media (max-width: 414px) {
    .strip-outer {
        min-height: 290px;
    }
    .slider-text {
        font-size: 13px;
        max-width: 85%;
        margin-left: auto;
    }
}
</style>
