import Vue from 'vue'
import { gsap }from 'gsap'
import { SplitText } from 'gsap/SplitText'

function selectAnimation(el, type, value = {},) {

  if (typeof value === 'string' ) {
    value = {}
  }
  switch (type) {
    case 'preloader':
      function preloaderTextAnimation() {
        let split = new SplitText(el, {type: "lines", linesClass: "lines-wrapper"})
        let split2 = new SplitText(split.lines, {type: "lines", linesClass: "js-line"})
  
        let tl = gsap.timeline();
  
        if (window.innerWidth > 480) {
            tl.to(el, {
                opacity: 1,
                duration: 0
            }, 0)
            tl.to(split2.lines, {
                translateY: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
            })
            tl.to(split2.lines, {
                translateY: -100 + "%",
                stagger: 0.2,
                duration: 1,
            })
        } else {
            tl.to(el, {
                translateY: 0,
                opacity: 1,
                duration: 1
            }, 0)
            tl.to(el, {
                translateY: -60 + "%",
                opacity: 0,
                duration: 1,
                delay: 2
            }, 0)
        }
      }
      if (el !== undefined) {
        const font = `${window.getComputedStyle(el).fontSize} ${window.getComputedStyle(el).fontFamily}`; // 48px SuisseIntl
          if (document.fonts.check(font)) {
              preloaderTextAnimation();
          } else {
              document.fonts.ready.then(() => {
                  preloaderTextAnimation();
              });
          }
  
          // preloaderText.remove('script');
      }
  }
}

Vue.directive('ca', {
  inserted(el, binding) {
    const {arg: type, value, modifiers} = binding

    el.classList.add('js-animation')

    selectAnimation(el, type, value, modifiers)
  }
})
