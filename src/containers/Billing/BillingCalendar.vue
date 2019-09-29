<template>
  <el-card id="ct_billing_calendar">
    <h2>月記帳本</h2>
    <el-calendar v-model="date">
    </el-calendar>
  </el-card>
</template>

<script>
  export default {
    name: 'BillingCalendar',
    data() {
      return {
        date: new Date()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #ct_billing_calendar {
  }
</style>