export const state = () => ({
	preloader: null,
    header: null,
	footer: null,
})

export const mutations = {
	setDataPreloader(state, payload) {
		state.preloader = payload
	},
	setDataHeader(state, payload) {
		state.header = payload
	},
	setDataFooter(state, payload) {
		state.footer = payload
	},
}

export const getters = {
	dataPreloader(state) {
		return state.preloader;
	},
	dataHeader(state) {
		return state.header;
	},
	dataFooter(state) {
		return state.footer;
	},
}

export const actions = {
	getPartsContent(state, api) {
		// return new Promise(resolve => {
		// 	this.$axios
		// 	.$get(api, { loading: true })
		// 	.then(response => {
		// 		state.commit("setDataPreloader", response.content.preloader);
		// 		state.commit("setDataHeader", response.content.header);
		// 		state.commit("setDataFooter", response.content.footer);
		// 		resolve(response.content);
		// 	})
		// 	.catch((e) => {
		// 		throw new Error(e);
		// 	})
		// });
	}
}