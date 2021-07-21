export const state = () => ({
	dataJoin: null
})

export const mutations = {
	setDataJoin(state, payload) {
		state.data = payload
	}
}

export const getters = {
	dataJoin(state) {
		return state.data;
	}
}

export const actions = {
	getJoinPageContent(state, api) {
		return new Promise(resolve => {
			this.$axios
			  .$get(api, { loading: true })
			  .then(response => {
				// console.log('response', response)
				state.commit("setDataJoin", response.content);
				resolve(response.content);
			  })
			  .catch((e) => {
				throw new Error(e);
			  })
		  });
	}
}