export const state = () => ({
	dataSayHi: null,
	dataJoin: null,
	dataWorkWithYou: null,
})

export const mutations = {
	setDataSayHi(state, payload) {
		state.dataSayHi = payload
	},
	setDataJoin(state, payload) {
		state.dataJoin = payload
	},
	setDataWorkWithYou(state, payload) {
		state.dataWorkWithYou = payload
	},
}

export const getters = {
	dataSayHi(state) {
		return state.dataSayHi;
	},
	dataJoin(state) {
		return state.dataJoin;
	},
	dataWorkWithYou(state) {
		return state.dataWorkWithYou;
	},
}

export const actions = {
	getSayHiPageContent(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setDataSayHi", response.content);
				resolve(response.content);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	},
	getJoinPageContent(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setDataJoin", response.content);
				resolve(response.content);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	},
	getDataWorkWithYouPageContent(state, api) {
		return new Promise(resolve => {
			this.$axios
			.$get(api, { loading: true })
			.then(response => {
				state.commit("setDataWorkWithYou", response.content);
				resolve(response.content);
			})
			.catch((e) => {
				throw new Error(e);
			})
		});
	}
}