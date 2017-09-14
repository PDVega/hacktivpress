import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  articles: []
}

const mutations = {
  setArticles (state, payload) {
    state.articles = payload
  },
  saveArticle (state, payload) {
    state.articles.push(payload)
  },
  deleteArticle (state, payload) {
    const idx = state.articles.findIndex((article) => article._id === payload)
    state.articles.splice(idx, 1)
  }
}

const actions = {
  getAllArticles ({ commit }) {
    http.get('/articles')
    .then(({data}) => {
      commit('setArticles', data)
    })
    .catch(err => console.error(err))
  },
  postArticle ({ commit }, newArticle) {
    http.post('/articles', newArticle)
    .then(({data}) => {
      commit('saveArticle', data)
    })
    .catch(err => console.error(err))
  },
  deleteArticle ({ commit }, articleId) {
    http.delete('/articles/' + articleId)
    .then(({data}) => {
      commit('deleteArticle', articleId)
    })
    .catch(err => console.error(err))
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
