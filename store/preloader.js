export const state = () => ({
    preloader: true
})

export const mutations = {
    setPreloader(state, payload) {
        state.preloader = payload
    }
}

export const getters = {
    preloader (state) {
        return state.preloader;
    }
}