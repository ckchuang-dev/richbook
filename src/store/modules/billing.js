import expenseData from '@/static/billing/expenseData.json'

export const state = () => ({
  expenseData: expenseData
})

export const mutations = {
  ADD_EXPENSE_DATA(state, expense) {
    state.expenseData.push(expense)
  },
  UPDATE_EXPENSE_DATA(state, { index, data }) {
    if (state.expenseData[index]) {
      state.expenseData[index] = { ...data }
    }
  }
}

export const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
