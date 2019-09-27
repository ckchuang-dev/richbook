import expenseData from '@/static/billing/expenseData.json'

export const state = () => ({
  expenseData: expenseData,
  openDialog: false,
  dialogData: {},
  dialogType: 'ADD'
})

export const mutations = {
  ADD_EXPENSE_DATA(state, expense) {
    state.expenseData.push(expense)
  },
  SET_DIALOG_TYPE(state, type) {
    state.dialogType = type
  },
  SET_OPEN_DIALOG(state, status) {
    if (!status) state.dialogData = {}
    state.openDialog = status
  },
  SET_DIALOG_DATA(state, dialogData) {
    state.dialogData = { ...dialogData }
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
