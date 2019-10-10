import { db } from '../db'
import { resolve } from 'any-promise'
import dayjs from 'dayjs'

export const state = () => ({
  expenseData: [],
  clientDate: dayjs(new Date()).format('YYYY-MM-DD')
})

export const mutations = {
  SET_EXPENSE_DATA(state, expenseData) {
    state.expenseData = expenseData
  }
}

export const actions = {
  getExpenseData({ commit }, date) {
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .where('date', '==', date)
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
  addExpense({ dispatch }, expenseObj) {
    const { date } = expenseObj
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .add({ ...expenseObj })
        .then(() => {
          return dispatch('getExpenseData', date)
        })
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },
  updateExpense({ dispatch }, expenseObj) {
    const { id, date } = expenseObj
    delete expenseObj.id
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .doc(id)
        .update({
          ...expenseObj
        })
        .then(() => {
          return dispatch('getExpenseData', date)
        })
        .then(() => resolve())
        .catch(error => reject(error))
    })
  },
  deleteExpense({ dispatch }, { id, date }) {
    return new Promise((resolve, reject) => {
      db.collection('expense')
        .doc(id)
        .delete()
        .then(() => {
          return dispatch('getExpenseData', date)
        })
        .then(() => resolve())
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
