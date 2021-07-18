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

export const actions = {
	getContactsPageContent(state, api) {
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
	}
}