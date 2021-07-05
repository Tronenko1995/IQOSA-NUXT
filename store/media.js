export const state = () => ({
    view: 'media'
  })
  
  export const mutations = {
    setView(state, payload) {
        state.view = payload
    }
  }
  
  export const getters = {
    view(state) {
      return state.view;
    }
  }
  