import Vue from 'vue'
import gsap from 'gsap';

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.directive('showFade', {
  inserted: function (el, binding, vnode) {

    if (el.tagName === 'IMG') {
      el.addEventListener('load', animateElement)
    } else {
      animateElement();
    }

    function animateElement() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
        },
      });

      tl.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.7,
      })

      tl.to(el, {
        opacity: 1,
        y: 0,
      })
    }

  }
})

Vue.directive('showWidth', {
  inserted: function (el, binding, vnode) {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
      },
    });

    tl.from(el, {
      width: 0,
      duration: 1,
    })

    tl.to(el, {
      width: '100%'
    })
  }
})

Vue.directive('showForeground', {
  inserted: function (el, binding, vnode) {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
      },
    });

    tl.to(el, {
      height: 0,
      duration: 1,
      delay: 0.25
    })
  }
})

