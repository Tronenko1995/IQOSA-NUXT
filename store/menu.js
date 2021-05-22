export const state = () => ({
    status: false
})

export const mutations = {
    setStatus(state, payload) {
        state.status = payload
    }
}

export const getters = {
    status (state) {
        return state.status;
    }
}