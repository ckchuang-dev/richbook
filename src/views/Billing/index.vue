<template>
  <div class="pg-billing">
    <BillingDialog />
    <BillingCalendar />
    <BillingList
      @edit-row="handleEditRow"
      @delete-row="handleDeleteRow"
    />
  </div>
</template>

<script>
  import BillingCalendar from '@/containers/Billing/BillingCalendar'
  import BillingList from '@/containers/Billing/BillingList'
  import BillingDialog from '@/containers/Billing/BillingDialog'
  export default {
    name: 'Billing',
    components: { BillingCalendar, BillingList, BillingDialog },
    methods: {
      handleEditRow({ index, row }) {
        this.$store.commit('billing/SET_DIALOG_TYPE', 'EDIT')
        this.$store.commit('billing/SET_OPEN_DIALOG', status)
        this.$store.commit('billing/SET_DIALOG_DATA', { index, ...row })
      },
      handleDeleteRow(index, row) {}
    }
  }
</script>

<style lang="scss" scoped>
</style>