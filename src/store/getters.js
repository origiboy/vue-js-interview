const getters = {
    USERS_FILTERED(state) {
      if (!state.filtesActive.filterByCountry && !state.filtesActive.filterByScore) {
        setTimeout(() => {
          state.filtesActive.loading = false
        }, 500)
        return state.users
      }

      let users = state.users
        if (state.filtesActive.filterByCountry)
          users = users.filter((e) => {
            return e.country === state.filtesActive.filterByCountry || e.divider || e.header
          })
        if (state.filtesActive.filterByScore) {
          users = users.filter((e) => {
            if (state.filtesActive.filterByScore === '> 10') 
              return +e.score > 10 || e.divider || e.header
            if (state.filtesActive.filterByScore === '< 20')
              return +e.score < 20 || e.divider || e.header
          })
        }
        let g = 1
        if (users.length > 0) {
          while (g < users.length) {
            if (users[g-1].divider && users[g].divider || users[g].divider && users[g-1].header) 
              users.splice(g, 1)
            else 
              g++
          }
          if (users[g - 1].divider) users.pop()
        }
        setTimeout(() => {
          state.filtesActive.loading = false
        }, 500)
        return users
    },

    USERS(state) {
      return state.users
    }
}

export default getters