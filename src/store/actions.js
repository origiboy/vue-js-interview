import axios from 'axios'

const actions = {
    GET_USERS({commit}) {
        return axios('http://origiboy.ru/api.json', {
            method: 'GET'
        }).then((response) => {
            commit('SET_USERS', response.data || null)
        })
    }
}

export default actions