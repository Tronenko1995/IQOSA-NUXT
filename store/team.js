export const state = () => ({
    team: {
        name: null,
        surname: null,
        position: null,
        img: null,
        quote: null
    }
})

export const mutations = {
    setTeam(state, payload) {
        state.team.name = payload.name
        state.team.surname = payload.surname
        state.team.position = payload.position
        state.team.img = payload.img
        state.team.quote = payload.quote
    },
}

export const getters = {
    team(state) {
        return state.team;
    }
}