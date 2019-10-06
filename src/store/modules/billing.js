import { db } from '../db'
import { resolve } from 'any-promise'

export const state = () => ({
  expenseData: []
})

export const mutations = {
  ADD_EXPENSE_DATA(state, expense) {
    state.expenseData.push(expense)
  },
  UPDATE_EXPENSE_DATA(state, { index, data }) {
    if (state.expenseData[index]) {
      state.expenseData[index] = { ...data }
    }
  },
  SET_EXPENSE_DATA(state, expenseData) {
    state.expenseData = expenseData
  }
}

export const actions = {
  getExpenseData({ commit }) {
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .get()
        .then(querySnapshot => {
          const documents = querySnapshot.docs.map(doc => doc.data())
          commit('SET_EXPENSE_DATA', documents)
          resolve()
        })
        .catch(error => reject(error))
    })
  },
  addExpense({ commit }, expenseObj) {
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .add({ ...expenseObj })
        .then(() => {
          commit('ADD_EXPENSE_DATA', expenseObj)
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
