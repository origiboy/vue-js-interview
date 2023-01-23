const mutations = {
    SET_USERS: (state, users) => {
        state.users = users
    },
    SET_FILTER_BY_COUNTRY: (state, filters) => {
      state.filtesActive.loading = true
      state.filtesActive.filterByCountry = filters
    },
    SET_FILTER_BY_SCORE: (state, filters) => {
      state.filtesActive.loading = true
      state.filtesActive.filterByScore = filters
    }
}

export default mutations