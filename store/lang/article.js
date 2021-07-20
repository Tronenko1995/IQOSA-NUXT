export const state = () => ({
	data: null,
	article: null
})

export const mutations = {
	setData(state, payload) {
		state.data = payload
	},
	setArticle(state, payload) {
		state.article = payload
	}
}

export const getters = {
	data(state) {
		return state.data;
	},
	article(state) {
		return state.article;
	},
}

export const actions = {
	getArticlePageContent(state, api) {
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
	getArticle(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setArticle", response.content);
				resolve(response.content);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	}
}