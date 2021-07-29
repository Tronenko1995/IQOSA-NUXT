<template>
    <div class="cookies" v-if="visible">
        <div class="cookies__text" v-html="data.cookie_text"></div>
        <div class="cookies__action">
            <button @click.prevent="acceptCookies()" class="cookies__button">{{ data.cookie_btn_text }}</button>
            <span class="cookies__line"></span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },
    mounted() {
        let acceptCookies = this.getcookie("acceptCookies");
        // console.log(acceptCookies)
        if (acceptCookies != "true") {
            this.visible = true
        } else {
            this.visible = false
        }
    },
    computed: {
		data() { return this.$store.getters['lang/parts/dataFooter'] }
    },
    methods: {
        setcookie(a, b ,c) {
            {if(c){var d = new Date();d.setDate(d.getDate()+c);}if(a && b) document.cookie = a+'='+b+(c ? '; expires='+d.toUTCString() : '');else return false;}
        },
        getcookie(a) {
            {var b = new RegExp(a+'=([^;]){1,}');var c = b.exec(document.cookie);if(c) c = c[0].split('=');else return false;return c[1] ? c[1] : false;}
        },
        acceptCookies() {
            this.setcookie("acceptCookies","true", 30)
            this.visible = false
        }
    }
}
</script>

<style lang="scss">
.cookies {
    padding: 8px 72px;
    background-color: #e8e8e8;
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
        font-family: 'Light';
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        letter-spacing: 0.035em;
        color: #000000;
    }
    &__action {
        position: relative;
        display: flex;
        flex-direction: column;
    }
    &__button {
        cursor: pointer;
        background: transparent;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 120%;
        color: #000000;
        font-family: 'Light';
        &:hover + {
            .cookies__line {
                animation: "under-line" 1s;
            }
        }
    }
    &__line {
        position: absolute;
        height: 1px;
        background: #000;
        display: block;
        transition: 0.3s ease;
        bottom: 0;
        width: 100%;    
        left: 0;
    }
}
@media (max-width: 1440px) {
    .cookies {
        padding: 8px 64px;
        &__text {
            font-size: 12px;
        }
        &__button {
            font-size: 12px;
        }
    }
}
@media (max-width: 1280px) {
    .cookies {
        padding: 8px 56px;
        &__text {
            font-size: 12px;
        }
        &__button {
            font-size: 12px;
        }
    }
}
@media (max-width: 1024px) {
    .cookies {
        &__text {
            width: 536px;
        }
    }
}
@media (max-width: 768px) {
    .cookies {
        padding: 8px 48px;
    }
}
@media (max-width: 632px) {
    .cookies {
        flex-direction: column;
        &__text {
            width: 100%;
        }
        &__action {
            margin-left: auto;
        }
    }
}
@media (max-width: 414px) {
    .cookies {
        padding: 11px 16px;
        &__text {
            font-size: 10px;
        }
        &__button {
            font-size: 10px;
        }
        &__action {
            margin-top: 16px;
        }
    }
}
</style>