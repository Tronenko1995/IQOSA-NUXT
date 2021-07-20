export const state = () => ({
	data: null,
	list: null,
})

export const mutations = {
	setData(state, payload) {
		state.data = payload
	},
	setList(state, payload) {
		state.list = payload
	},
}

export const getters = {
	data(state) {
		return state.data;
	},
	list(state) {
		return state.list;
	},
}

export const actions = {
	getArticlesPageContent(state, api) {
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
	getArticles(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setList", response.content);
				resolve(response.data);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	}
}