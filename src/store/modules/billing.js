import expenseData from '@/static/billing/expenseData.json'

export const state = () => ({
  expenseData: expenseData
})

export const mutations = {
  ADD_EXPENSE_DATA(state, expense) {
    state.expenseData.push(expense)
  }
}

export const actions = {
  addExpense({ commit }, expense) {
    commit('ADD_EXPENSE_DATA', expense)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
