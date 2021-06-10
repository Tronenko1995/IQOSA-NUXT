export const state = () => ({
    plug: true
})

export const mutations = {
    setPlug(state, payload) {
        state.plug = payload
    }
}

export const getters = {
    plug (state) {
        return state.plug;
    }
}