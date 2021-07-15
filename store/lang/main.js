export const state = () => ({
	data: null
})

export const mutations = {
	setData(state, payload) {
		state.data = payload
	}
}

export const getters = {
	data(state) {
		return state.data;
	}
}