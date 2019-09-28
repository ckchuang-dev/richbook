<template>
  <div class="pg-billing">
    <BillingDialog :dialogFormVisible.sync="dialogFormVisible" />
    <BillingCalendar />
    <BillingList />
  </div>
</template>

<script>
  import BillingCalendar from '@/containers/Billing/BillingCalendar'
  import BillingList from '@/containers/Billing/BillingList'
  import BillingDialog from '@/containers/Billing/BillingDialog'
  export default {
    name: 'Billing',
    components: { BillingCalendar, BillingList, BillingDialog },
    data() {
      return {
        dialogFormVisible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>