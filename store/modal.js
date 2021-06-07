export const state = () => ({
    modal: {
        show: false,
        type: null
    }
})

export const mutations = {
    setModal(state, payload) {
        state.modal.show = payload.show
        state.modal.type = payload.type
    },
}

export const getters = {
    modal(state) {
        return state.modal;
    }
}