<template>
  <div>
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
    >新增紀錄</el-button>
    <BillingCalendar />
    <BillingList />
    <BillingDialog :dialogFormVisible="dialogFormVisible" />
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

<style>
</style>