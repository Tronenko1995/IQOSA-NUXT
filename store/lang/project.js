export const state = () => ({
	data: null,
	project: null
})

export const mutations = {
	setData(state, payload) {
		state.data = payload
	},
	setProject(state, payload) {
		state.project = payload
	}
}

export const getters = {
	data(state) {
		return state.data;
	},
	project(state) {
		return state.project;
	},
}

export const actions = {
	getProjectPageContent(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
			state.commit("setData", response.content);
			resolve(response.content);
			})
			.catch((e) => {
			throw new Error(e);
			})
		});
	},
	getProject(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setProject", response.content);
				resolve(response.content);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	}
}