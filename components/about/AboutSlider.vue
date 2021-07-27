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
        // if (process.browser){
        // }
    },
    methods: {
        getImg(img) {
            return `${this.baseUrl}${img}`
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
    .strip-outer {
        // min-height: unset;
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
@media (max-width: 767px) {
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
}
</style>