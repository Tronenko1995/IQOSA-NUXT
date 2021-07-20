export const state = () => ({
	data: {
        title_big_bold: "OOOOOPS",
        title_big_thin: "404 ERROR",
        link_text: "BACK TO",
        link_text_animated: "MAIN" 
    }
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
	getErrorPageContent(state, api) {
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