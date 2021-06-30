export const state = () => ({
    modal: {
        show: false,
        type: null,
        animate: null
    }
})

export const mutations = {
    setModal(state, payload) {
        state.modal.show = payload.show
        state.modal.type = payload.type
        state.modal.animate = payload.animate
    },
}

export const getters = {
    modal(state) {
        return state.modal;
    }
}