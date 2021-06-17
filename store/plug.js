export const state = () => ({
  visible: true,
  animate: 'start',
  duration: {
    preloader: 3000,
    page: 500
  }
})

export const mutations = {
  setVisible(state, payload) {
    state.visible = payload
  },
  setAnimate(state, payload) {
    state.animate = payload
  }
}

export const getters = {
  visible (state) { return state.visible},
  animate (state) { return state.animate},
  duration (state) { return state.duration}
}
