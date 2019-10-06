import { db } from '../db'
import { resolve } from 'any-promise'

export const state = () => ({
  expenseData: []
})

export const mutations = {
  ADD_EXPENSE_DATA(state, expense) {
    state.expenseData.push(expense)
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
          const documents = querySnapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }
          })
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
  },
  updateExpense({ dispatch }, expenseObj) {
    const id = expenseObj.id
    delete expenseObj.id
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .doc(id)
        .update({
          ...expenseObj
        })
        .then(() => {
          dispatch('getExpenseData')
          resolve()
        })
        .catch(error => reject(error))
    })
  },
  deleteExpense({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .doc(id)
        .delete()
        .then(() => {
          dispatch('getExpenseData')
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
