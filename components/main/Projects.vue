<template>
    <div class="projects">
        <div class="projects__info">
            <div class="featured">
                <p class="featured__text">Featured</p>
                <div class="featured__item">
                   <nuxt-link to="/" class="featured__link">Projects</nuxt-link>
                   <span class="featured__line"></span>
                </div>
            </div>
            <div class="projects__name projects-name">
                <div class="projects-name__title">
                    <ul class="projects-name__list">
                        <li class="projects-name__item"><span>IQ</span>-08-SL</li>
                    </ul>
                </div>
                <nuxt-link to="/" class="projects__link projects-link" @mouseover.native="findElement($event)" @mouseleave.native="animateTextHide($event)">
                    <span class="projects-link__change">
                        <span class="projects-link__span projects-link__span--first">Explore</span>
                        <span class="projects-link__span">Explore</span>
                    </span>
                    <span class="projects-link__text">THE project</span>
                    <span class="projects-link__circle">
                        <svg class="projects-link__svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.40039 12.4004H17.6004" stroke-linecap="square"/><path d="M13.9004 8L18.4004 12.4L13.9004 16.8" stroke-linecap="square"/></svg>
                    </span>
                    </nuxt-link>
            </div>
            <ul class="projects__address projects-address">
                <li class="projects-address__item">2019,  <span class="projects-address__span">KYIV</span>,  Ukraine,  560M2</li>
            </ul>
        </div>
        <ProjectsPhotos />
    </div>
</template>

<script>
import ProjectsPhotos from '@/components/main/ProjectsPhotos.vue'
export default {
    components: { ProjectsPhotos },
    methods: {
		findElement(e) {
			if (e.target.classList.contains('projects-link__text') || e.target.classList.contains('projects-link') || e.target.classList.contains('projects-link__circle')) {
                const el = e.target.parentElement.querySelector('.projects-link__change')
				this.animateTextShow(el)
			} else if (e.target.classList.contains('projects-link__span--first')) {
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
			if (e.target.classList.contains('projects-link')) {
                const el = e.target.querySelector('.projects-link__change')
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
.projects {
    display: flex;
    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
        padding-left: 72px;
    }
    &__photos {
        width: 60%;
        height: 56vh;
    }
}
.projects-name {
    &__list {
        
    }
    &__item {
        font-family: 'ThinItalic', Arial;
        font-weight: 300;
        font-size: 62px;
        line-height: 100%;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on, 'kern' off;
        color: #FFFFFF;
        span {
            font-family: 'Roman', Arial;
            font-weight: normal;
            letter-spacing: unset;
        }
    }
    &__link {

    }
}
.projects-link {
    display: flex;
    width: fit-content;
    align-items: center;
    margin-top: 24px;
	&__change {
		display: block;
		overflow: hidden;
        position: relative;
		.projects-link__span {
			display: block;
			&:last-child {
				position: absolute;
			}
		}
	}
    &__span {
        font-family: 'LightItalic', Arial;
        font-weight: 300;
        color: #fff;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
    }
    &__text {
        font-family: 'Light', Arial;
        font-weight: 300;
        color: #fff;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        margin-left: 8px;
    }
    &__circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 64px;
        height: 64px;
        background-color: transparent;
        border: 1px solid hsla(0,0%,100%,.1);
        border-radius: 50%;
        transition: background-color .5s;
        margin-left: 24px;
    }
    &__svg {
        stroke: #fff;
        transition: stroke .5s;
    }
    &:hover {
        .projects-link__svg {
            stroke: #000;
        }
        .projects-link__circle {
            background-color: #fff;
        }
    }
}
.projects-address {
    &__item {
        font-family: 'Light', Arial;
        font-weight: 300;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
    }
    &__span {
        font-family: 'LightItalic', Arial;
    }
}
.featured {
    display: flex;
    &__text {
        font-size: 22px;
        letter-spacing: 0.05em;
        font-weight: 300;
        line-height: 100%;
        color: #fff;
        text-transform: uppercase;
        font-family: 'LightItalic', Arial;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
    }
    &__item {
        margin-left: 8px;
        position: relative;
        &:hover {
			.featured__line {
				animation: 'under-line' 1s;
			}
        }
    }
    &__link {
        color: #fff;
        font-size: 22px;
        line-height: 100%;
        text-transform: uppercase;
        font-family: 'Roman', Arial;
        font-feature-settings: 'pnum' on, 'lnum' on, 'dnom' on, 'liga' off, 'kern' off;
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
</style>